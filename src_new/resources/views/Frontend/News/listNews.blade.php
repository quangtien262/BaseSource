@extends('Frontend.Layouts.main')

@section('content')
<main id="main" class="main-content clearfix page-checkout">
    <div class="container">

        <div class="breadcrumb">
            <div class="container">
                <ol itemscope>
                    <li itemprop="itemListElement" itemscope>
                        <a class="breadcrumb__link breadcrumb__link--home" href="/" itemprop="item" title="Trang chủ">
                            <span>Trang chủ</span>
                        </a>
                    </li>
                    <li><span class="breadcrumb__sep"><i class="fa fa-angle-right"></i></span></li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a class="breadcrumb__link breadcrumb__link--last" href="/lien-he/ct116.html" title="Liên hệ">
                            <span itemprop="name">Liên hệ</span>
                            <meta itemprop="position" content="0" />
                        </a>
                    </li>
                </ol>
            </div>
        </div>

        <div class="content-sidebar--2">
            <div class="content">
                <div class="box">
                    <div class="box__body address-container ">
                        @foreach($listNews as $news)
                        <div class="item item-3 img-project">
                            <div class="entry">
                                <div class="image-item clearfix">

                                    <div class="thumbnail-block col-xs-4">
                                        <a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}">
                                            <img class="lazyImage img-responsive project-list" src="{{ $news->image }}"  />
                                        </a>
                                    </div>

                                    <div class="caption col-xs-8">
                                        <div class="entry2 ">
                                            <div class="clearfix">
                                                <h3 class="project-title"><a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}">{{ $news->title }}</a></h3>
                                                
                                                <div class="deskop" style="border-bottom: 1px solid #999;">
                                                    <div class="line-icon">
                                                        <span class="icon m_f_5 nopadding-responsive"><i class="jinn-icon jinn-address-black"></i></span>
                                                    </div>
                                                </div>
                                                <div class="clearfix place-info">
                                                    <div class="clearfix place-info">
                                                        <br>
                                                        {{ $news->description }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="project-bottom-bnt  hidendecktop">
                                                <a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}" class="project-button esta-button"> Xem chi tiết </a>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="clearfix"></div>
                                    <br>
                                    
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div class="pagination">
                        {!! $listNews->render() !!}
                    </div>
                </div>
            </div>
            <div class="sidebar sidebar--checkout sidebar--checkout-2">
                @include('Frontend.Elements.Layout.boxContactRight')
            </div>
        </div>

    </div>
</main>

@stop


