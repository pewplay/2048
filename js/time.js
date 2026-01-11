let timers = {};

function startTimer(id) {
  if (!timers[id]) {
    timers[id] = { intervalId: null, value: 0 };
  }
  timers[id].intervalId = setInterval(() => {
    timers[id].value++;
    const timerElement = document.getElementById(id);
    if (timerElement) {
      const minutes = String(Math.floor(timers[id].value / 60)).padStart(2, "0");
      const seconds = String(timers[id].value % 60).padStart(2, "0");
      timerElement.innerHTML = `${minutes}:${seconds}`;
    }
  }, 1000);
}

function pauseTimer(id) {
  if (timers[id]) {
    clearInterval(timers[id].intervalId);
  }
}

function resumeTimer(id) {
  if (timers[id]) {
    startTimer(id);
  }
}

function resetTimer(id) {
    if (timers[id]) {
      timers[id].value = 0;
      const timerElement = document.getElementById(id);
      if (timerElement) {
        timerElement.innerHTML = "00:00";
      }
    }
  }
  

let intervalId1;


function onDocumentLoad() {
    intervalId1 = startTimer("timer-value");
  }
  
  window.addEventListener("load", onDocumentLoad);
  