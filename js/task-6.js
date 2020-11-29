'use strict';

let input;
let total = 0;
let message;

while (input !== null) {
  input = prompt('Input the number:');

  if (input !== null) {
    if (!Number.isNaN(Number(input))) {
      total += Number(input);
    } else {
      alert('NOT A NUMBER');
    }
  }
}

alert(`Total sum is ${total}`);
