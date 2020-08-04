<?php

namespace App\Services\Entity;

use Illuminate\Support\Facades\DB;

class EntityCommon
{
    public function getCountData($tblName)
    {
        return DB::table($tblName)->count();
    }

    /*
     * get data of table
     * $tblName: table name
     * $conditions: array condition, ex: ['id' => 1,]
     * $limit:  $limit = 0: get    item
     *          $limit = 1: get first item
     *          $limit > 1: get by $limit
     * $order: sort order
     * $whereInConditions: in array condition, ex: ['id' => [1,2,3]]
     */

    public function getRowsByConditions($tblName, $conditions = [], $limit = 0, $order = ['sort_order', 'asc'], $whereInConditions = [])
    {
        //select table
        $data = DB::table($tblName);
        //where condition if exist conditions
        foreach ($conditions as $colName => $colValue) {
            $data = $data->where($colName, $colValue);
        }
        //wherein conditions if exist conditions
        if (!empty($whereInConditions)) {
            foreach ($whereInConditions as $key => $val) {
                $data = $data->whereIn($key, $val);
            }
        }
        $data = $data->orderBy($order[0], $order[1]);
        //Check for the count of data
        if ($limit == 0) {
            $data = $data->get();
        } elseif ($limit == 1) {
            $data = $data->first();
        } else {
            $data = $data->paginate($limit);
        }

        return $data;
    }

    public function findDataLatestByCondition($tblName, $conditions = [], $order = ['sort_order', 'asc'])
    {
        $data = DB::table($tblName);
        foreach ($conditions as $colName => $colValue) {
            $data = $data->where($colName, $colValue);
        }
        $data = $data->orderBy($order[0], $order[1]);

        return $data->first();
    }

    public function getDataById($tblName, $id)
    {
        $tableData = DB::table($tblName)->where('id', $id)->first();

        return $tableData;
    }

    public function getDataByIds($tblName, $ids)
    {
        $tableData = DB::table($tblName)->whereIn('id', $ids)->get();

        return $tableData;
    }

    public function getCurrentTableDataByTablesId($tableId, $rowId)
    {
        $tblColor = app('ClassTables')->getTable($tableId);
        $colorData = app('EntityCommon')->getDataById($tblColor->name, $rowId);

        return $colorData;
    }

    public function getAllDataPaginate($tblName, $columnOrder = 'sort_order', $orderBy = 'asc', $limit = 30)
    {
        $tableData = DB::table($tblName)->orderBy($columnOrder, $orderBy)->paginate($limit);

        return $tableData;
    }

    public function getIdAndNameTable($tblName, $collumnName = 'name')
    {
        $result = [];
        $tableData = DB::table($tblName)->orderBy('sort_order', 'asc')->get();
        foreach ($tableData as $data) {
            $result[$data->id] = $data->$collumnName;
        }

        return $result;
    }

    public function deleteTable($tblName, $id)
    {
        try {
            DB::table($tblName)->where('id', $id)->delete();

            return RETURN_SUCCESS;
        } catch (\Exception $e) {
            return RETURN_ERROR;
        }
    }

    public function deleteTableByIds($tblName, $ids)
    {
        try {
            DB::table($tblName)->whereIn('id', $ids)->delete();

            return RETURN_SUCCESS;
        } catch (\Exception $e) {
            return RETURN_ERROR;
        }
    }

    public function deletesTable($tblName, $conditions)
    {
        try {
            $result = DB::table($tblName);
            foreach ($conditions as $key => $val) {
                $result = $result->where($key, $val);
            }
            $result = $result->delete();

            return RETURN_SUCCESS;
        } catch (\Exception $e) {
            return RETURN_ERROR;
        }
    }

    public function searchDataByKeyword($tblName, $columnName, $keyword)
    {
        $result = [];
        if (!empty($keyword)) {
            $result = DB::table($tblName)->where($columnName, 'like', "%{$keyword}%")
                ->limit(20)
                ->orderBy($columnName, 'asc')
                ->get();
        }

        return $result;
    }

    public function getCountByConditions($tblName, $conditions=[])
    {
        $result = DB::table($tblName);

        if (!empty($conditions)) {
            foreach ($conditions as $key => $val) {
                $result = $result->where($key, $val);
            }
        }

        $result = $result->count();

        return $result;
    }

    public function getFirstDataByColumnName($tblName, $columnName, $columnValue, $orderBy = 'desc', $columnOrder = 'id')
    {
        $result = DB::table($tblName)->where($columnName, $columnValue)
            ->orderBy($columnOrder, $orderBy)
            ->first();

        return $result;
    }

    /*
     * insert
     * $tblName: table name
     * $data: data insert, ex: ['column_name' => 'value insert',]
     */

    public function insertData($tblName, $data, $multipleData = false)
    {
        if (!$multipleData) {
            $data['created_at'] = date('Y-m-d h:i:s');
            $data['updated_at'] = $data['created_at'];
        }

        //insert start
        DB::table($tblName)->insert($data);

        //return id after insert
        return DB::getPdo()->lastInsertId();
    }

    /*
     * insert
     * $tblName: table name
     * $data: data insert, ex: ['column_name' => 'value insert',]
     */
    public function updateData($tblName, $dataId, $data)
    {
        $data['updated_at'] = date('Y-m-d h:i:s');
        $result = DB::table($tblName)->where('id', $dataId)->update($data);
        return $result;
    }

    /*
     * insert
     * $tblName: table name
     * $data: data insert, ex: ['column_name' => 'value insert',]
     * $conditions: ex: ['column_name' => 'value',]
     */
    public function updateDataByCondition($tblName, $data, $conditions)
    {
        $data['updated_at'] = date('Y-m-d h:i:s');
        $result = DB::table($tblName);
        foreach($conditions as $key => $val) {
            $result = $result->where($key, $val);
        }
        // dd($data);
        $result = $result->update($data);
        return $result;
    }

    public function updateSortOrder($tblName, $listId, $parentId = 0)
    {
        $idx = 0;
        try {
            \DB::beginTransaction();
            foreach ($listId as $i => $id) {
                ++$idx;
                $result = DB::table($tblName)
                    ->where('id', $id['id'])
                    ->update([
                        'sort_order' => $idx,
                        'parent_id' => intval($parentId),
                    ]);
                if (isset($id['children'])) {
                    self::updateSortOrder($tblName, $id['children'], $id['id']);
                }
            }
            \DB::commit();

            return RETURN_SUCCESS;
        } catch (\Exception $exc) {
            \DB::rollback();
            echo $exc->getTraceAsString();

            return RETURN_ERROR;
        }
    }

    public function getHtmpOptionByTable($tableName, $keyword = '')
    {
        $html = '';
        if (!empty($keyword)) {
            $html .= '<option value="0">'.$keyword.'</option>';
        }

        $data = DB::table($tableName)->orderBy('sort_order', 'asc')->get();
        foreach ($data as $d) {
            $html .= '<option value="'.$d->id.'">'.$d->name.'</option>';
        }

        return $html;
    }

    public function getColNameById($selectTableId, $dataId, $colName = 'name')
    {
        $name = '';
        $table = self::getDataById('tables', $selectTableId);
        $data = self::getDataById($table->name, $dataId);
        if (!empty($data)) {
            $name = $data->name;
        }

        return $name;
    }

    public function getHtmlTitleTblLink($tableId, $type = 'thead')
    {
        $result = '<table class="table-datatable sub-table"><tr>';
        $tableColumn = self::getRowsByConditions('table_column', ['table_id' => $tableId]);
        $class = '';
        if ($type == 'thead') {
            $class = 'sub_thead';
        }
        foreach ($tableColumn as $col) {
            if ($col->sub_list == 1) {
                if ($col->table_link != 0) {
                    $result .= '<th class="'.$class.'">'.self::getHtmlTitleTblLink($col->table_link, $type).'</th>';
                } else {
                    if ($type == 'thead') {
                        $result .= '<th class="'.$class.'"><div class="'.$col->class.'">'.$col->display_name.'</div></th>';
                    } elseif ($type == 'addNews') {
                        if ($col->type_edit == 'date') {
                            $result .= '
                                <th class="'.$class.'"><div class="'.$col->class.'">
                                    <input class="datepicker01" autocomplete="off" type="text" name="'.$col->name.'" placeholder="'.$col->display_name.'"/>    
                                </div></th>';
                        } elseif ($col->type_edit == 'select') {
                            $result .= '
                                <th class="'.$class.'"><div class="'.$col->class.'">'.
                                    app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, '', false, $col->conditions).
                                '</div></th>';
                        } else {
                            $result .= '
                                <th class="'.$class.'"><div class="'.$col->class.'">
                                    <input type="text" name="'.$col->name.'" placeholder="'.$col->display_name.'"/>    
                                </div></th>';
                        }
                    } else {
                        $result .= '<th><div class="'.$col->class.'">&nbsp</div></th>';
                    }
                }
            }
        }
        $result .= '</tr></table>';

        return $result;
    }

    public function getHtmlTblLink($tableId, $columnName, $columnId)
    {
        $result = '<table class="table-datatable sub-table">';
        $table = self::getDataById('tables', $tableId);

        $tableColumn = self::getRowsByConditions('table_column', ['table_id' => $tableId]);

        $data = self::getRowsByConditions($table->name, [$columnName => $columnId]);

        $dataDecode = json_decode(json_encode($data), true);

        //truong hop ko co data
        if (empty($dataDecode)) {
            $result .= '<tr>';
            foreach ($tableColumn as $col) {
                if ($col->sub_list == 1) {
                    if ($col->table_link != 0) {
                        $result .= '<th>'.self::getHtmlTitleTblLink($col->table_link, 'tbody').'</th>';
                    } else {
                        $result .= '<th title="'.$col->display_name.'"><div class="'.$col->class.'"></div></th>';
                    }
                }
            }
            $result .= '</tr>';
        } else {
            foreach ($dataDecode as $d) {
                $result .= '<tr>';
                foreach ($tableColumn as $col) {
                    if ($col->sub_list == 1) {
                        if ($col->table_link != 0) {
                            // echo 'sub_list:' . $col->name;
                            $result .= '<th>'.self::getHtmlTblLink($col->table_link, $col->name, $d['id']).'</th>';
                        } else {
                            $prepend = 'Chọn';
                            $source = '';
                            $type = 'text';
                            $title = $col->display_name;
                            $value = 'empty';
                            $link = route('editCurrentColumn', [$col->name, $tableId, $d['id']]);
                            if ($col->select_table_id > 0) {
                                $tableSelect = self::getDataById('tables', $col->select_table_id);
                                $currentTblData = self::getDataById($tableSelect->name, $d[$col->name]);
                                $source = app('ClassTables')->getObjectJavascriptFromTable($col->select_table_id, $col->conditions);

                                $type = 'select';
                                if (!empty($currentTblData)) {
                                    $value = $currentTblData->name;
                                }
                            } else {
                                if ($col->type_edit == 'date') {
                                    $type = 'date';
                                }
                                $value = $d[$col->name];
                            }

                            $result .=
                                '<th title="'.$col->display_name.'">
                                    <div class="'.$col->class.'">'.
                                        // self::htmlXEditTable($type, $link, $title, $value, $prepend, $source) .
                                        app('UtilsCommon')->xEditTable($tableId, $col, $d).

                                        app('UtilsCommon')->inputFastEdit($col, $d[$col->name], $tableId, $d['id']).

                                    '</div>';
                            if (!empty($col->config_add_sub_table)) {
                                $subTbl = json_decode($col->config_add_sub_table, true);
                                $result .=
                                        '<p class="add-sub-tbl">
                                            <a onclick="loadDataPopup(\''.route('formRow', [$subTbl['table_id'], 0]).'\', \'&'.$subTbl['column'].'='.$d['id'].'\')" data-toggle="modal" data-target=".bs-modal-lg">'.
                                                $subTbl['title'].
                                            '</a>
                                        </p>';
                            }

                            $result .= '</th>';
                        }
                    }
                }
                $result .= '</tr>';
            }
        }
        $result .= '</table>';

        return $result;
    }

    public function htmlXEditTable($type, $link, $title, $value, $prepend = '', $source = '')
    {
        return '<a class="editable-'.$type.'" data-url="'.$link.' "data-prepend="'.$prepend.'"data-source="'.$source.' "data-type="'.$type.'" data-pk="1" data-title="'.$title.'">'.
                    $value.
                '</a>';
    }

    /**
     * get thông tin phòng theo tiền điênk.
     *
     * @param [type] $month
     * @param [type] $year
     */
    public function getMoneyMotelRoomWithMonth($month, $year)
    {
        // echo $month;
        $result = DB::table('motel_room')
        ->leftJoin('so_dien_nuoc', 'motel_room.id', 'so_dien_nuoc.motel_room_id')
        ->leftJoin('hop_dong', 'motel_room.id', 'hop_dong.motel_room_id')
        ->where('so_dien_nuoc.month', $month)
        ->where('so_dien_nuoc.year', $year)
        ->where('hop_dong.status_hop_dong_id', 1)
        ->get();
        // echo '<pre>';
        // print_r($result);
        return $result;
    }

    /**
     * get thông tin phòng theo tiền điênk.
     *
     * @param [type] $month
     * @param [type] $year
     */
    public function getCurrentMoneyMotelRoom($month, $year, $motelRoomId)
    {
        // print_r($year);
        // print_r($motelRoomId);
        // die;
        $result = DB::table('motel_room')
        ->leftJoin('so_dien_nuoc', 'motel_room.id', '=', 'so_dien_nuoc.motel_room_id')
        // ->leftJoin('so_nuoc', 'motel_room.id', '=', 'so_nuoc.motel_room_id')
        ->leftJoin('hop_dong', 'motel_room.id', '=', 'hop_dong.motel_room_id')
        ->where('so_dien_nuoc.month', '=', $month)
        ->where('so_dien_nuoc.year', '=', $year)
        // ->where('hop_dong.status_hop_dong_id', '=', 1)
        ->where('hop_dong.motel_room_id', '=', $motelRoomId)
        ->first();

        return $result;
    }

    /**
     * get thông tin phòng theo tiền điênk.
     *
     * @param [type] $condition = ['collumn' => value]
     * @param [type] $between = ['column' => [$start, $end]]
     * @param [type] $notBetween = ['column' => [$start, $end]]
     */
    public function getTotalByCondition($table, $column, $condition = [], $between = [], $notBetween = [], $whereInConditions = [])
    {
        $result = 0;
        $data = DB::table($table)
        ->select($column);
        if (!empty($condition)) {
            foreach ($condition as $key => $val) {
                $data = $data->where($key, $val);
            }
        }
        if (!empty($between)) {
            foreach ($between as $key => $val) {
                $data = $data->whereBetween($key, $val);
            }
        }
        if (!empty($notBetween)) {
            foreach ($notBetween as $key => $val) {
                $data = $data->whereNotBetween($key, $val);
            }
        }

        if (!empty($whereInConditions)) {
            foreach ($whereInConditions as $key => $val) {
                $data = $data->whereIn($key, $val);
            }
        }

        $data = $data->get();
        $data = json_decode(json_encode($data), true);
        // dd($data);
        if (!empty($data)) {
            foreach ($data as $d) {
                $result = $result + $d[$column];
            }
        }

        return $result;
    }

    public function thongKeTienChiTieu()
    {
        $result = '';
        $total = 0;
        $tienChiTieu = self::getRowsByConditions('tien_chi_tieu');
        foreach($tienChiTieu as $p) {
            $total += $p->money;
        }
        $result .= '<li class="tong-tien-chi-tieu">Tổng tiền chi tiêu: '.number_format($total).'</li>';
        $tienChiTieu = self::getRowsByConditions('status_phan_loai_chi_tieu');
        foreach($tienChiTieu as $tien) {
            $tienChiTieuByStatus = self::getRowsByConditions('tien_chi_tieu', ['phan_loai_chi_tieu_id' => $tien->id]);
            $money = 0;
            foreach($tienChiTieuByStatus as $p) {   
                $money += $p->money;
            }
            $percent = ($money * 100)/$total;
            $result .= '<li>'.$tien->name.': '. number_format($money) .' <b>('.round($percent,2).'%)</b></li>';
        }
        return $result;
    } 

    public function tinhKhauHao($thoiGianKhauHaoDo, $thoiGianKhauHaoOther)
    {
        $result = '<p><b>Tính Khấu hao chi tiết:</b> Tiền đồ: '.$thoiGianKhauHaoDo.' tháng; chi phí khác: '.$thoiGianKhauHaoOther.' tháng</p>
                    <em><p><b>Chi phí khác là bao gồm:</b></p>
                    <p>
                        <ul>
                            <li>Công cho thợ</li>
                            <li>Thay thế thiết bị</li>
                            <li>Tiền chuyển nhượng</li>
                            <li>Chi phí cho sửa chữa, nâng cấp</li>
                        </ul>
                    </p></em>
                <table class="table-datatable table table-striped table table-bordered mv-lg fix-tbl-basic">';
        $total = 0;

        //header
        $htmlApm = '<tr>';
        $htmlApm .= '<th>thời gian</th>';
        $apartment = self::getRowsByConditions('apartment');
        $tienDo = [];
        $tienKhac = [];
        $total = [
            'all' => 0,
            'tien_do' => 0,
            'other' => 0,
        ];
        foreach($apartment as $apm) {
            //khau hao
            $khauHaoTotal['do'][$apm->id] = $this->getTotalByCondition('quan_ly_do', 'price', ['apartment_id' => $apm->id, 'chu_so_huu_id' =>1]);
            $chitieuConditions = [
                'apartment_id' => $apm->id,
            ];
            //15: tiền đặt cọc thuê nhà
            //10: Công cho thợ
            //9: Thay thế thiết bị
            //8: Tiền chuyển nhượng
            //4: Chi phí cho sửa chữa, nâng cấp
            $whereInConditions = [
                'phan_loai_chi_tieu_id' => [10,9,8,4]
            ];
            $khauHaoTotal['other'][$apm->id] = $this->getTotalByCondition('tien_chi_tieu', 'money', $chitieuConditions, [], [], $whereInConditions);
            $total['tien_do'] = $total['tien_do'] + $khauHaoTotal['do'][$apm->id];
            $total['other'] = $total['other'] + $khauHaoTotal['other'][$apm->id];
            //nha 65
            if($apm->id == 7) {
                $khauHaoTotal['other'][$apm->id] = $khauHaoTotal['other'][$apm->id] - 60000000;
            }
            // nha 85
            if($apm->id == 8) {
                $khauHaoTotal['other'][$apm->id] = $khauHaoTotal['other'][$apm->id] - 100000000;
            }
            $total['all'] = $total['all'] + $khauHaoTotal['do'][$apm->id] + $khauHaoTotal['other'][$apm->id];
            //show data
            $htmlApm .= '<th>'.$apm->name. 
                            '<br/>Đồ: ' . number_format($khauHaoTotal['do'][$apm->id]) . 
                            '<br/>Khác:' . number_format($khauHaoTotal['other'][$apm->id]) .
                            '<br/>Tổng:' . number_format(($khauHaoTotal['do'][$apm->id] + $khauHaoTotal['other'][$apm->id])) .
                        '</th>';
        }
        //all
        $htmlApm .= '<th>Tổng'.
                        '<br/>Đồ: ' . number_format($total['tien_do']) .
                        '<br/>Khác:' . number_format($total['other']) .
                        '<br/>Tổng:' . number_format(($total['tien_do'] + $total['other'])) .
                    '</th>';
        $htmlApm .= '</tr>';

        //content
        $tmpData = '';
        $current = date('2019-11');
        for($i = 1; $i <= 120; $i++) {
            $tongKhauHaoHangThang = 0;
            $current = strtotime(date("Y-m", strtotime($current)) . " +1 month");
            $current = strftime("%Y-%m", $current);
            // $current
            $tmpData .= '<tr>';
            $tmpData .= '<td><b style="color:#cccccc">['.$i.']</b>' . $current . '</td>';
            $tongKhauHaoHangThang = 0;
            foreach($apartment as $apm) {
                if( date("Y-m-d", strtotime($current.'-01')) < date("Y-m-d", strtotime($apm->start_date)) ) {
                    $tmpData .= '<td><b style="color:#cccccc">['.$apm->ma_apm.']</b></td>';
                    continue;
                }

                if( date("Y-m-d", strtotime($current.'-01')) > date("Y-m-d", strtotime($apm->end_date)) ) {
                    $tmpData .= '<td><b style="color:#cccccc">['.$apm->ma_apm.']</b></td>';
                    continue;
                }

                $khDo = 0;
                if( strtotime(date("Y-m-d", strtotime($current.'-01'))) <= strtotime(date("Y-m-d", strtotime($apm->start_date)) . " +{$thoiGianKhauHaoDo} month")) {
                    $khDo = $khauHaoTotal['do'][$apm->id]/$thoiGianKhauHaoDo;
                }

                $khOther = 0;
                if( strtotime(date("Y-m-d", strtotime($current.'-01'))) <= strtotime(date("Y-m-d", strtotime($apm->start_date)) . " +{$thoiGianKhauHaoOther} month")) {
                    $khOther = $khauHaoTotal['other'][$apm->id]/$thoiGianKhauHaoOther;
                }

                $tongKhauHaoNha = $khDo + $khOther;
                $tongKhauHaoHangThang = $tongKhauHaoHangThang + $tongKhauHaoNha;
                //show data
                $tmpData .= '<td><b style="color:#cccccc">['.$apm->ma_apm.']</b>'.
                                number_format($tongKhauHaoNha) .
                            '</td>';
            }
            $tmpData .= '<td>' . number_format($tongKhauHaoHangThang) . '</td>';
            $tmpData .= '</tr>';
        }
        
        


        $result .= $htmlApm . $tmpData;
        $result .= '</table>';
        // echo $result;die('123');
        return $result;
    }
}
  