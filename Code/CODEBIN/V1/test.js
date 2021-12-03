//=============================
// -=+ Author: Philippe +=-
//=============================


//var | const | let

var timerTime = 10;
var winner = 0;
var points = 0;
var points2 = 0;

//check if timer is active
var pressTimer = 0;
//check if timer is off
var scoreOff = 0;

//check werke round van game
var round =1;

//checks if there must be time over display
var timeOver =10;


//Keydown Event Listener
document.addEventListener("keydown", event => {
    if(event.key==="d" && pressTimer === 1){scorePoint();
    }


    if(event.key==="a" && pressTimer === 1){removePoint();
    }

    if(event.key===" " && pressTimer ===0){startTimer();}
    if(event.key==="w"){clearConsole();}
});

//Timer loop
setInterval(function(){

    //const
    const reloadTimer = document.getElementById("timer");


    if(pressTimer===0 && winner===0 && timerTime > 0){
        reloadTimer.innerHTML = `<div id="timer" class="timer">10</div>`;
    }
})



//tracker if scored
setInterval(function(){ 
    const reloadTimer = document.getElementById("timer");
    const reloadHtml2 = document.getElementById("reload002");
    const reloadHtml = document.getElementById("reload001");

    if(points > 9){
        //set winnner
        reloadHtml.innerHTML =  `<div class="score-1" id="reload001">WINNER</div>`;
        winner++;
        points2 = 0;
        pressTimer = 0;
        timerTime = 1;
        return;
    }
    if(points < 0){
        points = 0;
    }
    if(points === 1  && scoreOff === 0){
        reloadHtml.innerHTML =  `<div class="score-1" id="reload001">${points}</div>`;
    }else{
        if(points > 1  && scoreOff === 0){
            reloadHtml.innerHTML =  `<div class="score-1" id="reload001">${points}</div>`;    
        }
    }
}, 1);


//tracker if scored
setInterval(function(){ 
    const reloadHtml2 = document.getElementById("reload002");
    const reloadHtml = document.getElementById("reload001");
    const reloadTimer = document.getElementById("timer");

    if(points2 > 9){
        reloadHtml2.innerHTML =  `<div class="score-1" id="reload001">WINNER</div>`;
        points = 0;
        reloadHtml.innerHTML =  `<div class="score-1" id="reload001"></div>`;
        pressTimer = 0;
        timerTime = 1;
        winner++;
        reloadTimer.innerHTML = `<div id="timer" class="timer"></div>`;
        return;
    }
    if(points2 < 0){
        points2 = 0;
    }
    if(points2 === 1 && scoreOff === 0){
        reloadHtml2.innerHTML =  `<div class="score-1" id="reload001">${points2}</div>`;
    }else{
        if(points2 > 1 && scoreOff === 0){
            reloadHtml2.innerHTML =  `<div class="score-1" id="reload001">${points2}</div>`;
        }
    }  
}, 1);

setInterval(function(){
    const reloadTimer = document.getElementById("timer");

    if(timerTime <1){
        scoreOff = 1;
        pressTimer = 0;
        timerTime = 0;
        round++;
    }
    //Check for Time Over
    if(timerTime <1){
        pressTimer=0;
        reloadTimer.innerHTML = `<div id="timer" class="timer">TIME OVER</div>`;
    }
    //timer
    if(pressTimer === 1){
        reloadTimer.innerHTML = `<div id="timer" class="timer">${timerTime}</div>`;
        timerTime--;
        timeOver--;
    }
}, 1000);

function reset(){
    timerTime=10;
    round++;
    pressTimer=0;
    timeOver=10;
    winner=0;
}
function scorePoint(){
    if(scoreOff === 0){
        points2++;
        reset()
    }
}
function removePoint(){
    if(scoreOff === 0){
        points++;
        reset()
    }
}
function startTimer(){
    scoreOff=0;
    pressTimer=1;
    timerTime=10;
}




function clearConsole(){
    window.location.reload()
}