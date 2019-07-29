@extends('layouts.frontend') 

@section('content')

<main id="main" class="main-content clearfix page-checkout">
    <div class="container">

        <div class="hidden-xs hidden-sm"><ol class="progress-steps" style="width:800px;">
                <li data-step="1" class="is-active">
                    <a href="{{ route('cart') }}">Giỏ hàng</a>
                </li>
                <li data-step="2" class="">
                    <a>Thông Tin Giao Hàng</a>
                </li>
                <li data-step="3" class="progress__last">
                    <span>Hoàn thành</span>
                </li>
            </ol>
        </div>

        <form id="checkout-step-1" class="form form-blocking" action="/checkout-step-2" method="post">
            <div class="content-sidebar--2">
                <div class="content">

                    <div class="box box--no-padding">
                        <div class="box__header visible-xs visible-sm">
                            <h2 class="box__title">Thông tin sản phẩm</h2>
                        </div>

                        <div class="box__body">
                            <table class="table table--listing table--checkout">
                                <thead>
                                    <tr>
                                        <th class="items0count" colspan="2">Sản phẩm trong giỏ hàng: <span class="badge">{{ \Cart::content()->count() }} SP</span></th>
                                        <th width="16%">Đơn giá</th>
                                        <th width="16%">Số lượng</th>
                                        <th width="16%">Thành tiền</th>
                                        <th class="action" width="1%">&nbsp;</th>
                                    </tr>
                                    @php
                                    $total = 0;
                                    @endphp
                                    @foreach(\Cart::content() as $row)
                                    @php
                                    $total = $total+($row->options->count * $row->price);
                                    @endphp
                                    <tr>
                                        <td class="items0count" colspan="2">
                                            <a href="{{ route('detailProduct', [ app('ClassCommon')->formatText($row->name), $row->id ]) }}">{{ $row->name }}</a>
                                        </td>
                                        <td widtd="16%">{{ $row->price }}</td>
                                        <td widtd="16%">{{ $row->options->count }}</td>
                                        <td widtd="16%">{{ number_format($row->options->count * $row->price) }}</td>
                                        <td class="action" widtd="1%">
                                            <a href="?carId={{ $row->rowId  }}">Xóa</a>
                                        </td>
                                    </tr>
                                    @endforeach                                        
                                </thead>
                            </table>
                        </div>
                        <div class="box__footer hidden-xs hidden-sm">
                            <a href="/" class="btn btn--back"><< Tiếp tục mua hàng</a>
                            @if(!empty(\Cart::content()->count()))
                            <a href="{{ route('formOrder') }}" id="main-button" class="btn btn-success btn-lg btn--buy-now btn--buy-now-new pull-right">
                                ĐẶT HÀNG
                            </a>
                            @else
                            <button id="main-button" class="btn btn-success btn-lg btn--buy-now btn--buy-now-new pull-right" name="submit" disabled="disabled">
                                ĐẶT HÀNG
                            </button>
                            @endif
                        </div>
                    </div>

                </div>

                <div class="sidebar sidebar--checkout sidebar--checkout-1">
                    <div class="box">
                        <div class="box__header">
                            <h2 class="box__title">THÔNG TIN CHUNG</h2>
                        </div>
                        <div class="box__body">
                            <ul class="order-summary">
                                <li>
                                    <span class="k">Tổng sản phẩm</span>
                                    <span id="order-quantity" class="v">{{ \Cart::content()->count() }}</span>
                                </li>
                                <li>
                                    <span class="k">Tổng tạm tính</span>
                                    <span id="order-subtotal" class="v">{{ number_format($total) }} đ</span>
                                </li>
                                <li>
                                    <span class="k">Phí giao hàng (<a target="_blank" href="" title="">?</a>)</span>
                                    <span class="v"></span>
                                </li>
                                <li class="sep"></li>
                                <li class="total">
                                    <span class="k">Tổng cộng</span>
                                    <span id="order-total" class="v">{{ number_format($total) }} đ</span>
                                </li>
                            </ul>
                        </div>
                        <div class="box__footer">

                            <div class="visible-xs visible-sm">
                                @if(!empty(\Cart::content()->count()))
                                <a href="{{ route('formOrder') }}" id="main-button" class="btn btn-success btn-lg btn--buy-now btn--buy-now-new pull-right">
                                    ĐẶT HÀNG
                                </a>
                                @else
                                <button id="main-button" class="btn btn-success btn-lg btn--buy-now btn--buy-now-new pull-right" name="submit" disabled="disabled">
                                    ĐẶT HÀNG
                                </button>
                                @endif
                                <a href="/" class="btn btn--back"> << tục mua hàng</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</main>

@stop


