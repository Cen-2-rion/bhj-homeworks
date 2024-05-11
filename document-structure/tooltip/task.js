// находим элементы с классом .has-tooltip
const hasTooltip = document.querySelectorAll('.has-tooltip');

// перебираем элементы с классом .has-tooltip и вешаем обработчик события на клик
hasTooltip.forEach(elem => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();

// находим координаты элемента
        let posElem = elem.getBoundingClientRect();
        const top = `left:${posElem.left + 'px'}; top:${posElem.top - 30 + 'px'}`;
        const right = `left:${posElem.right + 'px'}; top:${posElem.top + 'px'}`;
        const bottom = `left:${posElem.left + 'px'}; top:${posElem.top + 20 + 'px'}`;
        const left = `left:${posElem.left - 100 + 'px'}; top:${posElem.top + 'px'}`;

// присваиваем элементы в DOM дерево
        elem.insertAdjacentHTML('afterEnd', `<div class="tooltip">${elem.title}</div>`);

// находим необходимые элементы
        let toolTip = document.querySelector('.tooltip'); // div с классом .tooltip
        
        if (elem.title === toolTip.textContent) {
            toolTip.style.cssText = bottom;
            toolTip.classList.toggle('tooltip_active');
        } else {
            toolTip.textContent = elem.title; // заменяем текст внутри div с классом .tooltip
            toolTip.style.cssText = bottom;
            toolTip.classList.add('tooltip_active');
        };
    });
});
