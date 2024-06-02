// находим необходимые элементы
const list = document.querySelector('.dropdown__list');
let value = document.querySelector('.dropdown__value');

// добавляем обработчик события на клик по value
value.addEventListener('click', function() {
    list.classList.toggle('dropdown__list_active'); // добавляем или убираем класс для активного списка
});

// добавляем обработчик события на клик по элементам списка
list.addEventListener('click', (e) => {
    
    // если список активный, то отменяем действие по умолчанию и убираем класс активного списка
    if (list.classList.contains('dropdown__list_active')) {
        e.preventDefault();
        value.innerHTML = e.target.textContent;
        list.classList.remove('dropdown__list_active');
    }
});
