@php 
    $dataJson = json_decode($landingPage->data, true);
    if(!empty($dataJson['category_id'])) {
        $category = app('ClassCategory')->getCategoryById($dataJson['category_id']);
        if($category->routeName == 'product') {
            $data = app('EntityCommon')->getRowsByConditions('product', [], 12, ['updated_at', 'desc']);
        } elseif($category->routeName == 'news') {
            $data = app('EntityCommon')->getRowsByConditions('news', [], 12, ['updated_at', 'desc']);
        }
    }
    $random =  app('ClassCommon')->generateRandomString();
@endphp
<section style="width:100%; float:left">
<h2>{{ $dataJson['title'] or '' }}</h2>
@if($agent->isMobile()) 

<div class="carousel slide" id="myCarousel_{{ $random }}">
        <div class="carousel-inner">
            @if(!empty($data))
            @php 
                $idx = 0;
                $first = 0;
            @endphp
                @foreach($data as $key => $val)
                    @php 
                    $idx++; 
                    $first++;
                    $link = '';
                    if($category->routeName == 'product') {
                        $images = !empty($val->images) ? json_decode($val->images, true):['avatar' => ''];
                        $image = $images['avatar'];
                        $link = route('detailProduct',[app('ClassCommon')->formatText($val->name),$val->id]);
                        $description = '';
                    } elseif($category->routeName == 'news') {
                        $image = $val->image;
                        $link = route('detailNews',[app('ClassCommon')->formatText($val->name),$val->id]);
                        $description = '';
                    } elseif($category->routeName != '') {
                        // $image = $val->image;
                        // $link = route($category->routeName,[app('ClassCommon')->formatText($val->name),$val->id]);
                    }
                    @endphp
                    
                    @if($idx == 1)
                    <div class="item main_item_pro {{ $first == 1 ? 'active':'' }}">
                        <div class="thumbnails">
                            <div class="col-xs-6 col-sm-3 content_sp">
                                <img style='width:270px;height:161px;' src='{{ $image }}'>
                                <div class="ct">
                                    <b><a style="text-transform: uppercase" href="{{ $link  }}">{{ $val->name }}</a></b>
                                </div>
                            </div>
                    @endif

                    @if($idx == 2)
                            <div class="col-xs-6 col-sm-3 content_sp">
                                <img style='width:270px;height:161px;' src='{{ $image }}'>
                                <div class="ct">
                                    <b><a style="text-transform: uppercase" href="{{ $link  }}">{{ $val->name }}</a></b>
                                </div>  
                            </div>
                        </div>
                    </div>
                    @php $idx = 0; @endphp
                    @endif
                @endforeach
                @if($idx == 1)
                        </div></div>
                @endif
            @endif
        
        </div>
          
          <a class="left carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="prev" 
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-left"></span>
               <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="next"
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-right"></span>
               <span class="sr-only">Next</span>
          </a>
     </div>

</section>


@else
<div class="carousel slide" id="myCarousel_{{ $random }}">
        <div class="carousel-inner">
            @if(!empty($data))
            @php 
                $idx = 0;
                $first = 0;
            @endphp
                @foreach($data as $key => $val)
                    @php 
                    $idx++; 
                    $first++;
                    $link = '';
                    $description = '';
                    if($category->routeName == 'product') {
                        $images = !empty($val->images) ? json_decode($val->images, true):['avatar' => ''];
                        $image = $images['avatar'];
                        $link = route('detailProduct',[app('ClassCommon')->formatText($val->name),$val->id]);
                        if(!empty($val->gia_ban) && !empty($val->gia_khuyen_mai) && $val->gia_ban > $val->gia_khuyen_mai) {
                            $description = '
                            <div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                                <span class="price fix-price-in-list">
                                    <span class="price__value" itemprop="price">'.$val->gia_khuyen_mai.'</span>
                                    <span class="price__symbol">đ</span>
                                    <span class="price__discount">'.(($val->gia_khuyen_mai * 100)/$val->gia_ban).'%</span>
                                </span>
                                <span class="price-old">
                                    <span class="price__value01">'.$val->gia_ban.'</span>   
                                </span>
                            </div>';
                        } else {
                            $description = '<div class="product__price _product_price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">     
                                <span class="price fix-price-in-list">
                                    <span class="price__value" itemprop="price">'.$val->gia_ban.'</span>
                                    <span class="price__symbol">đ</span>
                                </span>
                            </div>';
                        }
                    } elseif($category->routeName == 'news') {
                        $image = $val->image;
                        $link = route('detailNews',[app('ClassCommon')->formatText($val->name),$val->id]);
                    }
                    @endphp
                    @if($idx == 1)
                    <div class="item main_item_pro {{ $first == 1 ? 'active':'' }}">
                        <div class="thumbnails">
                            @include('frontend.element.landingPage.item.block022_item01')
                    @elseif($idx == 2 || $idx == 3)
                            @include('frontend.element.landingPage.item.block022_item01')
                    @elseif($idx == 4)
                            @include('frontend.element.landingPage.item.block022_item01')
                        </div>
                    </div>
                    @php $idx = 0; @endphp
                    @endif
                @endforeach
                @if($idx == 1 || $idx == 2 || $idx == 3)
                        </div></div>
                @endif
            @endif
        
        </div>
          
          <a class="left carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="prev" 
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-left"></span>
               <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="next"
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-right"></span>
               <span class="sr-only">Next</span>
          </a>
     </div>

</section>
@endif