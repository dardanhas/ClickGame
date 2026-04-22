
// Variables
let score = 0;
let timeleft = 5;
let GameStarted = false;
let GameEnded = false;
let Interval = null;

//HTML DOM
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const ScoreDisplay = document.getElementById('ScoreDisplay');
const TimerDisplay = document.getElementById('TimerDisplay');
const label1 = document.getElementById('label1');
const input1 = document.getElementById('name');
const message = document.getElementById('message');

// UI Functions & Events
button1.addEventListener('click', () => {
  if (!GameEnded) {
    increaseScore();
  }

  if (!GameStarted) {
    StartGame();
  }
})

button2.addEventListener('click', () => {
  SubmitHighscore();
})

input1.style.display = 'none';
label1.style.display = 'none';
button2.style.display = 'none';

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
  button1.style.display = 'none';
  input1.style.display = 'block';
  label1.style.display = 'block';
  button2.style.display = 'block';
}

async function SubmitHighscore() {
  const response = await fetch("https://hooks.zapier.com/hooks/catch/8338993/ujs9jj9/", {
    method: "POST",
    body: JSON.stringify({ name: input1.value, score: score }),
  });


  if (response.ok) {
    message.innerText = "Score has been saved!";
    button2.style.display = 'none';
    input1.style.display = 'none';
    label1.style.display = 'none';
  } else {
    message.innerText = "Score could not be saved.";
  }
}
