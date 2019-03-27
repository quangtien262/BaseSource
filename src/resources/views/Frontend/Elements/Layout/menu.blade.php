<nav class="header__navigation main-nav" id="main-nav">
    <div class="container">
        <ul class="nav main-nav">
            <li class="main-nav__branding active">
                <a class="branding__heading">

                    <span class="visible-affix">
                        <i class="fa fa-navicon"></i>
                    </span>

                    <span class="">Danh mục <i class="fa fa-angle-down"></i></span>
                </a>

                {!! app('ClassCategory')->htmlMenuProduct() !!}

            </li>

            {!! app('ClassCategory')->htmlMenuNews() !!}

        </ul>
        
    </div>
</nav>