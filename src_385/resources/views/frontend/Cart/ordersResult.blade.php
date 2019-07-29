@extends('layouts.frontend') 

@section('content')
<main id="main" class="main-content clearfix page-checkout" style="min-height:500px">
    <div class="container">

        <div class="hidden-xs hidden-sm">
            <ol class="progress-steps" style="width:800px;">
                <li data-step="1" class="is-complete">
                    <a href="{{ route('cart') }}">Giỏ hàng</a>
                </li>
                <li data-step="2" class="is-complete">
                    <a href="{{ route('formOrder') }}">Thông Tin Giao Hàng</a>
                </li>
                <li data-step="3" class="progress__last is-active">
                    <a href="#">Hoàn thành</a>
                </li>
            </ol>
        </div>

        <div class="content-sidebar--2">
            <div class="content">
                <div class="box">
                    <div class="box__header">
                        <h2 class="box__title">Gửi đơn hàng thành công</h2>

                        <a href="/checkout-step-1" class="btn btn--back visible-xs visible-sm"><i class="fa fa-angle-left"></i></a>
                    </div>
                    <div class="box__body address-container ">
                      
                            <span style="color: #5a8c19;" data-toggle="tooltip" data-placement="top" title="" data-original-title="">
                                <i class="fa fa-truck" style="color: #71be0f;"></i>
                                Đơn đặt hàng của bạn đã được gửi thành công, 
                                Chúng tôi sẽ liên hệ lại với bạn trong vòng 24h.
                                <br>
                                Cảm ơn Quý khách đã tin tưởng và xử dụng dịch vụ của chúng tôi!
                            </span>
                        
                    </div>

                </div>
            </div>
        </div>

    </div>
</main>

@stop


