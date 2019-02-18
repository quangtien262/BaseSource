@extends('layouts.backend')

@section('script')
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>     
    <script>
        $('#lfm').filemanager('image'); //file
    </script>
@endsection

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-validate form-horizontal" id="form-tables" method="post" action="">
                            {{ csrf_field()}}
                            <input type="hidden" name="table_id" value="{{ $tableId or 0 }}"/>
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
                                    @foreach($columns as $col)
                                        @if($col->edit == 1)
                                            @if($col->type_edit == 'text')
                                                <div class="col-md-6">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}</label>
                                                    <input name="{{ $col->name or '' }}" value="{{ $data[$col->name] or '' }}" class="form-control" type="text" placeholder=""/>
                                                </div>
                                            @elseif($col->type_edit == 'textarea')
                                                <div class="col-md-8">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}</label>
                                                    <textarea name="{{ $col->name or '' }}" class="form-control">{{ $data[$col->name] or '' }}</textarea>
                                                </div>
                                            @elseif($col->type_edit == 'select')
                                                <div class="col-md-6">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}</label>
                                                    {!! app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, $data[$col->name] ? $data[$col->name]:0) !!}
                                                </div>
                                            @elseif($col->type_edit == 'summoner')
                                                <div class="col-md-8">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}</label>
                                                    <textarea name="{{ $col->name or '' }}" class="summernote">{{ $data[$col->name] or '' }}</textarea>
                                                </div>
                                            @elseif($col->type_edit == 'selects')
                                                <div class="col-md-6">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}</label>
                                                    {!! app('ClassTables')->getHtmlSelectForTable($col->name, $col->select_table_id, $data[$col->name] ? $data[$col->name]:0, true) !!}
                                                </div>
                                            @elseif($col->type_edit == 'select2')
                                                <span>select2</span>
                                            @elseif($col->type_edit == 'selects2')
                                                <span>selects2</span>
                                            @elseif($col->type_edit == 'ckeditor')
                                                <span>ckeditor</span>
                                            @elseif($col->type_edit == 'image_laravel')
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <span class="input-group-btn">
                                                            <a id="lfm" data-input="thumbnail" data-preview="holder" class="btn btn-primary">
                                                                <i class="fa fa-picture-o"></i> Chọn file
                                                            </a>
                                                        </span>
                                                        <input id="thumbnail" class="form-control" type="text" name="{{ $col->name or '' }}" value="{{ $data[$col->name] or '' }}"/>
                                                    </div>
                                                    <img id="holder" style="margin-top:15px;max-height:100px;" src="{{ $data[$col->name] or '' }}">
                                                </div>
                                            @elseif($col->type_edit == 'images_laravel')
                                                <span>image_laravel</span>
                                            @elseif($col->type_edit == 'image')
                                                <span>image</span>
                                            @elseif($col->type_edit == 'images')
                                                <span>images</span>
                                            @elseif($col->type_edit == 'file')
                                                <span>file</span>
                                            @elseif($col->type_edit == 'files')
                                                <span>files</span>
                                            @endif
                                        @endif
                                    @endforeach
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 center-block">
                                        <br/>
                                        @if(empty($dataId))
                                        <button class="btn btn-primary" type="submit" name="add_field">Thêm mới</button>
                                        @else
                                        <button class="btn btn-primary" type="submit" name="edit_field">Cập nhật</button>
                                        @endif
                                        <a href="{{ route('listDataTbl', [$tableId]) }}" class="btn btn-default" type="button">Hủy</a>
                                    </div>
                                </div>
                            </fieldset>
                        </form> 
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
