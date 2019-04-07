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

    public function listRow(Request $request, $tableId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        if ($table->type_show == 0) {
            $dataQuery = app('ClassTables')->getRowsByConditions($table, $columns, $request);
            //convert object 2 array
            $datas = json_decode(json_encode($dataQuery), true)['data'];
            return view('backend.row.listRowBasic', compact('tableId', 'table', 'columns', 'datas', 'dataQuery'));
        } elseif ($table->type_show == 1 || $table->type_show == 2) {
            $htmlListDragDrop = app('ClassTables')->getHtmlListDragDrop($table);
            return view('backend.row.listRowDragDrop', compact('tableId', 'table', 'columns', 'datas', 'htmlListDragDrop'));
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
        if(!empty($ids)) {
            app('EntityCommon')->updateSortOrder('table_column', $ids, $parentId = 0);
        }
        return response()->json([RETURN_SUCCESS, MSG_UPDATE_SORT_ORDER_SUCCESS]);
    }

    public function formRow(Request $request, $tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = json_decode(json_encode(app('EntityCommon')->getDataById($table->name, $dataId)), true);
        return view('backend.row.formRow', compact('tableId', 'dataId', 'table', 'columns', 'data'));
    }

    public function submitFormRow(Request $request, $tableId, $dataId = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = [];
        foreach ($columns as $column) {
            if ($request->input($column->name)) {
                $data[$column->name] = $request->input($column->name);
            }
            //upload images if exist
            if ($column->type_edit == 'images') {
                $images = [];
                // create directory if not exist
                if (!empty($request->input('_images'))) {
                    $directoryUpload = 'imgs/' . $tableId;
                    if (!file_exists($directoryUpload)) {
                        mkdir($directoryUpload, 0777, true);
                    }
                    //loop images
                    foreach ($request->input('_images') as $idx => $img) {
                        if ($request->input('_images_type')[$idx] == 'base64') {
                            //case image is base64
                            $fileType = mime_content_type($img);
                            if (substr($fileType, 0, 5) == 'image') {
                                $fileName = $idx . '-' . time() . '.' . str_replace("image/", "", $fileType);
                                $pathUpload = $directoryUpload . '/' . $fileName;
                                $result = app('ClassCommon')->base64ToImage($img, $pathUpload);
                                $images[] = '/' . $pathUpload;
                            }
                        } else {
                            //else not base64, save old path
                            $images[] = $img;
                        }
                    }
                }
                $data[$column->name] = json_encode($images);
            }
        }
        if ($dataId > 0) {
            $data = app('EntityCommon')->updateData($table->name, $dataId, $data);
        } else {
            $data = app('EntityCommon')->insertData($table->name, $data);
        }
        return redirect(route('listDataTbl', [$tableId]));
    }
}
