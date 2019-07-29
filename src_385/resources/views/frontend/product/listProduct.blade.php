@extends('layouts.frontend') 
@section('content')

<div class="row">
    @foreach($listProduct as $key=> $listpro )
    @php
        $images = !empty($listpro->images) ? json_decode($listpro->images, true):['avatar' => ''];
        $image = $images['avatar'];
        if(!empty($listpro->gia_ban) && !empty($listpro->gia_khuyen_mai) && $listpro->gia_ban > $listpro->gia_khuyen_mai) {
            $description = '
            <div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                <span class="price fix-price-in-list">
                    <span class="price__value" itemprop="price">'.$listpro->gia_khuyen_mai.'</span>
                    <span class="price__symbol">đ</span>
                    <span class="price__discount">'.(($listpro->gia_khuyen_mai * 100)/$listpro->gia_ban).'%</span>
                </span>
                <span class="price-old">
                    <span class="price__value01">'.$listpro->gia_ban.'</span>   
                </span>
            </div>';
        } else {
            $description = '<div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                <span class="price fix-price-in-list">
                    <span class="price__value" itemprop="price">'.$listpro->gia_ban.'</span>
                    <span class="price__symbol">đ</span>
                </span>
            </div>';
        }
    @endphp
    <div class=" col-sm-3 ct_pro">
        <div class="thumbnail">
            <a style="text-transform: uppercase" href='{{route('detailProduct',[app('ClassCommon')->formatText($listpro->name),$listpro->id])}}'>
                <img src='{{$image}}'>
            </a>
        </div>

        <div>
            <b>
                <a style="text-transform: uppercase" href='{{route('detailProduct',[app('ClassCommon')->formatText($listpro->name),$listpro->id])}}'>
                    {{$listpro->name}}
                </a>
            </b>
            <p>{!! $description !!}</p>

        </div>
    </div>

    @if($key == 3) @endif @endforeach
</div>
<div class="row">
    {!! $listProduct->render() !!}
</div>
@endsection

