@extends('Frontend.Layouts.main')

@section('styleSheet')
    @include('Frontend.Elements.Landingpage.stylesheet')
@stop

@section('script')
    @include('Frontend.Elements.Landingpage.script')
@stop

@section('content')

<div class="content-detailDuAn">
	<div class="background-Search-detailDuAn">
		
		<div class="link-lienHe-scroll">
			<i class="fa fa-envelope-o" aria-hidden="true"></i>
			<a href="javascript:void (0)" type="button">Gửi yêu liên hệ</a>
		</div>
	</div>
	<div class="breadcrumb-page">
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<a href="/">Trang chủ</a>
			</li>
			<li class="breadcrumb-item">
				<a href="">Dự án</a>
			</li>
			<li class="breadcrumb-item active">
				Flamingo Cát Bà Beach Resort
			</li>
		</ol>
	</div>
	<div class="content-menuResponsive">
		<div class="background-menuResponsive">
			<div class="col-xs-4 item-menuRes it-clickMenuRes">
				<div class="content-iconRes">
					<div class="menu-res-off">
						<div class="item-icon-menuRes">
							<img src="/frontend/images/icon/click-menu-left20995.png" alt="">
						</div>
					</div>
					<div class="menu-res-on">
						<div class="item-icon-menuRes">
							<img src="/frontend/images/icon/close-menu-left0995.png" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-4 item-menuRes">
				<div class="content-iconRes">
					<div class="item-icon-menuRes">
						<a href="/">
							<img src="/frontend/images/icon/menu-home20995.png">
						</a>
					</div>
				</div>
			</div>
			<div class="contentDropMenu">
				<div class="cnt-menuRes itemDropdown">
					<ul>
						@if(isset($dataLandingpage['blocks33']))
							@foreach($dataLandingpage['blocks33'] as $blockId)
								<?php
								if($blockId >=1 && $blockId <=3){
									$titleBlock = $dataLandingpage['title_3' . $blockId][App::getLocale()];
								}
								if($blockId ==4){
									$titleBlock = $dataLandingpage['title_img_34'][0][App::getLocale()];
								}
								if($blockId >=5 && $blockId <=6){
									$titleBlock = $dataLandingpage['big_title3' . $blockId][App::getLocale()];
								}
								?>
								<li class="active"><a id="landBlock0{{ $blockId }}Link" href="#">{{ $titleBlock }}</a></li>
							@endforeach
						@endif
						
						<li class="menuLeft-item"><a id="landBlock07Link" href="#">Tin tức</a></li>
						<li class="menuLeft-item"><a id="landBlock08Link" href="#">Liên hệ</a></li>
						<li class="menuLeft-item"><a id="landBlock09Link" href="#">Tin dự án</a></li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content-siteDetailDuAn">
		<!--Sidebar left-->
		<div class="content-sidebar-menuLeft">
			<div class="sidebar-left-detailDuAn">
				<div class="sidebar-left">
					<div class="background-sidebar-left">
						<div class="menuLeft-detailDuAn">
							<div class="click-slide-menuLeft menu-sider-off">
								<img src="/jinnV2/images/icon/click-menu-left0995.png?v=0.9.0.4" class="menu-on">
								<img src="/jinnV2/images/icon/click-menu-left20995.png?v=0.9.0.4" class="menu-off">
							</div>
							<div class="click-slide-menuLeft menu-sider-on">
								<img src="/jinnV2/images/icon/close-menu-left0995.png?v=0.9.0.4" class="menu-on">
								<img src="/jinnV2/images/icon/close-menu-left-20995.png?v=0.9.0.4" class="menu-off">
							</div>
						</div>
						<div class="dot-menu-titleSection">
							<div class="dot-menu">
								<ul>
									
									@if(isset($dataLandingpage['blocks33']))
										@foreach($dataLandingpage['blocks33'] as $blockId)
										
											<li id="landBlock0{{ $blockId }}Dot" class="item-dot"><a href="javascript: void (0)"></a></li>
											
										@endforeach
									@endif
									
									<li id="landBlock07Dot" class="item-dot">
										<a href="javascript: void (0)"></a>
									</li>
									<li id="landBlock08Dot" class="item-dot">
										<a href="javascript: void (0)"></a>
									</li>
									<li id="landBlock09Dot" class="item-dot">
										<a href="javascript: void (0)"></a>
									</li>
								</ul>
							</div>
							<div class="title-sectionLeft">Tổng quan dự án</div>
						</div>
					</div>
				</div>
			</div>
			<!--Site menu left-->
			<div class="site-menuLeft">
				<div class="content-side-MenuLeft">
					<ul>
<!--						<h2>Tiêu đề project</h2>-->
						@if(isset($dataLandingpage['blocks33']))
							@foreach($dataLandingpage['blocks33'] as $idx => $blockId)
								<?php
								if($blockId >=1 && $blockId <=3){
									$titleBlock = $dataLandingpage['title_3' . $blockId][App::getLocale()];
								}
								if($blockId ==4){
									$titleBlock = $dataLandingpage['title_img_34'][0][App::getLocale()];
								}
								if($blockId >=5 && $blockId <=6){
									$titleBlock = $dataLandingpage['big_title3' . $blockId][App::getLocale()];
								}
								?>
								<li class="menuLeft-item"><a id="landBlock0{{ $blockId }}Link" href="#">{{ $titleBlock }}</a></li>
							@endforeach
						@endif
						<li class="menuLeft-item"><a id="landBlock07Link" href="#">Tin tức</a></li>
						<li class="menuLeft-item"><a id="landBlock08Link" href="#">Liên hệ</a></li>
						<li class="menuLeft-item"><a id="landBlock09Link" href="#">Tin dự án</a></li>
					</ul>
					@include('Frontend.News.landSocial')
				</div>
			</div>
		</div>
		<!--Content Detail 1-->

		{!! $news->content !!}

		@include('Frontend.News.landBlock07_news')

		@include('Frontend.News.landBlock08_contact')

		@include('Frontend.News.landBlock09_project')
	</div>
</div>


<footer class="footer-site">
	<div class="background-footer">
		<div class="container-footer">
			<div class="footer-desktop">
				<div class="content-logo-footer-desktop">
					<a href="">
						<img src="/logo/linkvietnam-51.png">
					</a>
					<div class="copyright-footer-desktop">Copyright &copy; JINN 2015 All Rights Reserved </div>
				</div>

				@include('Frontend.Elements.Home.footer')


			</div>
			@include('Frontend.Elements.Home.footerMobile')
		</div>
	</div>
</footer>

@stop