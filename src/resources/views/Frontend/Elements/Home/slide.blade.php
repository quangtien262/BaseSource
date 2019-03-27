<section id="promo-banners" class="clearfix">
    <div class="container">
        <div class="promo-slider">
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
                      @php
                        $slide = app('ClassBlock')->getBlockByType('slide');
                    @endphp
                    
                    @foreach($slide as $s)
                    <div>
                        <a href="{{ $s->link }}" data-id="5184">
                            <img class="hidden-sm hidden-xs" src="{{ $s->image }}">
                            <img class="img-responsive visible-sm visible-xs" src="{{ $s->image }}">
                        </a>
                    </div>
                    @endforeach
                </div>
                <a href="#" class="cycle-prev"><span class="icon-arr-left"></span></a>
                <a href="#" class="cycle-next"><span class="icon-arr-right"></span></a>
                <div class="cycle-pager"></div>
            </div>
        </div>
    </div>
</section>