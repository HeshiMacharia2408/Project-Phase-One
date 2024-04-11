document.addEventListener('DOMContentLoaded', () => {
    fetchQuestion();
});

function fetchQuestion() {
    fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean')
        .then(response => response.json())
        .then(data => {
            const question = data.results[0];
            displayQuestion(question);
        })
        .catch(error => {
            console.error('Failed to fetch question:', error);
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
    setTimeout(() => {
        feedbackElement.textContent = '';
        fetchQuestion(); // Fetch a new question
    }, 2000); // Show feedback for 2 seconds before moving on
}