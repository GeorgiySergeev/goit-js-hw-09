const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
stopBtn.disabled = true;
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

function buttonToggle(active) {
  startBtn.disabled = active;
  stopBtn.disabled = !active;
}

function onStartBtnClick() {
  buttonToggle(true);

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  buttonToggle(!true);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
