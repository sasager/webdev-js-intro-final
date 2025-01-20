"use strict";

// Submitting what I have even though it doesn't function completely correctly. Will look at again with fresh eyes on another day.

const guessInput = document.getElementById("guess-input");

const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;
let history = [];


function checkGuess () {
    const guess = parseInt(guessInput.value);
    if (guess === randomNumber) {
        guessMessage.innerText = "Congratulations! You read the computer's mind!";
        computerGuess.innerText = randomNumber;
        endGame();
        restartGame();
    } else if (!guess || guess <1 || guess > 10 || !Number.isInteger(guess)) {
        guessMessage.innerText = "Please input a whole number between 1 and 10."
    } else if (attempts >= maxAttempts) {
        guessMessage.innerText = "Oops! You're out of guesses. Try again?"
        computerGuess.innerText = randomNumber;
        endGame();
        restartGame();
    } else if (guess < randomNumber) {
        guessMessage.innerText = "Oops, too low! Guess again."
    } else if (guess > randomNumber) {
        guessMessage.innerText = "Oops, too high! Guess again."
    }

    attempts++;

    history.push(guess);

    history.innerText = history.join(", ");

    currentGuess.innerText = guess;

}

function endGame() {
    submissionBtn.disabled = true;
    restartBtn.disabled = false;
    guessInput.disabled = true;
}

function restartGame () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessHistory = [];
    guessInput.value = "";
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "";
    guessHistory.textContent = "";
    submitBtn.disabled = false;
    restartBtn.disabled = true;
    guessInput.disabled = false;
}

submitBtn.addEventListener("click", function () {
    checkGuess();
  });
  
  restartBtn.addEventListener("click", function () {
    restartGame();
});