let win = 0;
let lose = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both played ${playerSelection}`;
  } else {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      win++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      lose++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click");
paperBtn.addEventListener("click");
scissorsBtn.addEventListener("click");

function game() {
  // for (let i = 1; i <= 5; i++) {
  let playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
  let computerSelection = getComputerChoice();
  while (
    (playerSelection !== "rock") &&
    (playerSelection !== "paper") &&
    (playerSelection !== "scissors")
  ) {
    console.log("Invalid input.");
    playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (
      (playerSelection === "rock") ||
      (playerSelection === "paper") ||
      (playerSelection === "scissors")
    ) {
      break;
    }
  }
  console.log(playRound(playerSelection, computerSelection));
  // }
}

// game();
