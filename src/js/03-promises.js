import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css"


const form = document.querySelector('.form');
let firstDelay = 0;
let stepDelay = 0;
let amount = 0;
let totalDelay = 0;


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  firstDelay = Number(e.currentTarget.elements[0].value); 
  stepDelay = Number(e.currentTarget.elements[1].value);
  amount = Number(e.currentTarget.elements[2].value);
  

    
    for (let i = 1; i <= amount; i++) {
      createPromise(i, totalDelay + firstDelay);
      totalDelay += stepDelay;
    }


  totalDelay = 0;
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
        resolve({position: position, delay: delay})
        } else {
         reject({position: position, delay: delay})
        }
    }, delay);
  })

  promise
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

