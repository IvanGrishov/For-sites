
document.addEventListener('click', function (e) {
    if (e.target.closest(".menu__link") || e.target.closest(".advantages__bottom")) {
        let user_menu = document.querySelector('.menu__body');
        let body = document.querySelector('body');
        user_menu.classList.remove("_active");
        body.classList.remove("_lock");
    }
});