import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('.timer-btn');
const timerEl = document.querySelector('.timer');
const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
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

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', clickOnStartButton);

function clickOnStartButton(e) {
  const intervalId = setInterval(() => {
    let countdown = new Date(inputEl.value) - new Date();
    startBtn.disabled = true;

    const { days, hours, minutes, seconds } = convertMs(countdown);

    dayEl.textContent = days;
    hoursEl.textContent = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
    if (countdown < 1000) {
      clearInterval(intervalId);
      Notiflix.Notify.success('Countdown finished!');
    }
  }, 1000);
}
