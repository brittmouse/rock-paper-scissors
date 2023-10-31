function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const listIndex = Math.floor(Math.random() * 3);
  return choices[listIndex];
}

const buttons = document.getElementById("buttons");
buttons.addEventListener('click', (event) => {
  const target = event.target;
  switch (target.id) {
    case "rock":
      console.log("Rock was selected");
      break;
    case "paper":
      console.log("Paper was selected");
      break;
    case "scissors":
      console.log("Scissors was selected");
      break;
  }
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both played ${playerSelection}`;
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
