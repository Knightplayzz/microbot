let timerTime = 10;
let winner = 0;
let points = 0;
let points2 = 0;
let pressTimer = 0;
let scoreOff = 0;
let round = 1;
let timeOver = 10;

input.onButtonPressed(Button.A, function () {
    if (pressTimer === 1) { removePoint(); }
    if (pressTimer === 0) { showScore1() }
})
input.onButtonPressed(Button.B, function () {
    if (pressTimer === 1) { scorePoint() }
    if (pressTimer === 0) { showScore2() }
})
input.onGesture(Gesture.Shake, function () {
    if (pressTimer === 0) { startTimer(); }
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

loops.everyInterval(1000, function () {
    if (timerTime < 1) {
        scoreOff = 1;
        pressTimer = 0;
        timerTime = 0;
        round++;
    }
    if (timerTime < 1) {
        pressTimer = 0;
        basic.showString("Time Over")
    }
    if (pressTimer === 1) {
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
    }
}
function removePoint() {
    if (scoreOff === 0) {
        points++;
        reset()
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