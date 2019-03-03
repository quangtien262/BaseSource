@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <p><a href="{{ route('editDataTbl', [$tableId, 0]) }}">add New</a></p>
                <div class="row">
                    @if(!empty($columns))
                        @foreach($columns as $col)
                            @if($col->add2search == 1)
                                @include('backend.element.formColumn')
                            @endif
                        @endforeach
                    @endif
                </div>
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
                                    <td>{{ $col->show_in_list == 1 ? $data[$col->name]:'' }}</td>
                                @endif
                            @endforeach
                            <td>
                                <a href="{{ route('editDataTbl', [$tableId, $data['id']]) }}" class="btn btn-sm btn-success">Edit</a>
                                <a href="{{ route('deleteTable', ['table'=>$table->id]) }}" class="btn btn-sm btn-default">Delete</a>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

@endsection