<div id="top-bar" class="header__top top-bar clearfix">
    <div class="container">
        <div class="row">

            <nav class="top-bar__item top-bar__item--nav navigation navigation--inline pull-right" style="border-left: 1px solid #dddddd;">
                <ul id="user_info_header" class="navbar-right"><li><i class="hd hd-user"></i> <a rel="nofollow" href="/">Đăng ký</a></li>
                    <li>&nbsp; | &nbsp;</li>
                    <li id="login-popup-header-form" class="show-in-checkout dropdown dropdown-arrow">
                        <a href="#" data-toggle="dropdown" aria-expanded="false">Đăng nhập</a>
                        <ul id="login-popup-header" class="dropdown-menu login-popup">
                            <li class="show-in-checkout">
                                <div class="modal-header">
                                    <h4 class="modal-title text-center">ÐĂNG NHẬP</h4>
                                </div>
                                <div class="modal-body clearfix">
                                    <form id="login-form-popup" class="form--general fv-form fv-form-bootstrap" method="post" action="" data-toggle="validator" novalidate="novalidate"><button type="submit" class="fv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
                                        <div class="form-group has-feedback">
                                            <div class="input-group">
                                                <div class="input-group-addon"><i class="hd hd-user"></i></div>
                                                <input type="text" class="form-control" id="user_login" name="user_login" placeholder="Tên đăng nhập" autocomplete="off" data-fv-notempty="true" data-fv-notempty-message="Vui lòng nhập Email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" data-fv-regexp-message="Email không hợp lệ" data-fv-field="user_login">
                                            </div><i class="form-control-feedback fv-icon-no-label fv-bootstrap-icon-input-group" data-fv-icon-for="user_login" style="display: none;" data-original-title="" title=""></i>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="user_login" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập Email</small><small class="help-block" data-fv-validator="regexp" data-fv-for="user_login" data-fv-result="NOT_VALIDATED" style="display: none;">Email không hợp lệ</small></div>
                                        <div class="form-group has-feedback">
                                            <div class="input-group">
                                                <div class="input-group-addon"><i class="hd hd-lock"></i></div>
                                                <input type="password" class="form-control" id="password" name="password" placeholder="Mật khẩu" autocomplete="off" data-fv-notempty="true" data-fv-notempty-message="Vui lòng nhập mật khẩu" data-fv-stringlength="true" data-fv-stringlength-min="1" data-fv-stringlength-max="64" data-fv-stringlength-message="Mật khẩu phải từ 1 đến 64 kí tự" data-fv-field="password">
                                            </div><i class="form-control-feedback fv-icon-no-label fv-bootstrap-icon-input-group" data-fv-icon-for="password" style="display: none;"></i>
                                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="password" data-fv-result="NOT_VALIDATED" style="display: none;">Vui lòng nhập mật khẩu</small><small class="help-block" data-fv-validator="stringLength" data-fv-for="password" data-fv-result="NOT_VALIDATED" style="display: none;">Mật khẩu phải từ 1 đến 64 kí tự</small></div>
                                        <div class="form-group password-helper">
                                            <label for="remember_me" class="pull-left remember-me"><input type="checkbox" name="remember_me" id="remember_me" value="Y" checked="checked"> Ghi nhớ đăng nhập</label>
                                            <a class="pull-right" rel="nofollow" href="/">Quên mật khẩu?</a>
                                        </div>
                                        <div class="form-group" style="margin-bottom: 0;">
                                            <button type="submit" class="btn btn-success btn-block">ÐĂNG NHẬP</button>

                                            <p class="login-register-helper">Bạn chưa có tài khoản? <a rel="nofollow" href="">Ðăng ký ngay</a></p>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <div class="text-left">
                                        <p style="margin-bottom: 5px;">Hoặc đăng nhập bằng</p>
                                        <div class="box-social">
                                            <a href="javascript:void(0);" class="login-facebook login-social social-facebook" id="login-facebook">
                                                <img src="//www.hotdeal.vn/assets/img/icon-facebook.png" alt="Đăng nhập bằng Facebook">
                                            </a>
                                            <a href="javascript:void(0);" class="login-google login-social social-google" id="login-google">
                                                <img src="//www.hotdeal.vn/assets/img/icon-google.png" alt="Đăng nhập bằng Google+">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <nav class="top-bar__item top-bar__item--nav navigation navigation--inline pull-right" style="border-right: 1px solid #fff;">
                <ul id="user_support" class="navbar-right">
                    <li>
                        <a href="callto:{{ $config->phone }}">
                            <i class="fa fa-phone"></i> Hotline:&nbsp;<span class="hotline__number">{{ $config->phone }}</span>                            
                        </a>
                    </li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                </ul>
            </nav>
        </div>
    </div>
</div>