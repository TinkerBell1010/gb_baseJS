/**
 * Объект с вопросами игры.
 * @property {string} question Вопрос
 * @property {string} answerOptions Варианты ответов
 * @property {string} correctAnswer Правильный ответ 
 */

class QandA {
    constructor(question, answerOptions, correctAnswer) {
        this.question = question;
        this.answerOptions = answerOptions;
        this.correctAnswer = correctAnswer;
    }
}

const questions = [
    new QandA('Сколько букв в слове "привет"?', 'a. Пять \nb. Шесть \nc. Семь \nd. Куда я попал?', 'a'),
    new QandA('Что говорит кошка?', 'a. Гав \nb. Хрю \nc. Мяу \nd. Привет', 'c'),
    new QandA('Как зовут бога грома и молний в греческой мифологии?', 'a. Петр \nb. Одиссей \nc. Дионис \nd. Зевс', 'd'),
    new QandA('Из какого мультика почтальон Печкин?', 'a. Смешарики \nb. Ежик в тумане \nc. Простоквашино \nd. Том и Джерри', 'c'),
    new QandA('Сколько будет 5 умножить на 6?', 'a. 25 \nb. 30 \nc. 35 \nd. 40', 'b'),
    new QandA('Что кушают ежики?', 'a. насекомых \nb. яблоки \nc. шишки \nd. грибы', 'a')

];