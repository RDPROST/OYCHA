let acc = document.querySelectorAll(".order__item");
let btn = document.querySelectorAll(".btn_view");

      let i;

      for (i = 0; i < acc.length; i++) {
        let elem = acc[i];
        btn[i].addEventListener("click", function() {
          elem.classList.toggle("faq__item_active");
          let panel = elem.querySelector(".order__panel");
          if (panel.style.maxHeight){
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }