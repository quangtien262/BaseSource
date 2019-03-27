@foreach($categorys as $cate)
<div class="block block--tab tab-style-branding branding branding--restaurant" id="block-restaurant-0">
    <div class="block__header clearfix">
        <h2 class="block__title">
            <span class="block__branding"><i class="hd hd-restaurant"></i></span>
            <a href="{{ route($cate->route_name, [$cate->sluggable, $cate->tid]) }}">{{ $cate->name }} </a>        
        </h2>
        <div class="block__nav">
            
            <ul>
                {!! app('ClassCategory')->htmlCategoryByParent($cate->tid) !!}
                <!--<li><a href="{{ route($cate->route_name, [$cate->sluggable, $cate->tid]) }}">Xem tất cả<i class="fa fa-long-arrow-right"></i></a></li>-->
            </ul>
        </div>
    </div>
    <div class="block__content tab-content clearfix">
        <div role="tabpanel" class="tab-pane active" id="restaurant-moi">
            <div class="row products products--mobile">
                <div class="products__inner">
                    @php
                        $products = app('ClassProducts')->getProductByCategory($cate->tid);
                    @endphp
                    
                    
                    @foreach($products as $pro)
                    <div class="col-md-3 product-wrapper  _tracking" id="product-345820-wrapper">
                        <div class="product product-kind-3"
                             id="product-345820"
                             itemscope 
                             data-toggle="box-link"
                             data-url=""
                             data-category="{{ $cate->name }}">
                            <div class="product__image">
                                <a href="{{ route('detailProducts', [$pro->sluggable ,$pro->pId]) }}"
                                   title="">
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
                    
                    
                </div>
            </div>
        </div>
    </div>
    <div class="block__footer clearfix">
        <a class="btn block__more" href="{{ route($cate->route_name, [$cate->sluggable, $cate->tid]) }}">
            Xem tất cả 
            <i class="fa fa-caret-right"></i>
        </a>
    </div>
</div>
@endforeach