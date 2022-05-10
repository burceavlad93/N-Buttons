'use strict';
let input = 0;
let number = 0;
let secretNumber = 0;
let hiddenCheat = 5;
let btns = document.querySelector('.btn');
const userInput = document.querySelector('.input');
const tittle = document.getElementById('tittle');
const tryAgain = document.querySelector('.try-again');
const resetGame = document.querySelector('.reset');
const game = document.querySelector('.buttons');

document.body.addEventListener('keydown', function gameLogic(enter) {
    // Checking if the correct key was pressed
    if (enter.key === 'Enter') {
        number = Number(userInput.value);

        // Checking if the number inserted is > than 0, if not then inform the player and reveal "try again" button
        if (number <= 0) {
            tittle.textContent = "Please inser a number higher than 0";
            userInput.classList.toggle('hidden');
            tryAgain.classList.toggle('hidden');
        // If it's > than 0, dissable keybord event, generate random number and hide input
        } else {
            document.body.removeEventListener('keydown', gameLogic);
            secretNumber = Math.trunc(Math.random() * number) + 1;
            userInput.classList.toggle('hidden');
            
            // Generatin N buttons and adding them to the HTML  
            while (number != 0) {
                game.innerHTML += `<button class="btn"> Click! </button>`;
                --number;
            }
            
            // Updating 'btns' object with total number of buttons
            btns = document.querySelectorAll('.btn');

            // Looping the buttons to see which one was pressed 
            for (let i = 0; i < btns.length; ++i) {
                btns[i].addEventListener('click', function () {
                    
                    // If the random number is equal to the index of the button, then change background color, change tittle, and hide all buttons
                    if (secretNumber === i) {
                        document.body.style.backgroundColor = '#60b347';
                        tittle.textContent = "You Won!"
                        game.classList.toggle('hidden');
                    // If the index of the button is 0, don't change the background color
                    } else if (i === 0) {
                        document.body.style.backgroundColor = '#222';
                    // If the button index is != from the hidden number then change background color, inform player, hide buttons, reveal "try again" button, resume game
                    } else {
                        document.body.style.backgroundColor = '#7c0d0d';
                        tittle.textContent = 'Wrong Choise';
                        game.classList.toggle('hidden');
                        tryAgain.classList.toggle('hidden');
                    }
                })
            }
            // Secret cheat hack
            tittle.addEventListener('click', function () {
                --hiddenCheat;
                if (hiddenCheat === 0) {
                    btns[secretNumber].style.backgroundColor = '#7c0d0d';
                    tittle.textContent = "You've unlocked a secret cheat";
                }
            })
        }
    }
})

// Reverts back to either input stage or game stage
tryAgain.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    tittle.textContent = 'Guess The Button!';
    game.classList.toggle('hidden');
    tryAgain.classList.toggle('hidden');
})

// Resets entire game
resetGame.addEventListener('click', function () { location.reload() });

