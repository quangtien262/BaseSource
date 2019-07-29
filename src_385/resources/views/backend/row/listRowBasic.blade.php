@extends('layouts.backend')

@section('script')
    
@endsection

@section('content')

<section>
        
    <div class="container-fluid">
        <div class="card">
            <div class="card-body table-responsive">
                <div class="panel-heading">
                    <form action="" method="get">
                        <div class="row">
                            @php $isSearch = false; @endphp
                            @if(!empty($columns))
                                @foreach($columns as $col)
                                    @if($col->add2search == 1)
                                        @php $isSearch = true; @endphp
                                        @include('backend.element.formSearchColumn')
                                    @endif
                                @endforeach
                            @endif
                        </div>
                        <div class="clean"><hr/></div>
                    </form>
                    <div class="row">
                    @if($isSearch)
                        <button type="submit" class="btn btn-primary btn-left">
                            <i class="ion-ios-search-strong"></i>
                            Tìm kiếm
                        </button>
                    @endif
                    <div class="pull-left">
                        <button class="btn btn-default" id="enable">enable / disable</button>
                      </div>
                    @if($table->form_data_type == 1)
                        <a class="btn btn-primary btn-right" href="{{ route('formRow', [$tableId, 0]) }}">
                            <i class="ion-plus-circled"></i>
                            Thêm mới
                        </a>
                    @elseif($table->form_data_type == 2)
                        <a class="btn btn-primary btn-right" onclick="loadDataPopup('{{ route('formRow', [$tableId, 0]) }}')"data-toggle="modal" data-target=".bs-modal-lg">
                            <i class="ion-plus-circled"></i>
                            Thêm mới
                        </a>
                    @endif

                    @if($table->export == 1)
                        <a target="_new" class="btn btn-primary btn-right" href="{{ route('export2Excel', [$tableId]) }}">
                            <i class="ion-arrow-up-a"></i>
                            Xuất ra file excel
                        </a>
                    @endif

                    @if($table->import == 1)
                        <a class="btn btn-primary btn-right" onclick="loadDataPopup('{{ route('import2Excel', [$tableId]) }}')" data-toggle="modal" data-target="#myModal">
                            <i class="ion-arrow-down-a"></i>
                            Nhập từ file excel
                        </a>  
                    @endif

                    </div>
                </div>
                <table class="table-datatable table table-striped table table-bordered mv-lg">
                    <thead>
                        <tr>
                            <th>STT</th>
                            @foreach($columns as $col)
                                @if($col->show_in_list == 1)
                                    <th style="padding:0px">
                                        @if(!empty($col->table_link))
                                            {{ $col->display_name }} 
                                            <table class="table-datatable table sub-table">
                                                <tr>
                                                    {!! app('EntityCommon')->getHtmlTitleTblLink($col->table_link) !!}
                                                </tr>
                                            </table>
                                        @else
                                            {{ $col->display_name }} 
                                        @endif
                                    </th>
                                @endif
                            @endforeach
                            <th class="sort-numeric">Tuỳ chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($datas as $index => $data)
                        <tr class="gradeX">
                            <td>{{ $index + 1 }}</td>
                            @foreach($columns as $col)
                                @if($col->show_in_list == 1)
                                    
                                        @if(in_array($col->type_edit, ['image_laravel', 'images_laravel', 'image'. 'images']))
                                        <td><img style="width:70px" src="{{ $data[$col->name] }}"/></td>
                                        @else
                                            @if(!empty($col->table_link))
                                                <td>
                                                    <table class=" sub-table">
                                                        <tr>
                                                            <td style="width:100px">TienLQ</td>
                                                            <td style="width:100px">
                                                                <table class=" sub-table">
                                                                    <tr>
                                                                        <td style="width:100px">Đầu bơm đen 28/410  ống 85mm</td>
                                                                        <td>
                                                                            <table class="  sub-table">
                                                                                <tr>
                                                                                    <td>11111</td>
                                                                                    <td>222222</td>
                                                                                    <td>333333</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>3</td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                                    </tr>
                                                                </table>
                                                                <table class=" sub-table">
                                                                    <tr>
                                                                        <td style="width:100px">Đầu bơm đen 28/410  ống 85mm</td>
                                                                        <td>
                                                                            <table class="  sub-table">
                                                                                <tr>
                                                                                    <td>11111</td>
                                                                                    <td>222222</td>
                                                                                    <td>333333</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>3</td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                        </tr>
                                                    </table>
                                                    <br/>
                                                    <table class=" sub-table">
                                                        <tr>
                                                            <td style="width:100px">TienLQ</td>
                                                            <td style="width:100px">
                                                                <table class=" sub-table">
                                                                    <tr>
                                                                        <td style="width:100px">Đầu bơm đen 28/410  ống 85mm</td>
                                                                        <td>
                                                                            <table class="  sub-table">
                                                                                <tr>
                                                                                    <td>11111</td>
                                                                                    <td>222222</td>
                                                                                    <td>333333</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>3</td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                                    </tr>
                                                                </table>
                                                                <table class=" sub-table">
                                                                    <tr>
                                                                        <td style="width:100px">Đầu bơm đen 28/410  ống 85mm</td>
                                                                        <td>
                                                                            <table class="  sub-table">
                                                                                <tr>
                                                                                    <td>11111</td>
                                                                                    <td>222222</td>
                                                                                    <td>333333</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>3</td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                            {{-- {!! app('EntityCommon')->getHtmlTblLink($col->table_link, $col->name,$data['id']) !!} --}}
                                                        </tr>
                                                    </table>
                                                </td>
                                            @else

                                                @if($col->fast_edit == '1')
                                                    <td>
                                                        <a class="editable-text"
                                                            data-url="{{ route('editCurrentColumn', [$col->name, $tableId, $data['id']]) }}"
                                                            data-type="text" data-pk="1" 
                                                            data-title="{{ $col->name }}" >
                                                            @if($col->type_edit == 'select')
                                                                {{ app('EntityCommon')->getColNameById($col->select_table_id, $data[$col->name]) }}
                                                            @else
                                                                {{ $data[$col->name] }}
                                                            @endif
                                                        </a>
                                                    </td>
                                                @else
                                                    <td>{{ $data[$col->name] }}</td>
                                                @endif
                                            @endif
                                        @endif
                                    </td>
                                @endif
                            @endforeach
                            <td>
                                @if($table->form_data_type == 1)
                                    <a href="{{ route('formRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-success">
                                        <i class="ion-edit"></i> Sửa
                                    </a>
                                @else 
                                    <a onclick="loadDataPopup('{{ route('formRow', [$tableId, $data['id']]) }}')" data-toggle="modal" data-target=".bs-modal-lg" class="btn btn-sm btn-success">
                                        <i class="ion-edit"></i> Sửa
                                    </a>
                                @endif
                                <a href="{{ route('deleteRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-default">
                                    <i class="ion-trash-a"></i>
                                    Xoá
                                </a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <tr>
                        <td>{!! $dataQuery->render() !!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>

@endsection
