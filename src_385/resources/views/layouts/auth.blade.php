@php
  $adminConfig = app('EntityCommon')->getDataById('admin_config', 1);
@endphp
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0057)http://baotroxahoi.com/mamnon_thainguyen/admin/index.php# -->
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <title>{{ $adminConfig->name or '' }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="/vendor/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ url('vendor/font-awesome/css/font-awesome.min.css') }}">
    <link href="/auth/nav-menu3.css" rel="stylesheet" type="text/css">
    <link href="/auth/setmedia.css" rel="stylesheet" type="text/css">
    <link href="/auth/style.css" rel="stylesheet" type="text/css">

    <script src="/vendor/jquery/dist/jquery.js"></script>
    <script src="/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/vendor/jquery-form/jquery-form.js"></script>
</head>

<body cz-shortcut-listen="true">
    <div class="container wrapper1 ">
        <header>
            <div class="banner_top">
                @if(!empty($adminConfig->banner))
                    <img class="w_100" src="{{ $adminConfig->banner }}"/>
                @endif
            </div>
            <div class="line_login"></div>
            <div class="clearfix"></div>
            <div class="menu_login clearfix">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="#">Hướng dẫn sử dụng</a></li>
                </ul>
            </div>
        </header> 
        <div class="clearfix"></div>
        <article>
            <div class="login_main">
                <div class="txt_htpm">{{ $adminConfig->name or '' }}</div>
                <div class="clearfix"></div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="slider_company" style="overflow: hidden">
                            <div id="slider_company" style="position: relative; width: 660px; height: 305px;overflow: hidden;">
                                <div style="position: absolute; top: 0px; left: 0px; width: 660px; height: 305px; transform-origin: 0px 0px; transform: scale(1);">
                                    <div class="" style="position: relative; width: 660px; height: 305px; overflow: visible; top: 0px; left: 0px;">
                                        <div u="slides" style="position: absolute; top: 0px; left: 0px; width: 660px; height: 305px; overflow: hidden; z-index: 0;">
                                            <div debug-id="slide_container" style="position: absolute; z-index: 0; left: 0px; top: 0px;"></div>
                                        </div>
                                        <div u="slides" style="position: absolute; top: 0px; left: 0px; width: 660px; height: 305px; overflow: hidden; z-index: 0;" debug-id="slide-board">
                                            <div style="width: 660px; height: 305px; top: 0px; left: 0px; position: absolute; background-color: rgb(0, 0, 0); opacity: 0; display: none;"></div>
                                            <div debug-id="slide-0" style="width: 660px; height: 305px; top: 0px; left: 0px; position: absolute; overflow: hidden; transform: perspective(2000px);">
                                                <img u="image" src="/auth/2.jpg" border="0" style="width: 660px; height: 305px; top: 0px; left: 0px; transform: perspective(2000px); position: absolute;">
                                                <div style="width: 660px; height: 305px; top: 0px; left: 0px; z-index: 1000; display: none;"></div>
                                            </div>
                                            <div debug-id="slide-1" style="width: 660px; height: 305px; top: 0px; left: 660px; position: absolute; overflow: hidden; transform: perspective(2000px);">
                                                <img u="image" src="/auth/2.jpg" border="0" style="width: 660px; height: 305px; top: 0px; left: 0px; transform: perspective(2000px); position: absolute;">
                                                <div style="width: 660px; height: 305px; top: 0px; left: 0px; z-index: 1000; display: none;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="row">
                        <div class="login_frm">
                            @yield('content')
                            <div class="clear"></div>
                            <br/>
                            <div style="padding-top: 15px">
                                <b>Hỗ trơ kỹ thuật</b>
                                <br> Điện thoại: 036 365 1500
                                <br> Email: quangtienvkt@gmail.com
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hr clearfix"></div>
            </div>
        </article>
        <div class="clearfix"></div>
        <footer class="footer_login">
            <b style="font-weight:bold">CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ TRUYỀN THÔNG HT VIỆT NAM</b>
            <br>
            <span>
                Địa chỉ: 5/12 Nguyễn Khuyến - Văn Quán - Hà Đông |
                Điện thoại: 036 365 1500 | 
                Email: info@htmedia.vn
            </span>
        </footer>
    </div>

    <div id="_loading" class="_hidden">
        <img src="/backend/img/loading01.gif"/>
    </div>
</body>
</html>
