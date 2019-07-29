@php $data = json_decode($landingPage->data, true); @endphp

@php $random =  app('ClassCommon')->generateRandomString(); @endphp
<section style="width:100%; float:left">
<h2>{{ $data['title'] or '' }}</h2>
<div class="carousel slide" id="myCarousel_{{ $random }}">
          <div class="carousel-inner">
               @if(is_array($data) && !empty($data['name'])) 
               @php 
                    $countData = count($data['name']); 
                    $idx = 0;
                    $first = 0;
               @endphp
                    @for($i=0; $i<$countData; $i++)
                         @php 
                         $idx++; 
                         $first++;
                         @endphp
                         @if($idx == 1)
                         <div class="item main_item_pro {{ $first == 1 ? 'active':'' }}">
                              <div class="thumbnails">
                                   <div style=" padding-left:0px!important;margin-right:0px!important; padding-top: 25px;" class="col-xs-6 col-sm-3 content_sp">
                                        <img style='width:270px;height:161px;' src='{{ $data['image'][$i] }}'>
                                        <div style="margin-top: 40px" class="ct">
                                             <b><a style="text-transform: uppercase" href="{{ $data['path'][$i] }}">{{ $data['name'][$i] }}</a></b>
                                             <p>{!! $data['description'][$i] !!}</p>
                                        </div>
                                   </div>
                              
                         @endif
                         
                              @if($idx == 2 || $idx == 3)
                                   <div style=" padding-left:0px!important;margin-right:0px!important; padding-top: 25px;" class="col-xs-6 col-sm-3 content_sp">
                                        <img style='width:270px;height:161px;' src='{{ $data['image'][$i] }}'>
                                        <div style="margin-top: 40px" class="ct">
                                             <b><a style="text-transform: uppercase" href="{{ $data['path'][$i] }}">{{ $data['name'][$i] }}</a></b>
                                             <p>{!! $data['description'][$i] !!}</p>
                                        </div>
                                   </div>
                         @endif

                         @if($idx == 4)
                                   <div style=" padding-left:0px!important;margin-right:0px!important; padding-top: 25px;" class="col-xs-6 col-sm-3 content_sp">
                                        <img style='width:270px;height:161px;' src='{{ $data['image'][$i] }}'>
                                        <div style="margin-top: 40px" class="ct">
                                             <b><a style="text-transform: uppercase" href="{{ $data['path'][$i] }}">{{ $data['name'][$i] }}</a></b>
                                             <p>{!! $data['description'][$i] !!}</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         @php $idx = 0; @endphp
                         @endif
                    @endfor
                    @if($idx == 1 || $idx == 2 || $idx == 3)
                         </div></div>
                    @endif
              @endif
         
          </div>
          
          <a class="left carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="prev" 
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-left"></span>
               <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" 
               href="#myCarousel_{{ $random }}" 
               data-slide="next"
               style="background-image: none;width:20px"> 
               <span class="glyphicon glyphicon-chevron-right"></span>
               <span class="sr-only">Next</span>
          </a>
     </div>
</div>
</section>