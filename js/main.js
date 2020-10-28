
var MySwiper = new Swiper('.work__slider', {
    autoHeight: true, //enable auto height
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
   // pagination: {
   //     el: '.swiper-pagination',
   //     clickable: true,
   // },
    navigation: {
        nextEl: '.work__next',
        prevEl: '.work__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
             pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 4,
        }
    }
});
var ReviewsSwiper = new Swiper('.reviews__slider', {
    //autoHeight: true, //enable auto height
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 4,
        }
    }
});
var swiper = new Swiper('.selection__slider', {
    //autoHeight: true, //enable auto height
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$('.footer__top').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
});
$(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, .overlay');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click(function () {
        modal
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});