
(function() {
    'use strict';

    $(initRipple);

    function initRipple() {
        $('.ripple').each(function(){
            new Ripple($(this));
        });
    }

})();
