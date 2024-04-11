const baseUrl = 'http://localhost:3000'

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
    if(chosenOption = option1){
        console.log(`${chosenOption} is correct!`)
    }
    else if(chosenOption = option2){
        console.log(`${chosenOption} is not correct.`)
    }
    else{
        console.log(`Please answer this question before proceeding to the next`)
    }
}

const averageScore = questionsAnsweredCorrectly;

function questionsAnsweredCorrectly() {
    if(questionsAnsweredCorrectly ){
        return(`Your total score is ${averageScore}`)
    }
}
