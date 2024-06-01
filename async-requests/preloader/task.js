// создаём экземпляр объекта XMLHttpRequest
const xhr = new XMLHttpRequest();

// вешаем обработчик на запрос
xhr.addEventListener('readystatechange', (event) => {
    event.preventDefault();

    if (xhr.readyState === xhr.DONE) {
        
        const item = document.querySelector('.item');
        const response = JSON.parse(xhr.responseText).response.Valute; // распарсиваем ответ
        
        const loader = document.getElementById('loader');
        loader.classList.remove('loader_active'); // отключаем загрузочный экран

        // по готовности проходимся циклом и находим необходимые значения
        for (let elem in response) {
            item.insertAdjacentHTML('afterEnd', `
            <div class="item">
                <div class="item__code">
                    ${response[elem].CharCode}
                </div>
                <div class="item__value">
                    ${response[elem].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
            `);

            const item__code = document.querySelector('.item__code');
            const item__value = document.querySelector('.item__value');

            // сохраняем данные в localStorage
            localStorage.setItem('item__code', response[elem].CharCode);
            localStorage.setItem('item__value', response[elem].Value);

            // проверяем наличие данных в localStorage
            if (localStorage.getItem('item__code')!== null) {
                item__code.textContent = localStorage.getItem('item__code'); // если данные есть, то берём их из localStorage и выводим на страницу
            } else {
                item__code.textContent = response[elem].CharCode; // если данных нет, то берём данные из ответа и выводим на страницу
            }

            if (localStorage.getItem('item__value')!== null) {
                item__value.textContent = localStorage.getItem('item__value');
            } else {
                item__value.textContent = response[elem].Value;
            }
        }
    }
});

// создаём асинхронный запрос и отправляем его
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
