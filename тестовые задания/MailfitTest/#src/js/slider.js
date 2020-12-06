const filterBox = document.querySelectorAll(".swiper-slide");

document.querySelector('nav').addEventListener('click', event => {

    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['country'];
    
    filterBox.forEach( elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    })

    swiper.update();
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    swiper.slideTo(0);
    swiper.scrollbar.updateSize();
    
});

$(document).ready(function(){
    $('nav').on( 'click', 'li', function() {
      $( 'nav li' ).removeClass( 'swiper-active' );
      $( this ).addClass( 'swiper-active' );
    })
});
let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    spaceBetween: 30,
    // runCallbacksOnInit: true,
    observer: true,
    observerParents: true,
    observerSliderChildren: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        567: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        }
    }
  });

