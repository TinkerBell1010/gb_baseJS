// 1.1 задание в стиле ES6

'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * (1 - 0.25);
    }
}

let prod1 = new Product('shirt', 2500);
console.log(prod1);
prod1.make25PercentDiscount();
console.log(prod1);