let timer = 60;
let score = 0;
let newHit = 0;


// Making Bubbles

function bubbles() {

    let bubbles = '';
    for (let i = 0; i <= 206; i++) {
        let random = Math.floor(Math.random() * 10);

        bubbles += `<div class="bubble">${random}</div>`

        document.querySelector("#bottom").innerHTML = bubbles;
    }

}


// Increasing score

function increasScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}


// Timer and Game End Conditions

function runtime() {
    let interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(interval);
            document.querySelector("#bottom").innerHTML = `<h1 style="padding-top: 170px">Game Over</h1>`

        }
    }, 1000)
}


// Changing random Hit number after each hit

function getNewHit() {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = newHit;
}


// Event Listener on each bubble click

document.querySelector("#bottom").addEventListener("click", function (dets) {
    let clicked = Number(dets.target.textContent);
    if (clicked === newHit) {
        increasScore();
        getNewHit();
        bubbles();
    }
})

getNewHit();
bubbles();
runtime();