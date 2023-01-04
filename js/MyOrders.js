let acc = document.querySelectorAll(".order__item");
let btn = document.querySelectorAll(".btn_view");
let order_table = document.querySelectorAll('.order_status_table');
let title_block = document.querySelector('.title_block_history');
let empty_order = document.querySelector('.order-empty');
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


      for(let j = 0; j < order_table.length; j++){
        function closeOrder(){
          order_table[0].className = 'order_status_table';
          order_table[0].classList.add("order_status_table-hide");
          title_block.classList.add('order_status_table-hide');
          order_table[1].className = 'order_status_table';
          order_table[1].classList.add("order_status_table-hide");
          empty_order.classList.add("order-empty-active");
        }
      }