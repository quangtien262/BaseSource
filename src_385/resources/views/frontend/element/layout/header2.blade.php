<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            @php $config = app('EntityCommon')->getDataById('configweb', 1);  @endphp
            <a href="/"><img id="logo" src="{{ $config->logo }}"></a>
            {!! app('ClassCategory')->htmlCategory() !!}
            <ul class="nav navbar-nav navbar-right">
                {{-- <li>
                    <a>
                        <div class="topnav">

                            <div class="search-container">
                                <form action="">
                                    <input type="text" placeholder="Tìm kiếm..." name="keyword">
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </a>
                </li> --}}
                @if(\Auth::check())
                    <li><a class="active">Chào <b>{{ \Auth::user()->name }}</b></a></li>
                    <li>
                        <a href="{{ route('logout') }}" title="Trang cá nhân">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('logout') }}" title="logout">
                            <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                        </a>
                    </li>
                @else
                    <li><a onclick="loadUrl('{{ route('login2Frontend') }}', '.modal-content')" data-toggle="modal" data-target="#myModal">Đăng nhập</a></li>
                    <li><a onclick="loadUrl('{{ route('register2Frontend') }}','.modal-content')" data-toggle="modal" data-target="#myModal">Đăng ký</a></li>
                @endif
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
</nav>


<!--<ul class="nav navbar-nav navbar-right">
                <li><a href=""><div class="topnav">

                            <div class="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Search.." name="search">
                                    <button  type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div></a></li>
                <li><a href="">Static top</a></li>
                <li class="active"><a href="">Fixed top <span class="sr-only">(current)</span></a></li>
            </ul>-->