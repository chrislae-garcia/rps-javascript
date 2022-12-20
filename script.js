const results = document.querySelector('.results');
const score = document.querySelector('.score');

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

  if (playerScore == 5 || computerScore == 5) return;

  let playerSelect = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerSelect = computerSelection;

  if (playerSelect == computerSelect) {
    results.textContent = 'Draw!';
  } else if ((playerSelect == 'Rock' && computerSelect == 'Paper') ||
    (playerSelect == 'Paper' && computerSelect == 'Scissors') ||
    (playerSelect == 'Scissors' && computerSelect == 'Rock')) {
    results.textContent = `You lose! ${computerSelect} beats ${playerSelect}`;
    computerScore++;
  } else {
    results.textContent = `You win! ${playerSelect} beats ${computerSelect}`;
    playerScore++;
  }

  if (playerScore == 5) {
    results.textContent = `You win the game!`;
  } else if (computerScore == 5) {
    results.textContent = `You lose the game!`;
  }

  score.textContent = `SCORE\tYou: ${playerScore} \tComputer: ${computerScore}`;
}

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
