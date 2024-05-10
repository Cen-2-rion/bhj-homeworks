// находим все элементы с классом .product
const product = document.querySelectorAll('.product');

// для каждого элемента с классом .product добавляем обработчик
product.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let target = event.target;
        let prodId = target.closest('.product').getAttribute('data-id'); // id продукта
        let prodImg = target.closest('.product').querySelector('.product__image').src; // картинка продукта
        let prodValue = elem.querySelector('.product__quantity-value').textContent; // количество товара продукта
        let cart = document.querySelector('.cart__products'); // карточка товара в корзине
        let cartId = cart.querySelector(`.cart__product[data-id="${prodId}"]`); // id карточки товара в корзине

// уменшаем количество товара
        if (target.classList.contains('product__quantity-control_dec')) {
            let count = target.nextElementSibling;
            count.textContent--;

            if (count.textContent < 1) {
                count.textContent = 1;
            };
            return;
        };

// увеличиваем количество товара
        if (target.classList.contains('product__quantity-control_inc')) {
            let count = target.previousElementSibling;
            count.textContent++;
            return;
        };

// добавляем товар в корзину, если такого товара ещё нет, если есть, то увеличиваем количество товара в корзине
        if (cartId) {
            cartId.querySelector('.cart__product-count').textContent = Number(cartId.querySelector('.cart__product-count').textContent) + Number(prodValue); // увеличиваем количество товара в карточке
        } else {
            cart.insertAdjacentHTML('afterBegin', `
            <div class="cart__product" data-id="${prodId}">
                <img class="cart__product-image" src=${prodImg}>
                <div class="cart__product-count">${prodValue}</div>
            </div>
            `);
        };
    });
});
