function displayElement() {
    const reveal = document.querySelectorAll('.reveal');

    reveal.forEach(elem => {
        const {top, bottom} = elem.getBoundingClientRect(); // находим координаты элемента
        
        // если координаты элемента в пределах видимости окна, то отображаем элемент, иначе скрываем
        (top > 0 && bottom < window.innerHeight) ? elem.classList.add('reveal_active') : elem.classList.remove('reveal_active');
    });
}

// запускаем функцию displayElement каждые 0 миллисекунд и вешаем обработчик скролла на окно
setInterval(() => {
    window.addEventListener('scroll', displayElement(this.reveal));
}, 0);
