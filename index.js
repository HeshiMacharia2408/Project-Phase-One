document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'http://localhost:5500'
    fetch(`${apiUrl}/results`);
})

function fetchQuestion() {
    fetch(`${apiUrl}`)
        .then(response => response.json())
        .then(data => {
            displayQuestion(question);
        })
        .catch(error => {
            console.error('Failed to get question:', error);
        });
}

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;

    const trueButton = document.getElementById('trueButton');
    const falseButton = document.getElementById('falseButton');
    const feedbackElement = document.getElementById('feedback');

    trueButton.onclick = () => checkAnswer('True', question.correct_answer, feedbackElement);
    falseButton.onclick = () => checkAnswer('False', question.correct_answer, feedbackElement);
    
}

function checkAnswer(userAnswer, correctAnswer, feedbackElement) {
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Wrong!';
    }
}