<nav>
    <ul class="visible-xs visible-sm">
        <li><a class="menu-link menu-link-slide" id="sidebar-toggler" href="#"><span><em></em></span></a></li>
    </ul>
    <ul class="hidden-xs">
        <li><a class="menu-link menu-link-slide" id="offcanvas-toggler" href="#"><span><em></em></span></a></li>
    </ul>
    <ul class="pull-right">
        <li class="dropdown">
            <a class="dropdown-toggle has-badge ripple" href="#" data-toggle="dropdown">
                Chào {{ \Auth::user()->name }}
                <em class="ion-person"></em>
            </a>
            <ul class="dropdown-menu dropdown-menu-right md-dropdown-menu">
                <li>
                    <a onclick="loadDataPopup('{{ route('formRow', [35, \Auth::user()->id]) }}')" data-toggle="modal" data-target=".bs-modal-lg">
                        <em class="ion-gear-b icon-fw"></em>
                        Thông tin cá nhân
                    </a>
                </li>
                <li class="divider" role="presentation"></li>
                <li><a href="{{ route('logout') }}"><em class="ion-log-out icon-fw"></em>Thoát</a></li>
            </ul>
        </li>
        <li><a class="ripple" id="header-settings" href="#"><em class="ion-gear-b"></em></a></li>
    </ul>
</nav>