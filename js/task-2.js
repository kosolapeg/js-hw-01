'use strict';

const total = 100;

// const ordered = 150;

const numberInputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');

let ordered = 0;

buttonRef.addEventListener('click', () => {
  ordered = Number(numberInputRef.value);
  console.log(ordered);

  if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  } else {
    console.log('На складе недостаточно твоаров!');
  }
});
