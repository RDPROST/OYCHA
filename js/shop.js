
let btn = document.querySelectorAll('.button-shop-img'),
    item = document.querySelectorAll('.shop-list-product-item');

   // let eSlider = document.querySelector("#myRange");
    let rangeNum = document.querySelector('.range-num');
    let number = document.querySelector('.number-range');
    let moodBlock = document.querySelectorAll('.mood-filter');
    let moodBlockText = document.querySelectorAll('.mood-filter-text');
    let closeSymbol = document.querySelectorAll('.close');
let btnFilter = document.querySelector('.filter');
let panelFilter = document.querySelector('.panel-filters-passive');
let arrow = document.querySelector('.vector-arrow');
let countClick = 0;
let countPanelClick = [1,1,1,1,1];
let flag = 0;
let currentPanel = 0;
let btnSliderPanel = document.querySelectorAll('.btn-shop-slider-card');
let sliderPanel = document.querySelectorAll('.shop-slider-panel');

let btnAddMobile = document.querySelectorAll('.button-shop-img-mobile');
let btnAddContent = document.querySelectorAll('.button-content-shop-plus-mobile');
let btnAddBlock = document.querySelectorAll('.button-content-shop-right-mobile');
for(let i = 0; i < btnAddMobile.length; i++)
    {
        btnAddMobile[i].addEventListener('click', () => {
            btnAddMobile[i].classList.toggle("button-shop-img-mobile-active");
            btnAddContent[i].classList.toggle("button-content-shop-plus-mobile-active");
            btnAddBlock[i].classList.toggle("button-content-shop-right-mobile-active");
        })
    }
for(let i = 0; i < btnSliderPanel.length; i++)
    {
        btnSliderPanel[i].addEventListener('click', () => {
            countPanelClick[i]++;
            if(countPanelClick[i]%2 == 0){
                console.log(flag);
                if(flag == 0){
                    sliderPanel[i].className = 'shop-slider-panel';
                    sliderPanel[i].classList.add('shop-slider-panel-active');
                    flag = 1;
                    currentPanel = i;
                    console.log("flag 0 " + currentPanel);
                }
                else{
                    sliderPanel[currentPanel].className = 'shop-slider-panel';
                    sliderPanel[currentPanel].classList.remove('shop-slider-panel-active');
                    sliderPanel[i].className = 'shop-slider-panel';
                    sliderPanel[i].classList.add('shop-slider-panel-active');
                    flag = 1;
                    currentPanel = i;
                    console.log("flag 1 " + currentPanel);
                }
            }
            else{
                sliderPanel[i].className = 'shop-slider-panel';
                sliderPanel[i].classList.remove('shop-slider-panel-active');
                currentPanel = 0;
                flag = 0;
                countPanelClick[i] = 1;
            }
        })
    }
btnFilter.addEventListener('click', () =>{
    countClick++;
    panelFilter.classList.toggle("panel-filters");
    if(countClick%2!=0)
        arrow.style.transform = "rotate(-180deg)";
    else
        arrow.style.transform = "rotate(-360deg)";
    if (panelFilter.style.maxHeight){
        panelFilter.style.maxHeight = null;
      } else {
        panelFilter.style.maxHeight = panelFilter.scrollHeight + 170 + "px";
      }
})    
    for(let i = 0; i < moodBlock.length; i++)
    {
        moodBlock[i].addEventListener('click', (event) => {  
            moodBlock[i].classList.toggle("mood-filter-active");
        })
        moodBlockText[i].addEventListener('click', (event) => {  
            moodBlockText[i].classList.toggle("active-mood-filter-text");
        })
    }

    
    

 /*   
eSlider.addEventListener('mousemove', ()=>{
    let x = eSlider.value;
    let level = (x/1000) * 100;
    eSlider.style.background = 'linear-gradient(90deg, var(--blue)'+ (level) + '%, var(--gray-10)' + (level) + '%)';
    let dist = 1000/273;
    rangeNum.style.display = 'block';
    rangeNum.style.left = (x/dist) + 'px';
    number.innerHTML = x + ' $';
})*/


for(let i = 0; i < item.length; i++)
    {
        item[i].addEventListener('mouseover', () => {
            
            btn[i].className = 'button-shop-img';
            btn[i].classList.add('button-shop-img-active')
        })
        item[i].addEventListener('mouseleave', () => {
            
            btn[i].className = 'button-shop-img';
            btn[i].classList.remove('button-shop-img-active')
        })
    }

    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        tooltips: true,
        format: wNumb({
            decimals: 1,
            thousand: '.',
            suffix: ' $'
        }),     
        start: [200, 800],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });

