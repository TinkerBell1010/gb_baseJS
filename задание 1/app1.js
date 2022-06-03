// 1 задание

'use strict';

let num = Number(prompt('Введите любое целое число от 0 до 999'));

function getNumObject(num) {
    if (isNaN(num) || !Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Введите корректное число!');
        return {};
    } else {
        return {
            units: num % 10,
            tens: Math.floor((num % 100) / 10),
            hundreds: Math.floor(num / 100)
        }
    }
}

console.log(getNumObject(num));