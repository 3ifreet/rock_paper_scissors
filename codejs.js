
function rps() {
    const randomN = Math.floor(Math.random()*3+1);
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


function playRound(playerselection) {
    let machineselection = rps();
    //let playerselection = prompt("Rock, Paper, Scissors").toLowerCase() ;

    if (machineselection == playerselection) {
        return "DRAW";
    }
    else if (
        ((machineselection == "rock") && (playerselection == "paper")) || 
        ((machineselection == "paper") && (playerselection == "scissors")) ||
        ((machineselection == "scissors") && (playerselection == "rock"))) {
        return "YOU WIN";
    }
    else {
        return "YOU LOSE";
    }
}


