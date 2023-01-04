let btn = document.querySelectorAll('.button-shop-img'),
    item = document.querySelectorAll('.shop-list-product-item');
let check_1 = document.querySelector('.checkbox-card-product');
let check_2 = document.querySelector('.checkbox-card-product-2');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let num = document.querySelector('.number');
let price = document.querySelector('.total-price-to-cart');
let def = 1;
let start_price = 3;
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

check_1.addEventListener('click', () =>{
    if(document.getElementById("check-2").checked)
    {
        document.getElementById("check-2").checked = false;
        document.getElementById("check-1").checked = true;
    }
})

check_2.addEventListener('click', () =>{
    if(document.getElementById('.checkbox-card-product').checked)
    {
        document.getElementById("check-1").checked = false;
        document.getElementById("check-2").checked = true;
    }
})

minus.addEventListener('click', () => {
    if(def!=0){
        def--;
        start_price-=3;
    }
    num.innerHTML = def;
    price.innerHTML ="$" + start_price;
})

plus.addEventListener('click', () => {
    def++;
    num.innerHTML = def;
    start_price+=3;
    price.innerHTML ="$" + start_price;
})
document.addEventListener('DOMContentLoaded', () =>{
    var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
x = win.innerWidth || docElem.clientWidth || body.clientWidth,
y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
let swiper;
let shopListCart = document.querySelector('.shop-list-products-cart');
let shopCart = document.querySelector('.shop-list-product-items-cart');
let shopListItem = document.querySelectorAll('.shop-list-product-item');

let cartProductSlider = document.querySelector('.slider-product');
let cartProductWrapper = document.querySelector('.slider-wrapper');
let cartProductItem = document.querySelectorAll('.slider-item-product');

let cartProductImage = document.querySelector('.images-mobile-slide');
let cartProductImageWrapper = document.querySelector('.imgs-left-part-product-mobile');
let cartProductImageItem = document.querySelectorAll('.img-card-product-mobile');
if(x<=441){
    shopListCart.className = 'shop-list-products-cart';
    shopCart.className = 'shop-list-product-items-cart';
    shopListCart.classList.add('swiper');
    shopListCart.classList.add('mySwiper');
    shopCart.classList.add('swiper-wrapper');

    for(let i = 0; i < shopListItem.length; i++){
        shopListItem[i].className = 'shop-list-product-item';
        shopListItem[i].classList.add('swiper-slide');
    }

    cartProductSlider.className = 'slider-product';
    cartProductWrapper.className = 'slider-wrapper';
    cartProductWrapper.classList.add('swiper-wrapper');
    cartProductSlider.classList.add('swiper');
    cartProductSlider.classList.add('mySwiper');

    for(let i = 0; i < cartProductItem.length; i++){
        cartProductItem[i].className = 'slider-item-product';
        cartProductItem[i].classList.add('swiper-slide');
    }


    cartProductImage.className = 'images-mobile-slide';
    cartProductImageWrapper.className = 'imgs-left-part-product-mobile';
    cartProductImageWrapper.classList.add('swiper-wrapper');
    cartProductImage.classList.add('swiper');
    cartProductImage.classList.add('mySwiper');

    for(let i = 0; i < cartProductImageItem.length; i++){
        cartProductImageItem[i].className = 'img-card-product-mobile';
        cartProductImageItem[i].classList.add('swiper-slide');
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
    shopListCart.className = 'shop-list-products-cart';
    shopCart.className = 'shop-list-product-items-cart';
    shopListCart.classList.remove('swiper');
    shopListCart.classList.remove('mySwiper');
    shopCart.classList.remove('swiper-wrapper');

    for(let i = 0; i < shopListItem.length; i++){
        shopListItem[i].className = 'shop-list-product-item';
        shopListItem[i].classList.remove('swiper-slide');
    }

    cartProductSlider.className = 'slider-product';
    cartProductWrapper.className = 'slider-wrapper';
    cartProductWrapper.classList.remove('swiper-wrapper');
    cartProductSlider.classList.remove('swiper');
    cartProductSlider.classList.remove('mySwiper');

    for(let i = 0; i < cartProductItem.length; i++){
        cartProductItem[i].className = 'slider-item-product';
        cartProductItem[i].classList.remove('swiper-slide');
    }

    cartProductImage.className = 'images-mobile-slide';
    cartProductImageWrapper.className = 'imgs-left-part-product-mobile';
    cartProductImageWrapper.classList.remove('swiper-wrapper');
    cartProductImage.classList.remove('swiper');
    cartProductImage.classList.remove('mySwiper');

    for(let i = 0; i < cartProductImageItem.length; i++){
        cartProductImageItem[i].className = 'img-card-product-mobile';
        cartProductImageItem[i].classList.remove('swiper-slide');
    }
}
})

let headBtn = document.querySelector('.head-btn-favorite-mobile');
let headBtnVector = document.querySelector('.heart-vector');
headBtn.addEventListener('click', () =>{
    headBtnVector.classList.toggle("heart-vector-active");
})
