// находим все элементы с классом .product
const product = document.querySelectorAll('.product');

// для каждого элемента с классом .product добавляем обработчик
product.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target;
        const prodId = target.closest('.product').getAttribute('data-id'); // id продукта
        const prodImg = target.closest('.product').querySelector('.product__image').src; // картинка продукта
        const prodValue = elem.querySelector('.product__quantity-value').textContent; // количество товара продукта
        const basket = document.querySelector('.cart__products'); // корзина
        const cartId = basket.querySelector(`.cart__product[data-id="${prodId}"]`); // id карточки товара в корзине

// уменшаем количество товара
        if (target.classList.contains('product__quantity-control_dec')) {
            let count = target.nextElementSibling;
            count.textContent--;

            if (count.textContent < 1) {
                count.textContent = 1;
            };
        };

// увеличиваем количество товара
        if (target.classList.contains('product__quantity-control_inc')) {
            let count = target.previousElementSibling;
            count.textContent++;
        };

// добавляем товар в корзину, если такого товара ещё нет, если есть, то увеличиваем количество товара в корзине
        if (cartId && target.classList.contains('product__add')) {
            cartId.querySelector('.cart__product-count').textContent = Number(cartId.querySelector('.cart__product-count').textContent) + Number(prodValue);
        } else if (target.classList.contains('product__add')) {
            basket.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${prodId}">
                <img class="cart__product-image" src=${prodImg}>
                <div class="cart__product-count">${prodValue}</div>
            </div>
            `);
        };
    });
});
