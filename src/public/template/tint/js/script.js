$(document).ready(function () {
  
    $("img.3D").addClass("hidden");
    $("img.2D").removeClass("hidden");
    $("ul.list-tab li.phoicanh2d").addClass('active');
    $("ul.list-tab li.phoicanh2d").click(function () {
        $("ul.list-tab li").removeClass('active');
        $("ul.list-tab li.phoicanh2d").addClass('active');
        $("img.2D").removeClass("hidden");
        $("img.3D").addClass("hidden");
        return false;
    })
    $("ul.list-tab li.phoicanh3d").click(function () {
        $("ul.list-tab li").removeClass('active');
        $("ul.list-tab li.phoicanh3d").addClass('active');
        $("img.3D").removeClass("hidden");
        $("img.2D").addClass("hidden");
        return false;
    })
});

jQuery(document).ready(function ($) {
    if ($("#page-tong-quan").length < 1) {
        $("#gotop").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        })
    }
    if ($("#page-tong-quan").attr('href', 'slider')){
        $('#gotop').fadeIn();
    } else {

        $('#gotop').fadeOut();
    }
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
              
                $('#gotop').fadeIn();
            } else {
              
                $('#gotop').fadeOut();
            }
        });

    if ($(".google_map").length > 0) $(".google_map").fancybox({ type: 'iframe', width: 1600, height: 900 });
    function resizeImgCover() {
        $(".img-cover").each(function () {
            var container_img_cover = $(this);
            var img_cover = container_img_cover.children("img");
            var img = new Image();
            img.src = img_cover.attr("src");

            var widthCIC = container_img_cover.width();
            var heightCIC = container_img_cover.height();
            var widthIC = img.width;
            var heightIC = img.height;

            var widthAfter = widthIC;
            var heightAffter = heightIC;

            if (widthIC / widthCIC > heightIC / heightCIC) {
                heightAffter = heightCIC;
                widthAfter = heightAffter * widthIC / heightIC;
            }
            else {
                widthAfter = widthCIC;
                heightAffter = widthAfter * heightIC / widthIC;
            }

            img_cover.css({ width: widthAfter, height: heightAffter });
        });
    }
    resizeImgCover();
    $(window).resize(function () {
        resizeImgCover();
    })
});


jQuery(document).ready(function ($) {

    var slider_container = $("section.slider ul.bx-slider");
    var slider_item = $("section.slider ul.bx-slider > li");
    var slider_pager = $("section.slider .control .pager");
    var container_headline = $("section.slider .headline .container-headline");
    var slidethietke = $(".slider.canho .bxslider li");
    $('.slider.canho .bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 1000,
        pause: 5000,
        captions: false,
        pager: false,
        controls: true,
        onsliderload: function (currentindex) {
            var title = "";
            title = $(slidethietke[currentindex]).data("title");
            $(".home-slidecanho.canho").append("<div></div>");
            $(".home-slidecanho.canho .slide-content .doanimation").addclass("animated");
        },
        onslidebefore: function ($slideelement, oldindex, newindex) {
            if (newindex < $(slidethietke).length - 1) {
                src = $(slidethietke[newindex + 1]).data("src");
            } else {
                src = $(slidethietke[0]).data("src");
            }
            $(".bx-controls-direction .next-thumb img").attr("src", src);
            title = $(slidethietke[newindex]).data("title");
            $(".home-slidecanho.canho .slide-content").html(title);
            $(".home-slidecanho.canho .slide-content .doanimation").addclass("animated go");
        }
    });
    if (slider_container.length > 0) {
        slider_container.bxSlider({
            mode: 'fade',
            auto: true,
            pause: 5000,
            speed: 1500,
            pager: false,
            nextText: 'NEXT <i class="fa fa-arrow-right" aria-hidden="true"></i>',
            nextSelector: 'section.slider .control .next-prev .next',
            prevText: '<i class="fa fa-arrow-left" aria-hidden="true"></i> PREV',
            prevSelector: 'section.slider .control .next-prev .prev',
            onSliderLoad: function (currentIndex) {
                slider_pager.text((currentIndex + 1) + " - " + getNumSlide());
                setHeadline(currentIndex);
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                slider_pager.text((newIndex + 1) + " - " + getNumSlide());
                setHeadline(newIndex);
            }
        });
       
        function getNumSlide() {
            return slider_item.length;
        }
        function setHeadline(index) {
            var title = $(slider_item[index]).data("title");
            var description = $(slider_item[index]).data("description");
            var html_container_headline = '<span class="line animated fadeInLeft go"></span><h1 class="animated fadeInUpShort delay-250 go">' + title + '</h1>'
                + '<p class="animated fadeInUpShort delay-500 go">' + description + '</p>';
            container_headline.html(html_container_headline);
        }
    }

    /*************** SET MENU HOVER *************/
    var img_hover = $("#main-menu .menu > ul").data("img-hover");
    menuItems = $("#main-menu .menu > ul > li");
    menuItems.prepend("<div style='background-image: url(" + img_hover + ")' class='img-hover'></div>");
    menuItems.css({ "width": (100 / menuItems.length + "%") });
    setBgActiveMenu();
    $(window).resize(function () {
        setBgActiveMenu();
    });
    function setBgActiveMenu() {
        menuItems.each(function (index, el) {
            var widthPrev = - $(this).prev().find('.img-hover').width();
            $(this).find('.img-hover').css({ 'left': widthPrev + "px" });
        });
    }

    function getHeight(e) {
        var height = 0;
        e.children().each(function (index, el) {
            height += $(this).outerHeight(true);
        });
        return height;
    }
    function activeItem(element, callback = null) {
        $(element).addClass('hover');
        var height = getHeight($(element).find('.dropdown'));
        // alert($(element).find('.dropdown').height());
        if (!$(element).hasClass("active")) {
            $(element).find('.dropdown').css({ "height": height + "px" });
        }
    }
    function inactiveItem(element, callback = null) {
        $(element).removeClass('hover');
        if (!$(element).hasClass("active")) {
            $(element).find('.dropdown').css({ "height": "0px" });
        }
    }
    $("#main-menu .menu > ul > li").each(function (index) {
        $(this).hover(function (event) {
            activeItem(this);
        }, function (event) {
            inactiveItem(this);
        });
    });
    $(document).ready(function () {

        if ($(window).width() <= 1680) {
            $('#page-about li.content-loiich').slideUp();
        }
        else {
            $('#page-about li.content-loiich').slideDown();
        }
        $('#page-about li.title').addClass('down');
        $('#page-about li.title').click(function listloiich(event) {
            //$('li.content-loiich').slideUp();
            //$('li.title').removeClass('up').addClass('down');
            //$(this).toggleClass('down').toggleClass('up');

            $(this).next().slideToggle();
        });

    });


    /*************** MENU *******************/
    $("a#menu").click(function () {
        $($(".open-menu").data("id")).addClass("open");
    })
    $(".close-menu").click(function () {
        $($(this).data("id")).removeClass("open");
    })
    function setHeightSection() {
        var height = $(window).height();
        $(".fullpage .section").height(height);
    }
    setHeightSection();
    function setHeightOverlay() {
        var height = $(".fullpage .section.slide-5 .property").height();
        $(".fullpage .section.slide-5 .bg-overlay").height(height);
    }
    setHeightOverlay();
    $(window).resize(function () {
        setHeightSection();
        setHeightOverlay();
    })
    $(".fullpage .section.slide-5 .property").on("mouseover", function () {
        $(this).find(".doanimation").removeClass("go");
        var t = $(this);
        setTimeout(function () {
            t.find(".doanimation").addClass("go");
        }, 100);
    });
});

jQuery(document).ready(function ($) {
    var slider = $(".slider .bxslider");
    slider.bxSlider({
        auto: true,
        pause: 5000,
        speed: 1500,
        pager: true,
        controls: false
    });
});


/**************** SECTION PRIVILEGE **************/
jQuery(document).ready(function ($) {
    var gallery = $("section.privilege .gallery #carousel");
    var items = gallery.children();
    gallery.find("a").click(function () {
        return false;
    })
    setTitleImgGallery($(items[0]).data("title"));
    gallery.nvh_slider({
        width: 1140,
        left: 180,
        right: 180,
        beforeChange: function (currentIndex, nextIndex) {
            $('.gallery .title .text').removeClass("go");
        },
        afterChange: function (currentIndex) {
            var $item = $(items[currentIndex]);
            if (hasTag()) {
                $(".tag-gallery .tag-img").removeClass("active");
                $(".tag-img[data-id=" + $item.attr("id") + "]").addClass('active');
            }
            setTitleImgGallery($item.data("title"));
            $('.gallery .title .text').addClass("go");
        },
        responsive: [
            { window: 1500, width: 1000, left: 70, right: 70 },
            { window: 1200, width: 800, left: 70, right: 70 },
            { window: 991, width: 600, left: 60, right: 60 },
            { window: 767, width: .8, left: 0.1, right: 0.1 }
        ]
    });

    if (hasTag())
        $(".tag-gallery .tag-img").click(function (event) {
            $(".tag-gallery .tag-img").removeClass("active");
            $(this).addClass('active');
            var active_image = $("#" + $(this).data("id"));
            gallery.slideElement(active_image);
        });

    function hasTag() {
        return $(".tag-gallery .tag-img").length > 0;
    }

    function setTitleImgGallery(title) {
        $('.gallery .title .text').html(title);
    }
});


jQuery(document).ready(function ($) {
    var slider = $("#page-thu-vien-video section.content ul.slider");
    var items = $("#page-thu-vien-video section.content ul.slider > li");
    var title = $('#page-thu-vien-video section.content .title');
    if (slider.length > 0) {
        slider.bxSlider({
            auto: false,
            pause: 5000,
            speed: 1000,
            pager: true,
            controls: false,
            onSliderLoad: function (currentIndex) {
                title.html($(items[currentIndex]).data("title"));
                title.addClass('go');
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                title.html($(items[newIndex]).data("title"));
                title.removeClass('go');
            },
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                title.addClass('go');
            }
        });
    }
});
