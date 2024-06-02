// находим необходимые элементы
const buttons = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

// добавляем обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        buttons.forEach(button => button.classList.remove('font-size_active')); // убираем активный класс у всех кнопок
        button.classList.add('font-size_active'); // добавляем активный класс к нажатой кнопке

        // удаляем классы у книги и добавляем класс с data-атрибутом size
        book.classList.remove('book_fs-small', 'book_fs-big');
        book.classList.add(`book_fs-${button.dataset.size}`);
    });
});
