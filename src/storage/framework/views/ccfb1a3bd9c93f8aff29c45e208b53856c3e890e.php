<aside class="sidebar-container">
    <div class="sidebar-header">
        <div class="pull-right pt-lg text-muted hidden">
            <em class="ion-close-round"></em>
        </div>
        <a class="sidebar-header-logo" href="#">
            <img src="/img/logo.png" data-svg-replace="img/logo.svg" alt="Logo">
            <span class="sidebar-header-logo-text">Centric</span>
        </a>
    </div>
    <div class="sidebar-content">
        <nav class="sidebar-nav">
            <ul>
                <li>
                    <a class="ripple" href="<?php echo e(route('adminHome')); ?>">
                        <span class="nav-icon">
                            <img class="hidden" src="" data-svg-replace="/img/icons/aperture.svg" alt="MenuItem">
                        </span>
                        <span>Trang chủ</span>
                    </a>
                </li>
                
                <?php echo app('ClassTables')->getHtmlMenuAdmin(); ?>

                
                <li><a class="ripple" href="<?php echo e(route('configTbl')); ?>"><span class="nav-icon"><em class="ion-gear-b"></em></span><span>Config Table</span></a></li>
                <li>
                    <a class="ripple" href="/permissions">
                        <span class="nav-icon">
                            <img class="hidden" src="" data-svg-replace="/img/icons/aperture.svg" alt="MenuItem">
                        </span>
                        <span>Permission</span>
                    </a>
                </li>
                <li>
                    <a class="ripple" href="/roles">
                        <span class="nav-icon">
                            <img class="hidden" src="" data-svg-replace="/img/icons/aperture.svg" alt="MenuItem">
                        </span>
                        <span>roles</span>
                    </a>
                </li>
                <li>
                    <a class="ripple" href="/users">
                        <span class="nav-icon">
                            <img class="hidden" src="" data-svg-replace="/img/icons/aperture.svg" alt="MenuItem">
                        </span>
                        <span>User</span>
                    </a>
                </li>
                <!--            <li>
                                <a class="ripple" href="#"><span class="pull-right nav-caret"><em class="ion-ios-arrow-right"></em></span><span class="pull-right nav-label"></span><span class="nav-icon"><img class="hidden" src="" data-svg-replace="img/icons/navicon.svg" alt="MenuItem"></span><span>Tables</span></a>
                                <ul class="sidebar-subnav" id="tables">
                                    <li><a class="ripple" href="tables.classic.html"><span class="pull-right nav-label"></span><span>Classic</span></a></li>
                                    <li><a class="ripple" href="datatable.html"><span class="pull-right nav-label"></span><span>Datatable</span></a></li>
                                    <li><a class="ripple" href="bootgrid.html"><span class="pull-right nav-label"></span><span>Bootgrid</span></a></li>
                                </ul>
                            </li>-->
            </ul>
        </nav>
    </div>
</aside>