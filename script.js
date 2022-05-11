'use strict';
let input, number, secretNumber;
let hiddenCheat = 5;
let cheatStatus = false;
let btns = document.querySelector('.btn');
const userInput = document.querySelector('.input');
const tittle = document.getElementById('tittle');
const tryAgain = document.querySelector('.try-again');
const resetGame = document.querySelector('.reset');
const game = document.querySelector('.buttons');
const startButton = document.querySelector('.generate');

startButton.addEventListener('click', function () {
    number = Number(userInput.value);

    if (number <= 0) {
        tittle.textContent = 'Please insert a number higher than 0';
        game.classList.toggle('hidden');
        tryAgain.classList.toggle('hidden');
    } else {
        secretNumber = Math.trunc(Math.random() * number) + 1;
        userInput.classList.add('hidden');
        startButton.classList.add('hidden');
    }

    while (number !== 0) {
        game.innerHTML += `<button class="btn"> Click! </button>`;
        --number;
    }

    btns = document.querySelectorAll('.btn');

    for (let i = 0; i < btns.length; ++i) {
        btns[i].addEventListener('click', function () {

            if (secretNumber === (i)) {
                document.body.style.backgroundColor = '#60b347';
                tittle.textContent = 'You Won!';
                game.classList.toggle('hidden');
            } else if ((i) === 0) {
                document.body.style.backgroundColor = '#222';
            } else {
                document.body.style.backgroundColor = '#7c0d0d';
                tittle.textContent = 'Wrong Choice!';
                game.classList.toggle('hidden');
                tryAgain.classList.toggle('hidden');
            }
        })
    }
})

tryAgain.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    tittle.textContent = 'Guess The Button!';
    game.classList.toggle('hidden');
    tryAgain.classList.toggle('hidden');
})

resetGame.addEventListener('click', function () { location.reload() });
