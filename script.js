let startTime, updatedTime, difference = 0, savedTime = 0, tInterval;
let running = false;

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPause');
const resetBtn = document.getElementById('reset');

startPauseBtn.addEventListener('click', function() {
  if (!running) {
    startTimer();
  } else {
    pauseTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  startTime = new Date().getTime() - savedTime;  // Adjust start time
  tInterval = setInterval(updateTimer, 1000);
  running = true;
  startPauseBtn.textContent = 'Pause';
}

function pauseTimer() {
  clearInterval(tInterval);
  savedTime = difference;  // Save time elapsed when paused
  running = false;
  startPauseBtn.textContent = 'Start';
}

function resetTimer() {
  clearInterval(tInterval);
  display.textContent = '00:00:00';
  running = false;
  savedTime = 0;
  difference = 0;
  startPauseBtn.textContent = 'Start';
}

function updateTimer() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}