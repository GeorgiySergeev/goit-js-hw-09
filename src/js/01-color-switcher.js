const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
stopBtn.disabled = true;
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

function buttonToggle(btn1, btn2) {
  btn1.disabled = true;
  btn2.disabled = false;
}

function onStartBtnClick() {
  buttonToggle(startBtn, stopBtn);

  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    isActive = false;
  }, 1000);
}

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  buttonToggle(stopBtn, startBtn);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
