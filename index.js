const baseUrl = 'http://localhost:5500'
fetch(`${baseUrl}/results`)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
})

.then(data => {
    console.log(data);
})

function promptUser() {
    promptUser("Choose an Option");
}

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