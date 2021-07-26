'use strict';

const clickButton = document.querySelector('.check');
const numberInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const numberContainer = document.querySelector('.number');
const scoreContainer = document.querySelector('.score');
const body = document.querySelector('body');
const reset = document.querySelector('.again');
const highscoreCon = document.querySelector('.highscore');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (text) => {
    message.textContent = text;
}


clickButton.addEventListener('click', () => {
    const guess = Number(numberInput.value);

    if(!guess) {
        displayMessage("No number");    
    } else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        numberContainer.textContent = secretNumber;
        body.style.backgroundColor = "#60b347";
        numberContainer.style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            highscoreCon.textContent = highscore;
        }
    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
            score--;
            scoreContainer.textContent = score;
        } else {
            displayMessage("You lost the game!");
            scoreContainer.textContent = 0;
        }
    }
     
});

reset.addEventListener('click', () => {
    score = 20;
    numberContainer.textContent = "?";
    numberContainer.style.width = "15rem";
    body.style.backgroundColor = "#222";
    numberInput.value = '';
    scoreContainer.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
});