@extends(LAYOUT_BACKEND_01)

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-validate form-horizontal" id="form-tables" method="post" action="{{ route('editTable', [$tableId]) }}">
                            {{ csrf_field()}}
                            <fieldset class="b0">
                                <legend>
                                    Table Name
                                    <button class="btn btn-default" style="float: right" type="button">Back</button>
                                    @if(!empty($tableId))
                                        <button class="btn btn-primary" style="float: right" type="submit" name="add_table">Edit table</button>
                                    @else
                                        <button class="btn btn-primary" style="float: right" type="submit" name="edit_table">Add Table</button>
                                    @endif
                                </legend>
                            </fieldset>
                            <fieldset class="b0">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Tên bảng</label>
                                        <input value="{{ $table->name ?? '' }}" class="form-control" id="id-source" type="text" name="table_name" placeholder=" Table name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Tên hiển thị</label>
                                        <input value="{{ $table->display_name ?? '' }}" class="form-control" type="text" name="display_name" placeholder="Dislay name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Kiểu show dữ liệu ở trang danh sách</label>
                                        <select name="table_type_show" class="form-control">
                                            <option value="">Type show</option>
                                            @foreach(unserialize(TABLE_TYPE_SHOW) as $keyType => $valType)
                                                <option {{ isset($table->type_show) && $table->type_show == $keyType ? 'selected="selected"':'' }}  value="{{$keyType}}">{{$valType}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Số lượng Item trên 1 trang</label>
                                        <input value="{{ $table->count_item_of_page ?? 30 }}" class="form-control" type="number" name="count_item_of_page" placeholder=""/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Nhập tên model cần tạo</label>
                                        <input value="{{ $table->model_name ?? '' }}" class="form-control" type="text" name="model_name" placeholder="Model name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Kiểu form nhập liệu</label>
                                        <select name="form_data_type" class="form-control">
                                            @foreach(unserialize(FORM_DATA_TYPE) as $keyType => $valType)
                                                <option {{ isset($table->form_data_type) && $table->form_data_type == $keyType ? 'selected="selected"':'' }}  value="{{$keyType}}">{{$valType}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>table_tab</label>
                                        <input type="text" name="table_tab_map_column" value="{{ $table->table_tab_map_column ?? '' }}" placeholder="table_tab_map_column"/>
                                        <select name="table_tab" class="form-control">
                                            <option value="">Please chose</option>
                                            @foreach($tables as $tbl)
                                                <option {{ isset($table->table_tab) && $table->table_tab == $tbl->id ? 'selected="selected"':'' }}  value="{{$tbl->id}}">{{$tbl->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>
                                            <input {{ isset($table->is_edit) && $table->is_edit == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="is_edit" />
                                            Is edit
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($table->export) && $table->export == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="export" />
                                            Xuất ra file excel
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($table->import) && $table->import == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="import" />
                                            Nhập từ file excel
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($table->have_add_new) && $table->have_add_new == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="have_add_new" />
                                            cho phép thêm mới
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($table->have_delete) && $table->have_delete == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="have_delete" />
                                            cho phép Xóa
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($table->is_show_btn_edit) && $table->is_show_btn_edit == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="is_show_btn_edit" />
                                            Hiển thị nút sửa
                                        </label>
                                    </div>
                                </div>

                            </fieldset>
                        </form> 
                        @if(!empty($tableId))
                        <fieldset class="b0">
                            @if(empty($_GET['column']))
                                <legend>Add Column</legend>
                            @else
                                <legend>Edit Column: {{ $column->name ?? '' }}</legend>
                            @endif
                        </fieldset>
                        <fieldset class="b0">
                            <form class="form-validate form-horizontal" id="form-column" method="post" action="{{ route('editColumn') }}">
                                {{ csrf_field()}}
                                <input type="hidden" name="table_id" value="{{ $table->id ?? 0 }}"/>
                                <input type="hidden" name="column_id" value="{{ isset($_GET['column']) ? $_GET['column']:0 }}"/>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Tên cột</label>
                                        <input value="{{ $column->name ?? '' }}" class="form-control" type="text" name="column_name" placeholder="Column name" required=""/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Tên hiển thị</label>
                                        <input value="{{ $column->display_name ?? '' }}" class="form-control" type="text" name="display_name" placeholder="Display name" required=""/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Kiểu dữ liệu</label>
                                        <select name="column_type" class="form-control" required="">
                                            @foreach(unserialize(COLUMN_TYPE) as $columnType)
                                                <option {{ isset($column->type) && $column->type == $columnType ? 'selected="selected"':'' }}  value="{{$columnType}}">{{$columnType}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <label>Max length</label>
                                        <input value="{{ $column->max_length ?? '' }}" class="form-control" id="id-source" type="text" name="max_length" placeholder="Max length"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Kiểu tìm kiếm</label>
                                        <select name="search_type" class="form-control">
                                            @foreach(unserialize(SEARCH_TYPE) as $key => $val)
                                                <option {{ isset($column->search_type) && $column->search_type == $key ? 'selected="selected"':'' }}  value="{{$key}}">{{$val}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Kiểu nhập dữ liệu</label>
                                        <select name="type_edit" class="form-control">
                                            @foreach(unserialize(TYPE_EDIT) as $typeValue => $typeName)
                                                <option {{ isset($column->type_edit) && $column->type_edit == $typeValue ? 'selected="selected"':'' }}  value="{{$typeValue}}">{{$typeName}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>table select (kiểu dữ liệu là select ?? comment)</label>
                                        <select name="select_table_id" class="form-control">
                                            <option value="">Please chose table data</option>
                                            @foreach($tables as $tbl)
                                                <option {{ isset($column->select_table_id) && $column->select_table_id == $tbl->id ? 'selected="selected"':'' }}  value="{{$tbl->id}}">{{$tbl->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Điều kiện select</label> 
                                        <input value="{{ $column->conditions ?? '' }}" class="form-control" type="text" name="conditions" placeholder='{"route_id":"2"}' />
                                    </div>

                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Giá trị mặc định</label>
                                        <input value="{{ $column->value_default ?? '' }}" class="form-control" type="text" name="value_default" placeholder="default"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Chọn bảng liên kết</label>
                                        <select name="table_link" class="form-control">
                                            <option value="">Please chose table data</option>
                                            @foreach($tables as $tbl)
                                                <option {{ isset($column->table_link) && $column->table_link == $tbl->id ? 'selected="selected"':'' }}  value="{{$tbl->id}}">{{$tbl->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>sub_column_name</label>
                                        <input value="{{ $column->sub_column_name ?? '' }}" class="form-control" type="text" name="sub_column_name" placeholder="sub_column_name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>Class</label>
                                        <input value="{{ $column->class ?? '' }}" class="form-control" type="text" name="class" placeholder="Class of element in list page"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>config_add_sub_table</label>
                                        <textarea class="form-control" 
                                            type="text" 
                                            placeholder='{"table_id":"hang_ve_id","column":"hang_ve_id","title":"hang_ve_id"}'
                                            name="config_add_sub_table">{{ $column->config_add_sub_table ?? '' }}</textarea>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>add_column_in_list</label>
                                        <textarea class="form-control" 
                                            type="text" 
                                            placeholder='{"0":"column_01"}'
                                            name="add_column_in_list">{{ $column->add_column_in_list ?? '' }}</textarea>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>column_name_map_to_comment</label>
                                        <textarea class="form-control" 
                                            type="text" 
                                            placeholder='Nhập tên cột để map với kiểu dữ liệu là comment'
                                            name="column_name_map_to_comment">{{ $column->column_name_map_to_comment ?? '' }}</textarea>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <br/>
                                        <label>
                                            <input {{ isset($column->require) && $column->require == 1 ? 'checked="checked"':'' }}  
                                                value="1" type="checkbox" name="require" />
                                                Require
                                        </label> 

                                        <br/>
                                        <label>
                                            <input {{ isset($column->edit) && $column->edit == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="edit" />
                                            Cho phép chỉnh sửa
                                        </label> 
                                        <br/>
                                        <label>
                                            <input {{ isset($column->add2search) && $column->add2search == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="add2search" />
                                            Hiển thị trong form search
                                        </label> 
                                        <br/>
                                        <label>
                                            <input {{ isset($column->show_in_list) && $column->show_in_list == 1 ? 'checked="checked"':'' }} 
                                                value="1" type="checkbox" name="show_in_list" />
                                                Hiển thị ở trang danh sách
                                        </label> 
                                        <br/>
                                        <label>
                                            <input {{ isset($column->fast_edit) && $column->fast_edit == 1 ? 'checked="checked"':'' }}
                                                 value="1" type="checkbox" name="fast_edit" />
                                                Cho phép sửa nhanh
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($column->sub_list) && $column->sub_list == 1 ? 'checked="checked"':'' }}
                                                 value="1" type="checkbox" name="sub_list" />
                                                Hiển thị ở sub list
                                        </label>
                                        <br/>
                                        <label>
                                            <input {{ isset($column->bg_in_list) && $column->bg_in_list == 1 ? 'checked="checked"':'' }}
                                                 value="1" type="checkbox" name="bg_in_list" />
                                                 bg_in_list
                                        </label>
                                        
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 center-block">
                                        <br/>
                                        @if(empty($_GET['column']))
                                            <button class="btn btn-primary" type="submit" name="add_field">Thêm mới</button>
                                        @else
                                            <button class="btn btn-primary" type="submit" name="edit_field">Cập nhật</button>
                                        @endif
                                        <a href="{{ route('configTbl_edit', [$tableId]) }}" class="btn btn-default" type="button">Cancel</a>
                                    </div>
                                </div>
                            </form> 
                        </fieldset>
                        <fieldset class="b0">
                            <legend>List Column</legend>
                            <section>
                                <div class="container-fluid">
                                    <div class="card">
                                        <div class="card-heading">
                                            <div class="row">
                                                    <div class="js-nestable-action">
                                                        <button type="submit" 
                                                                class="btn btn-primary btn-sm "
                                                                onclick="ajaxSubmitForm('.loading', '.form-nestable', 'none')" 
                                                                style="margin-left: 10px">
                                                            <i class="ion-chevron-down"></i>
                                                            Cập nhật lại thứ tự
                                                        </button>
                                                    </div>
                                                </div>
                                            <hr/>
                                            <div class="row loading"></div>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="dd" id="nestable">
                                                        {!! $htmlList !!}
                                                    </div>
                                                    <form class="form-nestable" method="POST" action="{{ route('sortOrderColumn',[$tableId]) }}">
                                                        {{ csrf_field()}}
                                                        <textarea style="display: none" name="ids" class="well" id="nestable-output"></textarea>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </fieldset>
                        @endif
                        <hr>
                    </div>
                </div>
                <!-- END row-->
            </div>
        </div>
    </div>
</section>

@endsection
