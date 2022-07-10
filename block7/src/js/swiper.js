 
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
        768:{
            enabled: false
        }
    },
    slidesPerView: 'auto' ,
    spaceBetween: 16,
    watchOverFlow: true,
})

const pricesSwiper = new Swiper('.prices-swiper__list', {
    enabled: true,
    breakpoints:{
        768:{
            enabled: false
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    watchOverFlow: true,
})
    const servisecSwiper = new Swiper('.services__container', {
                enabled: false,
                slidesPerView:'auto',
                spaceBetween: 16,
                watchOverFlow: true,
                breakpoints:{
                    1117:{
                        enabled: false
                    }
                },
            })
            const brendsSwiper = new Swiper('.brends__swiper-list', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                slidesPerView: 'auto' ,
                spaceBetween: 16,
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