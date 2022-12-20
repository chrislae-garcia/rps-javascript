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
// function game() {

//     const playerSelection = prompt("Rock, Paper, or Scissors?");
//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);

//   // Display overall results of the game
//   if (playerScore > computerScore) {
//     console.log('You win the game!');
//   } else if (playerScore < computerScore) {
//     console.log('You lose the game!');
//   } else {
//     console.log(`It's a draw!`);
//   }
// }

// game();

let computerScore = 0;
let playerScore = 0;

const btnPlayerRock = document.querySelector('#player-rock');
const btnPlayerPaper = document.querySelector('#player-paper');
const btnPlayerScissors = document.querySelector('#player-scissors');

btnPlayerRock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

btnPlayerPaper.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

btnPlayerScissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
