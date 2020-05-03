$(function () {


    // fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(introH, scrollPos);

    });

    function checkScroll(introH, scrollPos) {
        if (scrollPos >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    // Smooth scroll
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffSet = $(elementId).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffSet - 65
        }, 700);
    });

    // nav toggle
    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
    });


    // reviews
    let slider = $('#reviewsSlider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    });

});