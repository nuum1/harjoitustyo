let countdown;
let timeLeft = 0; // default 0 minutes
let isPaused = false;
let timerRun = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");



function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (countdown) return; //just one timer
    

    countdown = setInterval(() => {
        if (timeLeft > 0 && !isPaused) {
            timeLeft--;
            updateTimerDisplay();
            timerRun= false;
        } else if (timeLeft === 0 && !timerRun) {
            clearInterval(countdown);
            countdown = null;
            timerRun = true; //when runs naturally 
            alert("Eggs are ready!"); //shows when timer naturally 0, not when reset

        }
    }, 1000);
}
    
function resetTimer() {
    clearInterval(countdown);
    countdown = null;
    isPaused = false;
    timeLeft = 0; //resets timer
    timerRun = true; //doesnt alert
    pauseButton.textContent = "PAUSE" 
    updateTimerDisplay();
}

function setTimer(duration) {
    clearInterval(countdown);
    countdown = null;
    isPaused = false;
    timerRun = false;
    pauseButton.textContent="PAUSE"
    timeLeft = duration;
    updateTimerDisplay();
}

function pauseTimer() {
    if (!countdown) return; //doesnt do anything if timer off
    
    if(isPaused) {
        isPaused = false;
        pauseButton.textContent = "PAUSE";
    }else {
        isPaused = true;
        pauseButton.textContent = "RESUME";
    }
}



startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
pauseButton.addEventListener("click", pauseTimer);

updateTimerDisplay(); 

