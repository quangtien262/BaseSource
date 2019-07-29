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
        $result = DB::table($tblName)->insert($data);

        return $result;
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

    public function getHtmlTitleTblLink($tableId)
    {
        $result = '';
        $tableColumn = self::getRowsByConditions('table_column', ['table_id' => $tableId]);
        foreach ($tableColumn as $col) {
            if ($col->edit == 1) {
                $result .= '<th class="'.$col->class.'">'.$col->display_name.'</th>';
            }
        }

        return $result;
    }

    public function getHtmlTblLink($tableId, $columnName, $columnId)
    {
        $result = '';
        $table = self::getDataById('tables', $tableId);
        $tableColumn = self::getRowsByConditions('table_column', ['table_id' => $tableId]);
        $data = self::getRowsByConditions($table->name, [$columnName => $columnId]);
        $dataDecode = json_decode(json_encode($data), true);
        foreach ($dataDecode as $d) {
            foreach ($tableColumn as $col) {
                if ($col->edit == 1) {
                    $result .= '<td class="'.$col->class.'">'.$d[$col->name].'</td>';
                }
            }
        }

        return $result;
    }
}
