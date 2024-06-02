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
    if (text.trim() === '') {
        return;
    }

    // добавляем новую задачу в список задач
    list.insertAdjacentHTML("afterbegin", `
    <div class="task">
        <div class="task__title">
            ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `);

    // сохраняем задачу в локальное хранилище
    localStorage.setItem('tasks', list.innerHTML);

    // очищаем поле ввода и фокусируемся на нём
    input.value = '';
    input.focus();

    // находим кнопку удаления задачи и добавляем обработчик события
    document.querySelector('.task__remove').addEventListener('click', removeTask);
}

// функция удаления задачи
function removeTask(event) {
    event.target.closest('.task').remove(); // удаляем задачу из списка задач
    localStorage.setItem('tasks', list.innerHTML); // сохраняем оставшиеся задачи в локальное хранилище
}

// сохраняем задачи после перезагрузки страницы
window.addEventListener('load', () => {
    
    // если в локальном хранилище есть задачи, то добавляем их в список задач 
    if (localStorage.getItem('tasks')) {
        list.innerHTML = localStorage.getItem('tasks');
    }
    
    // находим кнопку удаления задачи и добавляем обработчик события
    document.querySelectorAll('.task__remove').forEach(item => item.addEventListener('click', removeTask));
});
