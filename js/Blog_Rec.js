let btn = document.querySelector('.switch_btn');
let btn_left = document.querySelector('.left_switch_btn');
let btn_right = document.querySelector('.right_switch_btn');

let colors = ["#fff", "#808080","#fff", "#808080"];
let i = 0;
let d = 0;
btn.addEventListener('click', () =>{
    i++;
    btn_left.style.color = colors[i%2];
    btn_right.style.color = colors[i%2+1];
    let three = document.querySelectorAll('.select_cards_blog_recipes')[0];       
    let runSlide = startSlide(300);
    clearInterval(runSlide);
    d++;
    if(d==2) d = 0;
    three.className = 'select_cards_blog_recipes';
    three.classList.add('blog-1-' + d);
    
    function f() {
    runSlide = startSlide()
    }

    function startSlide() {
    return setInterval(function() {
        three.className = 'select_cards_blog_recipes';
        three.classList.add('blog-1-' + d);
    });
    }    

})