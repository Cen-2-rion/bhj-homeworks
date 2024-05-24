// находим необходимые элементы
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const button = document.getElementById('signin__btn');
const control = document.querySelectorAll('.control');
const title = document.querySelector('.title');

// проверяем наличие id пользователя в локальном хранилище
 if (localStorage.id) {
    onLoggedIn();
 } else {
    onLoggedOut();
 }

// обрабатываем событие отправки формы
 form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest(); // создаём объект запроса

    // обрабатываем ответ сервера
    xhr.addEventListener('readystatechange', () => {

        if (xhr.readyState === xhr.DONE) {
            const response = JSON.parse(xhr.responseText); // распарсиваем ответ

            if (response.success === true) {
                localStorage.id = response.user_id; // записываем id пользователя в локальное хранилище
                onLoggedIn();
            } else if (button.textContent === 'Выйти') {
                    localStorage.removeItem('id'); // удаляем id пользователя из локального хранилища
                    onLoggedOut();
            } else {
                alert('Неверный логин/пароль'); // выводим сообщение об ошибке
            }
            form.reset(); // очищаем форму
        }
    });

    // отправляем форму
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
});

function onLoggedIn() {
    welcome.textContent = `Добро пожаловать, пользователь #${localStorage.id}`; // выводим приветствие
    welcome.classList.add('welcome_active'); // активируем блок с приветствием
    title.textContent = 'Успешная авторизация'; // меняем заголовок
    button.textContent = 'Выйти'; // меняем текст кнопки
    control.forEach((elem) => {
        elem.classList.add('control_hidden'); // скрываем поля авторизации
    });
}

function onLoggedOut() {
    welcome.classList.remove('welcome_active'); // деактивируем блок с приветствием
    control.forEach((elem) => {
        elem.classList.remove('control_hidden'); // показываем поля авторизации
    });
    title.textContent = 'Вход';
    button.textContent = 'Войти';
}
