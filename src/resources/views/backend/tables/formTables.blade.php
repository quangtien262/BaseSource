@extends('layouts.backend')

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
                                        <input value="{{ $table->name or '' }}" class="form-control" id="id-source" type="text" name="table_name" placeholder=" Table name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="table_edit" class="form-control">
                                            <option value="1">EDIT</option>
                                            <option value="0">NOT EDIT</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="table_type_show" class="form-control">
                                            <option value="">Type show</option>
                                            <option {{ !empty($table->type_show) && $table->type_show == 'BASIC' ? 'selected="selected"':'' }} value="BASIC">Table basic</option>
                                            <option {{ !empty($table->type_show) && $table->type_show == 'DRAG_DROP' ? 'selected="selected"':'' }} value="DRAG_DROP">Drag and Drop</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input value="{{ $table->model_name or '' }}" class="form-control" type="text" name="model_name" placeholder="Model name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input value="{{ $table->display_name or '' }}" class="form-control" type="text" name="display_name" placeholder="Dislay name"/>
                                    </div>
                                </div>

                            </fieldset>
                        </form> 
                        @if(!empty($tableId))
                        <fieldset class="b0">
                            <legend>Column</legend>
                            <table class="table-datatable table table-striped table-hover mv-lg">
                                <thead>
                                    <tr>
                                        <th>Field Name</th>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Null</th>
                                        <th>Edit</th>
                                        <th>Search</th>
                                        <th>Type show</th>
                                        <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="gradeX">
                                        <td>id</td>
                                        <td></td>
                                        <td>Int 15</td>
                                        <td>None</td>
                                        <td>Not Null</td>
                                        <td>Not Edit</td>
                                        <td>No</td>
                                        <td></td>
                                        <td>
                                            <button disabled="" class="btn btn-sm">Edit</button>
                                            <button disabled="" class="btn btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                    @foreach($columns as $column)
                                    <tr class="gradeX">
                                        <td>{{ $column->name }}</td>
                                        <td>{{ $column->display_name }}</td>
                                        <td>{{ $column->type . ' ' . $column->max_length }}</td>
                                        <td>{{ $column->value_default }}</td>
                                        <td>{{ empty($column->is_null) ? 'Not Null':'Null' }}</td>
                                        <td>{{ empty($column->edit) ? 'No':'Yes' }}</td>
                                        <td>{{ empty($column->add2search) ? 'No':'Yes' }}</td>
                                        <td>{{ $column->type_show }}</td>
                                        <td>
                                            <a href="{{ route('configTbl_edit', [$table->id, 'column' => $column->id]) }}" class="btn btn-sm btn-success">Edit</a>
                                            <a href="{{ route('configTbl_edit', [$table->id, 'column' => $column->id]) }}" class="btn btn-sm btn-default">Delete</a>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </fieldset>

                        <fieldset class="b0">
                            @if(empty($_GET['collumn']))
                                <legend>Add Column</legend>
                            @else
                                <legend>Edit Column</legend>
                            @endif
                        </fieldset>
                        <fieldset class="b0">
                            <form class="form-validate form-horizontal" id="form-tables" method="post" action="{{ route('editColumn') }}">
                                {{ csrf_field()}}
                                <input type="hidden" name="table_id" value="{{ $table->id or 0 }}"/>
                                <input type="hidden" name="column_id" value="{{ $column->id or 0 }}"/>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        <input value="{{ $column->name or '' }}" class="form-control" type="text" name="column_name" placeholder="Column name" required=""/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">{{$column->column_type}}
                                        <select name="column_type" class="form-control" required="">
                                            @foreach(unserialize(COLUMN_TYPE) as $columnType)
                                                <option {{ isset($column->type) && $column->type == $columnType ? 'selected="selected"':'' }}  value="{{$columnType}}">{{$columnType}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input value="{{ $column->max_length or '' }}" required="" class="form-control" id="id-source" type="text" name="max_length" placeholder="Max length"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input value="{{ $column->value_default or '' }}" class="form-control" type="text" name="value_default" placeholder="default"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="is_null" class="form-control" required="">
                                            @foreach(unserialize(IS_NULL) as $key => $val)
                                                <option {{ isset($column->is_null) && $column->is_null == $key ? 'selected="selected"':'' }}  value="{{$key}}">{{$val}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="edit" class="form-control" required="">
                                            @foreach(unserialize(IS_EDIT) as $key => $val)
                                                <option {{ isset($column->edit) && $column->edit == $key ? 'selected="selected"':'' }}  value="{{$key}}">{{$val}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="type_show" class="form-control">
                                            <option value="">Type show</option>
                                            @foreach(unserialize(TYPE_SHOW) as $type)
                                                <option {{ isset($column->type_show) && $column->type_show == $type ? 'selected="selected"':'' }}  value="{{$type}}">{{$type}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="add2search" class="form-control">
                                            @foreach(unserialize(ADD2SEARCH) as $key => $val)
                                                <option {{ isset($column->add2search) && $column->add2search == $key ? 'selected="selected"':'' }}  value="{{$key}}">{{$val}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 center-block">
                                        @if(empty($_GET['collumn']))
                                            <button class="btn btn-primary" type="submit" name="add_field">Add New Column</button>
                                        @else
                                            <button class="btn btn-primary" type="submit" name="edit_field">Edit Column</button>
                                        @endif
                                        <a href="{{ route('configTbl_edit', [$tableId]) }}" class="btn btn-default" type="button">Cancel</a>
                                    </div>
                                </div>
                            </form> 
                        </fieldset>
                        @endif
                        <hr>
                        <!-- END panel-->

                    </div>
                </div>
                <!-- END row-->
            </div>
        </div>
    </div>
</section>

@endsection
