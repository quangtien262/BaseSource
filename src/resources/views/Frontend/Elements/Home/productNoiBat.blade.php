<div class="block block--tab tab-style-1">
    <div class="block__header clearfix">
        <div class="block__tab">
            <ul class="tab nav nav-pills">
                <li class="tab__item active">
                    <a data-toggle="tab"
                       data-url="/ha-noi/deal-noi-bat"
                       data-title="Deal Nổi bật"
                       href="#tab0">Sản phẩm mới nhất</a>
                </li>
                <li class="tab__item">
                    <a data-toggle="tab"
                       data-url="/ha-noi/deal-hom-nay"
                       data-title="Deal mới"
                       data-slug="deal-hom-nay"
                       href="#tab1">Sản phẩm bán chạy</a>
                </li>
                <li class="tab__item">
                    <a data-toggle="tab"
                       data-url=""
                       data-title=""
                       data-slug="deal-danh-cho-ban"
                       href="#tab2">Sản phẩm khuyến mãi</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="block__content tab-content clearfix">
        <div role="tabpanel" class="tab-pane active" id="tab0">
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
                                    <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->tid]) }}"
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
                </div>
            </div>
        </div>
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
        <div role="tabpanel" class="tab-pane " id="tab2">
            <div class="row products products--mobile">
                <div class="products__inner">
                    Nội dung đang được cập nhật
                </div>
            </div>
        </div>
    </div>
    <div class="block__footer clearfix">
        <a class="btn block__more" href="deal-noi-bat.html">
            Xem tất cả&nbsp;<span>Deal Nổi bật</span><i class="fa fa-caret-right"></i>
        </a>
    </div>
</div>