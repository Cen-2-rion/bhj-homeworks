// находим необходимые элементы
const rotatorCases = document.querySelectorAll('.rotator__case ');
let count = 0;

// функция для смены слайдов
function changeRotatorCases() {

    // удаляем активный класс у всех слайдов и добавляем активный класс только к текущему слайду
    rotatorCases.forEach((elem, index) => {
        (count === index) ? elem.classList.add('rotator__case_active') : elem.classList.remove('rotator__case_active');
        elem.style.color = elem.dataset.color; // меняем цвет текста через data-атрибут
    });
    
    // увеличиваем счетчик на единицу и делаем проверку на количество слайдов
    count = (count + 1) % rotatorCases.length;

    // запускаем функцию с data-атрибутом speed
    setTimeout(changeRotatorCases, rotatorCases[count].dataset.speed);
}

changeRotatorCases();
