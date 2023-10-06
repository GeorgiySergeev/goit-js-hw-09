import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
  return promise;
}

formEl.addEventListener('submit', onButtonClick);
function onButtonClick(e) {
  e.preventDefault();

  const formInputEl = e.target.elements;

  const delay = Number(formInputEl.delay.value);
  const step = Number(formInputEl.step.value);
  const amount = formInputEl.amount.value;

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;
    const delayStep = delay + i * step;

    createPromise(position, delayStep)
      .then(() => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayStep}ms`
        );
      })
      .catch(() => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayStep}ms`
        );
      });
  }
}
