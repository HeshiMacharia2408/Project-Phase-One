const baseUrl = 'http://localhost:5500'
fetch(`${baseUrl}/results`)
.then(function (response){
    return response.json;
})
.then(function (data) {
    console.log(data);
})

function checkAnswer(inputAnswer) {
    if(inputAnswer = incorrectAnswer){
        document.getElementById("correct_answer");
        return `${inputAnswer} is correct!`;
    }
    else if(inputAnswer = wrongOption){
        document.getElementById("incorrect_answers")
        return `${inputAnswer} is not correct.`;
    }
    else{
        alert(`Please choose an option before proceeding to the next question`);
    }
}


