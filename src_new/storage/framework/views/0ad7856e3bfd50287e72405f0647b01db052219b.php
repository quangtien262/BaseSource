<?php $__env->startSection('content'); ?>

<?php echo $__env->make('Frontend.Elements.Home.slide', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>



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

            

            <?php echo $__env->make('Frontend.Elements.Home.productByCategory', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

        </div>
    </main>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('Frontend.Layouts.main', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>