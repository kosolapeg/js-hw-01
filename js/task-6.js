'use strict';

let input;
let total = 0;
let message;

while (true) {
  input = prompt('Input the number:');

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('NOT A NUMBER');
    continue;
  }

  total += input;
}

alert(`Total sum is ${total}`);
