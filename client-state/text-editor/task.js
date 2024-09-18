const editor = document.getElementById('editor'); // находим поле текста
const btnClear = document.getElementById('clear'); // находим кнопку "Очистить содержимое"

// добавляем кнопку "Очистить содержимое" в конец поля текста
editor.insertAdjacentElement('afterEnd', btnClear);

// при изменении содержимого поля текста, сохраняем его в localStorage
editor.addEventListener('input', (e) => {
    localStorage.setItem('editor', e.target.value);
});

// при нажатии на кнопку "Очистить содержимое", очищаем содержимое поля текста и удаляем сохранённое в localStorage
btnClear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editor');
});

// если в localStorage есть сохранённое содержимое поля текста, загружаем его в поле текста
editor.value = localStorage.getItem('editor');
