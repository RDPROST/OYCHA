document.addEventListener('DOMContentLoaded', () =>{
    var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
x = win.innerWidth || docElem.clientWidth || body.clientWidth,
y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
let swiper;
let mainSlider = document.querySelector('.main-slider');
let galleryList = document.querySelector('.gallery__list');
let galleryListItem = document.querySelectorAll('.gallery__list-item');


if(x<=441){

    mainSlider.className = 'main-slider';
    galleryList.className = 'gallery__list';
    galleryList.classList.add('swiper-wrapper');
    mainSlider.classList.add('swiper');
    mainSlider.classList.add('mySwiper');

    for(let i = 0; i < galleryListItem.length; i++){
        galleryListItem[i].className = 'gallery__list-item';
        galleryListItem[i].classList.add('swiper-slide');
    }


    swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    childElementCount: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
else{
    mainSlider.className = 'main-slider';
    galleryList.className = 'gallery__list';
    galleryList.classList.remove('swiper-wrapper');
    mainSlider.classList.remove('swiper');
    mainSlider.classList.remove('mySwiper');

    for(let i = 0; i < galleryListItem.length; i++){
        galleryListItem[i].className = 'gallery__list-item';
        galleryListItem[i].classList.remove('swiper-slide');
    }

    
}
})