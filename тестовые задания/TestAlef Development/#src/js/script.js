@@include("jquery-3.5.1.min.js");
@@include("selecting.js");
@@include("sorting.js");


////// background img

    function ibg(){
        let ibg=document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
    }
    ibg();
    

    //// hamburger
    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });




///////email validation
(function() {
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
})();


/////////// arrow to top
(function() {
    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
    
    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > (coords / 2)) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < (coords / 2)) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }
    
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, 0);
            setTimeout(backToTop, 1000);
        }
    }
})();




(function() {
    let icon_heart = document.querySelectorAll(".not-sold-out .discount__like span");

    for (let i = 0; i < icon_heart.length; i++) {
        icon_heart[i].addEventListener('click', showAlert);
        
    }
        
    function showAlert() {
        this.parentNode.classList.toggle('favorite');
    }
})();




