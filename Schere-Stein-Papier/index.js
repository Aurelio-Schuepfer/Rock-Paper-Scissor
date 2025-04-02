let scorePlayer1 = 0;
let scorePlayer2 = 0;

const scorePlayer1Element = document.getElementById("scorePlayer1");
const scorePlayer2Element = document.getElementById("scorePlayer2");

function animateScissor1() {
    const scissor1 = document.getElementById("ScissorPlayer1");
    scissor1.style.animation = "throwAnimationPlayer1 2s ease-out forwards";
    
    setTimeout(function() {
        scissor1.style.animation = "SlideoutPlayer1 1.5s ease-out forwards";
    }, 4000); 
}

function animateRock1() {
    const rock1 = document.getElementById("RockPlayer1");
    rock1.style.animation = "throwAnimationPlayer1 2s ease-out forwards";
    
    setTimeout(function() {
        rock1.style.animation = "SlideoutPlayer1 1.5s ease-out forwards";
    }, 4000); 
}

function animatePaper1() {
    const paper1 = document.getElementById("PaperPlayer1");
    paper1.style.animation = "throwAnimationPlayer1 2s ease-out forwards";
    
    setTimeout(function() {
        paper1.style.animation = "SlideoutPlayer1 1.5s ease-out forwards";
    }, 4000); 
}

function animateScissor2() {
    const scissor2 = document.getElementById("ScissorPlayer2");
    scissor2.style.animation = "throwAnimationPlayer2 2s ease-out forwards";
    
    setTimeout(function() {
        scissor2.style.animation = "SlideoutPlayer2 1.5s ease-out forwards";
    }, 4000); 
}

function animateRock2() {
    const rock2 = document.getElementById("RockPlayer2");
    rock2.style.animation = "throwAnimationPlayer2 2s ease-out forwards";
    
    setTimeout(function() {
        rock2.style.animation = "SlideoutPlayer2 1.5s ease-out forwards";
    }, 4000); 
}

function animatePaper2() {
    const paper2 = document.getElementById("PaperPlayer2");
    paper2.style.animation = "throwAnimationPlayer2 2s ease-out forwards";
    
    setTimeout(function() {
        paper2.style.animation = "SlideoutPlayer2 1.5s ease-out forwards";
    }, 4000); 
}

function getPlayer2Choice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        animateScissor2();
        return "Schere";
    } else if (choice === 1) {
        animateRock2();
        return "Stein";
    } else if (choice === 2) {
        animatePaper2();
        return "Papier";
    }
}

function findWinner(playerChoice, player2Choice) {
    let winnerMessage = "";

    if (playerChoice === player2Choice) {
        winnerMessage = "Unentschieden!";
    } else if (
        (playerChoice === "Schere" && player2Choice === "Papier") ||
        (playerChoice === "Stein" && player2Choice === "Schere") ||
        (playerChoice === "Papier" && player2Choice === "Stein")
    ) {
        scorePlayer1++; 
        scorePlayer1Element.textContent = scorePlayer1;
        winnerMessage = "Spieler 1 gewinnt diese Runde!";
    } else {
        scorePlayer2++; 
        scorePlayer2Element.textContent = scorePlayer2;
        winnerMessage = "Spieler 2 gewinnt diese Runde!";
    }

    document.getElementById("winnerMessage").textContent = winnerMessage;

    setTimeout(function()
    {
document.getElementById("winnerMessage").textContent ="";
    }, 2000);
}

document.getElementById('btnSchere').addEventListener('click', function() {
    animateScissor1();
    let player2Choice = getPlayer2Choice();
    setTimeout(function() {
        findWinner("Schere", player2Choice);
    }, 5000);
});

document.getElementById('btnStein').addEventListener('click', function() {
    animateRock1();
    let player2Choice = getPlayer2Choice();
    setTimeout(function() {
        findWinner("Stein", player2Choice);
    }, 5000);
});

document.getElementById('btnPapier').addEventListener('click', function() {
    animatePaper1();
    let player2Choice = getPlayer2Choice();
    setTimeout(function() {
        findWinner("Papier", player2Choice);
    }, 5000);
});

document.getElementById('btnReset').addEventListener('click', function() 
{
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scorePlayer1Element.textContent = scorePlayer1;
    scorePlayer2Element.textContent = scorePlayer2;
    
})
