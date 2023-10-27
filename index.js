function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const listIndex = Math.floor(Math.random() * 3);
  return choices[listIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

let playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
