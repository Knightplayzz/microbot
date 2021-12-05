let timerTime = 10;
let winner = 0;
let points = 0;
let points2 = 0;
let pressTimer = 0;
let scoreOff = 0;
let round = 1;
let timeOver = 10;
let timerOff = 0;
let categorie = 0
let match=0
let categoryTimer = 0
let prize = 0
music.setTempo(255)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
soundExpression.giggle.play()

input.onButtonPressed(Button.A, function () {
    if (pressTimer === 1) { removePoint(); }
    if (pressTimer === 0 && round > 1 && categoryTimer === 0) { showScore1() }
})
input.onButtonPressed(Button.B, function () {
    if (pressTimer === 1) { scorePoint() }
    if (pressTimer === 0 && round > 1 && categoryTimer === 0) { showScore2() }
})
input.onGesture(Gesture.Shake, function () {
   if(pressTimer===0 && categoryTimer===0){playMatch()}
})

basic.forever(function () {
    if (timerOff === 3) {
        basic.pause(5000)
        startTimer()
        timerOff =0
        categoryTimer=0
    }
    if (pressTimer === 0) {
        if (input.logoIsPressed()) {
            categoryTimer=1
            timerOff = 1;
            basic.clearScreen()
            basic.pause(100)
            categorie = Math.randomRange(1, 5)
            if (categorie === 1) {
                basic.showString("MUZIEK")
                timerOff = 3;
            }
            if (categorie === 2) {
                basic.showString("SPORT")
                timerOff = 3;
            }
            if (categorie === 3) {
                basic.showString("ART")
                timerOff = 3;
            }
            if (categorie === 4) {
                basic.showString("VIPS")
                timerOff = 3;
            }
            if (categorie === 5) {
                basic.showString("TOPO")
                timerOff = 3;
            }
        }
    }
})



basic.forever(function () {
    if (points > 9) {
        basic.showString("TEAM 1 WIN")
        winner++;
        points2 = 0;
        pressTimer = 0;
        timerTime = 1;
        return;
    }
    if (points < 0) {
        points = 0;
    }
})
basic.forever(function () {
    if (points2 > 9) {
        basic.showString("TEAM 2 WIN")
        points = 0;
        pressTimer = 0;
        timerTime = 1;
        winner++;
        return;
    }
    if (points2 < 0) {
        points2 = 0;
    }
})

loops.everyInterval(900, function () {
    if (timerTime < 1) {
        scoreOff = 1;
        pressTimer = 0;
        timerTime = 0;
        round++;
    }
    if (timerTime < 1) {
        music.setTempo(255)
        pressTimer = 0;
        music.playTone(Note.CSharp3, music.beat())
        music.playTone(Note.CSharp, music.beat())
        basic.showString("Time Over")
        timerTime = 1;
    }
    if (pressTimer === 1) {
        music.setTempo(255)
        music.playTone(Note.CSharp, music.beat())
        basic.showNumber(timerTime)
        timerTime--;
        timeOver--;
    }
})

function reset() {
    timerTime = 10;
    round++;
    pressTimer = 0;
    timeOver = 10;
    winner = 0;
}
function scorePoint() {
    if (scoreOff === 0) {
        points2++;
        reset()
        music.setTempo(255)
        music.playTone(Note.B4, music.beat())
        basic.pause(5)
        music.playTone(Note.B4, music.beat())
        basic.pause(5)
        music.playTone(Note.B4, music.beat())
    }
}
function removePoint() {
    if (scoreOff === 0) {
        points++;
        reset()
        music.setTempo(255)
        music.playTone(Note.B4, music.beat())
        basic.pause(1)
        music.playTone(Note.B4, music.beat())
        basic.pause(1)
        music.playTone(Note.B4, music.beat())
    }
}
function startTimer() {
    scoreOff = 0;
    pressTimer = 1;
    timerTime = 10;
}
function showScore1() {
    basic.showNumber(points)
}
function showScore2() {
    basic.showNumber(points2)
}
function playMatch() {
    match = 0
    match = Math.randomRange(1, 10)
    if (match > 6) {
    basic.showIcon(IconNames.Yes)
        music.setTempo(255)
        music.playTone(Note.C5, music.beat())
        basic.pause(1)
        music.playTone(Note.C5, music.beat())
        basic.pause(1)
        music.playTone(Note.C5, music.beat())
        basic.pause(1000)
        basic.clearScreen()
        prize = 0
        prize = Math.randomRange(1, 10)
        if (prize < 8){
            basic.showString("1 Mil")
        }
        if (prize > 7) {
            basic.showString("2 Mil")
        }

    }
    if (match < 7) { 
        basic.showIcon(IconNames.No)
        music.setTempo(255)
        music.playTone(Note.C5, music.beat())
        basic.pause(5)
        music.playTone(Note.F4, music.beat())
        basic.pause(1000)
        basic.clearScreen()

    }
    match=0
}