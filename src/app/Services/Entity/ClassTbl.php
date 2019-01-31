<?php

namespace App\Services\Entity;

use Illuminate\Support\Facades\DB;

class ClassTbl {
    /*
     * get all data of table, leftjoin with table data
     * $tblName: table name
     * $conditions: array condition, ex: ['id' => 1,]
     * $limit:  $limit = 0: get all item
     *          $limit = 1: get first item
     *          $limit > 1: get by $limit 
     * $order: sort order
     */

    public function getDatasTblByConditions($tblName, $conditions = [], $limit = 0, $order = ['sort_order', 'asc'], $whereInConditions = []) {
        $tblData = $tblName . '_data';

        $data = DB::table($tblName)->select([
            $tblName . ".id as tid",
            $tblName . ".*",
            $tblData . ".id as dataId",
            $tblData . ".*"
        ]);
        foreach ($conditions as $colName => $colValue) {
            $data = $data->where($colName, $colValue);
        }

        if (!empty($whereInConditions)) {
            foreach ($whereInConditions as $key => $val) {
                $data = $data->whereIn($key, $val);
            }
        }

        $data = $data->leftJoin($tblData, $tblData . ".{$tblName}_id", $tblName . ".id")
                ->orderBy($order[0], $order[1]);
        if ($limit == 0) {
            $data = $data->get();
        } else if ($limit == 1) {
            $data = $data->first();
        } else {
            $data = $data->paginate($limit);
        }
        return $data;
    }

    /*
     * get all data of table, leftjoin with table data
     * $tblName: table name
     * $conditions: array condition, ex: ['id' => 1,]
     * $limit:  $limit = 0: get all item
     *          $limit = 1: get first item
     *          $limit > 1: get by $limit 
     * $order: sort order
     */
    public function getRowsByConditions($tblName, $conditions, $limit = 0, $order = ['sort_order', 'asc']) {
        $data = DB::table($tblName);
        foreach ($conditions as $colName => $colValue) {
            $data = $data->where($colName, $colValue);
        }
        if ($limit == 0) {
            $data = $data->get();
        } else if ($limit == 1) {
            $data = $data->first();
        } else {
            $data = $data->paginate($limit);
        }
        return $data;
    }

    public function getDataById($tblName, $id) {
        $tableData = DB::table($tblName)->where('id', $id)->first();
        return $tableData;
    }

    public function getDataByIds($tblName, $ids) {
        $tableData = DB::table($tblName)->whereIn('id', $ids)->get();
        return $tableData;
    }

    public function getAllDataPaginate($tblName, $columnOrder = 'sort_order', $orderBy = 'asc', $limit = 30) {
        $tableData = DB::table($tblName)->orderBy($columnOrder, $orderBy)->paginate($limit);
        return $tableData;
    }

    public function getIdAndNameTable($tblName, $collumnName = 'name') {
        $result = [];
        $tableData = DB::table($tblName)->orderBy('sort_order', 'asc')->get();
        foreach ($tableData as $data) {
            $result[$data->id] = $data->$collumnName;
        }
        return $result;
    }

    public function deleteTable($tblName, $id) {
        try {
            DB::table($tblName)->where('id', $id)->delete();
            return \ReturnCode::RETURN_SUCCESS;
        } catch (\Exception $e) {
            return \ReturnCode::Exception_DELETE_TABLE;
        }
    }

    public function searchDataByKeyword($tblName, $columnName, $keyword) {
        $result = [];
        if (!empty($keyword)) {
            $result = DB::table($tblName)->where($columnName, 'like', "%{$keyword}%")
                    ->limit(20)
                    ->orderBy($columnName, 'asc')
                    ->get();
        }
        return $result;
    }

    public function getCountByConditions($tblName, $conditions) {
        $result = DB::table($tblName);

        if (!empty($conditions)) {
            foreach ($conditions as $key => $val) {
                $result = $result->where($key, $val);
            }
        }

        $result = $result->count();

        return $result;
    }

    public function getFirstDataByColumnName($tblName, $columnName, $columnValue, $orderBy = 'desc', $columnOrder = 'id') {
        $result = DB::table($tblName)->where($columnName, $columnValue)
                ->orderBy($columnOrder, $orderBy)
                ->first();
        return $result;
    }

    public function insertData($tblName, $data) {
        $data['created_at'] = date('Y-m-d h:i:s');
        $result = DB::table($tblName)->insert($data);
        return $result;
    }

    function updateSortOrder($tblName, $listId, $parentId = 0) {
        $idx = 0;
        try {
            \DB::beginTransaction();

            foreach ($listId as $id) {
                $idx++;
                $result = DB::table($tblName)
                        ->where('id', $id['id'])
                        ->update([
                    'sort_order' => $idx,
                    'parent_id' => intval($parentId)
                ]);
                if (isset($id['children'])) {
                    self::updateSortOrder($tblName, $id['children'], $id['id']);
                }
            }

            \DB::commit();
            return \ReturnCode::RETURN_SUCCESS;
        } catch (\Exception $exc) {
            \DB::rollback();
            echo $exc->getTraceAsString();
            return \ReturnCode::RETURN_ERROR;
        }
    }

    public function htmlListData($tblName, $routeEdit, $routeDelete, $parentId = 0, $popup = true, $conditions = []) {
        $list = DB::table($tblName)->where('parent_id', $parentId);
        if (!empty($conditions)) {
            foreach ($conditions as $collumn => $value) {
                $list = $list->where($collumn, $value);
            }
        }
        $list = $list->orderBy('sort_order', 'asc')->get();
        $htmlList = '';
        if (count($list) > 0) {
            $htmlList .= '<ol class="dd-list">';
            foreach ($list as $item) {
                $img = '';
                
                if ($tblName != \TblName::BLOCK_LANDINGPAGE) {
                    $tblData = DB::table($tblName . '_data')->where($tblName . '_id', $item->id)->get();
                    $name_arr = [];
                    foreach ($tblData as $data) {
                        $name_arr[] = $data->name;
                    }
                    $name = implode(' - ', $name_arr);
                    
                } else {
                    $name = $item->name;
                    $img = '<a href="/img/template/'.$item->landingpage_id.'.png" data-gallery="" title="Block 01"><i data-pack="default" class="ion-image"></i></a>&nbsp;&nbsp;';
                }
                
                if($routeEdit == 'editLandingpage') {
                    $urlEdit = route($routeEdit, [$item->news_id, $item->landingpage_id, $item->id]);
                } else {
                    $urlEdit = route($routeEdit, [$item->id]);
                }
                
                if ($popup == true)
                    $even = ' onclick="loadPopupLarge(\'' . $urlEdit . '\')" data-toggle="modal" data-target=".bs-modal-lg" ';
                else
                    $even = ' href="' . $urlEdit . '" ';

                $manager = '';
                $linkManager = '';
                if (isset($item->route_name)) {
                    if ($item->route_name == 'landingPage01') {
                        $linkManager = route('editLandingpage', [$item->id]);
                    } else if ($item->route_name == 'listNews' || $item->route_name == 'listNews02') {
                        $linkManager = route('adminListNews') . '?categoryID=' . $item->id;
                    } else if ($item->route_name == 'singleNews') {
                        $news = app('ClassNews')->getFirstRowByCategoryId($item->id);
                        if (isset($news->id)) {
                            $newsId = $news->id;
                        } else {
                            $newsId = 0;
                        }
                        $linkManager = route('editNews', [$newsId]) . '?cateID=' . $item->id;
                    }
                }
                if ($linkManager != '') {
                    $manager = '<a href="' . $linkManager . '" title="Quản lý nội dung"><i data-pack="default" class="ion-gear-b"></i></a>&nbsp;&nbsp;';
                }

                $htmlList .= '<li data-id="' . $item->id . '" class="dd-item">'
                        . '<div class="option-menu">'
                        . '<a ' . $even . ' title="Sửa"><i data-pack="default" class="ion-edit"></i></a>&nbsp;&nbsp;'
                        . $manager
                        . $img
                        . '<a onclick="deleteRow(\'' . url(route($routeDelete, [$item->id])) . '\')"  tabindex="-1"  title="Xóa"><i data-pack="default" class="ion-trash-a"></i></a>&nbsp;&nbsp;</div>'
                        . '<div class="card b0 dd-handle"><div class="mda-list">'
                        . '<div class="mda-list-item"><div class="mda-list-item-icon item-grab"><em class="ion-drag icon-lg"></em></div>'
                        . '<div class="mda-list-item-text mda-2-line">';
                $htmlList .= '<h4>' . $name . ' </h4>';
                $htmlList .= '</div><div class="_right">' . '</div></div></div></div>';
                $subMenu = DB::table($tblName)->where('parent_id', $item->id)->count();
                if ($subMenu > 0) {
                    $htmlList .= self::htmlListData($tblName, $routeEdit, $routeDelete, $item->id, $popup, $conditions);
                }
                $htmlList .= "</li>";
            }
            $htmlList .= '</ol>';
        }
        return($htmlList);
    }

}
