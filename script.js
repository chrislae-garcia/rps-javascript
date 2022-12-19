// Generate a random choice between 'Rock', 'Paper', and 'Scissors'
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
    default:
      return 'Error';
  }
}

// Play a round between player and computer
function playRound(playerSelection, computerSelection) {
  let playerSelect = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerSelect = computerSelection;
  console.log(`You: ${playerSelect} \nComputer: ${computerSelect}`)

  if (playerSelect == computerSelect) {
    console.log('Draw!');
  } else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
    console.log(`You lose! ${computerSelect} beats ${playerSelect}`);
  } else {
    console.log(`You win! ${playerSelect} beats ${computerSelect}`);
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);