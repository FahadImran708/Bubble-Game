var timer = 60;
var score = 0;
var hitrn = 0;
var timerint;  

const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

function increasescore(){
    score += 1;
    document.querySelector("#scorevalue").textContent = score;
}

function startTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        } else {
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over!! Click on Restart Button</h1> <a class="button" href="" onclick="restartGame()">Restart</a> <p>made by fahad</p>`;
            clearInterval(timerint);  
        }
    }, 1000);
}

function Newhit () {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitvalue").textContent = hitrn;
}

function BubbleMaking(){
    var bub = "";
    
    for(var i = 1; i <= 140; i++) {
        var run = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${run}</div>`;
    }
    
    document.querySelector(".pbtm").innerHTML = bub;
}

document.querySelector(".pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    
    if (clickednum === hitrn){
        increasescore();
        correctSound.play();  
    } else {
        wrongSound.play();  
    }

    Newhit();
    BubbleMaking();
});


function restartGame() {

    score = 0;
    timer = 60;
    hitrn = 0;

    
    document.querySelector("#scorevalue").textContent = score;
    document.querySelector("#timervalue").textContent = timer;
    document.querySelector("#Hitvalue").textContent = hitrn;

    
    document.querySelector(".pbtm").innerHTML = '';

    
    BubbleMaking();
    startTimer();
    Newhit();
}


BubbleMaking();
startTimer();
Newhit();