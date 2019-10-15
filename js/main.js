

(function ($) {
    'use strict';


    //jQuery MeanMenu

    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

    //wow js active
    new WOW().init();

    //Sticky Header
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $('#sticky-header-with-topbar').removeClass("scroll-header");
            $('body.sup-page').removeClass("body-header");
        } else {
            $('#sticky-header-with-topbar').addClass("scroll-header");
            $('body.sup-page').addClass("body-header");
        }
    });

    // Slider Activation
    $(".slider-active").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });
    //Brand carousel Slider
    $('.our__events').owlCarousel({
        loop: true,
        margin:20,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        autoplay: true,
        items: 2,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1199: {
                items: 2,
            }
        }
    });
    $('.our__product').owlCarousel({
        loop: true,
        margin:20,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        autoplay: true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1199: {
                items: 3,
            }
        }
    });
    //Brand carousel Slider
    $('.our__brand_list').owlCarousel({
        loop: true,
        nav: false,
        // navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        autoplay: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1199: {
                items: 4,
            }
        }
    });


    //Services carousel Slider

    $('.services__list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    //magnificPopup active
    $('.play_video a,.play_button_inner > a').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });


    //NiceSelect
    $('.doctor_select_inner select,.input_mobile_number select').niceSelect();

    //Blog Masonry activation
    $('.blog-masonry').imagesLoaded(function () {
        var $grid = $('.blog-masonry').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });

    //ScrollUp
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);
