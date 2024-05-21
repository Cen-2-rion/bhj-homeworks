const editor = document.getElementById('editor'); // находим поле текста

// добавляем кнопку "Очистить содержимое"
const div = document.createElement('div');
div.innerHTML = '<button id="clear">Очистить содержимое</button>';
editor.insertAdjacentElement('afterEnd', div);

const btnClear = document.getElementById('clear'); // находим кнопку "Очистить содержимое"

// при изменении содержимого поля текста, сохраняем его в localStorage
editor.addEventListener('input', (event) => {
    localStorage.setItem('editor', JSON.stringify(event.target.value));
});

// при нажатии на кнопку "Очистить содержимое", очищаем содержимое поля текста и удаляем сохранённое в localStorage
btnClear.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editor');
});

// если в localStorage есть сохранённое содержимое поля текста, загружаем его в поле текста
if (localStorage.getItem('editor')) {
    editor.value = JSON.parse(localStorage.getItem('editor'));
}
