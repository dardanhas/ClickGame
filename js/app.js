// Click a button or object to earn points so that I can increase my score. DONE
// See my current score during the game so that I know how well I am doing. DONE
// See a countdown timer so that I know how much time is left. setInterval();

// Variables
let score = 0;

//HTML DOM
const button1 = document.getElementById('button1');
const ScoreDisplay = document.getElementById('ScoreDisplay');

// UI Functions
button1.addEventListener('click', () => {
  increaseScore();
})

// Functions
function increaseScore() {
score++;
ScoreDisplay.textContent = score;
}
