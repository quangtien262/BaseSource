@extends('Frontend.Layouts.main')

@section('content')
<main id="main" class="main-content clearfix page-checkout">
    <div class="container">

        <div class="hidden-xs hidden-sm">
            <ol class="progress-steps" style="width:800px;">
                <li data-step="1" class="is-complete">
                    <a href="{{ route('cart') }}">Giỏ hàng</a>
                </li>
                <li data-step="2" class="is-active">
                    <a href="{{ route('formOrder') }}">Thông Tin Giao Hàng</a>
                </li>
                <li data-step="3" class=" progress__last">
                    <span>Hoàn thành</span>
                </li>
            </ol>
        </div>

        <div class="content-sidebar--2">
            <div class="content">
                <div class="box">
                    <div class="box__header">
                        <h2 class="box__title">Địa chỉ giao hàng</h2>

                        <a href="/checkout-step-1" class="btn btn--back visible-xs visible-sm"><i class="fa fa-angle-left"></i></a>
                    </div>
                    <div class="box__body address-container ">
                        <div class="row">							
                            <div class="col-md-12">
                                <div class="address-box " style="min-height: 40px;padding: 15px;">
                                    <div>
                                        <label>
                                            Vui lòng nhập thông tin liên hệ như bên dưới, chúng tôi sẽ liên hệ với bạn trong vòng 24h
                                        </label>
                                    </div>
                                    <div>Mọi thắc mắc của quý khách có thể liên hệ qua hotline: <a href="tel:{{ $config->phone }}"><b class="_red">{{ $config->phone }}</b></a></div>
                                </div>
                            </div>
                        </div>


                        <form class="form form-blocking form--general check-out-step-2 fv-form fv-form-bootstrap" 
                              action="{{ route('formOrder') }}" 
                              method="post" 
                              data-toggle="validator" 
                              novalidate="novalidate">
                            {{ csrf_field()}}
                            <div class="address-edit editable-section editing" id="address-edit-">
                                <hr>
                                <div class="row form">
                                    <div class="col-md-6">
                                        <div class="form-group form-group-lg  has-feedback">
                                            <label for="name_0" class="control-label">Họ tên</label>
                                            <div>
                                                <input type="text"
                                                       class="form-control" t
                                                       name="name" placeholder="Họ tên người nhận" 
                                                       value="" 
                                                       data-fv-notempty="true" 
                                                       data-fv-notempty-message="Vui lòng nhập Họ tên" 
                                                       data-fv-stringlength="true" data-fv-stringlength-max="60" 
                                                       data-fv-stringlength-message="Họ tên nhập tối đa 60 ký tự"><i class="form-control-feedback" data-fv-icon-for="address[0][name]" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="name" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập Họ tên</small><small class="help-block" data-fv-validator="stringLength" data-fv-for="address[0][name]" data-fv-result="NOT_VALIDATED" style="display: none;">Họ tên nhập tối đa 60 ký tự</small>
                                        </div>

                                        <div class="form-group form-group-lg">
                                            <label for="address_type_0" class="control-label">Loại địa chỉ</label>
                                            <div class="radio-list">
                                                <select id="address_type_0" name="address_type" class="form-control" tabindex="9">
                                                    <option value="Nhà riêng">Nhà riêng</option>
                                                    <option value="Nơi làm việc">Nơi làm việc</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group form-group-lg has-feedback">
                                            <label for="address_0" class="control-label">Ghi chú thêm</label>
                                            <div>
                                                <textarea type="text" 
                                                          class="form-control" 
                                                          tabindex="3" id="address_0" 
                                                          name="address" 
                                                          placeholder="Ghi chú thêm" 
                                                          value="" 
                                                          data-fv-field="address"></textarea>
                                                <i class="form-control-feedback" data-fv-icon-for="address" style="display: none; pointer-events: none;"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-lg  has-feedback">
                                            <label for="phone_0" class="control-label">Số điện thoại</label>
                                            <div>
                                                <input type="text" 
                                                       class="form-control validate[custom[phone]]" 
                                                       tabindex="2" 
                                                       id="phone_0" 
                                                       name="phone"
                                                       placeholder="Số điện thoại liên hệ" 
                                                       value="" 
                                                       data-fv-notempty="true" 
                                                       data-fv-notempty-message="Vui lòng nhập Số điện thoại" 
                                                       data-fv-field="phone">
                                                <i class="form-control-feedback" data-fv-icon-for="phone" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="phone"
                                                   data-fv-result="NOT_VALIDATED" style="display: none;">
                                                Vui lòng nhập Số điện thoại
                                            </small>
                                            <small class="help-block" data-fv-validator="regexp" data-fv-for="phone" data-fv-result="NOT_VALIDATED" style="display: none;">Số điện thoại chỉ được nhập số và từ 10 đến 11 ký tự</small>
                                        </div>


                                        <div class="form-group form-group-lg has-feedback">
                                            <label for="ward_0" class="control-label">Bạn có thể nhận hàng ở địa chỉ này vào thứ 7 không?</label>
                                            <div>
                                               <input type="text" 
                                                       class="form-control validate[custom[phone]]" 
                                                       tabindex="2" 
                                                       id="phone_0" 
                                                       name="email"
                                                       placeholder="Email liên hệ" 
                                                       value="" 
                                                       data-fv-notempty="true" 
                                                       data-fv-notempty-message="Vui lòng nhập địa chỉ email" 
                                                       data-fv-field="email">
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="email" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập email</small>
                                        </div>

                                        <div class="form-group form-group-lg has-feedback">
                                            <label for="address_0" class="control-label">Địa chỉ</label>
                                            <div>
                                                <textarea type="text" 
                                                          class="form-control" 
                                                          tabindex="3" id="address_0" 
                                                          name="address" 
                                                          placeholder="Nhập địa chỉ chi tiết tại đây" 
                                                          value="" 
                                                          data-fv-notempty="true" 
                                                          data-fv-notempty-message="Vui lòng nhập Địa chỉ" 
                                                          data-fv-stringlength="true" 
                                                          data-fv-stringlength-max="200" 
                                                          data-fv-stringlength-message="Địa chỉ nhập tối đa 200 ký tự" 
                                                          data-fv-field="address"></textarea>
                                                <i class="form-control-feedback" data-fv-icon-for="address" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="address" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập Địa chỉ</small><small class="help-block" data-fv-validator="stringLength" data-fv-for="address[0][address]" data-fv-result="NOT_VALIDATED" style="display: none;">Địa chỉ nhập tối đa 200 ký tự</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-success btn-save button-save">Cập nhật và đặt hàng</button>
                                        <button type="reset" class="btn btn-default ">Nhập lại</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div class="sidebar sidebar--checkout sidebar--checkout-2">
                <div class="box">
                    <div class="box__header">
                        <h2 class="box__title">Thông tin đơn hàng</h2>
                    </div>
                    <div class="box__body">
                        @php
                        $total = 0;
                        @endphp
                        @foreach(\Cart::content() as $row)
                        @php
                        $total = $total+($row->options->count * $row->price);
                        @endphp
                        <div class="order-items">
                            <div class="order-item">
                                <div class="name">
                                    <a target="_blank" 
                                       href="{{ route('detailProducts', [ app('ClassCommon')->formatText($row->name), $row->id ]) }}"
                                       title="{{ $row->name }}">
                                        {{ $row->name }}
                                    </a>
                                </div>
                                <div class="price">
                                    {{ $row->price }} đ
                                </div>
                            </div>
                        </div>
                        @endforeach

                        <hr>


                        <ul class="order-summary">
                            <li>
                                <span class="k">Tổng sản phẩm</span>
                                <span class="v">1</span>
                            </li>
                            <li>
                                <span class="k">Tổng tạm tính</span>
                                <span class="v _sub-total" data-value="29000">{{ number_format($total) }} đ</span>
                            </li>
                            <li>
                                <span class="k">Giảm giá</span>
                                <span class="v _discount" data-value="0">0 đ</span>
                                <input type="hidden" id="order_discount" value="0" data-order="discount">
                            </li>
                            <li>
                                <span class="k">Phí giao hàng (<a target="_blank" href="/chinh-sach-giao-hang.html" title="Chi tiết chính sách giao hàng">?</a>)</span>
                                <span class="v" id="order_shipping_cost" data-order="shipping_cost_display"><span class="_shipping-cost" data-value="0"></span> đ</span>
                            </li>
                            <li class="sep"></li>
                            <li class="total">
                                <span class="k">Tổng cộng</span>
                                <span class="v _total" id="cart_info_total _total" data-value="{{ number_format($total) }}" data-order="total">{{ number_format($total) }} đ</span>
                            </li>
                        </ul>
                    </div>
                    <div class="box__footer">		
                        <div class="e-voucher-notice">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="42.998px" height="78px" viewBox="0 0 42.998 78" enable-background="new 0 0 42.998 78" xml:space="preserve" class="svg image  replaced-svg">
                            <g>
                            <g>
                            <path d="M24.997,6.538h-6.995c-1.241,0-2.25,1.006-2.25,2.247c0,1.239,1.009,2.247,2.25,2.247h6.995    c1.242,0,2.25-1.007,2.25-2.247C27.247,7.544,26.239,6.538,24.997,6.538z M21.494,69.02c1.065,0,2.069-0.407,2.845-1.166    c1.558-1.559,1.568-4.098,0.022-5.662c-1.518-1.527-4.164-1.557-5.719-0.018c-1.53,1.554-1.536,4.084-0.008,5.651    C19.392,68.597,20.41,69.02,21.494,69.02z M21.172,64.66c0.084-0.081,0.201-0.132,0.322-0.132c0.129,0,0.26,0.057,0.357,0.155    c0.177,0.182,0.176,0.465-0.018,0.66c-0.188,0.188-0.496,0.183-0.678,0.007C20.969,65.158,20.969,64.861,21.172,64.66z M35.322,0    H7.679C3.444,0,0,3.441,0,7.667v62.665C0,74.56,3.445,78,7.679,78H35.32c4.232,0,7.676-3.44,7.678-7.667V7.667    C42.998,3.44,39.553,0,35.322,0z M38.498,70.333c0,1.75-1.424,3.174-3.176,3.174H7.679c-1.752,0-3.18-1.424-3.18-3.174V58.669    h33.999V70.333z M38.498,54.176H4.499V18.016h33.999V54.176z M38.498,13.522H4.499V7.667c0-1.75,1.428-3.174,3.18-3.174h27.644    c1.752,0,3.176,1.425,3.176,3.174V13.522z"></path>
                            </g>
                            </g>
                            </svg>
                            <div>Mọi thắc mắc của quý khách có thể liên hệ qua hotline: <a href="tel:{{ $config->phone }}"><b class="_red">{{ $config->phone }}</b></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</main>

@stop


