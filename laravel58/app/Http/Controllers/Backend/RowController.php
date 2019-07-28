<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BackendController;
use Illuminate\Http\Request;

class RowController extends BackendController
{
    public function deleteRow($tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        if (!empty($table)) {
            app('EntityCommon')->deleteTable($table->name, $dataId);
        }

        return back();
    }

    public function listOption(Request $request)
    {
        if(!empty($request->rowId)) {
            $table = app('ClassTables')->getTableByName($request->tblName);
            if(!empty($request->btnExport)) {
                // export 2 excel
                $columns = app('ClassTables')->getColumnByTableId($table->id);
                $rowsQuery = app('EntityCommon')->getRowsByConditions($table->name, [], 0, ['id', 'desc'], ['id' => $request->rowId]);
               
                return app('UtilsCommon')->export2Excel($table, $columns, $rowsQuery);
            } elseif(!empty($request->btnDelete)) {
                //delete
                foreach($request->rowId as $rowId) {
                    app('UtilsCommon')->emptyFolder("imgs/{$table->id}/{$rowId}/image/*");
                }
                app('EntityCommon')->deleteTableByIds($request->tblName, $request->rowId);
            }
        }
        return back();
    }

    public function listRow(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $layout = LAYOUT_BACKEND_01;
        if ($table->type_show == 0 || $table->type_show == 3 || $request->reload == '1') {

            //get tab active
            $tabId = 0;
            if(!empty($table->table_tab) && !empty($table->table_tab_map_column)) {
                $tabTbl = app('ClassTables')->getTable($table->table_tab);
                if(isset($request->tab)) {
                    $tabId = $request->tab;
                } else {
                    $rowData = app('EntityCommon')->findDataLatestByCondition($tabTbl->name);
                    $tabId = $rowData->id;
                }
            }

            //get row data
            $dataQuery = app('ClassTables')->getRowsByConditions($table, $columns, $request);

            //convert object 2 array
            $datas = json_decode(json_encode($dataQuery), true)['data'];

            $compact = compact('layout', 'tableId', 'table', 'columns', 'datas', 'dataQuery', 'tabId');

            if($request->reload == '1') {
                return view('backend.row.listRow', $compact);
            }
            return view('backend.row.listRowBasic', $compact);
        } elseif ($table->type_show == 1) {
            $htmlListDragDrop = app('ClassTables')->getHtmlListDragDrop($table);

            return view('backend.row.listRowDragDrop',
                compact('layout', 'tableId', 'table', 'columns', 'htmlListDragDrop'));
        } elseif ($table->type_show == 5) {
            return redirect(route('formRow', [$tableId, 1]));
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

    public function sortOrderColumn(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $ids = json_decode($request->ids, true);
        if (!empty($ids)) {
            app('EntityCommon')->updateSortOrder('table_column', $ids, $parentId = 0);
        }

        return response()->json([RETURN_SUCCESS, MSG_UPDATE_SORT_ORDER_SUCCESS]);
    }

    public function formRow(Request $request, $tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = json_decode(json_encode(app('EntityCommon')->getDataById($table->name, $dataId)), true);
        $layout = LAYOUT_BACKEND_01;
        if (!empty($request->popup)) {
            $layout = LAYOUT_POPUP;
        }

        return view('backend.row.formRow', compact('tableId', 'dataId', 'table', 'columns', 'data', 'layout'));
    }

    public function submitFormRow(Request $request, $tableId, $dataId = 0)
    {
        app('ClassTables')->saveRow($request, $tableId, $dataId);
        if(!empty($request->popup)) {
            return 'success';
        }
        return redirect(route('listDataTbl', [$tableId]));
    }

    public function editCurrentRow(Request $request, $columnName, $tableId, $dataId = 0, $subName='', $subValue = '')
    {
        $table = app('ClassTables')->getTable($tableId);
        $result = app('EntityCommon')->updateData($table->name, $dataId, [$columnName => $request->value]);

        if($result) {
            return response()->json([RETURN_SUCCESS, MSG_UPDATE_COLUMN_DATA_SUCCESS]);
        }
        return response()->json([RETURN_ERROR, MSG_UPDATE_COLUMN_DATA_FAIL]);
    }

    public function import2Excel(Request $request, $tableId)
    {
        return view('backend.row.import2Excel', compact('tableId'));
    }

    public function postImport2Excel(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $file = $request->file('import');
        $filename = $file->getClientOriginalName();
        //get data on import file
        $excelData = \Excel::load($file, function ($reader) {
                    config(['excel.import.startRow' => 1]);
                    $results = $reader->get();
                })->get();
        $data      = json_decode(json_encode($excelData), true);
        \DB::beginTransaction();
        try {
            $dataInsert = [];
            foreach($data as $idx => $d) {
                if(isset($d['stt'])) {
                    unset($d['stt']);
                }
                //diem thi
                if($table->name == 'diem_thi_thpt') {
                    $d = app('ClassCommon')->getPointFromString($d['diem_thi'], $d);
                }

                $dataInsert[] = $d;
                if ($idx % 99 == 0){
                    app('EntityCommon')->insertData($table->name, $dataInsert, true);
                    unset($dataInsert); 
                    $dataInsert = [];
                }
            }
            if(!empty($dataInsert)) {
                app('EntityCommon')->insertData($table->name, $dataInsert, true);
            }
            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollback();
            return $e->getMessage();
        }
        
        return back();
    }

    public function export2Excel(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $rowsQuery = app('ClassTables')->getRowsByConditions($table, $columns, $request, true);
        dd($rowsQuery);
        if($table->name == 'zzz_hang_ve') {
            return app('UtilsCommon')->exportHangVe2Excel($rowsQuery);
        }
        
        //convert array protect to array
        return app('UtilsCommon')->export2Excel($table, $columns, $rowsQuery);
    }
}
