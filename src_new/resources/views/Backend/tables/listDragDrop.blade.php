@extends('layouts.backend')

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-heading">
                <a href="{{ route('editDataTbl', [$tableId, 0]) }}">add New</a>
                <hr/>
            </div>
            <div class="card-body">
                <div class="row">
				    <div class="col-md-6">
				        <div class="dd" id="nestable">
				            {!! $htmlListDragDrop !!}
				        </div>
				        <p>Output</p>
				        <div class="well" id="nestable-output"></div>
				    </div>
				</div>
            </div>
        </div>
    </div>
</section>


@endsection