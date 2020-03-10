'use strict';

const inputNumber = document.querySelector('#input-number');
const button = document.querySelector('#button');
const track = document.querySelector('#track');
const attemps = document.querySelector('#attemps');




function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);

}

const myNum = getRandomNumber(100);
console.log(myNum)




function compareRandomNumber() {
  if (inputNumber.value == myNum) {
    track.innerHTML = 'Has ganado CAMPEONA!!!';
  }
  if (inputNumber.value > myNum) {
    track.innerHTML = 'Demasiado alto'
  }
  if (inputNumber.value < myNum) {
    track.innerHTML = 'Demasiado bajo'
  } 
  if (inputNumber.value >  100 ) {
    track.innerHTML = 'El número debe estar entre 1 y 100'
  }
}




function increaseAttemp() {

  let attempsQuantity = parseInt(attemps.innerHTML);
  attempsQuantity = attemps.value + 1;
  attemps.innerHTML = productQuantity;




}





button.addEventListener('click', compareRandomNumber);
button.addEventListener('click', increaseAttemp);