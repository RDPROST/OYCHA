let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let num = document.querySelectorAll('.number');
let price = document.querySelectorAll('.total-price-to-cart');
let finaly_price = document.querySelector('.price-head-cart');
let finaly_price_mini = document.querySelector('.total-price-check');

let btn_close = document.querySelectorAll('.close-cart-product');
let cart = document.querySelectorAll('.cart-product');
let empty = document.querySelector('.empty-block');
let def = [];
let start_price = [];
for(let i = 0; i < btn_close.length; i++){
    def[i] = 1;
    start_price[i] = 9;
}

let balance = 9*def.length;
let d = 0;
finaly_price.innerHTML ="$" + balance;
finaly_price_mini.innerHTML = "$" + balance;

for(let i = 0; i < minus.length; i++){
    minus[i].addEventListener('click', () => {
        console.log(i);
        if(def[i]!=0){
            def[i]--;
            start_price[i]-=9;
            num[i].innerHTML = def[i];
            price[i].innerHTML ="$" + start_price[i];
            d = 0;
            for(let i = 0; i < minus.length; i++){
                
                d+=start_price[i];
            }
            balance = d;
            finaly_price.innerHTML ="$" + balance;
            finaly_price_mini.innerHTML ="$" + balance;
        }
    })
}

for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click', () => {
        console.log(i);
        def[i]++;
        num[i].innerHTML = def[i];
        start_price[i]+=9;
        price[i].innerHTML ="$" + start_price[i];
        d = 0;
        for(let i = 0; i < minus.length; i++){

            d+=start_price[i];
        }
        balance = d;
        finaly_price.innerHTML ="$" + balance;
        finaly_price_mini.innerHTML ="$" + balance;
    })
}

let count = btn_close.length;

for(let i = 0; i < btn_close.length; i++){
    btn_close[i].addEventListener('click', () => {
        cart[i].classList.toggle("cart-product-removed");
        count--;
        start_price[i] = 0;
        d = 0;
        for(let i = 0; i < btn_close.length; i++){

            d+=start_price[i];
        }
        balance = d;
        finaly_price.innerHTML ="$" + balance;
        finaly_price_mini.innerHTML ="$" + balance;
        console.log(count);
        if(count == 0)
            empty.classList.toggle("empty-block-active");
    })
}


