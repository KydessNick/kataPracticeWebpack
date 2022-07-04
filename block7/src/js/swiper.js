 
export var swiper= Swiper;
export var init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1074px)');
let desktop = window.matchMedia('(min-width: 1075px)');

const repairSwiper = new Swiper('.repair__container', {
    enabled: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints:{
        912:{
            enabled: false
        }
    },
    slidesPerView: 'auto' ,
    spaceBetween: 35,
    watchOverFlow: true,
})

const pricesSwiper = new Swiper('.prices__list-swiper', {
    enabled: true,
    breakpoints:{
        767:{
            enabled: false
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 35,
    watchOverFlow: true,
})
    const servisecSwiper = new Swiper('.services__container', {
                slidesPerView:'auto',
                spaceBetween: 35,
                watchOverFlow: true,
            })
            const brendsSwipee = new Swiper('.brends__list--swiper', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                slidesPerView: 'auto' ,
                spaceBetween: 35,
                watchOverFlow: true,
            })







/*

new Swiper('.services__container', {
    slidesPerView: 'auto' ,
    spaceBetween: 35,
    watchOverFlow: true,
})

new Swiper('.brends__list--swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 'auto' ,
    spaceBetween: 35,
    watchOverFlow: true,
})
*/