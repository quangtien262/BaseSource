<?php

namespace App\Services\Entity;

use App\Model\Tables;
use App\Model\TablesField;

class ClassTables {

    public function getAllTables() {
        return Tables::all();
    }

    public function getTable($id) {
        return Tables::find($id);
    }

    public function getColumn($id) {
        return TablesField::find($id);
    }

    public function getColumnByTableId($tableId) {
        return TablesField::where('table_id', $tableId)->orderBy('sort_order', 'asc')->get();
    }

    public function saveTable($id, $request) {
        if ($id > 0) {
            $tables = Tables::find($id);
        } else {
            $tables = new Tables;
        }
        if (!empty($request['table_name'])) {
            $tables->name = $request['table_name'];
        }
        if (!empty($request['table_edit'])) {
            $tables->is_edit = $request['table_edit'];
        }
        if (!empty($request['table_type_show'])) {
            $tables->type_show = $request['table_type_show'];
        }
        if (!empty($request['model_name'])) {
            $tables->model_name = $request['model_name'];
        }
        if (!empty($request['display_name'])) {
            $tables->display_name = $request['display_name'];
        }
        $tables->save();
        return $tables;
    }

    public function saveColumn($request) {
        if (!empty($request['column_id'])) {
            $block = TablesField::find($request['column_id']);
        } else {
            $block = new TablesField;
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
        $block->sort_order = intval($request['sort_order']);
        $block->show_in_list = $request['show_in_list'];
        $block->table_id = $request['table_id'];
        $block->is_null = intval($request['is_null']);
        $block->edit = intval($request['edit']);
        $block->add2search = intval($request['add2search']);
        $block->save();
        return $block;
    }

    public function deleteTable($tableId) {
        return Tables::find($tableId)->delete();
    }

    public function deleteColumn($columnId) {
        return TablesField::find($columnId)->delete();
    }

    public function getHtmlMenuAdmin() {
        $html = '';
        $tables = self::getAllTables();
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

}
