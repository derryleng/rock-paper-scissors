const getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const playRound = function(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "Draw!";
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
    }
    return "ERROR";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));