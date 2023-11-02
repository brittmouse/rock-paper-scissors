let win = 0;
let tie = 0;
let loss = 0;

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
    tie++;
    result.innerText = `It's a tie - you both played ${playerSelection}.`;
  } else {
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      win++;
      result.innerText = `You win - ${playerSelection} beats ${computerSelection}!`;
    } else {
      loss++;
      result.innerText = `You lose - ${computerSelection} beats ${playerSelection}!`;
    }
  }
  updateScores();
}

const isGameOver = () => (win === 5 || loss === 5);

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const winOut = document.getElementById("wins");
const tieOut = document.getElementById("ties");
const loseOut = document.getElementById("losses");
const result = document.getElementById("result");
const final = document.getElementById("final");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection) // <= UNCOMMENT WHEN DONE TESTING
}

function updateScores() {
  winOut.innerText = `Wins: ${win}`;
  tieOut.innerText = `Ties: ${tie}`;
  loseOut.innerText = `Losses: ${loss}`;
}
