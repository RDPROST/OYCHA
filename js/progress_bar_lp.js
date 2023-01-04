let slider = document.getElementById("fader");
let array_cards = document.querySelectorAll('.card_loyalty')[0];

var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
xWin = win.innerWidth || docElem.clientWidth || body.clientWidth,
yWin = win.innerHeight|| docElem.clientHeight|| body.clientHeight;



let x = 0;
let y = 0;

let slideTo = (iLevel) => {
    let eSlider = document.querySelector("#fader")
    if (iLevel != (null || undefined)){
        eSlider.style.background = 'linear-gradient(90deg, var(--blue)'+ (iLevel * 25) + '%, var(--gray-10)' + (iLevel * 25) + '%)';
        eSlider.value = iLevel;
        y = iLevel * 25;
        slideCard();
        if(xWin<=769)
        {
            let leftX = iLevel;
            if(iLevel > 3) leftX = 3;
            let progressBarFooter = document.querySelector('.progress-plus-footer');
            progressBarFooter.scrollBy({

                left: 92.1875*leftX, // на какое количество пикселей прокрутить вправо от текущей позиции
                top: 0, // на какое количество пикселей прокрутить вниз от текущей позиции
                behavior: 'smooth', // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
            });
            }
    }
}



function slideCard(){
    let runSlide = startSlide(300);
    function move_card() {
        clearInterval(runSlide);
        array_cards.className = 'card_loyalty';
        array_cards.classList.add('info_loyalty_block-' + y);
        y = x;
        setTimeout(function() {
        runSlide = startSlide(300)
        }, 300)
        flag = false;
        }


        function startSlide(time) {
            return setInterval(function() {

                array_cards.className = 'card_loyalty';
                array_cards.classList.add('info_loyalty_block-' + y);
            }, time || 300);
        }
    }