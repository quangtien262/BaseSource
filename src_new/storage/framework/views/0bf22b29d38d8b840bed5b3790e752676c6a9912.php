<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="description" content="Bootstrap Admin Template">
        <meta name="keywords" content="app, responsive, jquery, bootstrap, dashboard, admin">
		<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <title><?php echo $__env->yieldContent('title'); ?></title>
        <?php echo $__env->make('Backend/Elements/Layout/stylesheet', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php echo $__env->yieldContent('styleAddon'); ?>
         <script>
			var route_file_manager = "/laravel-filemanager";
		 </script>
    </head>
    <body class="theme-1">
        <div class="layout-container">
            <!-- top navbar-->
            <header class="header-container">
                <nav>
                    <ul class="visible-xs visible-sm">
                        <li><a id="sidebar-toggler" href="#" class="menu-link menu-link-slide"><span><em></em></span></a></li>
                    </ul>
                    <ul class="hidden-xs">
                        <li><a id="offcanvas-toggler" href="#" class="menu-link menu-link-slide"><span><em></em></span></a></li>
                    </ul>
                    <h2 class="header-title">
                        <?php echo $__env->yieldContent('breadcrumb'); ?>
                    </h2>
                    <ul class="pull-right">
                        <li>
                            <a href="<?php echo e(route('adminListOrder')); ?>" class="ripple">
                                <em class="ion-card"></em>
                                Đơn đặt hàng
                                <b>(<?php echo e(app('ClassContact')->getCountNewContact()); ?>)</b>
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('adminListContact')); ?>" class="ripple">
                                <em class="ion-android-mail"></em>
                                Thư gửi liên hệ
                                <b>(<?php echo e(app('ClassContact')->getCountNewContact()); ?>)</b>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle has-badge ripple">
                                <em class="ion-person"></em>
                                <!--<sup class="badge bg-danger">3</sup>-->
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right md-dropdown-menu">
                                <li><a href="<?php echo e(url('admin/changeprofile')); ?>"><em class="ion-gear-a icon-fw""></em>Change password</a></li>
                                <li role="presentation" class="divider"></li>
                                <li><a href="<?php echo e(url('logout')); ?>"><em class="ion-log-out icon-fw"></em>Logout</a></li>
                            </ul>
                        </li>
                        <li>
                            <a id="header-settings" href="<?php echo e(url('admin/config-site')); ?>" class="ripple">
                                <em class="ion-gear-b"></em>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <!-- sidebar-->
            <aside class="sidebar-container">
                <div class="sidebar-header">
                    <div class="pull-right pt-lg text-muted hidden">
                        <em class="ion-close-round"></em>
                    </div>
                    <a href="#" class="sidebar-header-logo">
                        <img src="<?php echo e(url('backend/img/logo.png')); ?>" data-svg-replace="<?php echo e(url('backend/img/logo.svg')); ?>" alt="Logo">
                        <span class="sidebar-header-logo-text">Admin</span>
                    </a>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-toolbar text-center">
                        <?php echo $__env->yieldContent('avatar'); ?>
                    </div>
                    <nav class="sidebar-nav">
                        <?php echo $__env->make('Backend/Layouts/menuLeft', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                    </nav>
                </div>
            </aside>
            <div class="sidebar-layout-obfuscator"></div>
            <!-- Main section-->
            <main class="main-container">
                <section>
                    <?php echo $__env->yieldContent('content'); ?>
                </section>
                <!-- Page footer-->
                <footer><span>2016 - J-Job  </span></footer>
            </main>
        </div>
        
        <!-- Search template-->
        <div tabindex="-1" role="dialog" class="modal modal-top fade modal-search">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="pull-left">
                            <button type="button" data-dismiss="modal" class="btn btn-flat"><em class="ion-arrow-left-c icon-24"></em></button>
                        </div>
                        <div class="pull-right">
                            <button type="button" class="btn btn-flat"><em class="ion-android-microphone icon-24"></em></button>
                        </div>
                        <form action="#" class="oh">
                            <div class="mda-form-control pt0">
                                <input type="text" placeholder="Search.." data-localize="header.SEARCH" class="form-control header-input-search">
                                <div class="mda-form-control-line"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Search template-->

        <!-- Modal -->
        <div class="modal fade bs-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content modal-content02 popup-content"></div>
            </div>
        </div>

        <!--end settings template-->
        <!--Todo: include Backend/Layouts/setting-->
        <!-- End Settings template-->
        
        <?php echo $__env->make('Backend/Elements/Layout/script', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        
        <?php echo $__env->yieldContent('scriptAddon'); ?>
    </body>
</html>