let win = 0;
let tie = 0;
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
    tie++;
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

const isGameOver = () => (win === 5 || loss === 5);

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  // playRound(playerSelection, computerSelection) // <= UNCOMMENT WHEN DONE TESTING
}
