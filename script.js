'use strict';

const currentPlayer0El = document.querySelector('.player--0');
const currentPlayer1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

const scores = [0, 0];
score0El.textContent = 0;
score1El.textContent = 0;
let currentPlayer = 0;

let currentScore = 0;

diceEl.classList.add('hidden');

btnRollEl.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentPlayer0El.classList.toggle('player--active');
    currentPlayer1El.classList.toggle('player--active');
  }
});

btnHoldEl.addEventListener('click', function () {
  scores[currentPlayer] += currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    scores[currentPlayer];
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentPlayer0El.classList.toggle('player--active');
  currentPlayer1El.classList.toggle('player--active');
});
