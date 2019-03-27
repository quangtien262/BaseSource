<div class="footer-top">
    <div class="container">
        <div class="row">
            <div class="visible-xs visible-sm">
                <div class="hotline">
                    <span class="hotline__text">HOTLINE&nbsp;</span>
                    <span class="hotline__number">{{ $config->phone }}</span>
                </div>
            </div>
            <div class="col-md-8">
                {!! app('ClassBlock')->getHtmlLinkFooter() !!}
                
                <div class="col-md-4 col-b-left">
                    <ul>
                        <li>
                            <img style="width: 100%" src="{{ $config->video_home }}">
                            <p>link vào mã QR code chia sẻ.</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="col-md-4 location">
                @php
                    $contact = app('ClassBlock')->getBlockByType('contact');
                @endphp
                
                @foreach($contact as $idx => $ct)
                    <p>{!! $ct->name !!}</p>
                    {!! $ct->description !!}
                @endforeach
                <span>Hotline:  <a href="tel:{{ $config->phone }}">{{ $config->phone }}</a></span>

                <span>Email: <a href="mailto:{{ $config->email }}">{{ $config->email }}</a></span>

            </div>
        </div>
    </div>
</div>

<div class="footer-bottom ">
    <div class="container">
        <div class="col-md-10">
            <br>
            {!! $config->description_product !!}
        </div>
    </div>
</div>