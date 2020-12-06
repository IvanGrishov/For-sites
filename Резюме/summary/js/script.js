
////////////////////////////////////// slider

$(document).ready(function() {
     $('.slider').slick({
         arrows: true,
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
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
         ],
          
     });
});

//////////////////////////////////// copy buttons

function selectText(node) {
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } 

    document.execCommand("copy");
    
}

function onButton() {
    
    let button = document.querySelectorAll('.button');

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => selectText(button[i].previousElementSibling.children[1]));

        button[i].addEventListener('click', () => {
            button[i].children[0].innerText = `Скопированно: ${button[i].previousElementSibling.children[1].innerText}`;
            
        })

        button[i].addEventListener('mouseout', function() {
        button[i].children[0].innerText = "Копировать в буфер"
        })
    }
}

onButton();






