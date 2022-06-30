

export let btnMenu                 =   document.querySelector('.header__burger-button');
export let mobileMenu              =   document.querySelector('.mobile-menu');
export let mobileMenuCloseButton   =   document.querySelector('.mobile-menu__close-button');
export let trubkaMobileMenu        =   document.querySelector('.icon-trubka--mobile');
export let chatMobileMenu          =   document.querySelector('.icon-chat--mobile');
//  blur
export let blur                    =   document.querySelector('.blur');
//  icons
export let trubka                  =   document.querySelector('.icon-trubka');
export let chat                    =   document.querySelector('.icon-chat');
export let profile                 =   document.querySelector('.icon-profile');
//  forms
// !feedback form
export let feedbackFform           =   document.querySelector('.feedback-form');
export let feedbackFormCloseBtn    =   document.querySelector('.feedback-form__close-btn');
// !oreder call form
export let orderCallFormCloseBtn   =   document.querySelector('.order-call__close-btn');
export let orderCallForm           =   document.querySelector('.order-call');
// brends list
export const windowWidth           = document.documentElement.clientWidth;
export let brendParent             = document.querySelector('.brends__list');
export let brendChildren           = brendParent.querySelectorAll('.brends__item');
export let btnShowMoreBrends       = document.querySelector('.brends__button--more');
export let btnShowLessBrends       = document.querySelector('.brends__button--less');
// repair list
export let btnShowMoreRepair       = document.querySelector('.repair__btn--more');
export let btnShowLessRepair       = document.querySelector('.repair__btn--less');
export let repairChildren          = document.querySelectorAll('.repair__item');

//blur
export let blurBck                 = document.querySelector('.blur');


btnMenu.addEventListener('click', function(){
    mobileMenu.style.display = 'flex';
    blur.style.display = 'flex';

})
mobileMenuCloseButton.addEventListener('click', function(){
    
    mobileMenu.style.display = 'none';
    blur.style.display = 'none';
})
trubkaMobileMenu.addEventListener('click', function(){
    if(windowWidth <1440){
    mobileMenu.style.display = 'none';
    orderCallForm.style.display = 'block';
    }
    orderCallForm.style.display = 'block';
})
chatMobileMenu.addEventListener('click', function(){
    if(windowWidth <1440){
    mobileMenu.style.display = 'none';
    feedbackFform.style.display = 'block';
    }
    feedbackFform.style.display = 'block';
})

// feedback form
chat.addEventListener('click', function(){
    feedbackFform.style.display = 'flex';
    blur.style.display = 'flex';
} )
feedbackFormCloseBtn.addEventListener('click', function(){
    feedbackFform.style.display = 'none';
    blur.style.display = 'none';
})

//oreder call form
trubka.addEventListener('click', function(){
    orderCallForm.style.display = 'flex';
    blur.style.display = 'flex';
    console.log('asdasd')
} )
orderCallFormCloseBtn.addEventListener('click', function(){
    orderCallForm.style.display = 'none';
    blur.style.display = 'none';
})


//brends list
console.log(windowWidth)
function brendsELementCheck(){
    if(windowWidth > 767 && windowWidth < 1120){
        for(let i = 0; i < 6; i++){
            brendChildren[i].style.display = 'flex';
            console.log(brendChildren[i].style)
        } 

    }else if(windowWidth > 1120 ){
        for(let i = 0; i < 8; i++){
            brendChildren[i].style.display = 'flex';
            console.log(brendChildren[i].style)
        } 
    }
}
brendsELementCheck();

btnShowMoreBrends.addEventListener('click', function(){
    if (windowWidth > 768 && windowWidth < 1120){
        for(let i = 8; i < brendChildren.length; i++){
            brendChildren[i].style.display = 'flex';
            console.log(brendChildren[i].style)
        }
    btnShowMoreBrends.style.display='none'; 
    btnShowLessBrends.style.display='block'; 
    }
});

btnShowLessBrends.addEventListener('click', function(){
    for(let i = 0; i < brendChildren.length; i++){
        brendChildren[i].style.display = 'none';
        console.log(brendChildren[i])
    }
    btnShowMoreBrends.style.display='block'; 
    btnShowLessBrends.style.display='none'; 
    brendsELementCheck();
});
//repair section
function reapairELementCheck(){
    if(windowWidth > 911 && windowWidth < 1120){
        for(let i = 0; i < 3; i++){
            repairChildren[i].style.display = 'flex';
            console.log(brendChildren[i].style)
        } 

    }
}

btnShowMoreRepair.addEventListener('click', function(){
        repairChildren[3].style.display = 'flex'; 
        btnShowMoreRepair.style.display='none'
        btnShowLessRepair.style.display='block'
}
)
btnShowLessRepair.addEventListener('click', function(){
        repairChildren[3].style.display = 'none'; 
        btnShowMoreRepair.style.display='block'
        btnShowLessRepair.style.display='none'
}
)

reapairELementCheck()

//blur
console.log(repairChildren[3])
blurBck.addEventListener('click', function(){
    mobileMenu.style.display='none';
    feedbackFform.style.display='none';
    orderCallForm.style.display='none';
    blurBck.style.display='none';

})



/*screen width */
var ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      const cr = entry.contentRect;
      console.log('Element:', entry.target);
      console.log(`Element size: ${cr.width}px x ${cr.height}px`);
      console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
    }
  });
  
  // Наблюдаем один или несколько элементов
  ro.observe(brendParent);

console.log(brendChildren[1])