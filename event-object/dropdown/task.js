const list = document.querySelector('.dropdown__list');
let value = document.querySelector('.dropdown__value');

value.addEventListener('click', function() {
    list.classList.toggle('dropdown__list_active');
})

list.addEventListener('click', (e) => {
    if (list.classList.contains('dropdown__list_active')) {
        e.preventDefault();
        value.innerHTML = e.target.textContent;
        list.classList.remove('dropdown__list_active');
    }
})
