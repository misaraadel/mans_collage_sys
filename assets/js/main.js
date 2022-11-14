$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.toggler').click(function(){
        $('.toggler').toggleClass('active');
        $('.side-nav').toggleClass('active-side-nav');
        $('.top-nav').toggleClass('active-top-nav');
        $('.main-contain').toggleClass('active-main');
    });

    $('.side-nav .close-nav').click(function(){
        $('.toggler').removeClass('active');
        $('.side-nav').removeClass('active-side-nav');
        $('.top-nav').removeClass('active-top-nav');
        $('.main-contain').removeClass('active-main');
    });

    $('.side-nav .overlay').click(function(){
        $('.toggler').removeClass('active');
        $('.side-nav').removeClass('active-side-nav');
        $('.top-nav').removeClass('active-top-nav');
        $('.main-contain').removeClass('active-main');
    });

    $('.owl-doctors').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});