
(function() {
    'use strict';

    $(runMasonry);

    function runMasonry() {

        if( ! $.fn.imagesLoaded ) return;

        // init Masonry after all images have loaded
        var $grid = $('.grid').imagesLoaded(function() {
            $grid.masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        });
    }

})();