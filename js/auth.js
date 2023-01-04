let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailNotPass = "123@global.com";
document.querySelector('.btn_auth').addEventListener('click', () => {
    let btn = document.querySelector('.btn_auth'),
    three = document.querySelectorAll('.array_auth_blocks')[0];
    let data = document.getElementsByTagName("input")[0];
    let modal_2 = document.querySelector('.modal');
    let btn_close_modal = document.querySelector('.btn-close-modal-window');
    let btn_close_modal_block = document.querySelector('.btn-try-again');
    console.log(data);
    
    btn_close_modal.addEventListener('click', () =>{
        modal_2.className = 'modal';
        modal_2.classList.remove('modal-active');
    })


    btn_close_modal_block.addEventListener('click', () =>{
        modal_2.className = 'modal';
        modal_2.classList.remove('modal-active');
    })


    if(!validation(reg,data.value))
    {
        data.className = 'auth__input';
        data.classList.add('invalid');
    }
    if(data!=null && data!="" && validation(reg,data.value) && emailNotPass!= data.value){ 
        let runSlide = startSlide(300);
        let goTrue = true;

        btn.addEventListener('click', function() {
            if(goTrue){
                clearInterval(runSlide);
                three.className = 'array_auth_blocks';
                three.classList.add('form_1-' + 1);
                
                setTimeout(function() {
                runSlide = startSlide(300)
                }, 300)
            }
        });


        function startSlide(time) {
        return setInterval(function() {
            three.className = 'array_auth_blocks';
            three.classList.add('form_1-' + 1);
        }, time || 300);

        }
        
    }
    else{
        console.log("Empty");
        modal_2.classList.toggle("modal-active");
    }
    function validation(regex,data){
        return regex.test(data);
    }
})

document.querySelector('.header__login').addEventListener('click',() => {
    location.href = "Authorization.html";
})


