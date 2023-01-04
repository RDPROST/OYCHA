let accProfile = document.querySelectorAll(".add_address");
let btnProfile = document.querySelectorAll(".link_add_address");


      for (let i = 0; i < accProfile.length; i++) {
        let elem = accProfile[i];
        btnProfile[i].addEventListener("click", function() {
          elem.classList.toggle("faq__item_active");
          let panel = elem.querySelector(".address__panel");
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

      