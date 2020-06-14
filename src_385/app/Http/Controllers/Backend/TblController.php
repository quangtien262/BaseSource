<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BackendController;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class TblController extends BackendController
{
    public function index()
    {
        //showdata
        $htmlList = app('ClassTables')->getHtmlListTable();

        return view('backend.tables.index', compact('htmlList'));
    }
    

    public function sortOrderTable(Request $request)
    {
        $ids = json_decode($request->ids, true);
        if (!empty($ids)) {
            app('EntityCommon')->updateSortOrder('tables', $ids);
        }

        return response()->json([RETURN_SUCCESS, MSG_UPDATE_SORT_ORDER_SUCCESS]);
    }

    public function formEdit(Request $request, $tableId = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        $tables = app('ClassTables')->getAllTables();
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $htmlList = app('ClassTables')->getHtmlListColumn($tableId);
        $viewsParam = [
            'table' => $table,
            'tables' => $tables,
            'columns' => $columns,
            'htmlList' => $htmlList,
            'tableId' => $tableId,
        ];
        if (!empty($request->input('column'))) {
            $column = app('ClassTables')->getColumn($request->input('column'));
            $viewsParam['column'] = $column;
        }

        return view('backend.tables.formTables', $viewsParam);
    }

    public function postSbmitFormTable(Request $request, $tableId = 0)
    {
        //todo: validation
        \DB::beginTransaction();
        try {
            //get table detail
            $tablePreview = app('ClassTables')->getTable($tableId);

            //save tables
            $tables = app('ClassTables')->saveTable($tableId, $request->input());

            //generate table
            if ($tableId == 0) {
                //save to table_column
                $column = app('ClassTables')->createDefaultColumn($tables->id);

                //create table
                Schema::create($request->input('table_name'), function (Blueprint $table) use ($request) {
                    $table->increments('id');
                    $table->string('name')->nullable();
                    $table->integer('parent_id')->nullable()->default(0);
                    $table->integer('sort_order')->nullable()->default(0);
                    $table->timestamps();
                    $table->charset = 'utf8';
                    $table->collation = 'utf8_unicode_ci';
                    $table->engine = 'InnoDB';
                });
            } else {
                if ($tablePreview->name != $request->input('table_name')) {
                    Schema::rename($tablePreview->name, $request->input('table_name'));
                }
            }
            \DB::commit();

            return redirect(route('configTbl_edit', [$tables->id]));
        } catch (\Exception $e) {
            \DB::rollback();

            return $e->getMessage();
        }
    }

    public function postSubmitFormColumn(Request $request)
    {
        //todo: validation
        \DB::beginTransaction();
        try {
            //get table detail
            $columnPreview = app('ClassTables')->getColumn($request->input('column_id'));
            $tableDetail = app('ClassTables')->getTable($request->input('table_id'));
            //save column
            $column = app('ClassTables')->saveColumn($request->input());

            //generate table
            if (empty($request->input('column_id'))) {
                Schema::table($tableDetail->name, function ($table) use ($request) {
                    $table = self::setTypeForField($table, $request->input('column_name'), $request->input('column_type'), $request->input('max_length'), $request->input('value_default'), $request->input('is_null'));
                });
            } else {
                if ($columnPreview->name != $request->input('column_name')) {
                    Schema::table($tableDetail->name, function ($table) use ($columnPreview, $request) {
                        $table->renameColumn($columnPreview->name, $request->input('column_name'));
                    });
                }
                if ($columnPreview->type != $request->input('column_type') ||
                    $columnPreview->value_default != $request->input('value_default') ||
                    $columnPreview->max_length != $request->input('max_length') ||
                    $columnPreview->is_null != $request->input('is_null')) {
                    Schema::table($tableDetail->name, function ($table) use ($request) {
                        self::changeTypeForColumn($table, $request->input('column_name'), $request->input('column_type'), $request->input('max_length'), $request->input('value_default'), $request->input('is_null'));
                    });
                }
            }
            \DB::commit();

            return redirect(route('configTbl_edit', [$request->input('table_id')]));
        } catch (\Exception $e) {
            \DB::rollback();

            return $e->getMessage();
        }
    }

    public function deleteTable(Request $request)
    {
        if (!empty($request->input('table'))) {
            $table = app('ClassTables')->getTable($request->input('table'));
            if (!empty($table)) {
                Schema::dropIfExists($table->name);
                app('ClassTables')->deleteTable($request->input('table'));
            }
        }

        return redirect(route('configTbl'));
    }

    public function deleteColumn(Request $request)
    {
        if (!empty($request->input('column')) && !empty($request->input('table'))) {
            $columnPreview = app('ClassTables')->getColumn($request->input('column'));
            $tableDetail = app('ClassTables')->getTable($request->input('table'));
            Schema::table($tableDetail->name, function ($table) use ($columnPreview) {
                $table->dropColumn([$columnPreview->name]);
            });
            app('ClassTables')->deleteColumn($request->input('column'));
        }
        if (!empty($request->input('table'))) {
            return redirect(route('configTbl_edit', [$request->input('table')]));
        }

        return redirect(route('configTbl'));
    }

    public function deleteRow($tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        if (!empty($table)) {
            // echo $table->name;die;
            app('EntityCommon')->deleteTable($table->name, $dataId);
        }

        return back();
    }

    public function listRow(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        if ($table->type_show == 0) {
            $dataQuery = app('ClassTables')->getRowsByConditions($table, $columns, $request);
            //convert object 2 array
            $datas = json_decode(json_encode($dataQuery), true)['data'];

            return view('backend.tables.listRowBasic', compact('tableId', 'table', 'columns', 'datas', 'dataQuery'));
        } elseif ($table->type_show == 1 || $table->type_show == 2) {
            $htmlListDragDrop = app('ClassTables')->getHtmlListDragDrop($table);

            return view('backend.tables.listRowDragDrop', compact('tableId', 'table', 'columns', 'datas', 'htmlListDragDrop'));
        }
    }

    public function sortOrderRows(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $ids = json_decode($request->ids, true);
        if (!empty($table) && !empty($columns) && !empty($ids)) {
            app('EntityCommon')->updateSortOrder($table->name, $ids, $parentId = 0);
        }

        return response()->json([RETURN_SUCCESS, MSG_UPDATE_SORT_ORDER_SUCCESS]);
    }

    public function formDataTbl(Request $request, $tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = json_decode(json_encode(app('EntityCommon')->getDataById($table->name, $dataId)), true);

        return view('backend.tables.editDataTbl', compact('tableId', 'dataId', 'table', 'columns', 'data'));
    }

    public function submitFormDataTbl(Request $request, $tableId, $dataId = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = [];
        foreach ($columns as $column) {
            if (($request->input($column->name))) {
                $data[$column->name] = $request->input($column->name);
            }
        }
        if ($dataId > 0) {
            $data = app('EntityCommon')->updateData($table->name, $dataId, $data);
        } else {
            $data = app('EntityCommon')->insertData($table->name, $data);
        }

        return redirect(route('listDataTbl', [$tableId]));
    }

    public function editDataTbl(Request $request, $tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = app('EntityCommon')->getDataById($table->name, $dataId);

        return view('backend.tables.editDataTbl', compact('tableId', 'table', 'columns', 'data'));
    }

    private function setTypeForField($table, $fieldName, $type, $maxlength, $default, $isNull = 1)
    {
        switch ($type) {
            case 'INT':
                $table->integer($fieldName)->nullable()->default($default);
                break;
            case 'VARCHAR':
                $table->string($fieldName)->nullable()->default($default);
                break;
            case 'TEXT':
                $table->text($fieldName)->nullable()->default($default);
                break;
            case 'LONGTEXT':
                $table->longText($fieldName)->nullable();
                break;
            case 'DATE':
                $table->date($fieldName)->nullable()->default($default);
                break;
            case 'DATETIME':
                $table->dateTime($fieldName)->nullable();
                break;
        }

        return $table;
    }

    private function changeTypeForColumn($table, $fieldName, $type, $maxlength, $default, $isNull = 1)
    {
        switch ($type) {
            case 'INT':
                $table->integer($fieldName)->nullable()->default($default)->change();
                break;
            case 'VARCHAR':
                $table->string($fieldName)->nullable()->default($default)->change();
                break;
            case 'TEXT':
                $table->text($fieldName)->nullable()->default($default)->change();
                break;
            case 'LONGTEXT':
                $table->longText($fieldName)->nullable()->default($default)->change();
                break;
            case 'DATE':
                $table->date($fieldName)->nullable()->change();
                break;
            case 'DATETIME':
                $table->dateTime($fieldName)->nullable()->change();
                break;
        }

        return $table;
    }

    

    public function update()
    {
        //showdata
        // $phanLoaiDo = app('EntityCommon')->getRowsByConditions('phan_loai_do');
        // dd($phanLoaiDo);
        // foreach ($phanLoaiDo as $loai) {
        //     $data = [];
        //     app('EntityCommon')->insertData('quan_ly_do', $data);
        // }

        //update type_business_id
        // $motel_room = app('EntityCommon')->getRowsByConditions('motel_room');
        // foreach ($motel_room as $room) {
        //     $data = [
        //         'type_business_id' => $room->type_business_id
        //     ];
        //     $result = \DB::table('hop_dong')->where('motel_room_id', $room->id)->update($data);
        // }


        //update Quản lý đồ
        $rooms = app('EntityCommon')->getRowsByConditions('motel_room');
        $phanLoaiDo = app('EntityCommon')->getRowsByConditions('phan_loai_do');
        // dd($rooms);
        foreach ($rooms as $room) {
            $data = [];
            foreach($phanLoaiDo as $p) {
                if($p->id == 6 || $p->id == 5 ) {
                    continue;
                }
                $chu_so_huu_id = 0;
                if($p->id == 7 ) {
                    if($room->apartment_id == 5){
                        $chu_so_huu_id = 2;
                    } else {
                        continue;
                    }
                }

                if($room->apartment_id == 3 || $room->apartment_id == 4){
                    if($p->id == 1 || $p->id == 2 || $p->id == 3 ) {
                        $chu_so_huu_id = 2;
                    }
                }

                if($room->apartment_id == 1){
                    $chu_so_huu_id = 2;
                }
                
                $data[] = [
                    'apartment_id' => $room->apartment_id,
                    'motel_room_id' => $room->id,
                    'chu_so_huu_id' => $chu_so_huu_id,
                    'phan_loai_do_id' => $p->id,
                    'price' => 0,
                    'time_bao_hanh' => 0,
                    'hang_san_xuat_id' => 0,
                    'nha_cung_cap_id' => 0,
                    'khau_hao' => 0
                ];
            }

            
            $result = app('EntityCommon')->insertData('quan_ly_do', $data, true);
        }
        die('ok');
    }
}
