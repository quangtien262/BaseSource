@extends('layouts.frontend') 
@section('content')

<div class='row'>

    <div class='dt-content'>
        <div class='col-md-6'>
            <div class='thumb'>
                <img style='width:100%' src='{{$image}}'>
            </div>
        </div>
        <div class='col-md-6'>
            <div class=''>
                <h1  class="ptitle">{{$detaiproduct->name}}</h1>
                <p class="p-sum01">
                    <em>Mã sản phẩm: {{ $detaiproduct->code_product or ''  }} </em>
                    <span>|</span>
                    <em>Lượt mua:  {{ $detaiproduct->code_product or '' }} </em>
                    <span>|</span>
                    <em>Lượt xem:  {{ $detaiproduct->code_product or '' }} </em>
                    <span>|</span>
                    <em>Tình trạng:  {{ $detaiproduct->code_product or '' }} </em>
                </p>

                <p class="des02">{{$detaiproduct->summary}}</p>
               
                @if(!empty($detaiproduct->gia_ban) && !empty($detaiproduct->gia_khuyen_mai) && $detaiproduct->gia_ban > $detaiproduct->gia_khuyen_mai) 
                    <p>
                        <span>Giá gốc:&nbsp;</span>
                        <span class="price__value01">{{ $detaiproduct->gia_ban }}</span>
                        <span class="price__symbol">đ</span>
                    </p>  
                    <div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                        <span class="price">
                            <span class="price__value" itemprop="price">{{ $detaiproduct->gia_khuyen_mai }}</span>
                            <span class="price__symbol">đ</span>
                            <span class="price__discount">{{ (($detaiproduct->gia_khuyen_mai * 100)/$detaiproduct->gia_ban) }}%</span>
                        </span>
                    </div>
                @else 
                    <div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                        <span class="price">
                            <span class="price__value" itemprop="price">{{ $detaiproduct->gia_ban }}</span>
                            <span class="price__symbol">đ</span>
                        </span>
                    </div>
                @endif
                <p class="des03 muahang">
                    <input class="so-luong" type="number" value="1"/>
                    <a href="{{route('cart')}}?pid={{ $detaiproduct->id }}&return=cart" class="btn btn-dat-hang">MUA NGAY</a>
                </p>
            </div>
        </div>
    </div>
    <br>
    <div class='main_dt'>
        <div class='col-xs-12'>
            <span>{!!$detaiproduct->content!!}</span>
        </div>
    </div>
    <br>

</div>

<br> 
@foreach($listProduct as $list)
<div style=" padding-left:0px!important;margin-right:0px!important; padding-top: 25px;" class="col-xs-6 col-sm-3 content_sp">
    <img style='width:270px;height:161px;' src='{{$list->image}}'>
    <div style="margin-top: 40px" class="ct">
        <strong>
            <a style="text-transform: uppercase" href='{{route('detailProduct',[app('ClassCommon')->formatText($list->name),$list->id])}}'> 
             {{$list->name}}
            </a>
        </strong>
    </div>

</div>
@endforeach

@endsection