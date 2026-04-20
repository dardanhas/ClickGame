// Click a button or object to earn points so that I can increase my score. DONE
// See my current score during the game so that I know how well I am doing. DONE

// See a countdown timer so that I know how much time is left. setInterval();

// Variables
let score = 0;
let timeleft = 60;

//HTML DOM
const button1 = document.getElementById('button1');
const ScoreDisplay = document.getElementById('ScoreDisplay');
const TimerDisplay = document.getElementById('TimerDisplay');
// UI Functions & Events
button1.addEventListener('click', () => {
  increaseScore();
})

// TODO: Start at button click
setInterval(countdown, 1000);


// Functions
function increaseScore() {
score++;
ScoreDisplay.textContent = score;
}

function countdown() {
  timeleft--;
  TimerDisplay.textContent = timeleft;
  //TODO: Stop timer at 0 
}
