let humanScore = 0;
let computerScore = 0;
let round = 1;

const score = document.querySelector("#score");
const choices = document.querySelector("div#choices");
const result = document.querySelector("div#result");

function humanChoice (event){
    switch(event.target.id){
            case "rock": 
                playRound(computerChoice(), "r");
                break;
            case "paper": 
                playRound(computerChoice(), "p");
                break;
            case "scissors": 
                playRound(computerChoice(), "s");
                break;
        }
}
choices.addEventListener("click", humanChoice);

function checkWinner(){
    if(computerScore==5 || humanScore==5){
        result.innerHTML = `${computerScore>humanScore ? "COMPUTER" : "HUMAN"} HAS WON A GAME`;
        choices.removeEventListener("click", humanChoice);

        result.appendChild(document.createElement("button")).innerText = "RESTART";
        result.lastElementChild.addEventListener("click", () =>
        {
            result.textContent = ``;
            score.textContent = '';
            computerScore = 0;
            humanScore = 0;
            round = 1;
            choices.addEventListener("click", humanChoice);
            result.lastElementChild.remove();
        }, 
        {once: true})
    }
}

function playRound(compChoice, humChoice) {
    let win = true;
    let tie = false;

    if ((compChoice === "r" && humChoice === "s") || (compChoice === "p" && humChoice === "r") || (compChoice === "s" && humChoice === "p")) {
        win = false;
    }
    if (compChoice === humChoice) {
        tie = true;
    }

    if (!tie) {
        if (!win) {
            printWinner("Computer");
            computerScore++;
        } else {
            printWinner("Human");
            humanScore++;
        }
    } else {
        printTie();
    }
    score.innerText = `ROUND ${round}
    Human: ${humanScore}
    Computer: ${computerScore}`
    round++;
    checkWinner();
}


function computerChoice() {
    let choice = getRandomInt(3);
    if (choice === 1) {
        return "r";
    } else if (choice === 2) {
        return "p";
    } else {
        return "s";
    }
}

function printWinner(winner) {
    result.textContent = `${winner} has won!`
}

function printTie() {
    result.textContent = `Tie!`
}

function getRandomInt(max) {
    return Math.floor(1 + Math.random() * max);
}
