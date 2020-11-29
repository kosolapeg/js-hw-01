'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
const answer = prompt('Введите пароль:');

let message;

if (answer === null) {
  message = 'Was canceled by user';
} else if (answer === ADMIN_PASSWORD) {
  message = 'Welcome!';
} else {
  message = 'Wrong PASSWORD!';
}

alert(message);
