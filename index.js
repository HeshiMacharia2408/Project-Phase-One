const baseUrl = 'http://localhost:5500'
fetch(`${baseUrl}/results`)
.then(response => response.json())
.then(dara => {
    const question = data.results[O];
    displayQuestion(question)
})

function showQuestion(question) {
    const trueButton = document.getElementById('trueButton');
    const falseButton = document.getElementById('falseButton')
}

function checkAnswer(inputAnswer, correctAnswer) {
    if(inputAnswer === correctAnswer){
        return `${inputAnswer} is correct!`;
    }
    else{
        return `${inputAnswer} is not correct.`;
    }
}


