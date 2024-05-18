// Counter functionality
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// Stopwatch functionality
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const stopwatchResetBtn = document.getElementById('stopwatchResetBtn');
const stopwatchDisplay = document.getElementById('stopwatch'); 

let timer;
let elapsed = 0;
let running = false;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millis = milliseconds % 1000;

    return (
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (millis < 100 ? '0' : '') + (millis < 10 ? '0' : '') + millis
    );
}

function startStopwatch() {
    if (!running) {
        running = true;
        const startTime = Date.now() - elapsed;
        timer = setInterval(() => {
            elapsed = Date.now() - startTime;
            stopwatchDisplay.textContent = formatTime(elapsed);
        }, 10);
    }
}

function stopStopwatch() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

function resetStopwatch() {
    stopStopwatch();
    elapsed = 0;
    stopwatchDisplay.textContent = formatTime(elapsed);
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
stopwatchResetBtn.addEventListener('click', resetStopwatch);

// Clock functionality
function updateClock() {
    const clockDisplay = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();