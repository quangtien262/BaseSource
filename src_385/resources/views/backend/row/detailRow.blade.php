
@extends('layouts.'.$layout)

@section('content')

<section>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12" style="text-align: right">
                        @if($table->is_edit == 1)
                            <a target="new" href="{{ route('formRow', [$tableId, $data['id']]) }}" class="btn btn-sm btn-success">
                                <i class="ion-edit"></i> Sửa
                            </a>
                        @endif

                        @if($table->name == TIEN_PHONG)
                            <a class="btn btn-success" href="{{ route('generateCurrenTienPhong', [$data['id']]) }}">
                                <i class="ion-social-usd"></i>
                                Tính lại tiền phòng
                            </a> 
                            <form method="POST" action="{{ route('updateTienPhongDiscount', [$data['id']]) }}">
                                {{ csrf_field()}}
                                <input class="btn btn-primary" type="submit" value="Discount" />
                                <input type="number" name="discount" value="0" />
                            </form>
                        @endif
                    </div>
                </div>
                <!-- START row-->
                <div class="row">
                    <div class="col-md-12">
                        <fieldset class="b0">
                            <div class="row">
                                @foreach($columns as $col)
                                    @if($col->edit == 1)
                                            @if($col->type_edit == 'number')
                                                @if(!empty($data[$col->name]) && !empty($data[$col->name]))
                                                    <div class="col-md-6 item-detail">
                                                        <br/>
                                                        <label>{{ $col->display_name or $col->name }}: </label>
                                                        {{ !empty($data[$col->name]) ? number_format($data[$col->name]):0 }}
                                                    </div>
                                                @endif
                                            @elseif($col->type_edit == 'textarea')
                                                <div class="col-md-6 item-detail">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}: </label>
                                                    <p>{{ !empty($data[$col->name]) ? nl2br($data[$col->name]):'' }}</p>
                                                </div>
                                            @elseif($col->type_edit == 'summoner')
                                                <div class="col-xs-9">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}: </label>
                                                    <p>{!! $data[$col->name] !!}</p>
                                                </div>
                                            @elseif($col->type_edit == 'select')
                                                <div class="col-md-6 item-detail">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}: </label>
                                                    @php $tbl = app('EntityCommon')->getCurrentTableDataByTablesId($col->select_table_id, $data[$col->name]) @endphp
                                                    {{ $tbl->name or '' }}
                                                </div>
                                            @else
                                                <div class="col-md-6 item-detail">
                                                    <br/>
                                                    <label>{{ $col->display_name or $col->name }}: </label>
                                                    {{ $data[$col->name] or '' }}
                                                </div>
                                            @endif
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


