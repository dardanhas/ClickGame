// Click a button or object to earn points so that I can increase my score. DONE
// See my current score during the game so that I know how well I am doing. DONE

// See a countdown timer so that I know how much time is left. setInterval();

// Variables
let score = 0;
let timeleft = 5;
let GameStarted = false;
let GameEnded = false;
let Interval = null;

//HTML DOM
const button1 = document.getElementById('button1');
const ScoreDisplay = document.getElementById('ScoreDisplay');
const TimerDisplay = document.getElementById('TimerDisplay');

// UI Functions & Events
button1.addEventListener('click', () => {
  if (!GameEnded) {
    increaseScore();
  }

  if (!GameStarted) {
    StartGame();
  }
})


// Functions
function increaseScore() {
score++;
ScoreDisplay.innerText = score;
}

function countdown() {
  timeleft--;
  TimerDisplay.innerText = timeleft;
  console.log(timeleft);

  if (timeleft < 0) {
    TimerDisplay.innerText = 0;
    EndGame();
  }
}

function StartGame() {
  Interval = setInterval(countdown, 1000); // It stops but at -1
  GameStarted = true;
}

function EndGame() {
GameEnded = true;
clearInterval(Interval);
// TODO: Enable user to put their name
}

