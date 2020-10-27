
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
});
var swiper = new Swiper('.reviews__slider', {
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
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },
});
