let info = document.querySelector('.promo-code-subtitle');
let card = document.querySelector('.card_promo');
let empty_promo = document.querySelector('.promo-empty');


function closePromo(){
    info.className = 'promo-code-subtitle';
    info.classList.add('order_status_table-hide');
    card.className = 'order_status_table';
    card.classList.add("order_status_table-hide");
    empty_promo.classList.add("promo-empty-active");
}
  