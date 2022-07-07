const NUMBER_OF_ROUNDS = 5;
const display = document.querySelector('.disp_results');
let playerScore = 0;
let output = "";
let computerScore = 0;


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

function displayResults(string, won){
    display.textContent = string + " " + playerScore + "-" + computerScore;

}
function updateScore(won){
    
    if(playerScore >= 5 || computerScore >= 5){
        if(playerScore === 5) output = "Player Won";
        else output = "Computer Won";
    }
    else{
        switch (won) {
        case -1:
            playerScore += 1;
            if(playerScore === 5) output = "Player Won";
            break;
        case 1:
            computerScore += 1;
            if(computerScore === 5) output = "Computer Won";        
            break;
            
        }
    }
}
    
function playRound(playerSelection, computerSelection = computerPlay()){
    playerSelection = playerSelection.toLowerCase(); // insensitive input
    let won = false;
    switch (playerSelection) {
        case 'rock':
            if(computerSelection == "scissors") {
                output = "You won! " + playerSelection + 
                    " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "paper") {
                output = "You lose! " + computerSelection + 
                    " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
            break;
        case 'paper':
            if(computerSelection == "rock") {
                output = "You won! " + playerSelection + 
                    " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "scissors") {
                output = "You lose! " + computerSelection + 
                    " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
              
            break;
        case 'scissors':
            if(computerSelection == "paper") {
                output = "You won! " + playerSelection +
                     " beats " + computerSelection;
                won = 1;
            }
            else if(computerSelection == "rock") {
                output = "You lose! " + computerSelection + 
                    " beats " + playerSelection;
                won = -1;
            }
            else{ 
                output = "Tie";
                won = 0;
            }
            break;
    }
    updateScore(won, output);
    displayResults(output, won);
    return [output, won];
}
 
/*function game(){

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
}*/

let buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', () =>{
        roundOut = playRound(button.id);
    });
});




