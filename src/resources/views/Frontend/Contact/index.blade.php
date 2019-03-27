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
                    <div class="box__header">
                        <h2 class="box__title"><b>Nội dung gửi liên hệ</b></h2>

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
                                                       data-fv-stringlength-message="Họ tên nhập tối đa 60 ký tự">
                                                <i class="form-control-feedback" data-fv-icon-for="name" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="name" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập Họ tên</small><small class="help-block" data-fv-validator="stringLength" data-fv-for="address[0][name]" data-fv-result="NOT_VALIDATED" style="display: none;">Họ tên nhập tối đa 60 ký tự</small>
                                        </div>
                                        
                                        <div class="col-md-12" style="margin-bottom: 5px;">
                                                Nội dung 
                                            </div>
                                            <div class="form-group form-group-lg">
                                                <textarea placeholder="Nhập nội dung cần liên hệ"
                                                    id="delivery_on_weekend_0" 
                                                    name="note" class="form-control" 
                                                    tabindex="9"></textarea>
                                            </div>

                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-group-lg  has-feedback">
                                            <label for="phone_0" class="control-label">Số điện thoại</label>
                                            <div>
                                                <input type="text" class="form-control validate[custom[phone]]" tabindex="2" id="phone_0" name="phone" placeholder="Số điện thoại liên hệ" value="" data-fv-notempty="true" data-fv-notempty-message="Vui lòng nhập Số điện thoại" pattern="^(09.|011.|012.|013.|014.|015.|016.|017.|018.|019.|08.)\d{7}$" data-fv-regexp-message="Số điện thoại chỉ được nhập số và từ 10 đến 11 ký tự" data-fv-field="address[0][phone]"><i class="form-control-feedback" data-fv-icon-for="address[0][phone]" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="phone"
                                                   data-fv-result="NOT_VALIDATED" style="display: none;">
                                                Vui lòng nhập Số điện thoại
                                            </small>
                                            <small class="help-block" data-fv-validator="regexp" data-fv-for="address[0][phone]" data-fv-result="NOT_VALIDATED" style="display: none;">Số điện thoại chỉ được nhập số và từ 10 đến 11 ký tự</small></div>

                                        <div class="form-group form-group-lg  has-feedback">
                                            <label for="name_0" class="control-label">Email</label>
                                            <div>
                                                <input type="text"
                                                       class="form-control" t
                                                       name="name" placeholder="Họ tên người nhận" 
                                                       value="" 
                                                       data-fv-notempty="true" 
                                                       data-fv-notempty-message="Vui lòng nhập Họ tên" 
                                                       data-fv-stringlength="true" data-fv-stringlength-max="60" 
                                                       data-fv-stringlength-message="Họ tên nhập tối đa 60 ký tự">
                                                <i class="form-control-feedback" data-fv-icon-for="name" style="display: none; pointer-events: none;"></i>
                                            </div>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="name" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập Họ tên</small><small class="help-block" data-fv-validator="stringLength" data-fv-for="address[0][name]" data-fv-result="NOT_VALIDATED" style="display: none;">Họ tên nhập tối đa 60 ký tự</small>
                                        </div>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-success btn-save button-save">Cập nhật và đặt hàng</button>
                                        <button type="button" class="btn btn-default btn-cancel button-cancel">Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </form>
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


