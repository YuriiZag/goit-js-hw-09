const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId = null;

stopButton.setAttribute('disabled', true)

startButton.addEventListener('click', beginChangeColor);
stopButton.addEventListener('click', endChangeColor);

function beginChangeColor() {
    
    setBodyBackgroundColor()

    removeDisabledAttribute('start')
    addDisabledAttribute('start')

    timerId = setInterval(() => {
        setBodyBackgroundColor()
    },1000);
}

function endChangeColor() {
    addDisabledAttribute('end')
    removeDisabledAttribute('end')
    
    clearInterval(timerId);

    
}

function setBodyBackgroundColor() {
   document.body.style.backgroundColor = getRandomHexColor() 
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addDisabledAttribute(evtState) {
    evtState === 'start' ? startButton.setAttribute('disabled', true) : stopButton.setAttribute('disabled', true)
}
function removeDisabledAttribute(evtState) {
    evtState === 'start' ? stopButton.removeAttribute('disabled', true) : startButton.removeAttribute('disabled', true)
}
