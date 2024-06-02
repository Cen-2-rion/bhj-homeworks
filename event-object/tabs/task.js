// находим необходимые элементы
const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

// добавляем обработчик события на каждый элемент массива tabs
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('tab_active')); // удаляем активный класс у всех элементов массива tabs
        tab.classList.add('tab_active');

        // удаляем активный класс у всех элементов массива tabsContent
        tabsContent.forEach((content, j) => {
            content.classList.remove('tab__content_active');
            
            // добавляем активный класс только у того элемента массива tabsContent, который соответствует активному элементу массива tabs
            if (i === j) {
                content.classList.add('tab__content_active');
            }
        });
    });
});
