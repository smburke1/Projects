
const playerScore_span = document.getElementById("player-score");
const cpuScore_span = document.getElementById("cpu-score");
const statement_div = document.getElementById("statement");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const button_div = document.getElementById("button");

let playerScore = 0;
let cpuScore = 0;

//the cpu pick a randing number using math.random.  Using math.floor it is able to choose an item out of the array.
function cpuDecisions() {
    const decisions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return decisions[randomNumber];
}

// used to convert words in to Capitals for the innerhtml changes
function convertToCapital(word) {
    if (word ==="rock") return "Rock";
    if (word === "paper") return "Paper";
    return "Scissors";
}

// rpsGame function determines the result and the 3 functions change the score, innerhtml, and colors.
function win(playerDecision, cpuDecision) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    cpuScore_span.innerHTML = cpuScore;
    statement_div.innerHTML = convertToCapital(playerDecision) + " beats " + convertToCapital(cpuDecision) + ". You win!";
    statement_div.style.color = "green";
}

function lose(playerDecision, cpuDecision) {
    cpuScore++;
    playerScore_span.innerHTML = playerScore;
    cpuScore_span.innerHTML = cpuScore;
    statement_div.innerHTML = convertToCapital(playerDecision) + " beats " + convertToCapital(cpuDecision) + ". You lose!";
    statement_div.style.color = "red";
}

function draw(playerDecision, cpuDecision) {
    playerScore_span.innerHTML = playerScore;
    cpuScore_span.innerHTML = cpuScore;
    statement_div.innerHTML = convertToCapital(playerDecision) + " ties with " + convertToCapital(cpuDecision) + ". Draw!";
    statement_div.style.color = "blue";
}

// Reset button
function resetButton (){
button.addEventListener("click", function(){
    playerScore = 0;
    playerScore_span.innerHTML = playerScore;
    cpuScore = 0;
    cpuScore_span.innerHTML = cpuScore;
    statement_div.style.color = "#ddd";
    statement_div.innerHTML = "Let's try again?";
    })
}
resetButton();

// rpsGame uses the player and cpu's decisions and determines result
function rpsGame(playerDecision) {
    const cpuDecision = cpuDecisions();
    switch (playerDecision + " " + cpuDecision) {
        case "rock scissors":
        case "paper rock": 
        case "scissors paper":
            win(playerDecision, cpuDecision);
            break;
        case "rock paper":
        case "paper scissors":
        case "scissors rock":
            lose(playerDecision, cpuDecision);
            break;
        case "rock rock":
        case "scissors scissors":
        case "paper paper":
            draw(playerDecision, cpuDecision);
            break;
    }
}
// onClickDecision Initiates other functions
function onClickDecision(){
    rock_div.addEventListener('click', function () {
        rpsGame("rock");
    })
    paper_div.addEventListener('click', function () {
        rpsGame("paper");
    })
    scissors_div.addEventListener('click', function () {
        rpsGame("scissors");
    })
}
onClickDecision();