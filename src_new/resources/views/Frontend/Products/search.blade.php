@extends('Frontend.Layouts.main')

@section('content')

<div class="breadcrumb">
    <div class="container">
        <ol itemscope="" itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a class="breadcrumb__link breadcrumb__link--home" href="/"
                   itemprop="item">
                    <span>Trang chủ</span>
                    <meta itemprop="name" content="">
                    <meta itemprop="position" content="1">
                </a>
            </li>
            <li><span class="breadcrumb__sep"><i class="fa fa-angle-right"></i></span></li>
            <li itemprop="itemListElement" itemscope>
                <a class="breadcrumb__link breadcrumb__link--last" href="" title="Tìm kiếm">
                    <span itemprop="name">Tìm kiếm: Tìm thấy {{ $products->total() }} Sản phẩm với từ khóa <b>{{$_GET['q'] or ''}}</b></span>
                </a>
            </li>
        </ol>
    </div>
</div>

<main id="main" class="main-content clearfix">
    <div class="container">
        <div class="row" id="block-main-container">
            <div class="col-md-3 category-sidebar" id="category_sidebar">
                <form action="#" method="post" id="filter_page_category">
                    <div class="product-filters box box--shadow box--no-padding"
                         data-url-prefix="index.html"
                         data-main-container="#block-main-container"
                         data-sort-container="#block-main-sortings"
                         >
                        <div class="filter filter--listing">
                           
                        </div>
                        <div class="filter">
                            <div class="filter__title">
                                <i class="filter__icon hd hd-sort"></i> Thuộc tính khác
                                <a href="#" class="toggle-filter"><i class="fa fa-chevron-down"></i></a>
                            </div>
                            <div class="filter__body">
                                <label class="filter__button ">
                                    <input type="checkbox" name="c" value="65148"
                                           data-slug="ba-dinh" 			   />
                                    Giá tăng dần
                                </label>
                                <label class="filter__button ">
                                    <input type="checkbox" name="c" value="65121"
                                           data-slug="binh-tan" 			   />
                                    Giá giảm dần
                                </label>
                                <label class="filter__button ">
                                    <input type="checkbox" name="c" value="65123"
                                           data-slug="binh-thanh" 			   />
                                    Sản phẩm mới
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <!--content-->
            <div class="col-md-9 category-content">
                <!--slide-->
                <div class="cate-on-slide">
                    <div class="cycle-slideshow"
                         data-cycle-slides="> div"
                         data-cycle-timeout="5000"
                         data-cycle-prev=".cate-on-slide .cycle-prev"
                         data-cycle-next=".cate-on-slide .cycle-next"
                         data-cycle-fx="scrollHorz"
                         data-cycle-loader="wait"
                         data-cycle-pager=".cycle-pager"
                         data-cycle-swipe="true">
                        <div>
                            <a href="/" data-id="5184">
                                <img class="hidden-sm hidden-xs" src="http://saclaptop.net/img/images/1.png">
                                <img class="img-responsive visible-sm visible-xs" src="http://saclaptop.net/img/images/1.png">
                            </a>
                        </div>
                        <div>
                            <a href="/" data-id="5155">
                                <img class="hidden-sm hidden-xs" src="http://saclaptop.net/img/images/1.png">
                                <img class="img-responsive visible-sm visible-xs" src="http://saclaptop.net/img/images/1.png">
                            </a>
                        </div>
                    </div>
                    <a href="#" class="cycle-prev"><span class="icon-arr-left"></span></a>
                    <a href="#" class="cycle-next"><span class="icon-arr-right"></span></a>
                    <div class="cycle-pager"></div>
                </div>
                <!--end slide-->

                <div id="category_content">
                    <div class="block branding branding--restaurant category-header" id="block-main-category-header">
                        <div class="block__header  has-branding">
                            <h1 class="block__title category-header-heading">
                                <span class="block__branding"><i class="fa fa-bolt"></i></span>
                                {{ $category->name or '' }}        
                            </h1>

                            <div class="block__sorting hidden-sm hidden-xs" id="block-main-sortings">
                                <div class="product-sortings">
                                    <div class="filter filter--no-padding">
                                        <div class="filter__title">
                                            <i class="filter__icon hd hd-sort2"></i> SẮP XẾP THEO
                                        </div>
                                        <div class="filter__body">
                                            <a data-field="" data-sort="" href="indexd41d.html?" class="btn btn-default  sorting sorting--default sorting--active">Sản phẩm mới nhât</a>
                                            <a data-field="sell" data-sort="desc" href="?field=sell&amp;sort=desc" class="btn btn-default sorting sorting--sell sorting--desc ">
                                                Giá giảm dần 
                                                <i class="hd hd-sort-arrow"></i>
                                            </a>
                                            <a data-field="discountValue" data-sort="desc" href="?field=discountValue&amp;sort=desc" class="btn btn-default sorting sorting--price sorting--desc ">
                                                Giá tăng dần
                                                <i class="hd hd-sort-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row products" id="block-main">
                        
                        @foreach($products as $pro)
                        <div class="col-md-4 product-auto-resize product-wrapper  _tracking" id="product-345820-wrapper">
                            <div class="product product-kind-3"
                                 id="product-345820"
                                 itemscope 
                                 data-toggle="box-link"
                                 data-url=""
                                 data-category="Sản phẩm nổi bật">
                                <div class="product__image">
                                    @if (Auth::check())
                                    <div style="float: right">
                                        <a href="{{ route('editProduct',[$pro->pId]) }}">Sửa</a>
                                        &nbsp;&nbsp;&nbsp;
                                    </div>
                                    @endif
                                    <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->pId]) }}"
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
                                        <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->pId]) }}"
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
                                    @if(!empty($pro->price_promotion) && !empty($pro->price) && $pro->price > $pro->price_promotion)
                                    <div class="product__price product__price--list-price _product_price_old " style="display: inline-block;">
                                        <span class="price price--list-price">
                                            <span class="price__value">{{ !empty($pro->price) ? $pro->price:'' }}</span><span class="price__symbol">đ</span>
                                        </span>
                                    </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        @endforeach
                        
                        <div class="pagination">
                            {!! $products->render() !!}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>










@stop