document.querySelector('.header__menu-icon').addEventListener('click', (e) => {
    console.log(1);
    e.preventDefault();
    document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon_active');
})
let myDiv = true;
document.querySelector('.header__menu-icon').addEventListener('click', (showDiv) => {
    let isShow = document.getElementById('header__nav-list');
    let isPos = document.getElementById('header__menu-icon');
    if(myDiv){
        isShow.style.display = 'none';
        myDiv = false;
        
    }
    else{
        isShow.style.display = 'flex';
        myDiv = true;
    }
})

document.querySelector('.header__login').addEventListener('click',() => {
    location.href = "Authorization.html";
})
