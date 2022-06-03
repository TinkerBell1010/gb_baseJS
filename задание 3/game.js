let game = {
    /**
     * Запускает игру.
     */

    run() {
        while (true) {
            renderer.render();
            // Получаем ответ игрока.
            const playerAnswer = answer.getAnswer();
            if (playerAnswer === null) {
                console.log('Игра окончена');
                return;
            }
            answer.isItCorrect(playerAnswer);
            console.clear();
            player.question++;
            if (player.question >= questions.length) {
                alert('Игра окончена. Ваш счет: ' + player.score);
                let oneMoreTime = confirm('Хотите сыграть еще раз?');
                if (oneMoreTime === true) {
                    player.score = 0;
                    player.question = 0;
                } else {
                    console.log('Игра окончена. Ваш счет: ' + player.score);
                    return;
                }
            }
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"! Чтобы начать наберите game.run() и нажмите Enter.');
    }
};

game.init();