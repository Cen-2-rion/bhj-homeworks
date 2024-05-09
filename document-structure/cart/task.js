// находим все элементы с классом .product
const product = document.querySelectorAll('.product');
// для каждого элемента с классом .product добавляем обработчик
product.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target;

        let id = target.closest('.product').getAttribute('data-id');
        console.log(id);
// уменшаем количество товара        
        if (target.classList.contains('product__quantity-control_dec')) {
            let count = target.nextElementSibling;
            count.textContent--;
            if (count.textContent < 1) {
                count.textContent = 1;
            }
        };
// увеличиваем количество товара        
        if (target.classList.contains('product__quantity-control_inc')) {
            let count = target.previousElementSibling;
            count.textContent++;
        };
// создаём элементы для корзины
        if (target.classList.contains('product__add')) {
            let cloneParent = elem.cloneNode(false);
            cloneParent.classList.replace('product', 'cart__product');
            console.log(cloneParent);

            let cloneImage = target.closest('.product__controls').previousElementSibling.cloneNode(false);
            cloneImage.classList.replace('product__image', 'cart__product-image');
            console.log(cloneImage);

            let cloneValue = elem.querySelector('.product__quantity-value').cloneNode(false);
            cloneValue.classList.replace('product__quantity-value', 'cart__product-count');
            cloneValue.textContent = elem.querySelector('.product__quantity-value').textContent;
            console.log(cloneValue);

// находим необходимые элементы и добавляем в корзину
            let cartProduct = document.querySelector('.cart__products'); // карточка товара в корзине
            let cartProductId = cartProduct.querySelector(`.cart__product[data-id="${id}"]`); // id карточки товара в корзине

            if (cartProductId) {
                let cartProductCount = cartProduct.querySelector(`.cart__product[data-id="${id}"]`).querySelector('.cart__product-count').textContent; // количество в карточке товара в корзине
                let productValue = elem.querySelector('.product__quantity-value').textContent; // количество товара в атрибуте

                cartProduct.querySelector(`.cart__product[data-id="${id}"]`).querySelector('.cart__product-count').textContent = +cartProductCount + +productValue; // увеличиваем количество товара в карточке
            } else {
                cartProduct.insertAdjacentElement('afterBegin', cloneParent);
                cloneParent.insertAdjacentElement('afterBegin', cloneImage);
                cloneParent.insertAdjacentElement('beforeEnd', cloneValue);
            };
        };
    });
});
