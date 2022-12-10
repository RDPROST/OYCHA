let slider = document.getElementById("fader");
let array_cards = document.querySelectorAll('.card_loyalty')[0];
let x = 0;
let y = 0;

let slideTo = (iLevel) => {
    let eSlider = document.querySelector("#fader")
    if (iLevel != (null || undefined)){
        eSlider.style.background = 'linear-gradient(90deg, var(--blue)'+ (iLevel * 25) + '%, var(--gray-10)' + (iLevel * 25) + '%)';
        eSlider.value = iLevel;
        y = iLevel * 25;
        slideCard();
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