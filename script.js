'use strict';
let title;
let screens;
let str;
let screenPrice;
let rollback = 16;
let adaptive;
let service1;
let servicePrice1;
let service2;
let servicePrice2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект', "My project");
  screens = prompt('Какие типы экранов нужно разработать?', " простые, сложные, интерактивные");
  str = screens.split(", ");

  do {
    screenPrice = +prompt('Сколько будет стоить данная работа?', 20);
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?", true);

};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);

};

const getAllServicePrices = function () {
  let result = 0;

  for (let i = 0; i < 2; i++) {
    let servicePrice = 0;
    if (i === 0) {
      service1 = +prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = +prompt("Какой дополнительный тип услуги нужен?");
    }
    do {
      servicePrice = prompt('Сколько будет стоить данная работа?', 20);
    } while (!isNumber(servicePrice));
    result += +servicePrice;

  }
  return result;
};

function getFullPrice(scrPrice, allPrices) {
  return scrPrice + allPrices;
}

const getTitle = function (myproject) {
  let title = myproject.trim();
  return title.charAt(0).toUpperCase() + title.slice(1);
};

const getServicePercentPrices = function (fullPr, servPrPrice) {
  return fullPr - servPrPrice;
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "скидка 10 %";
  }
  if (30000 > price > 15000) {
    return "Даем скидку в 5%";
  }
  if (0 < price < 15000) {
    return "Скидка не предусмотрена";
  }
  if (price < 0) {
    return "Что то пошло не так";
  }
};


asking();
const AllServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, AllServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, (fullPrice * (rollback / 100)));
isNumber();
getTitle(title);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(getRollbackMessage(fullPrice));
console.log(getTitle(title));
console.log("allServicePrices", AllServicePrices);
console.log(servicePercentPrice);
console.log(screens.length);
console.log(str);
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);













