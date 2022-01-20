let btnrock = document.getElementById('rock');
let btnpaper = document.getElementById('paper');
let btnscissors = document.getElementById('scissors');
let textMatch = document.getElementById('match');
let result = document.getElementById('result');
let pcchoice = document.getElementById('pcchoice');
let computerScore = 0;
let playerScore = 0;
let playerChoice;
let finalScore = document.getElementById('finalScore');

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const playRound = function() {
    let play = computerPlay();

    if (playerChoice === play) {
        pcchoice.textContent = play;
        textMatch.textContent = 'Tie. Try again!';
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if((playerChoice === 'Rock' && play === 'Scissors') ||
              (playerChoice === 'Paper' && play === 'Rock') ||
              (playerChoice === 'Scissors' && play === 'Paper')) {
        playerScore++
        pcchoice.textContent = `Computer choose: ${play}`
        textMatch.textContent = `You win! ${playerChoice} beats ${play}!`
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    } else if((playerChoice === 'Rock' && play === 'Paper') ||
              (playerChoice === 'Paper' && play === 'Scissors') ||
              (playerChoice === 'Scissors' && play === 'Rock')) {
        pcchoice.textContent = `Computer choose: ${play}`
        computerScore++
        textMatch.textContent = `You lose. ${play} beats ${playerChoice}.`
        result.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}.`
    }
}

const game = function() {
    playRound();
    
    if (playerScore === 5 || computerScore === 5) {
        finalScore.textContent = `Final Score Player: ${playerScore}. Computer: ${computerScore}`;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
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