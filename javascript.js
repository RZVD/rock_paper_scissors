const NUMBER_OF_ROUNDS = 5;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay(){
    let outcome = getRandomInteger(0, 3);
    let move = '';
    switch (outcome) {
        case 0:
            move = 'rock';
            break;
        case 1:
            move = 'paper';
            break;
        case 2:
            move = 'scissors';
            break;
    } 
    return move;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); // insensitive input
    let output = "";
    let won = false;
    switch (playerSelection) {
        case 'rock':
            if(computerSelection == "scissors") {
                output = "You won! " + playerSelection + " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "paper") {
                output = "You lose! " + computerSelection + " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
            break;
        case 'paper':
            if(computerSelection == "rock") {
                output = "You won! " + playerSelection + " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "scissors") {
                output = "You lose! " + computerSelection + " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
              
            break;
        case 'scissors':
            if(computerSelection == "paper") {
                output = "You won! " + playerSelection + " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "rock") {
                output = "You lose! " + computerSelection + " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
            break;
    }

    return [output, won];
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < NUMBER_OF_ROUNDS; i++){
        let choice = String(prompt("Choose your weapon"));
        let data = playRound(choice, computerPlay());
        
        switch (data[1]) {
            case -1:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
        }    
    }
    return [playerScore, computerScore];
}

console.log(game());