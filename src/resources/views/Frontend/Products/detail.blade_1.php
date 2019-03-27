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
                </div>
                <div class="product__details">
                    <div class="product__header">
                        <h1 class="product__title" itemprop="name">{{ $product->name }}</h1>
                    </div>
                    <div class="product__description" style="border-bottom: 1px solid #eaeaea;">

                        <ul>
                            <li>
                                <strong>Bảo hành:</strong> 
                                <span>
                                    {{ $product->baohanh }}
                                </span>
                            </li>
                            <li>
                                <strong>Màu sắc:</strong> 
                                <span>{{ $product->color }}</span>
                            </li>
                            <li>
                                <strong>Tình trạng:</strong> 
                                <span>{{ $product->tinhtrang }}</span>
                            </li>
                        </ul>

                    </div>
                    <div class="product__price-info clearfix">
                        <div class="box-price-detail">

                            @if(!empty($product->price_promotion) && !empty($product->price) && $product->price > $product->price_promotion)
                            <span class="price price--list-price">
                                <span class="hidden-xs hidden-sm">Giá gốc:&nbsp;</span>
                                <span class="price__value">{{$product->price}}</span>
                                <span class="price__symbol">đ</span>
                            </span>
                            @endif

                            <br class="hidden-xs hidden-sm"/>
                            <div class="product__price _product_price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                                @if(!empty($product->price_promotion) && !empty($product->price) && $product->price > $product->price_promotion)

                                <span class="price">
                                    <span class="price__value" itemprop="price">{{$product->price_promotion}}</span><span
                                        class="price__symbol">đ</span>
                                    <span class="price__discount">-{{ intval(100 - $product->price_promotion*100/$product->price)}}%</span>
                                </span>

                                @else

                                <span class="price">
                                    <span class="price__value">{{ $product->price }}</span>
                                    <span class="price__symbol">đ</span>
                                </span>

                                @endif

                            </div>
                        </div>
                    </div>
                    <div class="product__add-to-cart border-top clearfix">
                        <div class="add-to-cart__actions add-to-cart-buttons">
                            <a id="btn--buy-now"
                               href="{{route('cart')}}?pid={{ $product->pId }}"
                               class="btn btn-success btn--buy-now btn--buy-now-x2">
                                MUA NGAY <i class="fa fa-long-arrow-right"></i>
                            </a>
                            <button id="add-to-cart" class="btn btn-default btn--add-to-cart">
                                <i class="hd hd-cart"></i> THÊM VÀO GIỎ HÀNG
                            </button>
                        </div>
                    </div>

                    <div class="product__delivery border-top">
                        <span style="color: #5a8c19;" data-toggle="tooltip" data-placement="top"
                              title="Giao hàng miễn phí cho cho đơn hàng từ 150,000đ trở lên và có địa chỉ tại nội thành Hà Nội.">
                            <i class="fa fa-truck" style="color: #71be0f;"></i>
                            Giao hàng miễn phí tại Hà Nội cho đơn hàng từ 150,000đ</span>
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
                                    <div class="wysiwyg">
                                        <p>{!! $product->content !!}</p>
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
                                    <div class="box box--shadow hidden-xs hidden-sm" style="margin-top: 10px; border: 1px solid #ccc;">
                                        <div class="product product--short-info">
                                            <div class="product__cell" style="width: 185px;">
                                                Số tiền thanh toán
                                                <div class="product__price">
                                                    <span class="price">
                                                        <span class="price__value">29,000</span><span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="product__cell" style="width: 185px;">
                                                Giá gốc
                                                <div class="product__price product__price--list-price">
                                                    <span class="price price--list-price">
                                                        <span class="price__value">
                                                            1,000,000	
                                                        </span>
                                                        <span class="price__symbol">đ</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="product__cell">
                                                Tiết kiệm
                                                <div class="product__price">
                                                    <span class="price">
                                                        <span class="price__value">97</span><span class="price__symbol">%</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="product__cell">
                                                <div class="product__add-to-cart clearfix">
                                                    <form action="https://www.hotdeal.vn/checkout-step-1" method="post" class="add-to-cart add-to-cart--form">
                                                        <input type="hidden" name="product_id" value="347975" />
                                                        <input type="hidden" name="variants[product_id][]" value="347975" />
                                                        <input type="hidden" class="_quantity-347975" name="variants[347975][quantity]" value="1" />
                                                        <!-- hidden fields here -->
                                                        <div class="add-to-cart__actions add-to-cart-buttons">
                                                            <button id="btn--buy-now" onclick="ga('send', 'event', 'Details', 'Buy', 'Buy Now - Bottom', 347975);" class="btn btn-success btn--buy-now">MUA NGAY</button>
                                                            <button class="btn btn-default btn--add-to-cart--mini" onclick="$('#add-to-cart').trigger('click');
                                                                    return false;"><i class="hd hd-cart"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                               title="Tour Bái Đính - KDL Tràng An Mới - Đảo Đầu Lâu, Phim Trường Kong 1 Ngày, Ăn Trưa Buffet, Khởi Hành Hàng Ngày">
                                                                <img itemprop="image" class="lazy" width="280" height="auto"
                                                                     data-original="{{ $pro->image }}"
                                                                     data-src-mobile="{{ $pro->image }}"
                                                                     src="{{ $pro->image }}"
                                                                     alt="{{ $pro->name }}"/>
                                                            </a>

                                                        </div>
                                                        <div class="product__header">
                                                            <h3 class="product__title">
                                                                <a href=""
                                                                   itemprop="name"
                                                                   title="{{ $pro->name }}">{{ $pro->name }}</a>
                                                            </h3>
                                                        </div>
                                                        <div class="product__info">
                                                            <div class="product__price _product_price" itemprop="offers" itemscope>
                                                                <meta itemprop="priceCurrency" content="VND"/>
                                                                <span class="price">
                                                                    <span class="price__value" itemprop="price">{{ !empty($pro->price_promotion) ? number_format($pro->price_promotion):number_format($pro->price) }}</span><span class="price__symbol">đ</span>

                                                                    @if(!empty($pro->price_promotion) && !empty($pro->price) && $pro->price > $pro->price_promotion)

                                                                    <span class="price__discount">-{{ intval(100 - $pro->price_promotion*100/$pro->price)}}%</span>

                                                                    @endif
                                                                </span>
                                                            </div>
                                                            <div class="product__price product__price--list-price _product_price_old " style="display: inline-block;">
                                                                <span class="price price--list-price">
                                                                    <span class="price__value">{{ !empty($pro->price_promotion) ? $pro->price_promotion:'' }}</span><span class="price__symbol">đ</span>
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
            </div>
        </div>
    </div>
</main>

@stop