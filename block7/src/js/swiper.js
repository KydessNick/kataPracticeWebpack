 
export var swiper= Swiper;
export var init = false;



/* Which media query
**************************************************************/
export function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1074px)');
    
    let desktop = window.matchMedia('(min-width: 1075px)');

    // Enable (for mobile)
    if(mobile.matches || tablet.matches ) {
        if (!init) {
            init = true;
            swiper = new Swiper('.services__container', {
                slidesPerView:'auto',
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

    } 
    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
    //repair swiper
}else if(mobile.matches ) {
    if (!init) {
        init = true;
        new Swiper('.repair__container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 'auto' ,
            spaceBetween: 35,
            watchOverFlow: true,
        })
        new Swiper('.prices__list--swiper', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            slidesPerView: 'auto' ,
            spaceBetween: 35,
            watchOverFlow: true,
        })
        
    }// Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }// Disable (for desktop)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }
}
}
/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});






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