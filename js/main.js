
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
