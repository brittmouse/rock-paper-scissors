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
}

function updateScores() {
  winOut.innerText = `Wins: ${win}`;
  tieOut.innerText = `Ties: ${tie}`;
  loseOut.innerText = `Losses: ${loss}`;
}

function setFinalMessage(win, loss) {
  return win > loss ? (final.innerText = "You win!") : (final.innerText = "You lost.");
}

const isGameOver = (win, loss) => (win === 5 || loss === 5);

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const restartBtn = document.getElementById("restart");
const winOut = document.getElementById("wins");
const tieOut = document.getElementById("ties");
const loseOut = document.getElementById("losses");
const result = document.getElementById("result");
const final = document.getElementById("final");

rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));
restartBtn.addEventListener("click", () => reset());

function game(playerSelection) {
  if (isGameOver(win, loss)) {
    setFinalMessage(win, loss);
    return;
  }
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection) // <= UNCOMMENT WHEN DONE TESTING
  updateScores();

  if (isGameOver(win, loss)) {
    setFinalMessage(win, loss);
    return;
  }
}

function reset() {
  win = 0;
  tie = 0;
  loss = 0;
  result.innerText = "";
  final.innerText = "";
  winOut.innerText = `Wins: ${win}`;
  tieOut.innerText = `Ties: ${tie}`;
  loseOut.innerText = `Losses: ${loss}`;
}
