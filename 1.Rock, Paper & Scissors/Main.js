const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");

let  userChoice
let computerChoice
let  result
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber= Math.floor(Math.random() * 3) + 1
    if(randomNumber == 1){
        computerChoice ='Rock'
    }
    else if(randomNumber == 2){
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
      result = "It's Draw...!!!";
    } else if (computerChoice === "Rock" && userChoice === "Paper") {
      result = "You Win this Game...!!!";
    } else if (computerChoice === "Rock" && userChoice === "Scissors") {
      result = "You Loose this Game...!!!";
    } else if (computerChoice === "Paper" && userChoice === "Rock") {
      result = "You Loose this Game...!!!";
    } else if (computerChoice === "Paper" && userChoice === "Scissors") {
      result = "You Win this Game...!!!";
    } else if (computerChoice === "Scissors" && userChoice === "Paper") {
      result = "You Loose this Game...!!!";
    } else if (computerChoice === "Scissors" && userChoice === "Rock") {
      result = "You Win this Game...!!!";
    }
    resultDisplay.innerHTML = result
}
