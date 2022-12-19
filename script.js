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
  console.log(`You: ${playerSelect} \nComputer: ${computerSelect}`);

  if (playerSelect == computerSelect) {
    console.log('Draw!');
  } else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
    console.log(`You lose! ${computerSelect} beats ${playerSelect}`);
    computerScore++;
  } else {
    console.log(`You win! ${playerSelect} beats ${computerSelect}`);
    playerScore++;
  }
  console.log(`SCORE\tYou: ${playerScore} \tComputer: ${computerScore}`);
}

// Play the game for 5 rounds
function game() {
  for (let i = 1; i <= 5; i++) {
    console.log('Round ' + i);
    const playerSelection = prompt("ROUND " + i + ":\nRock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  // Display overall results of the game
  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game!');
  } else {
    console.log(`It's a draw!`);
  }
}

let computerScore = 0;
let playerScore = 0;

game();
