const baseUrl = 'http://localhost:5500'
fetch(`${baseUrl}/results`)
.then(function (response){
    return response.json
})
 
function checkOption(chosenOption) {
    if(chosenOption = wrongOption){
        console.log(`${chosenOption} is correct!`);
    }
    else if(chosenOption = wrongOption){
        console.log(`${chosenOption} is not correct.`);
    }
    else{
        alert(`Please choose an option before proceeding to the next question`);
    }
}

function calculate(totalScore) {
    if(totalScore = 100){
        return "Congratulations! You aced the trivia!";
    }
    else if(totalScore < 100 || totalScore >= 50){
        return "Not bad";
    }
}