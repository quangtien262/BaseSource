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

    public function getTableByName($name)
    {
        return Tables::where('name', $name)->first();
    }

    public function getColumn($id)
    {
        return TablesColumn::find($id);
    }

    public function getColumnByTableId($tableId)
    {
        return TablesColumn::where('table_id', $tableId)->orderBy('sort_order', 'asc')->get();
    }

    public function getColumnByIds($ids)
    {
        return TablesColumn::whereIn('id', $ids)->orderBy('sort_order', 'asc')->get();
    }

    public function getColumnByName($name)
    {
        return TablesColumn::where('name', $name)->first();
    }

    public function getCurrentColumnByTableIdAndName($tableId, $name)
    {
        return TablesColumn::where('table_id', $tableId)->where('name', $name)->first();
    }

    public function saveTable($id, $request)
    {
        //check add new or edit
        if ($id > 0) {
            $tables = Tables::find($id);
        } else {
            $tables = new Tables();
        }

        //import
        $import = 0;
        if (isset($request['import'])) {
            $import = intval($request['import']);
        }

        //export
        $export = 0;
        if (isset($request['export'])) {
            $export = intval($request['export']);
        }
        $tables->export = $export;
        $tables->import = $import;
        $tables->count_item_of_page = $request['count_item_of_page'];
        $tables->display_name = $request['display_name'];
        $tables->model_name = $request['model_name'];
        $tables->type_show = $request['table_type_show'];
        $tables->is_edit = isset($request['is_edit']) ? $request['is_edit'] : 0;
        $tables->name = $request['table_name'];
        $tables->form_data_type = $request['form_data_type'];
        $tables->have_delete = isset($request['have_delete']) ? $request['have_delete'] : 0;
        $tables->have_add_new = isset($request['have_add_new']) ? $request['have_add_new'] : 0;
        $tables->table_tab = $request['table_tab'];
        $tables->table_tab_map_column = $request['table_tab_map_column'];
        $tables->is_show_btn_edit = isset($request['is_show_btn_edit']) ? $request['is_show_btn_edit'] : 0;
        $tables->is_add_express = isset($request['is_add_express']) ? $request['is_add_express'] : 0;
        $tables->is_edit_express = isset($request['is_edit_express']) ? $request['is_edit_express'] : 0;
        $tables->save();

        return $tables;
    }

    public function saveColumn($request)
    {
        if (!empty($request['column_id'])) {
            $block = TablesColumn::find($request['column_id']);
        } else {
            $block = new TablesColumn();
        }

        $block->name = $request['column_name'];
        $block->display_name = $request['display_name'];
        $block->type = $request['column_type'];
        $block->type_edit = $request['type_edit'];
        $block->max_length = $request['max_length'];
        $block->fast_edit = isset($request['fast_edit']) ? $request['fast_edit'] : 0;
        $block->require = isset($request['require']) ? $request['require'] : 0;
        $block->edit = isset($request['edit']) ? $request['edit'] : 0;
        $block->show_in_list = isset($request['show_in_list']) ? $request['show_in_list'] : 0;
        $block->add2search = isset($request['add2search']) ? $request['add2search'] : 0;
        $block->table_id = intval($request['table_id']);
        $block->select_table_id = intval($request['select_table_id']);
        $block->value_default = $request['value_default'];
        $block->conditions = $request['conditions'];
        $block->table_link = $request['table_link'];
        $block->class = $request['class'];
        $block->sub_column_name = $request['sub_column_name'];
        $block->sub_list = isset($request['sub_list']) ? $request['sub_list'] : 0;
        $block->config_add_sub_table = $request['config_add_sub_table'];
        $block->bg_in_list = isset($request['bg_in_list']) ? $request['bg_in_list'] : 0;
        $block->add_column_in_list = $request['add_column_in_list'];
        $block->column_name_map_to_comment = $request['column_name_map_to_comment'];
        $block->save();

        return $block;
    }

    public function saveRow($request, $tableId, $dataId, $subColumnName = '', $subColumnVal = 0)
    {
        $table = app('ClassTables')->getTable($tableId);
        $columns = app('ClassTables')->getColumnByTableId($tableId);
        $data = [];
        $imageNoDbName = '';
        foreach ($columns as $column) {
            if ($subColumnName != '') {
                $data[$subColumnName] = $subColumnVal;
            }
            if ($column->edit != 1) {
                continue;
            }
            if ($column->name == 'id') {
                continue;
            }
            if ($column->type_edit == 'images_no_db') {
                if (!empty($request->file($column->name))) {
                    $imageNoDbName = $column->name;
                }
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
            } else {
                $data[$column->name] = $request->input($column->name);
            }
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
                                app('UtilsCommon')->base64ToImage($img, $pathUpload);
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
            $id = app('EntityCommon')->insertData($table->name, $data);
            if ($imageNoDbName != '' && !empty($request->file($imageNoDbName))) {
                foreach ($request->file($imageNoDbName) as $file) {
                    $path = "imgs/{$tableId}/{$id}/image/";
                    app('UtilsCommon')->uploadFiles($path, $file);
                }
            }
        }

        //save subData & comment if exist
        foreach ($columns as $column) {
            // sub data
            if ($column->table_link != 0 && !empty($column->name)) {
                self::saveRow($request, $column->table_link, 0, $column->sub_column_name, $id);
            }
            // comment
            if ($column->type_edit == 'comment' && !empty($column->name) && !empty($column->select_table_id)) {
                self::saveRow($request, $column->select_table_id, 0, $column->column_name_map_to_comment, $id);
            }
        }
    }

    public function createDefaultColumn($tableId)
    {
        $datas = [
            [
                'name' => 'id',
                'table_id' => $tableId,
                'display_name' => 'ID',
                'type_edit' => 'text',
                'edit' => 0,
                'type' => 'INT',
                'value_default' => '',
                'show_in_list' => 0,
                'require' => 0,
                'is_null' => 1,
                'add2search' => 0,
                'search_type' => 1,
                'parent_id' => 0,
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s'),
                'select_table_id' => 0,
            ],
            [
                'name' => 'name',
                'table_id' => $tableId,
                'display_name' => 'Tiêu đề',
                'type_edit' => 'text',
                'edit' => 1,
                'type' => 'VARCHAR',
                'value_default' => '',
                'max_length' => 255,
                'show_in_list' => 1,
                'require' => 0,
                'is_null' => 1,
                'add2search' => 0,
                'search_type' => 1,
                'parent_id' => 0,
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s'),
                'select_table_id' => 0,
            ],
            [
                'name' => 'parent_id',
                'table_id' => $tableId,
                'display_name' => 'Danh mục cha',
                'type_edit' => 'text',
                'edit' => 0,
                'type' => 'INT',
                'value_default' => 0,
                'show_in_list' => 0,
                'require' => 0,
                'is_null' => 1,
                'add2search' => 0,
                'search_type' => 1,
                'parent_id' => 0,
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s'),
                'select_table_id' => 0,
            ],
            [
                'name' => 'sort_order',
                'table_id' => $tableId,
                'display_name' => 'Thứ tự sắp sếp',
                'type_edit' => 'text',
                'edit' => 0,
                'type' => 'INT',
                'value_default' => 0,
                'show_in_list' => 0,
                'require' => 0,
                'is_null' => 1,
                'add2search' => 0,
                'search_type' => 1,
                'parent_id' => 0,
                'select_table_id' => 0,
            ],
        ];
        foreach ($datas as $data) {
            $result = app('EntityCommon')->insertData('table_column', $data);
        }

        return $result;
    }

    public function deleteTable($tableId)
    {
        return Tables::find($tableId)->delete();
    }

    public function deleteColumn($columnId)
    {
        return TablesColumn::find($columnId)->delete();
    }

    public function getRowsByConditions($table, $columns, $request, $unlimit = false)
    {
        //select table
        $data = DB::table($table->name);

        //table tab
        if (!empty($table->table_tab) && !empty($table->table_tab_map_column)) {
            $tabTbl = self::getTable($table->table_tab);
            if (isset($request->tab)) {
                $tabId = $request->tab;
            } else {
                $rowData = app('EntityCommon')->findDataLatestByCondition($tabTbl->name);
                $tabId = $rowData->id;
            }
            $data = $data->where($table->table_tab_map_column, $tabId);
        }

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
                        $data = $data->where($col->name, 'like', '%'.$request[$col->name]);
                        break;
                    case '5':
                        $data = $data->where($col->name, 'like', $request[$col->name].'%');
                        break;
                    case '6':
                        $data = $data->whereBetween($col->name, [$request[$col->name.'01'], $request[$col->name.'02']]);
                        break;
                    default:
                        //case = 1 or other
                        $data = $data->where($col->name, 'like', '%'.$request[$col->name].'%');
                        break;
                }
            }
        }
        //The count of data
        $data = $data->orderBy('id', 'desc');
        if ($unlimit) {
            $data = $data->get();
        } else {
            $data = $data->paginate($table->count_item_of_page);
        }

        return $data;
    }

    public function getHtmlMenuAdmin($parentId = 0, $sub = false)
    {
        $html = '';
        $conditions = [
            'is_edit' => 1,
            'parent_id' => $parentId,
        ];
        $order = ['sort_order', 'asc'];
        $tables = app('EntityCommon')->getRowsByConditions('tables', $conditions, 0, $order);
        if (is_array($tables) && count($tables) > 0) {
            if ($sub) {
                $html .= '<ul>';
            }
            foreach ($tables as $table) {
                $subdata = self::getHtmlMenuAdmin($table->id, true);
                $html .= '<li>
                        <a class="ripple" href="'.route('listDataTbl', [$table->id]).'">
                            <span>'.$table->display_name.'</span>
                        </a>';

                $html .= $subdata;

                $html .= '</li>';
            }
            if ($sub) {
                $html .= '</ul>';
            }
        }

        return $html;
    }

    public function getHtmlMenuAdminLeft($parentId = 0)
    {
        $html = '';
        $conditions = [
            'is_edit' => 1,
            'parent_id' => $parentId,
        ];
        $order = ['sort_order', 'asc'];
        $tables = app('EntityCommon')->getRowsByConditions('tables', $conditions, 0, $order);
        if (count($tables) > 0) {
            $html .= '<ul>';
            foreach ($tables as $table) {
                $countData = app('EntityCommon')->getCountData($table->name);
                $subdata = self::getHtmlMenuAdminLeft($table->id);
                if ($subdata != '') {
                    $icon = '<span class="nav-icon"><em class="ion-android-arrow-dropdown" style="font-size: 18px;line-height: 25px;"></em></span>';
                } else {
                    $icon = '<span class="nav-icon"><em class="ion-arrow-right-b" style="font-size: 12px;line-height: 25px;"></em></span>';
                }
                $html .= '<li>
                        <a class="ripple" href="'.route('listDataTbl', [$table->id]).'">
                            <span class="pull-right nav-label">
                                <span class="badge bg-success">'.$countData.'</span>
                            </span>
                            '.$icon.'
                            <span>'.$table->display_name.'</span>
                        </a>';

                $html .= $subdata;

                $html .= '</li>';
            }
            $html .= '</ul>';
        }

        return $html;
    }

    public function getHtmlSelectForTable($name, $tblRowId, $selectedId = 0, $multiple = false, $conditionsJson = '')
    {
        if ($multiple) {
            $html = '<select multiple class="form-control" name="'.$name.'">';
        } else {
            $html = '<select class="form-control" name="'.$name.'">';
        }
        $conditions = [];
        if (!empty($conditionsJson)) {
            $conditions = json_decode($conditionsJson);
        }
        // dd( $conditions);
        $table = self::getTable($tblRowId);
        if (!empty($table)) {
            $html .= '<option value="0">Chọn '.$table->display_name.'</option>';
            $tableData = app('EntityCommon')->getRowsByConditions($table->name, $conditions, 0, $order = ['sort_order', 'asc']);
            foreach ($tableData as $data) {
                $selected = '';
                if ($data->id == $selectedId) {
                    $selected = 'selected="selected"';
                }
                $html .= '<option '.$selected.' value="'.$data->id.'">'.$data->name.'</option>';
            }
        }
        $html .= '</select>';

        return $html;
    }

    public function getHtmlSelectTableFastEdit($name, $tblRowId, $selectedId = 0, $dataId, $tableId)
    {
        $html = '<select class="_hidden input-fast-edit"
                    element-update="#'.$name.$dataId.' "
                    onchange="updateInput(this)" 
                    class="form-control"
                    type="select"
                    name="'.$name.'"
                    table-id="'.$tableId.'" 
                    data-id="'.$dataId.'">';
        $conditions = [];
        $table = self::getTable($tblRowId);
        if (!empty($table)) {
            $html .= '<option value="0">Chọn '.$table->display_name.'</option>';
            $tableData = app('EntityCommon')->getRowsByConditions($table->name, $conditions, 0, $order = ['sort_order', 'asc']);
            foreach ($tableData as $data) {
                $selected = '';
                if ($data->id == $selectedId) {
                    $selected = 'selected="selected"';
                }
                $html .= '<option '.$selected.' value="'.$data->id.'">'.$data->name.'</option>';
            }
        }
        $html .= '</select>';

        return $html;
    }

    public function getObjectJavascriptFromTable($tblRowId, $conditionsJson = '')
    {
        $result = '[';
        $conditions = [];
        if (!empty($conditionsJson)) {
            $conditions = json_decode($conditionsJson);
        }
        // dd( $conditions);
        $table = self::getTable($tblRowId);
        if (!empty($table)) {
            $tableData = app('EntityCommon')->getRowsByConditions($table->name, $conditions, 0, $order = ['sort_order', 'asc']);
            foreach ($tableData as $data) {
                $name = $data->name;
                if (empty($data->name) && !empty($data->username)) {
                    $name = $data->username;
                }
                $result .= "{value: {$data->id}, text: '{$name}'},";
            }
        }
        $result .= ']';

        return $result;
    }

    ////apply for all table have config in table tables
    public function getHtmlListDragDrop($table, $parentId = 0, $conditions = [], $type = 'default')
    {
        $html = '';
        $conditions['parent_id'] = $parentId;
        $order = ['sort_order', 'asc'];
        $tableData = app('EntityCommon')->getRowsByConditions($table->name, $conditions, $limit = 0, $order);

        if (!empty($tableData)) {
            $html = '<ol class="dd-list">';
            foreach ($tableData as $td) {
                $img = '';
                if (!empty($td->image)) {
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="'.$td->image.'"/></div>';
                }
                switch ($type) {
                    case 'landingPage':
                        $edit = '<a onclick="loadDataPopup(\''.route('adminEditBlock', [$td->landing_page_id, $td->block_id, $td->id]).'\')" data-toggle="modal" data-target=".bs-modal-lg"><i class="ion-edit"></i></a>';
                        break;
                    default:
                        $edit = '<a onclick="loadDataPopup(\''.route('formRow', [$table->id, $td->id]).'\')" data-toggle="modal" data-target=".bs-modal-lg"><i class="ion-edit"></i></a>';
                        if ($table->form_data_type == 1) {
                            $edit = '<a href="'.route('formRow', [$table->id, $td->id]).'"><i class="ion-edit"></i></a>';
                        }
                        break;
                }

                $html .= '<li class="dd-item" data-id="'.$td->id.'">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        '.$img.'
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>'.$td->name.'</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                '.$edit.'
                                &nbsp;
                                <a href="'.route('deleteRow', [$table->id, $td->id]).'"><i class="ion-trash-a"></i></a>
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
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="'.$td->image.'"/></div>';
                }
                $html .= '<li class="dd-item" data-id="'.$td->id.'">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        '.$img.'
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>'.$td->name.' - '.$td->display_name.'</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                <a href="'.route('configTbl_edit', [$td->id]).'"><i class="ion-edit"></i></a>
                                &nbsp;
                                <a href="'.route('deleteTable', ['table' => $td->id]).'"><i class="ion-trash-a"></i></a>
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
                    $img = '<div class="mda-list-item-icon"><img style="height:40px" src="'.$td->image.'"/></div>';
                }
                $html .= '<li class="dd-item" data-id="'.$td->id.'">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab" style="padding-top: 9px;">
                                            <em class="ion-drag icon-lg"></em>
                                        </div>
                                        '.$img.'
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>'.$td->name.' - '.$td->display_name.'</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="option-dd">
                                &nbsp;
                                <a href="'.route('configTbl_edit', [$tableId, 'column' => $td->id]).'"><i class="ion-edit"></i></a>
                                &nbsp;
                                <a href="'.route('deleteColumn', ['table' => $tableId, 'column' => $td->id]).'"><i class="ion-trash-a"></i></a>
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
