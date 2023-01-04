

var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
x = win.innerWidth || docElem.clientWidth || body.clientWidth,
y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

let menu = document.querySelector('.menu');
let btnMenu = document.querySelectorAll('.header__menu-icon');
let overlayHeader = document.querySelector('.overlay-menu');
let menuMobile = document.querySelector('.menu-mobile');

for(let i = 0; i < btnMenu.length; i++){
    btnMenu[i].addEventListener('click', (e) => {
        e.preventDefault();
        btnMenu[i].classList.toggle('header__menu-icon_active');
        if(x>375){
        menu.classList.toggle('menu-active');
        overlayHeader.classList.toggle('overlay-menu-active');
        
        if(menu.style.maxHeight){
            menu.style.maxHeight = null;
        }
        else menu.style.maxHeight = menu.scrollHeight + "px";
        }
        else{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
            menuMobile.classList.toggle('menu-mobile-active');
            overlayHeader.classList.toggle('overlay-menu-active');
            
            if(menuMobile.style.maxHeight){
                menuMobile.style.maxHeight = null;
            }
            else menuMobile.style.maxHeight = menuMobile.scrollHeight + 50 + "px";
        }
    })
}
/*
let menuBtn = document.querySelector('.menu__btn');
menuBtn.addEventListener('click', () => {
    isShow.className = 'header__nav-list';
    menu.className = 'menu';
    isShow.classList.remove("header__nav-list-active");
    menu.classList.remove("menu-active");
})
*/


let logBtn = document.querySelector('.login-logout');
let logText = document.querySelector('.log');
let logOutVector = document.querySelector('.logout-vector');
let logInVector = document.querySelector('.login-vector');
let leftLogOutVector = document.querySelector('.left-logout-vector');
let leftLogInVector = document.querySelector('.left-login-vector');
let leftLoginBlock = document.querySelector('.left-login');
let countCLickLogBtn = 0;
let logInfoText = ['Log in', 'Log out', 'Log in', 'Log out'];
logBtn.addEventListener('click', () =>{
    countCLickLogBtn++;
    logText.innerHTML = logInfoText[countCLickLogBtn%2+1];
    logOutVector.classList.toggle('logout-vector-active');
    logInVector.classList.toggle('login-vector-active');
    leftLogOutVector.classList.toggle('left-logout-vector-active');
    leftLogInVector.classList.toggle('left-login-vector-active');
    leftLoginBlock.classList.toggle('left-login-active');
})

document.querySelector('.header__login').addEventListener('click',() => {
    location.href = "Authorization.html";
})


