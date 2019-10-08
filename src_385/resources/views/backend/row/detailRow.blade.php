
@extends('layouts.'.$layout)

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <fieldset class="b0">
                            <div class="row">
                                @foreach($columns as $col)
                                    @if($col->edit == 1)
                                        <div class="col-md-6 item-detail">
                                            <br/>
                                            <label>{{ $col->display_name or $col->name }}: </label>
                                            @if($col->type_edit == 'number')
                                                {{ !empty($data[$col->name]) ? number_format($data[$col->name]):0 }}
                                            @elseif($col->type_edit == 'textarea')
                                                <p>{{ !empty($data[$col->name]) ? nl2br($data[$col->name]):'' }}</p>
                                            @elseif($col->type_edit == 'summoner')
                                                <p>{!! $data[$col->name] !!}</p>
                                            @else
                                                {{ $data[$col->name] or '' }}
                                            @endif
                                        </div>
                                    @endif
                                @endforeach
                            </div>
                        </fieldset>
                        <hr>
                        <!-- END panel-->
                    </div>
                </div>
                <!-- END row-->
            </div>
        </div>
    </div>
        
<form class="form-nestable" method="POST" action="{{ route('sortOrderRows', [LANDING_PAGE_ITEM_ID]) }}">
        {{ csrf_field()}}
        <textarea style="display: none" name="ids" class="well" id="nestable-output"></textarea>
    </form>
</section>

@endsection


