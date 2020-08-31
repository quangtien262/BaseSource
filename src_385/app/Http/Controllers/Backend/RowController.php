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

            return view(
                'backend.row.listRowBasic',
                compact('tableId', 'table', 'columns', 'datas', 'dataQuery')
            );
        } elseif ($table->type_show == 1) {
            $htmlListDragDrop = app('ClassTables')->getHtmlListDragDrop($table);

            return view(
                'backend.row.listRowDragDrop',
                compact('tableId', 'table', 'columns', 'htmlListDragDrop')
            );
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
        $preMonth = intval($request->month) - 1;
        $year = $request->year;
        $preYear = $year;
        if ($request->month == 1) {
            echo 'case 2';
            die;
            $preMonth = 12;
            $preYear = $year - 1;
        }
        $data = app('EntityCommon')->getMoneyMotelRoomWithMonth($preMonth, $preYear);
        $date = date('Y-m-d h:i:s');
        foreach ($data as $d) {
            $dataInsert = app('ClassCommon')->tienPhongCHDV($d, $request->month, $request->year, $date);
            app('EntityCommon')->insertData('tien_phong', $dataInsert);
        }

        return back()->withInput();
    }

    public function generateCurrenTienPhong($id)
    {
        $data = app('EntityCommon')->getDataById('tien_phong', $id);
        $month = $data->month;
        $year = $data->year;
        $preMonth = $month - 1;
        $preYear = $year;
        if ($month == 1) {
            $preYear = $year - 1;
            $preMonth = 12;
        }
        // echo $preYear;die;
        $d = app('EntityCommon')->getCurrentMoneyMotelRoom($preMonth, $preYear, $data->motel_room_id);
        // dd($d);
        $date = date('Y-m-d h:i:s');
        // echo $data->month;die;
        $tmpData = app('ClassCommon')->tienPhongCHDV($d, $data->month, $year, $date);
        // dd($tmpData);
        //insert to db
        app('EntityCommon')->updateData('tien_phong', $id, $tmpData);

        return back()->withInput();
    }

    public function updateTienPhongDiscount(Request $request, $id)
    {
        $tienphong = app('EntityCommon')->getDataById('tien_phong', $id);
        $dataUpdate = [
            'giam_gia' => $request->discount,
            'total' => $tienphong->total + $tienphong->giam_gia - $request->discount,
        ];
        app('EntityCommon')->updateData('tien_phong', $id, $dataUpdate);

        return back()->withInput();
    }

    public function thongKeDongTien()
    {
        $date = date('d/m/Y h:i:s');
        // dd($data);
        $tmpData = [];
        $tmpData['name'] = 'Thống kê dữ liệu ngày '.$date;
        $tmpData['tien_chi_tieu'] = app('EntityCommon')->getTotalByCondition('tien_chi_tieu', 'money');
        $tmpData['khoan_thu_khac'] = app('EntityCommon')->getTotalByCondition('khoan_thu_khac', 'money');
        $tmpData['tien_phong_da_thu'] = app('EntityCommon')->getTotalByCondition('tien_phong', 'total', ['status_tien_phong_id' => 1]);
        $tmpData['tien_phong_chua_thu'] = app('EntityCommon')->getTotalByCondition('tien_phong', 'total', ['status_tien_phong_id' => 2]);
        $tmpData['tong_von_dau_tu'] = app('EntityCommon')->getTotalByCondition('von_dau_tu', 'money');
        // $tmpData['tien_moi_gioi'] = app('EntityCommon')->getTotalByCondition('apartment', 'tien_moi_gioi');
        // $tmpData['tien_chuyen_nhuong'] = app('EntityCommon')->getTotalByCondition('apartment', 'gia_nhuong');
        // $tmpData['tien_coc_chu_nha'] = app('EntityCommon')->getTotalByCondition('apartment', 'tien_coc');

        $tmpData['total'] = $tmpData['tong_von_dau_tu'] +
        $tmpData['khoan_thu_khac'] +
        $tmpData['tien_phong_da_thu'] -
        $tmpData['tien_chi_tieu'];
        // $tmpData['tien_moi_gioi'] -
        // $tmpData['tien_chuyen_nhuong'] -
        // $tmpData['tien_coc_chu_nha'];
        $tmpData['history'] = app('ClassCommon')->generateHistoryDongTien();
        $tmpData['note'] = app('ClassCommon')->generateDongTien($tmpData['total']);

        // dd($tmpData);
        app('EntityCommon')->insertData(THONG_KE_DONG_TIEN, $tmpData);

        return back()->withInput();
    }

    public function thongKeKhauHao(Request $request)
    {
        if(empty($request->khau_hao_do) || empty($request->khau_hao_other)) {
            return back()->withInput();
        }
        $date = date('d/m/Y h:i:s');
        // dd($data);
        $tmpData = [];
        $tmpData['name'] = 'Thống kê dữ liệu ngày '.$date;
        $tmpData['content'] = app('EntityCommon')->tinhKhauHao($request->khau_hao_do, $request->khau_hao_other);
        $tmpData['thong_ke_chi_tieu'] = app('EntityCommon')->thongKeTienChiTieu();
        
        
        // dd($tmpData);
        app('EntityCommon')->insertData(THONG_KE_KHAU_HAO, $tmpData);

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
            $data[] = [
                'month' => $month,
                'apartment_id' => $sd->apartment_id,
                'so_nuoc_dau' => $sd->so_nuoc_cuoi,
                'motel_room_id' => $sd->motel_room_id,
                'so_dien_dau' => $sd->so_dien_cuoi,
                'so_nuoc_dau' => $sd->so_nuoc_cuoi,
                'year' => $year,
                'name' => 'Số điện tháng '.$month.'/'.$year,
            ];
        }
        app('EntityCommon')->insertData('so_dien_nuoc', $data, true);

        return back()->withInput();
    }

    public function generateHoaDon()
    {
        $hoadon = app('EntityCommon')->getRowsByConditions('hoa_don_dich_vu');
        $date = date('Y-m-d');
        $data = [];
        foreach ($hoadon as $hd) {
            $data[] = [
                'apartment_id' => $hd->apartment_id,
                'name' => $hd->name.'-'.$hd->ma_khach_hang,
                'ngay_chi' => $date,
                'user_id' => 1,
                'status_tien_chi_tieu_id' => 2,
                'phan_loai_chi_tieu_id' => 1,
            ];
        }
        app('EntityCommon')->insertData('tien_chi_tieu', $data, true);

        return back()->withInput();
    }

    
    public function loadInputTypeByColumn($columnId) {
        $column = app('EntityCommon')->getDataById('table_column', $columnId);
        // dd($column);
        $html = '';
        $typeEdit = $column->type_edit;
        switch ($typeEdit) {
            case 'select':
                $tableSelect = app('EntityCommon')->getDataById('tables', $column->select_table_id);
                $tableData = app('EntityCommon')->getRowsByConditions($tableSelect->name);
                // dd($tableData);
                $html = '<select name="value">';
                foreach($tableData as $data) {
                    $html .= '<option value="'.$data->id.'">'.$data->name.'</option>';
                }
                $html .= '</select>';
                break;
            case 'number':
                $html = '<input name="value" type="number"/>';
                break;
            case 'date':
                $html = '<input name="value" type="text"/>';
                break;
            case 'date':
                $html = '<textarea name="value"></textarea>';
                break;
            
            default:
            $html = '<input name="value" type="text"/>';
                break;
        }
        return $html;
    }

    public function updateMultipleData(Request $request) {
        if(!isset($request->value) || empty($request->collumn)) {
            return back()->withInput();
        }
        $column = app('EntityCommon')->getDataById('table_column', $request->collumn);
        $conditions = [];
        foreach($_POST as $key => $val) {
            if(empty($val) || in_array($key, ['tbl', 'collumn', 'value', '_token'])) {
                continue;
            }
            $conditions[$key] = $val;
        }
        $data = [$column->name => $request->value];
        // dd($data);
        $updateResult = app('EntityCommon')->updateDataByCondition($request->tbl, $data, $conditions);
        return back()->withInput();
    }

    public function import2Word(Request $request)
    {
        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();

        // Define styles
        $fontStyle12 = array('spaceAfter' => 60, 'size' => 12);
        $fontStyle10 = array('size' => 10);
        $phpWord->addTitleStyle(null, array('size' => 22, 'bold' => true));
        $phpWord->addTitleStyle(1, array('size' => 20, 'color' => '333333', 'bold' => true));
        $phpWord->addTitleStyle(2, array('size' => 16, 'color' => '666666'));
        $phpWord->addTitleStyle(3, array('size' => 14, 'italic' => true));
        $phpWord->addTitleStyle(4, array('size' => 12));

        $section->addTitle('PHỤ LỤC GIA HẠN HỢP ĐỒNG', 0);
        $section->addTextBreak(2);

        $text = $section->addText("PHỤ LỤC GIA HẠN HỢP ĐỒNG");
        $text = $section->addText(456);
        // $text = $section->addText($request->get('number'),array('name'=>'Arial','size' => 20,'bold' => true));
        // $section->addImage("./images/Krunal.jpg");  
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save('Appdividend.docx');
        return response()->download(public_path('Appdividend.docx'));
    }
}


