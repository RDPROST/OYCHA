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