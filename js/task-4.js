'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let message = '';

const answer = prompt('How many droids do you need?');

if (answer === null) {
  message = 'Was canceled by user!';
} else {
  const droidsQuantity = Number(answer);
  const totalPrice = droidsQuantity * pricePerDroid;
  if (totalPrice <= credits) {
    message = `Вы купили ${droidsQuantity} дроидов, на счету осталось      
       ${credits - totalPrice}  кредитов.`;
  } else {
    message = 'Недостаточно средств на счету!';
  }
}

alert(message);
