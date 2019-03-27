<!DOCTYPE html>
<html >
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <!-- /Added by HTTrack -->
    <head lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title><?php echo e(isset($title) ? $title : $config->title); ?></title>
        <meta http-equiv="Content-Language" content="vn"/>
        <meta name="description" content="<?php echo e(isset($description) ? $description : $config->description); ?>"/>
        <meta name="keywords" content="<?php echo e(isset($keyword) ? $keyword : $config->keyword); ?>"/>

        <meta name="DC.title" content="Ha Noi" />
        <meta name="geo.region" content="VN-HN" />
        <meta name="geo.placename" content="Hanoi" />
        <!-- mobile color -->
        <meta name="theme-color" content="#ed1c24">
        <meta name="msapplication-navbutton-color" content="#ed1c24">
        <meta name="apple-mobile-web-app-status-bar-style" content="#ed1c24">
        <link rel="icon" sizes="180x180" href="../icon.png">
        <meta property="fb:app_id" content="419850518112550"/>
        <link rel="stylesheet" type="text/css" href="/frontend/css/base-3.6.6.min.css"/>
        <link rel="stylesheet" type="text/css" href="/frontend/css/app01.css"/>
        <link rel="stylesheet" type="text/css" href="/frontend/css/app-8.2.5.min.css"/>
        <link rel="stylesheet" type="text/css" href="/vendor/font-awesome/css/font-awesome.min.css"/>
            <link rel="stylesheet" type="text/css" href="/frontend/css/site.css"/>
        <?php if(!\Agent::isMobile()): ?>
            <link rel="stylesheet" type="text/css" href="/frontend/css/fix_pc.css"/>
        <?php else: ?>
            <link rel="stylesheet" type="text/css" href="/frontend/css/fix_mobile.css"/>
        <?php endif; ?>
        <!-- Javascript -->

    </head>
    <body class="page-home <?php echo e(\Request::route()->getName()); ?>">

        <?php echo $__env->make('Frontend.Elements.Layout.navTop', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

        <div id="hd-container" class="hd-container">
            <a class="toggle-nav visible-xs visible-sm" data-target="#hd-container" data-effect="hd-effect-4"><i
                    class="hd hd-remove"></i></a>
            <div class="hd-menu hd-effect-4 visible-xs visible-sm">
                <div class="hd-menu-container">
                    <div class="profile">
                        <div class="profile__avatar">
                            <!--<img class="img-circle" src="../assets/img/no-avatar.gif" alt="" />-->
                        </div>
                        <div class="profile__info">
                            <div class="text-center" id="mobile_user_header"></div>
                        </div>
                    </div>
                    <nav class="side-nav">
                        <?php echo app('ClassCategory')->htmlMenuMobile(); ?>

                    </nav>
                    <div class="hotline">
                        <span class="hotline__text">HOTLINE</span>
                        <span class="hotline__number"><?php echo e($config->phone); ?></span>
                    </div>
                </div>
            </div>
            <div class="hd-pusher">
                <div class="hd-content">
                    <div class="hd-content-inner">
                        <div id="page-wrapper">
                            <div class="hd-touch-layer"></div>
                            <header id="header" class="header clearfix">
                                <div class="header__main  clearfix">
                                    <div class="container">
                                        <div class="row">
                                            <a class="toggle-nav visible-xs visible-sm" data-target="#hd-container" data-effect="hd-effect-4"><i class="hd hd-nav"></i></a>
                                            <a class="toggle-search visible-xs visible-sm" data-target="#main-search"><i class="hd hd-search"></i></a>
                                            <div id="logo" class="logo-wrapper col-md-4">
                                                <a href="/">
                                                    <img src="<?php echo e($config->logo); ?>">
                                                </a>
                                            </div>
                                            <div style="padding-left: 10px;" class="search-area col-md-6 " id="main-search">
                                                <form id="form-user_v1" action="/tim-kiem.html" name="form-user_v1">
                                                        <div class="typeahead__container">
                                                            <div class="typeahead__field">

                                                                <span class="typeahead__query">
                                                                    <input style="font-size: 1.5em; height: 2.44em" class="js-typeahead-user_v1" name="q" type="search" placeholder="Tìm kiếm nhanh theo từ khóa" autocomplete="off">
                                                                </span>
                                                                <span class="typeahead__button">
                                                                    <button type="submit">
                                                                        <i style="font-size: 2em" class="typeahead__search-icon"></i>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </form>
                                            </div>
                                            
                                            <script type="text/javascript" src="/vendor/jquery/dist/jquery.js"></script>
                                            <link rel="stylesheet" type="text/css" href="/vendor/jquery-typeahead-2.10.4/dist/jquery.typeahead.min.css"/>
                                            <script type="text/javascript" src="/vendor/jquery-typeahead-2.10.4/dist/jquery.typeahead.min.js"></script>
                                            <!--<script type="text/javascript" src="/vendor/typeahead/typehead-bootstrap3.js"></script>-->
                                            <script type="text/javascript" src="/frontend/js/typehead.js"></script>
                                            
                                            
                                            <div class="col-md-2 header-cart-wrapper ">
                                                <ul class="header-cart">
                                                    <li class="nav-cart">
                                                        <a href="#" data-toggle="dropdown"><i class="hd hd-cart"></i><span class="circle"><?php echo e(\Cart::content()->count()); ?></span> <span class="hidden-xs hidden-sm">Giỏ hàng</span></a>
                                                        <div class="dropdown-menu dropdown-cart" role="menu">
                                                            <div class="minicart__wrapper">
                                                            </div>
                                                            <div class="minicart__summary">
                                                                Tổng cộng: 
                                                                <strong>
                                                                    <span class="price price--highlight">
                                                                        
                                                                        <?php 
                                                                            $total = 0;
                                                                            foreach(\Cart::content() as $row){
                                                                                $total = $total+($row->options->count * $row->price);
                                                                            }
                                                                         ?>
                                                                        <span class="price__value"><?php echo e($total); ?></span>
                                                                        <span class="price__symbol">đ</span>
                                                                    </span>
                                                                </strong>
                                                            </div>
                                                            <div class="minicart__actions">
                                                                <a class="btn btn--view-cart" href="<?php echo e(route('cart')); ?>">Xem giỏ hàng</a>
                                                                <a class="btn btn-success btn--buy-now-new" 
                                                                   style="color: #fff; float: right; padding-left: 10px; padding-right: 10px"
                                                                   href="<?php echo e(route('cart')); ?>" >Đặt hàng</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <?php echo $__env->make('Frontend.Elements.Layout.menu', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                            </header>

                            <?php echo $__env->yieldContent('content'); ?>

                            <footer id="footer" class="footer-new clearfix">
                                <?php echo $__env->make('Frontend.Elements.Layout.footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#top" data-offset="300" class="btn btn-default btn--to-top to-top"><i class="fa fa-arrow-up"></i></a>
        
        <script type="text/javascript" src="/frontend/js/base-3.6.6.min.js"></script>
<!--        <script type="text/javascript" src="/vendor/jquery/dist/jquery.js"></script>
        <script type="text/javascript" src="/vendor/cycle/jquery.cycle.all.js"></script>
        <script type="text/javascript" src="/vendor/bootstrap/dist/js/bootstrap.js"></script>-->
        
        <script type="text/javascript" src="/frontend/js/app-8.2.5.min.js"></script>
        
        <script>
            
            function YNconfirm(url, msg) { 

                if (window.confirm(msg))
                {
                    redirectUrl(url);
                    return true;
                }
                else {
                    return false;
                }
                   
            };
        </script>
    </body>
</html>