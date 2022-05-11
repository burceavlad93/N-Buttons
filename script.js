'use strict';
let input, number, secretNumber;
let cheatStatus = false;
let btns = document.querySelector('.btn');
const userInput = document.querySelector('.input');
const tittle = document.getElementById('tittle');
const tryAgain = document.querySelector('.try-again');
const resetGame = document.querySelector('.reset');
const game = document.querySelector('.buttons');
const startButton = document.querySelector('.generate');

// Added 'click' event for the START button
startButton.addEventListener('click', function () {
    number = Number(userInput.value);

    // If the input value is <= than 0, inform player
    if (number <= 0) {
        tittle.textContent = 'Please insert a number higher than 0';
        game.classList.toggle('hidden');
        tryAgain.classList.toggle('hidden');
    // If the input value is > than 0, generate random number based on input
    } else {
        secretNumber = Math.trunc(Math.random() * number) + 1;
        userInput.classList.add('hidden');
        startButton.classList.add('hidden');
    }

    // Generate n buttons, where n is == to the input value
    while (number !== 0) {
        game.innerHTML += `<button class="btn"> Click! </button>`;
        --number;
    }

    // Update 'btns' object
    btns = document.querySelectorAll('.btn');

    // Loop throw all the buttons and see which button coresponds with the random number generated and inform player
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

// Sends player back to either input stage or button selection stage 
tryAgain.addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    tittle.textContent = 'Guess The Button!';
    game.classList.toggle('hidden');
    tryAgain.classList.toggle('hidden');
})

// Reloads the game
resetGame.addEventListener('click', function () { location.reload() });
