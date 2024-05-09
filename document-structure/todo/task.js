// находим необходимые элементы
const button = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');
// вешаем обработчик события на кнопку
button.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
});
// функция добавления новой задачи
function addTask() {
    let text = input.value;
// проверяем на пустую строку, если строка пустая, то ничего не делаем
    if (text === '') {
        return;
    };
// создаем элементы
    let divTask = document.createElement('div');
    divTask.classList.add('task');
    let divTaskTitle = document.createElement('div');
    divTaskTitle.classList.add('task__title');
    divTaskTitle.innerText = text;
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('task__remove');
    a.innerHTML = '&times;';
// присваиваем элементы в DOM дерево
    divTask.appendChild(divTaskTitle);
    divTask.appendChild(a);
    list.appendChild(divTask);
// очищаем поле ввода и фокусируемся на нём
    input.value = '';
    input.focus();
// вешаем обработчик события на кнопку удаления
    a.addEventListener('click', removeTask);
}
// функция удаления задачи
function removeTask(event) {
    event.preventDefault();
    event.target.parentNode.remove();
}
