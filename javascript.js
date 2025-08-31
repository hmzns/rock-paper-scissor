let humanChoice;
let computerChoice;
let humanScore = 0; //Default human score
let computerScore = 0; //Default computer score


//Computer generates a random choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    //value between 0-3 is rock
    if (choice < 4) { 
        return "rock";
    //value between 4-6 is paper
    } else if (choice < 7) {
        return "paper";
    //value between 7-9 is scissors
    } else {
        return "scissors";
    }
}


//Get human choice
function getHumanChoice() {
    humanChoice = prompt("Enter rock, paper or scissors: ");
    return humanChoice.trim().toLowerCase(); //Trims whitespace and converts to lowercase
}


//Defines the game function
function playGame() {

    //Executes a round and adds score
    function playRound(computerChoice, humanChoice) { //Defines the function and stores values in parameters

        if (humanChoice === computerChoice) {
            console.log("It's a tie!"); //Announces a tie
        } else if ( 
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win!"); //Announces a win
            humanScore++; //Adds 1 to human score
        } else {
            console.log("You lose!"); //Announces a loss
            computerScore++; //Adds 1 to computer score
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`); //Displays the score
    }

    // Plays a round by getting choices
    const humanSelection = getHumanChoice(); //Stores human choice in a variable
    const computerSelection = getComputerChoice(); //Stores computer choice in a variable

    playRound(computerSelection, humanSelection); //Runs a round with the choices
}

//Starts the game
for (let i = 0; i < 5; i++) { //Loops 5 times for 5 rounds
    playGame();
}