
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

function playRound() {
    let machineselection = rps();
    let playerselection = prompt("Rock, Paper, Scissors").toLowerCase() ;
    if (machineselection == playerselection) {
        return console.log("DRAW");
    }
    else if (
        ((machineselection == "rock") && (playerselection == "paper")) || 
        ((machineselection == "paper") && (playerselection == "scissors")) ||
        ((machineselection == "scissors") && (playerselection == "rock"))) {
        return console.log("YOU WIN");
    }
    else {
        return console.log("YOU LOSE");
    }
}
function game(){
    for (let i = 0; i<5 ; i++){
        playRound();
        
    }
     
}




game();