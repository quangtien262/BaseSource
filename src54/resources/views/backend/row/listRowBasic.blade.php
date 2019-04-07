@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
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
                  @if($isSearch)
                    <div class="row">
                        <br/>
                        <button type="submit" class="btn btn-primary _left" style="margin-left: 10px">
                            <i class="ion-ios-search-strong"></i>
                            Tìm kiếm
                        </button>
                        <a class="btn btn-primary _right" href="{{ route('formRow', [$tableId, 0]) }}" style="margin-right: 10px">
                            <i class="ion-plus-circled"></i>
                            Thêm mới
                        </a>
                    </div>
                  @endif
                </form>
            </div>
            <div class="card-body">
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <thead>
                        <tr>
                            <th>STT</th>
                            @foreach($columns as $col)
                                @if($col->show_in_list == 1)
                                    <th>{{ $col->display_name }}</th>
                                @endif
                            @endforeach
                            <th class="sort-numeric">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($datas as $index => $data)
                        <tr class="gradeX">
                            <td>{{ $index + 1 }}</td>
                            @foreach($columns as $col)
                                @if($col->show_in_list == 1)
                                    <td>
                                        @if(in_array($col->type_edit, ['image_laravel', 'images_laravel', 'image'. 'images']))
                                            <img style="width:70px" src="{{ $data[$col->name] }}"/>
                                        @else
                                            {{ $data[$col->name] }}
                                        @endif
                                    </td>
                                @endif
                            @endforeach
                            <td>
                                <a href="{{ route('formRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-success">
                                    <i class="ion-edit"></i>
                                    Edit
                                </a>
                                <a href="{{ route('deleteRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-default">
                                    <i class="ion-trash-a"></i>
                                    Delete
                                </a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <tr>
                        <td>{!! $dataQuery->render(); !!}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>

@endsection
