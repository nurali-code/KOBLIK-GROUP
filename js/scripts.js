
$('.btn-menu').on('click', () => {
    $('header, body').toggleClass('active');
    $('body').prepend("<div class='overlay'></div>");
})

$('.btn-search').on('click', () => {
    $('body').prepend("<div class='overlay'></div>");
    if (window.innerWidth <= 1200) { $('body, header .nav').toggleClass('active'); }
    else { $('.search-form, body').toggleClass('active'); }
})

$('.services-btn').on('click', function () {
    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');
})

/*---------------------------------------------------end*/

$(window).scroll(function () {
    if ($(window).scrollTop() >= 270) $('header, body').addClass('fixed');
    else $('header, body').removeClass('fixed');
});

/*---------------------------------------------------end*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top, }, 500,)
})



/*---------------------------------------------------end*/

if ($('section').hasClass('slider')) {
    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             slidesToShow: 1,
        //             // centerMode: true,
        //             centerPadding: '0px',
        //             arrows: true,
        //         }
        //     },
        // ]
    });
}

/*---------------------------------------------------end*/

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
        $('body').addClass('active');
    }

    function hideModals() {
        $('.modal').fadeOut();
        $('.overlay').fadeOut(300)
        setTimeout(() => { $('.overlay').remove() }, 300)
        $('.search-form, header, body').removeClass('active');
    };

    $('[data-modal]').on('click', function (e) {
        e.preventDefault()
        showModal('#' + $(this).attr("data-modal"));
    });

    $(document).on('click', '.modal-close, .overlay, .m-close', () => {
        hideModals();
    });
    $('.modal-close_itself').on('click', function () {
        $(this).parents('.modal').fadeOut();
        $('body').removeClass('active')
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.open-modal').length) ||
            ($(e.target).parents('.nav').length) ||
            ($(e.target).parents('.btn-menu').length) ||
            ($(e.target).hasClass('btn-menu')) ||
            ($(e.target).hasClass('btn-search')) ||
            ($(e.target).hasClass('btn-list')) ||
            ($(e.target).hasClass('nav')) ||
            ($(e.target).hasClass('overlay')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('modal-content')) ||
            ($(e.target).hasClass('open-modal'))
        )) {
            hideModals();
            $('header .nav, body').removeClass('active')
        }
    });
});
/*---------------------------------------------------end*/

$('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

/*---------------------------------------------------end*/
