@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <a href="{{ route('configTbl_edit', [0]) }}">add New</a>
            </div>
            <div class="card-body">
                <table class="table-datatable table table-striped table-hover mv-lg">
                    <thead>
                        <tr>
                            <th>Table Name</th>
                            <th>Title</th>
                            <th>Edit</th>
                            <th class="sort-numeric">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($tables as $table)
                            <tr class="gradeX">
                                <td>{{ $table->name }}</td>
                                <td>{{ $table->display_name }}</td>
                                <td>{{ $table->is_edit == 1 ? 'Have Edit':'Not Edit' }}</td>
                                <td>
                                    <a href="{{ route('configTbl_edit', [$table->id]) }}" class="btn btn-sm btn-success">Edit</a>
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