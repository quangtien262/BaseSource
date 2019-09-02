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
     * $limit:  $limit = 0: get all item
     *          $limit = 1: get first item
     *          $limit > 1: get by $limit
     * $order: sort order
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

    public function getCountByConditions($tblName, $conditions)
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

    public function updateData($tblName, $dataId, $data)
    {
        $data['updated_at'] = date('Y-m-d h:i:s');
        $result = DB::table($tblName)->where('id', $dataId)->update($data);

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

    // public function getHtmpOptionByTable($tableName, $keyword = '')
    // {
    //     $html = '';
    //     if (!empty($keyword)) {
    //         $html .= '<option value="0">'.$keyword.'</option>';
    //     }

    //     $data = DB::table($tableName)->orderBy('sort_order', 'asc')->get();
    //     foreach ($data as $d) {
    //         $html .= '<option value="'.$d->id.'">'.$d->name.'</option>';
    //     }

    //     return $html;
    // }

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
     * @param [type] $week
     * @param [type] $year
     */
    public function getMoneyMotelRoomWithWeek($week, $year)
    {
        $result = DB::table('motel_room')
        ->leftJoin('so_dien', 'motel_room.id', '=', 'so_dien.motel_room_id')
        ->leftJoin('hop_dong', 'motel_room.id', '=', 'hop_dong.motel_room_id')
        ->where('so_dien.week', '=', $week)
        ->where('so_dien.year', '=', $year)
        ->where('hop_dong.status_hop_dong_id', '=', 1)
        ->get();

        return $result;
    }
}
