

export let btnMenu                 =   document.querySelector('.header__burger-button');
export let mobileMenu              =   document.querySelector('.mobile-menu');
export let mobileMenuCloseButton   =   document.querySelector('.mobile-menu__close-button');
export let trubkaMobileMenu        =   document.querySelector('.icon-order-call--mobile');
export let chatMobileMenu          =   document.querySelector('.icon-chat--mobile');
export let mobileMenuAnimation     =   document.querySelector('.mobile-menu--initial');

//  blur
export let blur                    =   document.querySelector('.blur');

//  icons
export let trubka                  =   document.querySelector('.icon-order-call');
export let chat                    =   document.querySelector('.icon-chat');
export let profile                 =   document.querySelector('.icon-profile');

//  forms
// !feedback form
export let feedbackFform           =   document.querySelector('.feedback-form');
export let feedbackFormCloseBtn    =   document.querySelector('.feedback-form__close-btn');
export let feedbackFormAnimation    =   document.querySelector('.feedback-form-initial');
// !oreder call form
export let orderCallFormCloseBtn   =   document.querySelector('.order-call__close-btn');
export let orderCallForm           =   document.querySelector('.order-call');
export let orderCallAnimation      =   document.querySelector('.order-call--initial');

// read more text
export let readMoreBtn             = document.querySelector('.read-more__text')
export let readLessBtn             = document.querySelector('.read-less__text')
export let text768                 = document.querySelector('.text-768px')
export let text1120                = document.querySelector('.text-1120px')
export let text1120More            = document.querySelector('.text-1120px--more')

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
   // mobileMenu.style.display = 'flex';
    mobileMenuAnimation.style.transform  ='translateX(322px)';
    mobileMenuAnimation.style.transition ='ease-in-out 0.7s';
    blur.style.display = 'flex';
   

})
mobileMenuCloseButton.addEventListener('click', function(){
   // mobileMenu.style.display = 'none';
   mobileMenuAnimation.style.transform  ='translateX(-322px)';
   mobileMenuAnimation.style.transition ='ease-in-out 0.7s';
    blur.style.display = 'none';
})
trubkaMobileMenu.addEventListener('click', function(){
    if(windowWidth <1440){
        mobileMenuAnimation.style.transform  ='translateX(-322px)';

        orderCallAnimation.style.transform  ='translateX(-322px)';
        orderCallAnimation.style.transition ='ease-in-out 0.7s';
    }
    orderCallAnimation.style.transform  ='translateX(-322px)';
    orderCallAnimation.style.transition ='ease-in-out 0.7s';
})
chatMobileMenu.addEventListener('click', function(){
    if(windowWidth <1440){
    mobileMenuAnimation.style.transform  ='translateX(-322px)';

    feedbackFormAnimation.style.transform  ='translateX(-322px)';
    feedbackFormAnimation.style.transition ='ease-in-out 0.7s';
    }
    feedbackFormAnimation.style.transform  ='translateX(-322px)';
    feedbackFormAnimation.style.transition ='ease-in-out 0.7s';
})

// feedback form
chat.addEventListener('click', function(){
    
    feedbackFormAnimation.style.transform  ='translateX(-322px)';
    feedbackFormAnimation.style.transition ='ease-in-out 0.7s';

    
    blur.style.display = 'flex';
} )
feedbackFormCloseBtn.addEventListener('click', function(){
    feedbackFormAnimation.style.transform  ='translateX(322px)';
    feedbackFormAnimation.style.transition ='ease-in-out 0.7s';

    blur.style.display = 'none';
})

//oreder call form
trubka.addEventListener('click', function(){
    
    orderCallAnimation.style.transform  ='translateX(-322px)';
    orderCallAnimation.style.transition ='ease-in-out 0.7s';
    blur.style.display = 'flex';
    console.log('asdasd')
} )
orderCallFormCloseBtn.addEventListener('click', function(){
    orderCallAnimation.style.transform  ='translateX(322px)';
    orderCallAnimation.style.transition ='ease-in-out 0.7s';
  
    blur.style.display = 'none';
})

//read more
readMoreBtn.addEventListener('click', function(){
    text768.style.display     = 'block';
    text1120.style.display    = 'block' ;
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'block';
    text1120More.style.display ='block';
})
readLessBtn.addEventListener('click', function(){
    if(windowWidth < 767){
        text768.style.display       = 'none';
        text1120.style.display      = 'none' ;
        text1120More.style.display  ='none';
    }else if(windowWidth < 1119){
    text1120.style.display    = 'none' ;
    text1120More.style.display ='none';
    } else if(windowWidth >1119){
        text1120More.style.display ='none';
    }
    readMoreBtn.style.display = 'block';
    readLessBtn.style.display = 'none';
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
    }else if(windowWidth > 1120){
        for(let i = 8; i < brendChildren.length; i++){
            brendChildren[i].style.display = 'flex';
            console.log(brendChildren[i].style)
    }
}
    btnShowMoreBrends.style.display='none'; 
    btnShowLessBrends.style.display='block'; 
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