$(function () {
    let circle = $('.roulette__spin'),
        timer;
    circle.addClass('animation-roulette').css('animationPlayState', 'paused');
    $('.roulette').on('click', function () {
        let time = Math.floor(Math.random() * 5001) + 1000;
        if (circle.css('animationPlayState') === 'paused') {
            circle.css('animationPlayState', 'running');
            timer = setTimeout(function () {
                circle.css('animationPlayState', 'paused');
            }, time);
        }
    });
});
