const result = document.querySelector('.results');
const resetButton = document.querySelector('.reset-btn');
const autoButton = document.querySelector('.auto-play-btn');
const butn1 = document.querySelector('.rock-move-btn');

butn1.addEventListener('click', () => {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  const playMove = 'rock';

  if (playMove === 'rock' && computerChoice === 'rock') {
    score.draws += 1;
    result.innerHTML = (`
      <p class="result">Draw.</p> 
      You <p class="rock">✊</p> | <p class="rock">✊</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'rock' && computerChoice === 'paper') {
    score.losses += 1;
    result.innerHTML = (`
      <p class="result">You lose.</p> 
      You <p class="rock">✊</p> | <p class="rock">🖐️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'rock' && computerChoice === 'scissors') {
    score.wins += 1;
    result.innerHTML = (`
      <p class="result">You win.</p> 
      You <p class="rock">✊</p> | <p class="rock">✌️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  }

  localStorage.setItem('score', JSON.stringify(score));
})

const choices = ['rock', 'paper', 'scissors'];

let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    draws: 0
  }
}
/*
function play1() {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  const playMove = 'rock';

  if (playMove === 'rock' && computerChoice === 'rock') {
    score.draws += 1;
    result.innerHTML = (`
      <p class="result">Draw.</p> 
      You <p class="rock">✊</p> | <p class="rock">✊</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'rock' && computerChoice === 'paper') {
    score.losses += 1;
    result.innerHTML = (`
      <p class="result">You lose.</p> 
      You <p class="rock">✊</p> | <p class="rock">🖐️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'rock' && computerChoice === 'scissors') {
    score.wins += 1;
    result.innerHTML = (`
      <p class="result">You win.</p> 
      You <p class="rock">✊</p> | <p class="rock">✌️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  }
  localStorage.setItem('score', JSON.stringify(score));
}*/

function play2() {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  const playMove = 'paper';

  if (playMove === 'paper' && computerChoice === 'rock') {
    score.wins += 1;
    result.innerHTML = (`
      <p class="result">You win.</p> 
      You <p class="paper">🖐️</p> | <p class="paper">✊</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'paper' && computerChoice === 'paper') {
    score.draws += 1;
    result.innerHTML = (`
      <p class="result">Draw.</p> 
      You <p class="paper">🖐️</p> | <p class="paper">🖐️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'paper' && computerChoice === 'scissors') {
    score.losses += 1;
    result.innerHTML = (`
      <p class="result">You lose.</p> 
      You <p class="paper">🖐️</p> | <p class="paper">✌️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  }

  localStorage.setItem('score', JSON.stringify(score));
}

function play3() {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  const playMove = 'scissors';

  if (playMove === 'scissors' && computerChoice === 'rock') {
    score.losses += 1;
    result.innerHTML = (`
      <p class="result">You lose.</p> 
      You <p class="scissors">✌️</p> | <p class="scissors">✊</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'scissors' && computerChoice === 'paper') {
    score.wins += 1;
    result.innerHTML = (`
      <p class="result">You win.</p> 
      You <p class="scissors">✌️</p> | <p class="scissors">🖐️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  } else if (playMove === 'scissors' && computerChoice === 'scissors') {
    score.draws += 1;
    result.innerHTML = (`
      <p class="result">Draw.</p> 
      You <p class="scissors">✌️</p> | <p class="scissors">✌️</p> Computer 
      <p>Wins: ${score.wins} Losses: ${score.losses}  Draws: ${score.draws}</p>`);
  }

  localStorage.setItem('score', JSON.stringify(score));
}

resetButton.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.draws = 0;
  localStorage.removeItem('score');

  result.innerText = (`The score was reset.\nWins: ${score.wins}  Losses: ${score.losses}  Draws: ${score.draws}`);
});

function computerAutoplay() {
  const chooseMove = Math.floor(Math.random() * 3);
  
  if (chooseMove === 0) {
    play1();
  } else if (chooseMove === 1) {
    play2();
  } else if (chooseMove === 2) {
    play3();
  } 
}

let isAutoPlaying = false;
let intervalID;

autoButton.addEventListener('click', () => {

  const autoPlayStop = document.querySelector('.auto-play-btn');

  if (isAutoPlaying === false) {

    intervalID = setInterval(computerAutoplay, 1000);

    autoPlayStop.innerHTML = 'Stop';
    autoPlayStop.classList.add('auto-play-stop');
    isAutoPlaying = true;

  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;

    autoPlayStop.innerHTML = 'Auto Play';
    autoPlayStop.classList.remove('auto-play-stop');
  }
});

