$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        responsive: [ 
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2,
                   dots: true,
                   initialSlide: 2
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1,
                   dots: true,
                   initialSlide: 2
               }
           }
        ],
         
    });
    $('.slider-icon-card').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    initialSlide: 2
                }
            },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2,
                   dots: true,
                   initialSlide: 2
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1,
                   dots: true,
                   initialSlide: 2
               }
           }
        ],
         
    });
    $('.slider-testimonials').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        responsive: [ 
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    initialSlide: 2
                }
            },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 1,
                   dots: true,
                   initialSlide: 2
               }
           },
           {
               breakpoint: 480,
               settings: {
                   slidesToShow: 1,
                   dots: true,
                   initialSlide: 2
               }
           }
        ],
         
    });
});


///////email validation

let form = document.querySelector('#form');
let email = document.querySelector('#email');
let text = document.querySelector('#text');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener("keyup", validation)

function validation() {
    if (email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address in Valid.";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#ff0000";
    }
    if (email.value == "") {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        text.innerHTML = '';
        text.style.color = '#00ff00';
    }
}
