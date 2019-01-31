@extends('layouts.backend')

@section('content')
<section>
  <div class="container-fluid">
    <!-- DATATABLE DEMO 2-->
    <div class="card">
      <div class="card-heading">Individual column searching</div>
      <div class="card-body">
        <table class="table-datatable table table-striped table-hover mv-lg" id="datatable2">
          <thead>
            <tr>
              <th>Rendering engine</th>
              <th>Browser</th>
              <th>Platform</th>
              <th class="sort-numeric">Engine version</th>
              <th class="sort-alpha">CSS grade</th>
            </tr>
          </thead>
          <tbody>
            <tr class="gradeX">
              <td>Trident</td>
              <td>Internet Explorer 4.0</td>
              <td>Win 95+</td>
              <td>4</td>
              <td>X</td>
            </tr>
            <tr class="gradeC">
              <td>Trident</td>
              <td>Internet Explorer 5.0</td>
              <td>Win 95+</td>
              <td>5</td>
              <td>C</td>
            </tr>
            <tr class="gradeA">
              <td>Trident</td>
              <td>Internet Explorer 5.5</td>
              <td>Win 95+</td>
              <td>5.5</td>
              <td>A</td>
            </tr>
            <tr class="gradeA">
              <td>Trident</td>
              <td>Internet Explorer 6</td>
              <td>Win 98+</td>
              <td>6</td>
              <td>A</td>
            </tr>
            
            <tr class="gradeU">
              <td>Other browsers</td>
              <td>All others</td>
              <td>-</td>
              <td>-</td>
              <td>U</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <div class="mda-form-control pt0">
                  <input class="form-control input-sm datatable_input_col_search" type="text" name="filter_rendering_engine" placeholder="Filter Rendering engine">
                  <div class="mda-form-control-line"></div>
                </div>
              </th>
              <th>
                <div class="mda-form-control pt0">
                  <input class="form-control input-sm datatable_input_col_search" type="text" name="filter_browser" placeholder="Filter Browser">
                  <div class="mda-form-control-line"></div>
                </div>
              </th>
              <th>
                <div class="mda-form-control pt0">
                  <input class="form-control input-sm datatable_input_col_search" type="text" name="filter_platform" placeholder="Filter Platform">
                  <div class="mda-form-control-line"></div>
                </div>
              </th>
              <th>
                <div class="mda-form-control pt0">
                  <input class="form-control input-sm datatable_input_col_search" type="text" name="filter_engine_version" placeholder="Filter Engine version">
                  <div class="mda-form-control-line"></div>
                </div>
              </th>
              <th>
                <div class="mda-form-control pt0">
                  <input class="form-control input-sm datatable_input_col_search" type="text" name="filter_css_grade" placeholder="Filter CSS grade">
                  <div class="mda-form-control-line"></div>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</section>
@endsection
