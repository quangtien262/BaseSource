@extends('Frontend.Layouts.news02')

@section('styleSheet')
@include('Frontend.Elements.ListNews02.stylesheet')
@stop

@section('script')
@include('Frontend.Elements.ListNews02.script')
@stop

@section('content')
<div class="scrolltop-container">
	<span href="#" class="scroll-top-button glyphicon glyphicon-menu-up"></span>
</div>
<div class="breadcrumbs">
	<div class="container" >
		<a href="">Trang chủ</a>
		<span class="symbol">&gt;</span>
		<a class="current" href="projects.html">Dự án</a>
	</div>
</div>
<div class="container">
	<div class="list-post1 list-project">

		<div class="container">
			<div class="list-post1 list-project">
                @foreach($listNews as $news)
				<div class="item item-3 img-project">
					<div class="entry">
						<div class="image-item clearfix">
							<a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}">
								<div class="thumbnail-block col-xs-8">
									<div class="run-slides owl-carousel owl-loaded owl-drag">
										<div class="owl-stage-outer">
											<div class="owl-stage">
												<div class="owl-item active">
													<div class="item">
														<img class="lazyImage img-responsive project-list" 
                                                             data-src="{{ $news->image }}"  />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</a>
							<div class="caption col-xs-4">
								<div class="entry2 ">
									<div class="clearfix">
										<a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}">
											<h3 class="project-title">{{ $news->title }}</h3>
										</a>
										<div class="deskop" style="border-bottom: 1px solid #999;">
											<div class="line-icon">
												<span class="icon m_f_5 nopadding-responsive"><i class="jinn-icon jinn-address-black"></i></span>
											</div>
										</div>
										<div class="clearfix place-info">
											<div class="clearfix place-info">
                                                <br>
                                                {{ $news->description }}
                                            </div>
										</div>
									</div>
									<div class="project-bottom-bnt  hidendecktop">
										<a href="{{ route('detailNews',[$news->sluggable, $news->tid]) }}" class="project-button esta-button"> Xem chi tiết </a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                @endforeach
				<!-- start pagination -->
				<div class="pagination">
                    {!! $listNews->render() !!}
				</div>
				<!-- end pagination -->
			</div>
		</div>
	</div>
</div>

<div class="call-hotline">
	<a href="tel:{{$config->phone}}">
		<div class="background-call-hotline">
			<span class="rc_side_phone">
				<i class="fa fa-phone"></i>
			</span>
			<span class="number-hotline">{{$config->phone}}</span>
		</div>
	</a>
</div>



@stop