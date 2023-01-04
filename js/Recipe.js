document.addEventListener('DOMContentLoaded', () =>{
    var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
x = win.innerWidth || docElem.clientWidth || body.clientWidth,
y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
let swiper;
let recipeList = document.querySelectorAll('.images_recipe_info-mobile');
let recipeWrapper = document.querySelectorAll('.img_block_recipe_info');
let recipeListItem = document.querySelectorAll('.img_recipe_info_1-mobile');
console.log(x);

if(x<=441){
    console.log(x);
    for(let i = 0; i < recipeList.length; i++){
        recipeList[i].className = 'images_recipe_info-mobile';
        recipeList[i].classList.add('swiper');
        recipeList[i].classList.add('mySwiper');
    }

    for(let i = 0; i < recipeWrapper.length; i++){
        recipeWrapper[i].className = 'img_block_recipe_info';
        recipeWrapper[i].classList.add('swiper-wrapper');
    }

    for(let i = 0; i < recipeListItem.length; i++){
        recipeListItem[i].className = 'img_recipe_info_1-mobile';
        recipeListItem[i].classList.add('swiper-slide');
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
    for(let i = 0; i < recipeList.length; i++){
        recipeList[i].className = 'images_recipe_info-mobile';
        recipeList[i].classList.remove('swiper');
        recipeList[i].classList.remove('mySwiper');
    }

    for(let i = 0; i < recipeWrapper.length; i++){
        recipeWrapper[i].className = 'img_block_recipe_info';
        recipeWrapper[i].classList.remove('swiper-wrapper');
    }

    for(let i = 0; i < recipeListItem.length; i++){
        recipeListItem[i].className = 'img_recipe_info_1-mobile';
        recipeListItem[i].classList.remove('swiper-slide');
    }
}
})