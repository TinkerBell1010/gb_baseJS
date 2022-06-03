let answer = {
    /**
     * Получает и отдает ответ от пользователя.
     * @returns {string} Возвращаем ответ, введенный пользователем.
     */
    getAnswer() {
        while (true) {
            const availableAnswers = ['a', 'b', 'c', 'd'];
            let answer = prompt('Введите ответ (a, b, c или d), "Отмена" для выхода.');
            if (answer === null) {
                return null;
            }
            if (!availableAnswers.includes(answer)) {
                alert('Для ответа необходимо ввести одну из букв a, b, c или d.');
                continue;
            }
            return answer;
        }

    },

    /**
     * Проверяет ответ.
     * @param {string} answer Ответ игрока.
     * @returns {boolean} Результат ответа (верно или неверно).
     */
    isItCorrect(answer) {
        let questionNumber = player.question;
        if (answer === questions[questionNumber].correctAnswer) {
            player.score++;
            alert('Ура! Вы правильно ответили на вопрос');
        } else {
            alert('К сожалению, вы ошиблись');
        }
    }
}