'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let answer;
let message;

const numberInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', () => {
  answer = numberInputRef.value;
  console.log(answer);

  if (answer === null) {
    message = 'Was canceled by user';
  } else if (answer === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Wrong PASSWORD!';
  }

  alert(message);
});
