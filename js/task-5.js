// 'use strict';

const answer = prompt('Input yuor country');
let country;
let message;
let price;

if (answer === null) {
  message = 'Was canceled by user';
} else {
  country = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
  console.log(country);
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chilli':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'India':
      price = 80;
      break;
    case 'Jamaica':
      price = 120;
      break;

    default:
      message = 'There is no delivery in your country';
  }
}

if (!message) {
  message = `Delivery to your ${country} will be cost $ ${price}`;
}

alert(message);
