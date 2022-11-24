let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector('.btn_auth').addEventListener('click', () => {
    let btn = document.querySelector('.btn_auth'),
    three = document.querySelectorAll('.array_auth_blocks')[0];
    let data = document.getElementsByTagName("input")[0];
    console.log(data);
    if(data!=null && data!="" && validation(reg,data.value)){ 
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
    else console.log("Empty");
    function validation(regex,data){
        return regex.test(data);
    }
})

document.querySelector('.header__login').addEventListener('click',() => {
    location.href = "Authorization.html";
})


