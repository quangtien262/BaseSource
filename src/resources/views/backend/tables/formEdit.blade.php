@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-validate form-horizontal" id="form-tables" method="post" action="" novalidate="">
                            {{ csrf_field()}}
                            <fieldset class="b0">
                                <legend>
                                    Table Name
                                    <button class="btn btn-warning" style="float: right" type="button">Back</button>
                                    
                                    <button class="btn btn-primary" style="float: right" type="submit">Register</button>
                                </legend>
                                
                                
                            </fieldset>
                            <fieldset class="b0">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        <input class="form-control" id="id-source" type="text" name="table_name" placeholder=" Table name"/>
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
                                            <option value="BASIC">Table basic</option>
                                            <option value="DRAG_DROP">Drag and Drop</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input class="form-control" id="id-source" type="text" name="model_name" placeholder="Model name"/>
                                    </div>
                                </div>
                            </fieldset>
                            
                            <fieldset class="b0">
                                <legend>List Field</legend>
                            </fieldset>
                            <fieldset class="b0">
                                <div class="col-xs-6 col-sm-3"></div>
                            </fieldset>
                            
                            <fieldset class="b0">
                                <legend>Add Field</legend>
                            </fieldset>
                            <fieldset class="b0">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3">
                                        <input class="form-control" type="text" name="field_name" placeholder="Field  name"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="type" class="form-control">
                                            <option value="">TYPE</option>
                                            <option value="INT">INT</option>
                                            <option value="VARCHAR">VARCHAR</option>
                                            <option value="DATE">DATE</option>
                                            <option value="DATETIME">DATETIME</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input class="form-control" id="id-source" type="text" name="max_length" placeholder="Max length"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <input class="form-control" type="text" name="value_default" placeholder="default"/>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="is_null" class="form-control">
                                            <option value="1">NULL</option>
                                            <option value="0">NOT NULL</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="have_edit" class="form-control">
                                            <option value="1">EDIT</option>
                                            <option value="0">NOT EDIT</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                            <select name="type_show" class="form-control">
                                            <option value="">Type show</option>
                                            <option value="text">text</option>
                                            <option value="file">file</option>
                                            <option value="select">select</option>
                                            <option value="select2">select2</option>
                                            <option value="summoner">summoner</option>
                                            <option value="ckeditor">ckeditor</option>
                                        </select>
                                    </div>
                                    <div class="col-xs-6 col-sm-3">
                                        <select name="add2search" class="form-control">
                                            <option value="1">Add to form search</option>
                                            <option value="0">Not show in form search</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-6 col-sm-3 center-block">
                                        <button class="btn btn-primary" type="button">Add New Field</button>
                                        <button class="btn btn-default" type="button">Cancel</button>
                                    </div>
                                </div>
                                
                            </fieldset>
                            <hr>
                            <!-- END panel-->
                        </form>
                    </div>
                </div>
                <!-- END row-->
            </div>
        </div>
    </div>
</section>

@endsection
