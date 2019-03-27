@extends('Frontend.Layouts.main')

@section('content')

@include('Frontend.Elements.Home.slide')



    <script type="text/javascript" async="async">
        var images = [], slider_items = [];

        slider_items = document.getElementsByClassName('slider-item');

        if (window.screen.width < 768) {
            images = document.getElementsByClassName("div-mobile-layer");
        }

        if (images.length == 0) {
            images = document.getElementsByClassName("div-layer");
        }

        for (var j = 0; j < slider_items.length; j++) {
            slider_items[j].style.transform = "scale(" + Math.min(1, (window.screen.width / 750)) + ")";
        }

        for (var i = 0; i < images.length; i++) {
            var image = images[i];

            if (image.getAttribute('data-src')) {
                image.style.backgroundRepeat = 'no-repeat';
                image.style.backgroundImage = "url('" + image.getAttribute('data-src') + "')";
            }
        }
    </script>

    <main id="main" class="main-content clearfix">

        <div class="container">

            

            @include('Frontend.Elements.Home.productByCategory')

        </div>
    </main>
@stop