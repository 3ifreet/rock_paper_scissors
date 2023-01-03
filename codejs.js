const randomN = Math.floor(Math.random()*3+1);
console.log(randomN);

let machineselection = rps();
let playerselection = prompt("Rock, Paper, Scissors").toLowerCase();

function rps() {
    if (randomN == 1){
        return "rock";
    }
    else if (randomN == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound() {
    if (machineselection == playerselection) {
        console.log("DRAW");
    }
    else if (((machineselection == "rock") && (playerselection == "paper")) || ((machineselection == "paper") && (playerselection == "scissors"))) {
        return console.log("YOU WIN");
    }
    else {
        return console.log("YOU LOSE");
    }
}
playRound()