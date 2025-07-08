let humanScore = 0;
let computerScore = 0;
let round = 1;

function playGame(){

    while(round<=5) {
        console.log(`Human's Score: ${humanScore}\nComputer Score: ${computerScore}`)
        let compChoice = computerChoice();
        let humChoice = humanChoice();
        console.log("\n");

        playRound(compChoice, humChoice);
    }
    console.log(`Human's Score: ${humanScore}\nComputer Score: ${computerScore}`);
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
            printWinner("computer");
            computerScore++;
        } else {
            printWinner("human");
            humanScore++;
        }
    } else {
        console.log("Tie!")
    }
    round++;
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

function humanChoice() {
    let choice = prompt(`ROUND ${round}\nr = rock;\np = paper;\ns = scissors`);
    return choice;
}

function printWinner(winner) {
    console.log(`Winner of the ${round} round is ${winner}`);
}

function getRandomInt(max) {
    return Math.floor(1 + Math.random() * max);
}