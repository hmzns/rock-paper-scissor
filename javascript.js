// Computer generates a random choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10);
    // value between 0-3 is rock
    if (computerChoice < 4) { 
        return "rock";
    // value between 4-6 is paper
    } else if (computerChoice < 7) {
        return "paper";
    // value between 7-9 is scissors
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());

// Get the human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper or scissors: ").toLowerCase();
}
console.log(getHumanChoice());