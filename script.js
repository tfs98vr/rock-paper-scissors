let btnrock = document.getElementById('rock');
let btnpaper = document.getElementById('paper');
let btnscissors = document.getElementById('scissors');
let btnAgain = document.getElementById('again');
let textMatch = document.getElementById('match');
let displayComputerScore = document.getElementById('firstComputer');
let displayPlayerScore = document.getElementById('firstPlayer');
let pcChoice = document.getElementById('pcchoice');
let computerScore = 0;
let playerScore = 0;
let playerChoice;
let finalScore = document.getElementById('finalScore');

function win() {
    textMatch.classList.add('victory');
}

function lose() {
    textMatch.classList.add('lose');
}

function clearWin() {
    textMatch.classList.remove('victory');
}

function clearLose() {
    textMatch.classList.remove('lose');
}

const finalResult = function () {setTimeout(()=> {if (playerScore === 5 && computerScore < 5) {
    win()
    textMatch.textContent = "Congratulations! You win the game!"
} else if (playerScore < 5 && computerScore === 5) {
    textMatch.textContent = "Game Over. You lose."
    lose()
}}, 1500);}


pcChoice.textContent = "Computer: ";
displayComputerScore.textContent = computerScore;
displayPlayerScore.textContent = playerScore;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

const playRound = function() {
    let play = computerPlay();

    if (playerChoice === play) {
        pcChoice.textContent = `Computer: ${play}`
        textMatch.textContent = 'Tie. Try again!';
        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
    } else if((playerChoice === 'Rock' && play === 'Scissors') ||
              (playerChoice === 'Paper' && play === 'Rock') ||
              (playerChoice === 'Scissors' && play === 'Paper')) {
        playerScore++
        pcChoice.textContent = `Computer: ${play}`
        textMatch.textContent = `You win! ${playerChoice} beats ${play}!`
        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
    } else if((playerChoice === 'Rock' && play === 'Paper') ||
              (playerChoice === 'Paper' && play === 'Scissors') ||
              (playerChoice === 'Scissors' && play === 'Rock')) {
        pcChoice.textContent = `Computer: ${play}`
        computerScore++
        textMatch.textContent = `You lose. ${play} beats ${playerChoice}.`
        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
    } else if (playerChoice == 'reset' && computerScore > playerScore) {
        pcChoice.textContent = "Computer: ";
        computerScore = 0;
        playerScore = 0;
        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
        textMatch.textContent = " ";
        textMatch.classList.remove('lose');
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
    } else if (playerChoice == 'reset' && playerScore > computerScore) {
        pcChoice.textContent = "Computer: ";
        computerScore = 0;
        playerScore = 0;
        displayComputerScore.textContent = computerScore;
        displayPlayerScore.textContent = playerScore;
        textMatch.textContent = " ";
        textMatch.classList.remove('victory');
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;
    }
}


const game = function() {
    playRound();
    
    if (playerScore === 5 || computerScore === 5) {
        finalResult();
        
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

btnAgain.addEventListener('click', function() {
    playerChoice = 'reset'
    game();
})