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
        if (!empty($request->rowId)) {
            $table = app('ClassTables')->getTableByName($request->tblName);
            if (!empty($request->btnExport)) {
                // export 2 excel
                $columns = app('ClassTables')->getColumnByTableId($table->id);
                $rowsQuery = app('EntityCommon')->getRowsByConditions($table->name, [], 0, ['id', 'desc'], ['id' => $request->rowId]);

                return app('UtilsCommon')->export2Excel($table, $columns, $rowsQuery);
            } elseif (!empty($request->btnDelete)) {
                //delete
                foreach ($request->rowId as $rowId) {
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
        if ($table->type_show == 0 || $table->type_show == 3) {
            $dataQuery = app('ClassTables')->getRowsByConditions($table, $columns, $request);
            //convert object 2 array
            $datas = json_decode(json_encode($dataQuery), true)['data'];

            return view('backend.row.listRowBasic',
                compact('tableId', 'table', 'columns', 'datas', 'dataQuery'));
        } elseif ($table->type_show == 1) {
            $htmlListDragDrop = app('ClassTables')->getHtmlListDragDrop($table);

            return view('backend.row.listRowDragDrop',
                compact('tableId', 'table', 'columns', 'htmlListDragDrop'));
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
        $layout = 'backend';
        if (!empty($request->popup)) {
            $layout = 'popup';
        }

        return view('backend.row.formRow', compact('tableId', 'dataId', 'table', 'columns', 'data', 'layout'));
    }

    public function submitFormRow(Request $request, $tableId, $dataId = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = [];
        foreach ($columns as $column) {
            if ($column->edit != 1) {
                continue;
            }
            if ($column->name == 'id') {
                continue;
            }
            if ($column->type_edit == 'encryption') {
                if ($dataId > 0 && $request->input($column->name) == '') {
                    continue;
                }
                $data[$column->name] = bcrypt($request->input($column->name));
                continue;
            }
            if ($column->type == 'INT') {
                $data[$column->name] = intval($request->input($column->name));
            } else {
                $data[$column->name] = $request->input($column->name);
            }
            //upload images if exist
            if ($column->type_edit == 'images') {
                $images = [];
                $avatar = '';
                // create directory if not exist
                if (!empty($request->input('_images'))) {
                    $directoryUpload = 'imgs/'.$tableId;
                    if (!file_exists($directoryUpload)) {
                        mkdir($directoryUpload, 0777, true);
                    }
                    //loop images
                    foreach ($request->input('_images') as $idx => $img) {
                        $pathUpload = $img;
                        if ($request->input('_images_type')[$idx] == 'base64') {
                            //case image is base64
                            $fileType = mime_content_type($img);
                            if (substr($fileType, 0, 5) == 'image') {
                                $fileName = $idx.'-'.time().'.'.str_replace('image/', '', $fileType);
                                $pathUpload = $directoryUpload.'/'.$fileName;
                                app('ClassCommon')->base64ToImage($img, $pathUpload);
                                $images[] = '/'.$pathUpload;
                            }
                        }
                        if ($request->input('_avatar')[$idx] == '1') {
                            $avatar = $pathUpload;
                        }
                        $images[] = $pathUpload;
                    }
                    if ($avatar == '' && !empty($images)) {
                        $avatar = $images[0];
                    }
                }
                $imageArr = [
                    'avatar' => $avatar,
                    'images' => $images,
                ];
                $data[$column->name] = json_encode($imageArr);
            }
        }
        if ($dataId > 0) {
            $data = app('EntityCommon')->updateData($table->name, $dataId, $data);
        } else {
            $data = app('EntityCommon')->insertData($table->name, $data);
        }

        return redirect(route('listDataTbl', [$tableId]));
    }

    public function editCurrentRow(Request $request, $columnName, $tableId, $dataId = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        app('EntityCommon')->updateData($table->name, $dataId, [$columnName => $request->value]);

        return response()->json([RETURN_SUCCESS, MSG_UPDATE_COLUMN_DATA_SUCCESS]);
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
        $data = json_decode(json_encode($excelData), true);
        \DB::beginTransaction();
        try {
            $dataInsert = [];
            foreach ($data as $idx => $d) {
                if (isset($d['stt'])) {
                    unset($d['stt']);
                }
                //diem thi
                if ($table->name == 'diem_thi_thpt') {
                    $d = app('ClassCommon')->getPointFromString($d['diem_thi'], $d);
                }

                $dataInsert[] = $d;
                if ($idx % 99 == 0) {
                    app('EntityCommon')->insertData($table->name, $dataInsert, true);
                    unset($dataInsert);
                    $dataInsert = [];
                }
            }
            if (!empty($dataInsert)) {
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
        // dd($rowsQuery);
        //convert array protect to array
        $rows = json_decode(json_encode($rowsQuery), true);
        $sheetData = [];
        //add header 2 data
        $header = ['STT'];
        foreach ($columns as $col) {
            if ($col->edit == 1) {
                $header[] = $col->display_name;
            }
        }
        $sheetData[] = $header;
        //add all row 2 data
        foreach ($rows as $index => $row) {
            $item = [];
            foreach ($columns as $col) {
                if (!empty($col->edit)) {
                    $item[] = $row[$col->name];
                }
            }
            $sheetData[] = $item;
        }
        \Excel::create('Filename', function ($excel) use ($sheetData) {
            $excel->sheet('data', function ($sheet) use ($sheetData) {
                // Won't auto generate heading columns
                $sheet->fromArray($sheetData, null, 'A1', false, false);

                //config header
                $sheet->row(1, function ($row) {
                    // call cell manipulation methods
                    $row->setBackground('#247cba');
                    $row->setFontColor('#ffffff');
                    $row->setFontWeight('bold');
                });
                $sheet->setAutoSize(true);
            });
        })->export('xls');
    }

    public function generateTienPhong(Request $request)
    {
        $week = (intval($request->week) - 1);
        $data = app('EntityCommon')->getMoneyMotelRoomWithWeek($week, $request->year);
        $date = date('Y-m-d h:i:s');
        $dataInsert = [];
        foreach ($data as $d) {
            $tmpData = [];
            $tmpData['created_at'] = $date;
            $tmpData['updated_at'] = $date;
            //add to data insert
            $dataInsert = $tmpData;
        }
        insertData($tblName, $dataInsert);

        return back()->withInput();
    }
}
