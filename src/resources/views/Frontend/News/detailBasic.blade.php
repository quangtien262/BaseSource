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
                    <li itemprop="itemListElement" itemscope>
                        <a class="breadcrumb__link breadcrumb__link--last" href="" title="Liên hệ">
                            <span itemprop="name">{{ $category->name or '' }}</span>
                            <meta itemprop="position" content="0" />
                        </a>
                    </li>
                </ol>
            </div>
        </div>

        <div class="content-sidebar--2">
            <div class="content">
                <div class="box">
                    <div class="box__header">
                        <h1 class="box__title"><b>{!! $news->title or '' !!}</b></h1>
                    </div>
                    <div class="box__content">
                        {!! $news->content or 'Nội dung đang được cập nhật' !!}
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