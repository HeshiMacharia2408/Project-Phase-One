const baseUrl = 'http://localhost:5500'
fetch(`${baseUrl}/results`)
obtainQuestion()

function obtainQuestion() {
    fetch(`${baseUrl}/results`)
    .then(response => response.json())
    .then(data => {
        const question = data.results[O]
    })
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;

    const trueButton = document.getElementById('trueButton');
    const falseButton = document.getElementById('falseButton');
    const feedbackElement = document.getElementById('feedback');
}

function checkAnswer(inputAnswer, correctAnswer, feedbackElement) {
    if(inputAnswer === correctAnswer){
        return `${inputAnswer} is correct!`;
    }
    else{
        return `${inputAnswer} is not correct.`;
    }
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Game Trivia</title>
    <link rel="stylesheet" href="style.css">
    <h1>True or False Gaming Trivia</h1>
    <style>
        
    </style>
</head>
<body>
    <p>Have some fun completing these trivia gaming questions</p>
    <div id="question"></div>
    <button onclick="answer('true')">True</button>
    <button onclick="answer('false')">False</button>
    <div id="Error Message">Please choose an option to continue</div>
    <script src="index.js"></script>
    <script src="http://localhost:5500"></script>
<body>
</html>
