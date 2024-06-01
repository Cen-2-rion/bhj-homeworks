// находим необходимые элементы
const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

// если модальное окно отсутствует, то показываем его
if (!modal.classList.contains('modal_active')) {
    modal.classList.add('modal_active');
}

// закрываем модальное окно по клику на крестик и устанавливаем в cookie информацию о закрытии
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modal_close=true; path=/';
});

// если в куке нет информации о закрытии страницы, то показываем окно, иначе скрываем окно
document.cookie.indexOf('modal_close') === -1 ? modal.classList.add('modal_active') : modal.classList.remove('modal_active');
