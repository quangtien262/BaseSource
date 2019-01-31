@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
    <div class="card">
        <div class="card-body">
        <!-- START row-->
        <div class="row">
          <div class="col-md-12">
            <form class="form-validate form-horizontal" id="form-example" name="form.formValidate" novalidate="">
            <fieldset class="b0">
                <legend>Table Name</legend>
            </fieldset>
            <fieldset class="b0">
            <div class="row">
                <div class="col-md-4">
                <input class="form-control" id="id-source" type="text" name="table_name" placeholder="Field name"/>
                </div>
            </div>
            </fieldset>
            <fieldset class="b0">
              <legend>Field</legend>
            </fieldset>
            <fieldset class="b0">
                <div class="row">
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
                        <input class="form-control" id="id-source" type="text" name="field_name" placeholder="Max length"/>
                    </div>
                    <div class="col-xs-6 col-sm-3">
                        <input class="form-control" type="text" name="value_default" placeholder="default"/>
                    </div>
                    <div class="col-xs-6 col-sm-3">
                      <select name="type" class="form-control">
                          <option value="NULL">NULL</option>
                          <option value="NOT NULL">NOT NULL</option>
                      </select>
                    </div>
                </div>
            </fieldset>

                <fieldset class="b0">
                    <div class="row">
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
                            <input class="form-control" id="id-source" type="text" name="field_name" placeholder="Max length"/>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <input class="form-control" type="text" name="value_default" placeholder="default"/>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                          <select name="type" class="form-control">
                              <option value="NULL">NULL</option>
                              <option value="NOT NULL">NOT NULL</option>
                          </select>
                        </div>
                    </div>
                </fieldset>
                <hr>
                <div>
                  <button class="btn btn-primary" type="submit">Register</button>
                </div>
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
