const getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const playRound = function(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return [0, 1];
        } else if (computerSelection == "scissors") {
            return [1, 0];
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return [1, 0];
        } else if (computerSelection == "scissors") {
            return [0, 1];
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return [0, 1];
        } else if (computerSelection == "paper") {
            return [1, 0];
        }
    }
    return [0, 0];
}

const game = function() {
    validChoices = ["rock", "paper", "scissors"];
    currentScore = [0, 0];
    for (let i = 0; i < 5; i++) {

        let playerSelection = undefined;
        while (!validChoices.includes(playerSelection)) {
            playerSelection = prompt("Rock, paper or scissors?").replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
        }
        computerSelection = getComputerChoice();

        let round = playRound(playerSelection, computerSelection);
        if (round[0] == 1) {
            console.log(`Computer picks ${computerSelection}! You win this round!`);
            currentScore[0]++;
        } else if (round[1] == 1) {
            console.log(`Computer picks ${computerSelection}! You lose this round :(`);
            currentScore[1]++;
        } else {
            console.log(`Computer picks ${computerSelection}! Round draw!`);
        }

        console.log(`Round ${i + 1}/5, Human: ${currentScore[0]}, Computer: ${currentScore[1]}`);
    }
    if (currentScore[0] > currentScore[1]) {
        console.log(`Congrats, you win!`);
    } else if (currentScore[0] < currentScore[1]) {
        console.log(`Boo, you lost!`);
    } else {
        console.log(`It was a draw!`);
    }
}

game();
