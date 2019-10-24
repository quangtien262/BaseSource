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

    public function detailRow(Request $request, $tableId, $dataId)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = json_decode(json_encode(app('EntityCommon')->getDataById($table->name, $dataId)), true);
        $layout = 'backend';
        if (!empty($request->popup)) {
            $layout = 'popup';
        }

        return view('backend.row.detailRow', compact('tableId', 'dataId', 'table', 'columns', 'data', 'layout'));
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
                continue;
            }
            if (!empty($request->input($column->name)) && $column->type == 'DATE') {
                $date = date('Y-m-d', strtotime($request->input($column->name)));
                $data[$column->name] = $date;
                continue;
            }

            $data[$column->name] = $request->input($column->name);

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
        $month = (intval($request->month) - 1);
        $data = app('EntityCommon')->getMoneyMotelRoomWithMonth($month, $request->year);
        // dd($data);
        $date = date('Y-m-d h:i:s');
        $dataInsert = [];
        foreach ($data as $d) {
            $tmpData = [];
            $tmpData['month'] = $request->month;
            $tmpData['year'] = $request->year;
            $tmpData['motel_room_id'] = $d->motel_room_id;
            $tmpData['name'] = 'Tiền dịch vụ tháng '.$month.' và tiền phòng tháng '.$request->month;
            $tmpData['tien_phong'] = $d->gia_thue;

            $tmpData['apartment_id'] = $d->apartment_id;
            //tien dien
            $tmpData['tien_dien'] = ($d->so_cuoi - $d->so_dau) * 4000;
            $tmpData['tong_so_dien'] = $d->so_cuoi - $d->so_dau;
            $tmpData['note'] = 'Số điện đầu: '.$d->so_dau.',<br/> Số điện cuối: '.$d->so_cuoi.',<br/> Tổng số điện xử dụng là: '.($d->so_cuoi - $d->so_dau).' Số';

            //dich vu khac
            $tienDichVu = app('EntityCommon')->getRowsByConditions('loai_tien_phong');
            $totalDichVu = 0;
            foreach ($tienDichVu as $dv) {
                $price = $dv->price;
                if (!empty($dv->tinh_theo_so_nguoi)) {
                    $price = $d->so_nguoi * $dv->price;
                }
                $totalDichVu += $price;
                $tmpData[$dv->name] = $price;
            }
            //total
            $tmpData['total'] = $totalDichVu + $tmpData['tien_dien'] + $tmpData['tien_phong'];
            $tmpData['created_at'] = $date;
            $tmpData['updated_at'] = $date;
            $tmpData['status_tien_phong_id'] = 2;
            //add to data insert
            $dataInsert[] = $tmpData;
        }
        // dd($dataInsert);
        app('EntityCommon')->insertData('tien_phong', $dataInsert, true);

        return back()->withInput();
    }

    public function generateCurrenTienPhong($id)
    {
        $data = app('EntityCommon')->getDataById('tien_phong', $id);
        $month = ($data->month - 1);
        $conditions = [
            'month' => $month,
            'year' => $data->year,
            'motel_room_id' => $data->motel_room_id,
        ];
        $d = app('EntityCommon')->getCurrentMoneyMotelRoom($month, $data->year, $data->motel_room_id);
        $date = date('Y-m-d h:i:s');
        $tmpData = [];
        $tmpData['apartment_id'] = $d->apartment_id;
        $tmpData['tien_dien'] = ($d->so_cuoi - $d->so_dau) * 4000;
        $tmpData['tong_so_dien'] = $d->so_cuoi - $d->so_dau;
        $tmpData['tien_phong'] = $d->gia_thue;
        $tmpData['note'] = 'Số điện đầu: '.$d->so_dau.',<br/> Số điện cuối: '.$d->so_cuoi.',<br/> Tổng số điện xử dụng là: '.($d->so_cuoi - $d->so_dau).' Số';
        $tienDichVu = app('EntityCommon')->getRowsByConditions('loai_tien_phong');
        $totalDichVu = 0;
        foreach ($tienDichVu as $dv) {
            $price = $dv->price;
            if (!empty($dv->tinh_theo_so_nguoi)) {
                $price = $d->so_nguoi * $dv->price;
            }
            $totalDichVu += $price;
            $tmpData[$dv->name] = $price;
        }
        $tmpData['total'] = $tmpData['tien_dien'] + $tmpData['tien_nuoc'] + $tmpData['tien_wc'] + $tmpData['tien_mang'] + $tmpData['tien_chieu_sang'] + $tmpData['tien_phong'];
        $tmpData['created_at'] = $date;
        $tmpData['updated_at'] = $date;
        $tmpData['status_tien_phong_id'] = 2;
        // dd($dataInsert);
        app('EntityCommon')->updateData('tien_phong', $id, $tmpData);

        return back()->withInput();
    }

    public function thongKe()
    {
        $date = date('d/m/Y h:i:s');
        // dd($data);
        $tmpData = [];
        $tmpData['name'] = 'Thống kê dữ liệu ngày '.$date;
        $tmpData['tong_chi'] = app('EntityCommon')->getTotalByCondition('tien_chi_tieu', 'money');
        $tmpData['tong_thu'] = app('EntityCommon')->getTotalByCondition('khoan_thu_khac', 'money');
        $tmpData['tien_phong_da_thu'] = app('EntityCommon')->getTotalByCondition('tien_phong', 'total', ['status_tien_phong_id' => 1]);
        $tmpData['tien_phong_chua_thu'] = app('EntityCommon')->getTotalByCondition('tien_phong', 'total', ['status_tien_phong_id' => 2]);
        //von dau tu
        $tienlq = app('EntityCommon')->getTotalByCondition('von_dau_tu', 'tienlq');
        $anhht = app('EntityCommon')->getTotalByCondition('von_dau_tu', 'anhht');
        $thuongn = app('EntityCommon')->getTotalByCondition('von_dau_tu', 'thuongn');
        $tmpData['tong_von_dau_tu'] = $tienlq + $anhht + $thuongn;
        //total
        $tmpData['total'] = $tmpData['tong_thu'] + $tmpData['tien_phong_da_thu'] - $tmpData['tong_chi'];
        // dd($tmpData);
        app('EntityCommon')->insertData('thong_ke', $tmpData);

        return back()->withInput();
    }

    public function generateSodien()
    {
        $month = intval(date('m'));
        $year = intval(date('Y'));
        $preMonth = $month - 1;
        if ($month == 1) {
            $preMonth = 12;
        }
        $preSodien = app('EntityCommon')->getRowsByConditions(SO_DIEN, ['month' => $preMonth], $limit = 0, ['id', 'asc']);

        $data = [];
        foreach ($preSodien as $sd) {
            // tính tổng lại tất cả số điện
            // $tmpData['tong_so_dien'] = $sd->so_cuoi - $sd->so_dau;
            // app('EntityCommon')->updateData('so_dien', $sd->id, $tmpData);
            $data[] = [
                'month' => $month,
                'motel_room_id' => $sd->motel_room_id,
                'so_dau' => $sd->so_cuoi,
                'year' => $year,
                'name' => 'Số điện tháng '.$month.'/'.$year,
            ];
        }
        app('EntityCommon')->insertData('so_dien', $data, true);

        return back()->withInput();
    }
}
