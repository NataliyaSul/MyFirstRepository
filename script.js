'use strict';
const title = prompt('Как называется ваш проект', "My project");
let screens = prompt('Какие типы экранов нужно разработать?', " простые, сложные, интерактивные");
let str = screens.split(", ");
const screenPrice = prompt('Сколько будет стоить данная работа?', 20);
const rollback = 16;
const adaptive = confirm("Нужен ли адаптив на сайте?", true);
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function (Sprice1, Sprice2) {
  return Sprice1 + Sprice2;
};
const AllServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(scrPrice, allPrices) {
  return scrPrice + allPrices;
}
const fullPrice = getFullPrice(screenPrice, AllServicePrices);

const getTitle = function (myproject) {
  const title = myproject.trim();
  return title.charAt(0).toUpperCase() + title.slice(1);
};
getTitle(title);

const getServicePercentPrices = function (fullPr, servPrPrice) {
  return fullPr - servPrPrice;
};
const servicePercentPrice = getServicePercentPrices(fullPrice, (fullPrice * (rollback / 100)));

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

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(servicePercentPrice);
console.log(screens.length);
console.log(str);
console.log(getTitle(title));










