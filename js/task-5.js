"use strict";

let country = prompt("Введите страну доставки: ");
let message;
let price;

if (country === null) {
  alert("Отменено пользователем");
} else {
  switch (country.toLowerCase()) {
    case "китай":
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      alert(message);
      break;
    case "чили":
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      alert(message);
      break;
    case "австралия":
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      alert(message);
      break;
    case "индия":
      price = 80;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      alert(message);
      break;
    case "ямайка":
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      alert(message);
      break;
    default:
      alert("В Вашей стране доставка недоступна");
  }
}
