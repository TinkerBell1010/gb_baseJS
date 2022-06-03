let renderer = {
    /**
     * Отображает игру в консоли.
     */
    render() {
        let questionNumber = player.question;
        console.log('Ваш счет: ' + player.score + '\nВопрос №' + (questionNumber + 1) + ' из ' + questions.length + '\n' + questions[questionNumber].question + '\n' + questions[questionNumber].answerOptions);
    }
};