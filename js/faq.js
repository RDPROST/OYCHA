document.querySelectorAll('.faq-vector-arrow').forEach((item) =>
    item.addEventListener('click', () =>{
        const parent = item.parentNode;
        parent.classList.toggle('faq-text-span--active');
        parent.classList.toggle('faq-vector-arrow--active');
        parent.classList.toggle('panel--active');
        
    })
)

