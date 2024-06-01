// создаём экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();

// вешаем обработчик на запрос
xhr.addEventListener('readystatechange', (event) => {
    event.preventDefault();

    if (xhr.readyState === xhr.DONE) {

        const response = JSON.parse(xhr.responseText);
        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');
        
        pollTitle.textContent = response.data.title;

        // перебираем вопросы в запросе и вставляем в DOM дерево
        for (let answer of response.data.answers) {
            pollAnswers.insertAdjacentHTML('afterBegin', `
            <button class="poll__answer">
                ${answer}
            </button>
            `);
        }
    }

    // перебираем кнопки и вешаем обработчик
    document.querySelectorAll('.poll__answer').forEach(button => {
        button.addEventListener('click', () => {
            alert('«Спасибо, ваш голос засчитан!»');
        });
    });
});

// создаём асинхронный запрос и отправляем его
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
