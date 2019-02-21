@extends('layouts.backend')

@section('content')

<div class="row">
    <div class="col-md-6">
        <div class="dd" id="nestable">
            {!! $htmlListDragDrop !!}
        </div>
        <p>Output</p>
        <div class="well" id="nestable-output"></div>
    </div>
</div>

@endsection