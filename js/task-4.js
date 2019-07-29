"use strict";

const credits = 23580;
const pricePerDroid = 3000;

let numDroid = prompt("Введите необходимое количество дроидов: ");
let totalPrice = pricePerDroid * numDroid;

if (numDroid === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  let change = credits - totalPrice;
  alert(`Вы купили ${numDroid} дроидов, на счету осталось ${change} кредитов.`);
}
