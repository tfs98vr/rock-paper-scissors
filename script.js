const x = document.body;
let btnrock = document.getElementById('rock');
let btnpaper = document.getElementById('paper');
let btnscissors = document.getElementById('scissors');
let textMatch = document.getElementById('match');
let result = document.getElementById('result');
let pcchoice = document.getElementById('pcchoice');
let computerScore = 0;
let playerScore = 0;
let playerChoice;
let dog = document.createElement('p');

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const playRond = function() {
    let play = computerPlay();

    if (playerChoice === play) {
        pcchoice.textContent = play;
        textMatch.textContent = 'Tie. Try again!'
    } else if(playerChoice === 'Rock' && play === 'Scissors') {
        playerScore++
        pcchoice.textContent = play;
        textMatch.textContent = 'You win! Rock beats Scissors!'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if(playerChoice === 'Paper' && play === 'Rock') {
        pcchoice.textContent = play;
        playerScore++
        textMatch.textContent = 'You win! Paper beats Rock!'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if(playerChoice === 'Scissors' && play === 'Paper') {
        pcchoice.textContent = play;
        playerScore++
        textMatch.textContent = 'You win! Scissors beats Paper!'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if(playerChoice === 'Rock' && play === 'Paper') {
        pcchoice.textContent = play;
        computerScore++
        textMatch.textContent = 'You loose. Paper beats Rock.'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if(playerChoice === 'Paper' && play === 'Scissors') {
        pcchoice.textContent = play;
        computerScore++
        textMatch.textContent = 'You loose. Scissors beats Paper.'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if(playerChoice === 'Scissors' && play === 'Rock') {
        pcchoice.textContent = play;
        computerScore++
        textMatch.textContent = 'You loose. Rock beats Scissors.'
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    }
    return;
}

const game = function() {
    playRond();
    
    if (playerScore === 5 || computerScore === 5) {
        dog.textContent = `Final Score. Player: ${playerScore}. Computer: ${computerScore}`
        dog.classList.add('dog');
        x.appendChild(dog);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    return;
}

btnrock.addEventListener('click', function() {
    playerChoice = 'Rock';
    game();
})

btnpaper.addEventListener('click', function() {
    playerChoice = 'Paper';
    game();
})

btnscissors.addEventListener('click', function() {
    playerChoice = 'Scissors';
    game();
})