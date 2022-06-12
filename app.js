'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

class CartProduct {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.count = 1;
    }
}

let cartProducts = [];

let cart = document.querySelector('.cartDropDown');
let cartButton = document.querySelector('.cartIcon');
cartButton.addEventListener('click', function () {
    cart.style.display = 'flex';
});


let addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        let productsCount = document.querySelector('.productsCount');
        productsCount.innerHTML = +(productsCount.innerHTML) + 1;
        let product = button.closest('.featuredItem').querySelector('.featuredData');
        addToCart(product);
        showCart();
    });
});

/**
 * Добавляет товар в корзину.
 * Если товар уже добавлен, увеличивает его количество.
 */
function addToCart(product) {
    let id = product.getAttribute('data-id');
    let isInclude = false;
    cartProducts.forEach(cartProduct => {
        if (cartProduct.id === id) {
            cartProduct.count++;
            isInclude = true;
        }
    });

    if (!isInclude) {
        let name = product.querySelector('.featuredName').innerText;
        let description = product.querySelector('.featuredText').innerText;
        let price = +(product.querySelector('.featuredPrice').innerText.replace('$', ''));
        cartProducts.push(new CartProduct(id, name, description, price));
    }

}
/**
 * Создает HTML-разметку корзины
 */
function showCart() {
    let cartTable = '<table class="cartTable"><tr class="tableRow"><th>Название товара</th><th>Количество</th><th>Цена за шт.</th><th>Итого</th></tr>';
    let totalPrice = 0;
    cartProducts.forEach(product => {
        cartTable += `<tr class="tableRow"><td>${product.name}</td><td>${product.count}</td><td>$${product.price}</td><td>$${product.count * product.price}</td></tr>`;
        totalPrice += product.count * product.price;
    });
    cartTable += `</table><p class='totalPrice'>Товаров в корзине на сумму: $${totalPrice}</p>`;
    cart.innerHTML = cartTable;
}