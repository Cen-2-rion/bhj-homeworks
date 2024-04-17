const item = document.querySelectorAll('.dropdown__item');
const list = document.querySelector('.dropdown__list');
let value = document.querySelector('.dropdown__value');

value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
    
    if (list.classList.contains('dropdown__list_active')) {
        item.forEach(i => {
            i.addEventListener('click', (event) => {
                event.preventDefault();
                value.innerHTML = i.textContent;
                list.classList.remove('dropdown__list_active');
            })
        })
    }
})
