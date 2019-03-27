@extends('Frontend.Layouts.main')

@section('content')

<div class="breadcrumb">
    <div class="container">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <a class="breadcrumb__link breadcrumb__link--home" href="/" itemprop="item" title="Trang chủ">
                    <span>Trang chủ</span>
                </a>
            </li>
            <li><span class="breadcrumb__sep"><i class="fa fa-angle-right"></i></span></li>
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <a class="breadcrumb__link breadcrumb__link--last" href="{{ !empty($category->route_name) ? route($category->route_name, [$category->sluggable, $category->id]):'' }}" title="{{ $category->name or '' }}">
                    <span itemprop="name">{{ $category->name or '' }}</span>
                    <meta itemprop="position" content="0" />
                </a>
            </li>
        </ol>
    </div>
</div>

<main id="main" class="main-content clearfix">
    <div class="container">
        <div itemscope itemtype="http://schema.org/Product">
            <div class="product product--details clearfix">
                <div id="product-gallery-347975" class="product__gallery gallery " data-max-thumbs="5">
                    <div class="gallery__image media-gallery">
                        {!! $imgLarge !!}
                    </div>
                    <div class="gallery__thumbnails">
                        {!! $imgThumb !!}
                    </div>
                    <span class="dongdauanh02">Becatuananh.com</span>
                </div>
                <div class="product__details">
                    <div class="product__header">
                        <h1 class="product__title" itemprop="name">{{ $product->name }}</h1>
                        @if(!empty($product->maker))
                        <p><b>Mã sản phẩm: </b> {{ $product->maker }}</p>
                        @endif
                        
                        @if (\Auth::check())
                            <a href="{{ route('editProduct',[$product->pId]) }}">Sửa</a>
                        @endif
                    </div>
                    <div class="product__description" style="border-bottom: 1px solid #eaeaea;">
                    @foreach($blockMoTaSP as $des)
                        <div class="product__delivery border-top">
                            
                                <span style="color: #5a8c19;" data-toggle="tooltip" data-placement="top" title="">
                                    <i class="fa fa-check-square-o" style="color: #71be0f;"></i>
                                    {{ $des->name }}
                                </span>
                            
                        </div>
                    @endforeach
                    </div>
                    <div class="product__price-info clearfix">
                        <div class="box-price-detail">

                            @if(!empty($product->price_promotion) && !empty($product->price) && $product->price > $product->price_promotion)
                            <span class="price price--list-price">
                                <span class="hidden-xs hidden-sm">Giá gốc:&nbsp;</span>
                                <span class="price__value">{{ number_format($product->price) }}</span>
                                <span class="price__symbol">đ</span>
                            </span>
                            @endif

                            <br class="hidden-xs hidden-sm"/>
                            <div class="product__price _product_price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                                @if(!empty($product->price_promotion) && !empty($product->price) && $product->price > $product->price_promotion)

                                <span class="price">
                                    <span class="price__value" itemprop="price">{{number_format($product->price_promotion)}}</span><span
                                        class="price__symbol">đ</span>
                                    <span class="price__discount">-{{ intval(100 - $product->price_promotion*100/$product->price)}}%</span>
                                </span>

                                @else

                                <span class="price">
                                    <span class="price__value">{{ number_format($product->price) }}</span>
                                    <span class="price__symbol">đ</span>
                                </span>

                                @endif

                            </div>
                        </div>
                    </div>
                    <div class="product__add-to-cart border-top clearfix">
                        <div class="add-to-cart__actions add-to-cart-buttons">
                            <a id="btn--buy-now"
                               href="{{route('cart')}}?pid={{ $product->pId }}&return=cart"
                               class="btn btn-success btn--buy-now btn--buy-now-x2">
                                MUA NGAY <i class="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div class="product__delivery border-top">
                        
                     <script>
                            (function(d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s); js.id = id;
                                js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&appId=559983757347775&version=v2.0";
                                fjs.parentNode.insertBefore(js, fjs);
                              }(document, 'script', 'facebook-jssdk'));
                     </script>
                     <div class="like-fb">
                         <div class="fb-like" 
                         data-href="{{ url()->full() }}"
                         data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>
                     </div>
                     
                    </div>
                </div>
            </div>

            <div class="content-sidebar clearfix">
                <div class="content">
                    <div id="product-details" class="tabs tabs--sticky" data-distance="70">
                        <ul class="nav nav-tabs tabs__nav">
                            <li style="width: 20%" class="active first"><a href="#chi-tiet">Chi tiết SP</a></li>
                            <li style="width: 20%" class=" "><a href="#dia-diem">Giới thiệu SP</a></li>
                            <li style="width: 20%" class=" "><a href="#danh-gia">Bình luận</a></li>
                            <li style="width: 20%" class=" "><a href="#san-pham-lien-quan">SP liên quan</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content tabs__content">

                            <div class="tab-pane active first" id="chi-tiet">
                                <div class="block__header  clearfix">
                                    <h3 class="block__title">Thông tin chi tiết về sản phẩm</h3>
                                </div>
                                <div class="block__content clearfix">
                                    <div class="wysiwyg">&nbsp;</p>
                                        <p>{!! str_replace("&nbsp;"," ", $product->content) !!}</p>
                                        <p><br></p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane active " id="dia-diem">
                                <div class="block__header  clearfix">
                                    <h3 class="block__title">Giới thiệu về sản phẩm</h3>
                                </div>
                                <div class="block__content clearfix">

                                    <div class="wysiwyg">
                                        <p>{!! $product->summary !!}</p>
                                        <div>&nbsp;</div>
                                    </div>
                                    <!-- product short info -->
                                </div>
                            </div>

                            <div class="tab-pane active " id="danh-gia">
                                <div class="block__header  clearfix">
                                    <h3 class="block__title">BÌNH LUẬN FACEBOOK</h3>
                                </div>
                                <div class="block__content clearfix">
                                    <div width="100%" class="fb-comments" data-href="{{ url()->full() }}" data-numposts="5"></div>
                                    <br />
                                </div>
                            </div>

                        </div>
                        
                        <br>
                        <div class="clearfix">
                        <br>
                        
                        <div class="tab-pane active " id="san-pham-lien-quan">
                                <div class="block__header  clearfix">
                                    <h3 class="block__title">Sản phẩm liên quan</h3>
                                </div>
                                <div class="block__content clearfix">
                                    <div role="tabpanel" class="tab-pane" id="tab1">
                                        <div class="row products products--mobile">
                                            <div class="products__inner">
                                                @foreach($products as $pro)
                                                <div class="col-md-3 product-wrapper  _tracking" id="product-345820-wrapper">
                                                    <div class="product product-kind-3"
                                                         id="product-345820"
                                                         itemscope 
                                                         data-toggle="box-link"
                                                         data-url=""
                                                         data-category="Sản phẩm nổi bật">
                                                        <div class="product__image">
                                                            <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->tid]) }}"
                                                               title="{{ $pro->name }}">
                                                                <img itemprop="image" class="lazy" width="280" height="auto"
                                                                     data-original="{{ $pro->image }}"
                                                                     data-src-mobile="{{ $pro->image }}"
                                                                     src="{{ $pro->image }}"
                                                                     alt="{{ $pro->name }}"/>
                                                            </a>
                                                            <span class="dongdauanh">Becatuananh.com</span>
                                                        </div>
                                                        <div class="product__header">
                                                            <h3 class="product__title">
                                                                <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->tid]) }}"
                                                                   itemprop="name"
                                                                   title="{{ $pro->name }}">{{ $pro->name }}</a>
                                                            </h3>
                                                        </div>
                                                        <div class="product__info">
                                                            <div class="product__price _product_price" itemprop="offers" itemscope>
                                                                <meta itemprop="priceCurrency" content="VND"/>
                                                                <div class="price">
                                                                    <span class="price__value" itemprop="price">{{ !empty($pro->price_promotion) ? number_format($pro->price_promotion):number_format($pro->price) }}</span>
                                                                    <span class="price__symbol">đ</span>

                                                                    @if(!empty($pro->price_promotion) && !empty($pro->price) && $pro->price > $pro->price_promotion)

                                                                    <span class="price__discount">-{{ intval(100 - $pro->price_promotion*100/$pro->price)}}%</span>

                                                                    @endif
                                                                </div>
                                                            </div>
                                                            <div class="product__price product__price--list-price _product_price_old " style="display: inline-block;">
                                                                <span class="price price--list-price">
                                                                    <span class="price__value">
                                                                        @if(!empty($pro->price_promotion))
                                                                        {{  $pro->price_promotion }} <span class="price__symbol">đ</span>
                                                                        @endif
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
                
                
                <div class="sidebar">


                    <div class="block block--normal block-viewed-products">
                        <div class="block__header">
                            <h3 class="block__title">Sản phẩm bán chạy</h3>
                        </div>
                        <div class="block__content clearfix">
                            <div class="box box--nopadding">
                                @foreach($productsTopView as $pro)
                                    <div class="product--calltoaction">
                                        <div class="product__image" style="padding: 3.5%;">
                                            <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->tid]) }}" alt="{{ $pro->name }}">
                                                <img style="height: auto;" itemprop="image" width="230" height="230" 
                                                     alt="{{ $pro->name }}" title="{{ $pro->name }}"
                                                     src="{{ $pro->image }}">
                                            </a>
                                            <span class="dongdauanh">Becatuananh.com</span>
                                        </div>
                                        <div class="product__header" style="padding-top: 0;">
                                            <h3 class="product__title"><a href="{{ route('detailProducts', [$pro->sluggable ,$pro->tid]) }}" alt="{{ $pro->name }}">{{ $pro->name }}</a></h3>
                                        </div>

                                        <div class="product__info">
                                            @if(!empty($pro->price_promotion) && !empty($pro->price) && $pro->price > $pro->price_promotion)
                                                <div class="product__price product__price--list-price visible-xs visible-sm">
                                                    <span class="price price--list-price">
                                                        <span class="price__value">{{ $pro->price }}</span><span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                                <div class="product__price" itemprop="offers" itemscope="" itemtype="">
                                                    <meta itemprop="priceCurrency" content="VND">
                                                    <span class="price">
                                                        <span class="price__value" itemprop="price">{{ $pro->price_promotion }}</span><span class="price__symbol">đ</span>
                                                        <span class="price__discount">-{{ intval(100 - $pro->price_promotion*100/$pro->price)}}%</span>
                                                    </span>
                                                </div>
                                                <div class="product__price product__price--list-price hidden-xs hidden-sm" style="">
                                                    <span class="price price--list-price">
                                                        <span class="price__value">{{ $pro->price }}</span><span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                            @else
                                                <div class="product__price product__price--list-price visible-xs visible-sm">
                                                    <span class="price price--list-price">
                                                        <span class="price__value">{{ $pro->price }}</span><span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                                <div class="product__price" itemprop="offers" itemscope="" itemtype="">
                                                    <meta itemprop="priceCurrency" content="VND">
                                                    <span class="price">
                                                        <span class="price__value" itemprop="price">{{ $pro->price }}</span><span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>               
                </div>   
                
                
        </div>
    </div>
</main>

@stop