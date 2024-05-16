// находим необходимые элементы
const form = document.getElementById('form');
const progress = document.getElementById('progress');

// обрабатываем событие отправки формы
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest(); // создаём объект запроса
    
// обрабатываем ответ сервера
    xhr.upload.addEventListener('progress', (event) => {
        const percentage = Math.round((event.loaded / event.total) * 100);
        progress.value = percentage;
    });

// отправляем форму
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});
