<?php

namespace App\Services\Entity;

use App\Model\Tables;
use App\Model\TablesColumn;
use Illuminate\Support\Facades\DB;

class ClassTables
{

    public function getAllTables()
    {
        return Tables::all();
    }

    public function getTable($id)
    {
        return Tables::find($id);
    }

    public function getColumn($id)
    {
        return TablesColumn::find($id);
    }

    public function getColumnByTableId($tableId)
    {
        return TablesColumn::where('table_id', $tableId)->orderBy('sort_order', 'asc')->get();
    }

    public function saveTable($id, $request)
    {
        if ($id > 0) {
            $tables = Tables::find($id);
        } else {
            $tables = new Tables;
        }
        $tables->count_item_of_page = $request['count_item_of_page'];
        $tables->display_name = $request['display_name'];
        $tables->model_name = $request['model_name'];
        $tables->type_show = $request['table_type_show'];
        $tables->is_edit = $request['table_edit'];
        $tables->name = $request['table_name'];
        $tables->save();
        return $tables;
    }

    public function saveColumn($request)
    {
        if (!empty($request['column_id'])) {
            $block = TablesColumn::find($request['column_id']);
        } else {
            $block = new TablesColumn;
        }
        if (!empty($request['column_name'])) {
            $block->name = $request['column_name'];
        }
        if (!empty($request['column_type'])) {
            $block->type = $request['column_type'];
        }
        if (!empty($request['value_default'])) {
            $block->value_default = $request['value_default'];
        }
        if (!empty($request['max_length'])) {
            $block->max_length = $request['max_length'];
        }
        if (!empty($request['type_edit'])) {
            $block->type_edit = $request['type_edit'];
        }
        if (!empty($request['display_name'])) {
            $block->display_name = $request['display_name'];
        }
        $block->table_id = intval($request['table_id']);
        $block->sort_order = intval($request['sort_order']);
        $block->show_in_list = $request['show_in_list'];
        $block->require = $request['require'];
        $block->edit = intval($request['edit']);
        $block->add2search = intval($request['add2search']);
        $block->select_table_id = intval($request['select_table_id']);
        $block->save();
        return $block;
    }

    public function deleteTable($tableId)
    {
        return Tables::find($tableId)->delete();
    }

    public function deleteColumn($columnId)
    {
        return TablesColumn::find($columnId)->delete();
    }

    public function getRowsByConditions($table, $columns, $request)
    {
        //select table
        $data = DB::table($table->name);
        //where condition if exist conditions
        foreach ($columns as $col) {
            if ($col['add2search'] == 1 && !empty($request[$col->name])) {
                // $conditions[$col->name] = $request[$col->name];
                switch ($col->search_type) {
                    case '2':
                        $data = $data->where($col->name, '=', $request[$col->name]);
                        break;
                    case '3':
                        $data = $data->where($col->name, '!=', $request[$col->name]);
                        break;
                    case '4':
                        $data = $data->where($col->name, 'like', '%' . $request[$col->name]);
                        break;
                    case '5':
                        $data = $data->where($col->name, 'like', $request[$col->name] . '%');
                        break;
                    case '6':
                        $data = $data->whereBetween($col->name, [$request[$col->name . '01'], $request[$col->name . '02']]);
                        break;
                    default:
                        //case = 1 or other
                        $data = $data->where($col->name, 'like', '%' . $request[$col->name] . '%');
                        break;
                }
            }
        }
        //The count of data
        $data = $data->paginate($table->count_item_of_page);

        return $data;
    }

    public function getHtmlMenuAdmin()
    {
        $html = '';
        // $conditions = ['parent_id' => $parentId];
        $conditions = ['is_edit' => 1];
        $order = ['sort_order', 'asc'];
        $tables = app('EntityCommon')->getRowsByConditions('tables', $conditions, 0, $order);
        foreach ($tables as $table) {
            $countData = app('EntityCommon')->getCountData($table->name);
            $html .= '<li>
                        <a class="ripple" href="' . route('listDataTbl', [$table->id]) . '">
                            <span class="pull-right nav-label">
                                <span class="badge bg-success">' . $countData . '</span>
                            </span>
                            <span class="nav-icon"><em class="ion-gear-b"></em></span>
                            <span>' . $table->display_name . '</span>
                        </a>
                    </li>';
        }
        return $html;
    }

    public function getHtmlSelectForTable($name, $tblRowId, $selectedId = 0, $multiple = false)
    {
        if ($multiple) {
            $html = '<select multiple class="form-control" name="' . $name . '">';
        } else {
            $html = '<select class="form-control" name="' . $name . '"><option value="0">Chọn</option>';
        }
        $table = self::getTable($tblRowId);
        if (!empty($table)) {
            $tableData = app('EntityCommon')->getRowsByConditions($table->name, [], 0, $order = ['id', 'asc']);
            foreach ($tableData as $data) {
                $selected = '';
                if ($data->id == $selectedId) {
                    $selected = 'selected="selected"';
                }
                $html .= '<option ' . $selected . ' value="' . $data->id . '">' . $data->name . '</option>';
            }
        }
        $html .= '</select>';
        return $html;
    }

    ////apply for all table have config in table tables
    public function getHtmlListDragDrop($table, $parentId = 0)
    {
        $html = '';
        $conditions = [];
        $conditions['parent_id'] = $parentId;
        $order = ['sort_order', 'asc'];
        $tableData = app('EntityCommon')->getRowsByConditions($table->name, $conditions, $limit = 0, $order);
        
        if (!empty($tableData)) {
            $html = '<ol class="dd-list">';
            foreach ($tableData as $td) {
                $img = '';
                if (!empty($td->image)) {
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="' . $td->image . '"/></div>';
                }
                $html .= '<li class="dd-item" data-id="' . $td->id . '">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        ' . $img . '
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>' . $td->name . '</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                <a href="' . route('editDataTbl', [$table->id, $td->id]) . '"><i class="ion-edit"></i></a>
                                &nbsp;
                                <a href="' . route('deleteRow', [$table->id, $td->id]) . '"><i class="ion-trash-a"></i></a>
                            </div>';
                // check sub data
                $subData = DB::table($table->name)->where('parent_id', $td->id)->count();
                if ($subData > 0) {
                    $html .= self::getHtmlListDragDrop($table, $td->id);
                }
                $html .= '</li>';
            }
            $html .= '</ol>';
        }
        return $html;
    }

    //apply for table tables 
    public function getHtmlListTable($parentId = 0)
    {
        $html = '';
        $conditions = ['parent_id' => $parentId];
        $order = ['sort_order', 'asc'];
        $tableData = app('EntityCommon')->getRowsByConditions('tables', $conditions, 0, $order);
        
        if (!empty($tableData)) {
            $html = '<ol class="dd-list">';
            foreach ($tableData as $td) {
                $img = '';
                if (!empty($td->image)) {
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="' . $td->image . '"/></div>';
                }
                $html .= '<li class="dd-item" data-id="' . $td->id . '">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        ' . $img . '
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>' . $td->name . ' - '. $td->display_name .'</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                <a href="' . route('configTbl_edit', [$td->id]) . '"><i class="ion-edit"></i></a>
                                &nbsp;
                                <a href="' . route('deleteTable', ['table'=>$td->id]) . '"><i class="ion-trash-a"></i></a>
                            </div>';
                // check sub data
                $subData = DB::table('tables')->where('parent_id', $td->id)->count();
                if ($subData > 0) {
                    $html .= self::getHtmlListTable($td->id);
                }
                $html .= '</li>';
            }
            $html .= '</ol>';
        }
        return $html;
    }

    //apply for table table_column 
    public function getHtmlListColumn($tableId, $parentId = 0)
    {
        $html = '';
        $conditions = ['parent_id' => $parentId, 'table_id' => $tableId];
        $order = ['sort_order', 'asc'];
        $tableData = app('EntityCommon')->getRowsByConditions('table_column', $conditions, 0, $order);
        
        if (!empty($tableData)) {
            $html = '<ol class="dd-list">';
            foreach ($tableData as $td) {
                $img = '';
                if (!empty($td->image)) {
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="' . $td->image . '"/></div>';
                }
                $html .= '<li class="dd-item" data-id="' . $td->id . '">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        ' . $img . '
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>' . $td->name . ' - '. $td->display_name .'</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                <a href="' . route('configTbl_edit', [$tableId, 'column' => $td->id]) . '"><i class="ion-edit"></i></a>
                                &nbsp;
                                <a href="' . route('deleteColumn', ['table' => $tableId, 'column' => $td->id]) . '"><i class="ion-trash-a"></i></a>
                            </div>';
                // check sub data
                $subData = DB::table('table_column')
                            ->where('parent_id', $td->id)
                            ->where('table_id', $tableId)
                            ->count();
                if ($subData > 0) {
                    $html .= self::getHtmlListTable($tableId, $td->id);
                }
                $html .= '</li>';
            }
            $html .= '</ol>';
        }
        return $html;
    }
}
