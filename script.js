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
    console.log('key pressed');
    if (enter.key === 'Enter') {
        number = Number(userInput.value);

        if (number <= 0) {
            tittle.textContent = "Please inser a number higher than 0";
            userInput.classList.toggle('hidden');
            tryAgain.classList.toggle('hidden');
        } else {
            document.body.removeEventListener('keydown', gameLogic);
            secretNumber = Math.trunc(Math.random() * number) + 1;
            userInput.classList.toggle('hidden');

            while (number != 0) {
                game.innerHTML += `<button class="btn"> Click! </button>`;
                --number;
            }

            btns = document.querySelectorAll('.btn');

            for (let i = 0; i < btns.length; ++i) {
                btns[i].addEventListener('click', function () {

                    if (secretNumber === i) {
                        document.body.style.backgroundColor = '#60b347';
                        tittle.textContent = "You Won!"
                        game.classList.toggle('hidden');
                    } else if (i === 0) {
                        document.body.style.backgroundColor = '#222';
                    } else {
                        document.body.style.backgroundColor = '#7c0d0d';
                        tittle.textContent = 'Wrong Choise';
                        game.classList.toggle('hidden');
                        tryAgain.classList.toggle('hidden');
                    }
                })
            }

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

tryAgain.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    tittle.textContent = 'Guess The Button!';
    game.classList.toggle('hidden');
    tryAgain.classList.toggle('hidden');
})

resetGame.addEventListener('click', function () { location.reload() });

