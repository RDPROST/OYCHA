let acc = document.querySelectorAll(".add_address");
let btn = document.querySelectorAll(".link_add_address");
      let i;

      for (i = 0; i < acc.length; i++) {
        let elem = acc[i];
        btn[i].addEventListener("click", function() {
          elem.classList.toggle("faq__item_active");
          let panel = elem.querySelector(".address__panel");
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }