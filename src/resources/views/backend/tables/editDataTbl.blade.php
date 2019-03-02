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
                                            @include('backend.element.columnFormData')
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
