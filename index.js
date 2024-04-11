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
        alert(`Please answer this question before proceeding to the next`)
    }
}

function confirmChoice() {
    var selectElement = document.getElementById('options');
    var selectedValue = selectElement.value;
    var errorMessage = document.getElementById('Error Message');

    if (selectedValue === "") {
      errorMessage.style.display = 'block';
      return false;
    } else {
      errorMessage.style.display = 'none';
      return true;
    }
}

function calculate(totalScore) {
    if(totalScore = 100){
        return "Congratulations! You aced the trivia!"
    }
    else{
        if(totalScore < 100 || totalScore >= 50){
            return "Not bad."
        }
        else{
            return "Looks like your gaming knowledge is not as much."
        }
    }
}