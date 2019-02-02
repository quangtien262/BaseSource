<?php

namespace App\Services\Entity;

use App\Model\Tables;
use App\Model\TablesField;

class ClassTables {

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
        $tables->save();
        return $tables;
    }

    public function saveTableField($id, $tableId, $request) {
        if ($id > 0) {
            $block = TablesField::find($id);
        } else {
            $block = new TablesField;
        }
        $block->table_id = $tableId;
        if (!empty($request['field_name'])) {
            $block->name = $request['field_name'];
        }
        if (!empty($request['type'])) {
            $block->type = $request['type'];
        }
        if (!empty($request['value_default'])) {
            $block->value_default = $request['value_default'];
        }
        if (!empty($request['max_length'])) {
            $block->max_length = $request['max_length'];
        }
        if (!empty($request['type_show'])) {
            $block->type_show = $request['type_show'];
        }
        $block->is_null = intval($request['is_null']);
        $block->have_edit = intval($request['have_edit']);
        $block->add2search = intval($request['add2search']);
        $block->save();
        return $block;
    }

}
