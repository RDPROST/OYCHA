let btnAcc = document.querySelectorAll(".btn-left-bar-accordion");
let vecAcc = document.querySelectorAll(".vector-acc");
let panelBar = document.querySelectorAll(".panel-bar-mobile");
let orderItem = document.querySelectorAll('.order__item');
let countArrow = 0;

for (let i = 0; i < btnAcc.length; i++) {
  btnAcc[i].addEventListener('click', () =>{
    countArrow++;
    panelBar[i].classList.toggle("panel-bar-mobile-active");
    if(countArrow%2!=0){
    vecAcc[i].className = "vector-acc";
    vecAcc[i].classList.add("vector-acc-active");
    }
    else{
      vecAcc[i].className = "vector-acc";
      vecAcc[i].classList.remove(".vector-acc-active");
    }
    if (panelBar[i].style.maxHeight){
        panelBar[i].style.maxHeight = null;
      } else {
        panelBar[i].style.maxHeight = panelBar[i].scrollHeight * orderItem.length + "px";
      }
})  
}