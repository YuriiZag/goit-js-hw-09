import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css"
import "flatpickr/dist/flatpickr.min.css";


const refs = {

    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    startButton: document.querySelector('button[data-start]'),

}

refs.startButton.setAttribute('disabled', true)

const date = new Date();
let chosenDate = 0;
let timerId = null;


refs.startButton.addEventListener('click', onCklick);



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    
      chosenDate = selectedDates[0].getTime();

      stopButtonDisabler(chosenDate);


  }
};

const calendar = flatpickr("#datetime-picker", options);



function onCklick(e) {
    refs.startButton.setAttribute('disabled', true)
    let deltaTime = chosenDate - date.getTime();
    timerCreate(deltaTime);
}



function stopButtonDisabler (value) {
    if (value < date.getTime()) {
        Notiflix.Notify.failure("Please choose a date in the future")
          refs.startButton.setAttribute('disabled', true)

      } else {
          refs.startButton.removeAttribute('disabled', true)
      }
}


function timerCreate (value) {
    
    timerId = setInterval(() => {
        value -= 1000;
        if (value < 1000) {
            clearInterval(timerId);
            Notiflix.Notify.success('Таймер долічив до кінця');
            refs.startButton.removeAttribute('disabled', true)
        }
        console.log(value);
        convertedTime(value);    
    }, 1000);

}  
 

const convertedTime = (value) => {
    const convertedTime = convertMs(value);
    for (const key of Object.keys(convertedTime)) {
        if (convertedTime[key] < 10) {
            refs[key].textContent = `0${convertedTime[key]}`;
        }
        else {
            refs[key].textContent = convertedTime[key];
        }
    }
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
