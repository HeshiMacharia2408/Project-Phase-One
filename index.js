const apiUrl = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean'
fetch(`${apiUrl}/results`);

function displayQuestion() {
    fetch(`${apiUrl}`)
    .then(response => response.json())
    .then(question => {
        displayQuestion();
    })
}

function checkAnswer(userAnswer, correctAnswer, feedbackElement) {
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Wrong!';
    }
}

displayQuestion();