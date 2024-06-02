// находим элементы с классом .has-tooltip и созаём div с классом .tooltip
const hasTooltip = document.querySelectorAll('.has-tooltip');
const toolTip = document.createElement('div');
toolTip.classList.add('tooltip');

// перебираем элементы с классом .has-tooltip и вешаем обработчик события на клик
hasTooltip.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();

        // находим координаты элемента
        let posElem = elem.getBoundingClientRect();
        const bottom = `left:${posElem.left + 'px'}; top:${posElem.top + 20 + 'px'}`;

        // сравниваем текст подсказки с текстом элемента
        if (toolTip.textContent !== elem.title) {
            elem.insertAdjacentElement('afterEnd', toolTip); // добавляем div с подсказкой в конец элемента
            toolTip.classList.add('tooltip_active'); // добавляем класс для анимации
            toolTip.textContent = elem.title; // добавляем текст подсказки
            toolTip.style.cssText = bottom; // добавляем координаты подсказки
        } else {
            toolTip.classList.toggle('tooltip_active');
        }
    });
});

// скрываем подсказку при скролле
window.addEventListener('scroll', () => {
    toolTip.classList.remove('tooltip_active');
});

// скрываем подсказку при наведении на другой элемент
hasTooltip.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        toolTip.classList.remove('tooltip_active');
    });
});
