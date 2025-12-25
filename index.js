var randomvalue1;
var randomvalue2;

function getRandomDie() {
    // Return integer 1..6
    return Math.floor(Math.random() * 6) + 1;
}

function updateImages() {
    var img1 = document.getElementsByClassName("img1")[0];
    var img2 = document.getElementsByClassName("img2")[0];
    if (img1) img1.src = "./images/dice" + randomvalue1 + ".png";
    if (img2) img2.src = "./images/dice" + randomvalue2 + ".png";
}

function updateResultHeading() {
    var h1 = document.querySelector("h1");
    if (!h1) return;
    if (randomvalue1 > randomvalue2) {
        h1.innerHTML = "🚩 Player 1 Wins";
    } else if (randomvalue2 > randomvalue1) {
        h1.innerHTML = "Player 2 Wins!🚩";
    } else {
        h1.innerHTML = "Draw!!";
    }
}

function rollBothDice() {
    randomvalue1 = getRandomDie();
    randomvalue2 = getRandomDie();
    updateImages();
    updateResultHeading();
}

function rollPlayer1Only() {
    randomvalue1 = getRandomDie();
    updateImages();
    updateResultHeading();
}

// Initialize when DOM is ready and hook up the button
document.addEventListener("DOMContentLoaded", function() {
    // initial roll for both players
    rollBothDice();

    var btn = document.getElementById("roll-button");
    if (btn) {
        // ensure button doesn't try to submit a form (type=button in HTML too)
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            // Roll both dice now (was previously rolling only player 1)
            rollBothDice();
        });
    }
});