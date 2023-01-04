
var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
x = win.innerWidth || docElem.clientWidth || body.clientWidth,
y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
let swiper;
if(x<=769){
    swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    childElementCount: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
else if(x>769){
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    childElementCount: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}
if(x<=376){
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

