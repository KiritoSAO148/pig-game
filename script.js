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
let ok = true;

let currentScore = 0;

diceEl.classList.add('hidden');

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentPlayer0El.classList.toggle('player--active');
  currentPlayer1El.classList.toggle('player--active');
};

btnRollEl.addEventListener('click', function () {
  if (ok) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  if (ok) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 100) {
      ok = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNewEl.addEventListener('click', function () {
  ok = true;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  currentPlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.add('hidden');
  if (currentPlayer0El.classList.contains('player--winner'))
    currentPlayer0El.classList.remove('player--winner');
  else if (currentPlayer1El.classList.contains('player--winner'))
    currentPlayer1El.classList.remove('player--winner');
  currentPlayer0El.classList.add('player--active');
  if (currentPlayer1El.classList.contains('player--active'))
    currentPlayer1El.classList.remove('player--active');
});
