let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let btn_modal = document.querySelector('.subscription__caption-btn');
let btn_close_modal = document.querySelectorAll('.btn-close-modal-window');
let btn_close_modal_block = document.querySelectorAll('.btn-try-again');
let email = document.querySelector('.sub-email');
let data = document.getElementsByTagName("input")[0];
let modal = document.querySelectorAll('.modal');
let modal_1 = document.querySelector('.modal');
let modal_2 = document.querySelector('.modal-2');


function validation(regex,data){
    console.log(data.value);
    return regex.test(data);
}
for(let i = 0; i < btn_close_modal.length; i++){
    btn_close_modal[i].addEventListener('click', () =>{
        modal[i].className = 'modal';
        modal[i].classList.remove('.modal-active');
    })
}

for(let i = 0; i < btn_close_modal_block.length; i++){
    btn_close_modal_block[i].addEventListener('click', () =>{
        modal[i].className = 'modal';
        modal[i].classList.remove('.modal-active');
    })
}





btn_modal.addEventListener('click', () => {
    if(!validation(reg,data.value))
    {
        modal[1].classList.toggle("modal-active");
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(modal_2);
            if ( ! withinBoundaries ) {
                
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
                modal[1].className = 'modal';
                modal[1].classList.remove('.modal-active');
            }
        });
    }
    else{
        modal[0].classList.toggle("modal-active");
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(modal_1);
            if ( ! withinBoundaries ) {
                
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
                modal[0].className = 'modal';
                modal[0].classList.remove('.modal-active');
            }
        });
    }

    
})
