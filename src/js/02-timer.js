import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('.timer-btn');
//const timerEl = document.querySelector('.timer');
const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');

startBtn.disabled = true; //при загрузке стр. кнопка не активна

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

console.log(addLeadingZero(3));

function convertMs(msVal) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return { day, hour, minute, second };
}

function timer(ms) {
  const { day, hour, minute, second } = convertMs(ms);

  dayEl.textContent = addLeadingZero(Math.floor(ms / day));
  hoursEl.textContent = addLeadingZero(Math.floor((ms % day) / hour));
  minEl.textContent = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  secEl.textContent = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
}

startBtn.addEventListener('click', clickOnStartButton);

function clickOnStartButton() {
  const intervalId = setInterval(() => {
    let countdown = new Date(inputEl.value) - Date.now();
    startBtn.disabled = true;

    console.log(countdown);

    timer(countdown);

    if (countdown < 1000) {
      clearInterval(intervalId);
      Notiflix.Notify.success('Countdown finished!');
    }
  }, 1000);
}
