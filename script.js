'use strict';
const title = prompt('Как называется ваш проект', "My project");
const screens = { 1: `простые, сложные, интерактивные` };
const screenPrice = prompt('Сколько будет стоить данная работа?', 20);
const rollback = 16;
const adaptive = confirm("Нужен ли адаптив на сайте?", true);
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");

function getFullPrice(d, getAllServicePrices) {
  return d + getAllServicePrices(servicePrice1, servicePrice2);
}
const fullPrice = getFullPrice(screenPrice, function (a, b) {
  return a + b;
});

const getTitle = function (myproject) {
  const title = myproject.trim();
  return title.charAt(0).toUpperCase() + title.slice(1);
};
getTitle(title);

const getServicePercentPrices = function (b, c) {
  return b - c;
};
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

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

console.log(getFullPrice(screenPrice, function (a, b) {
  return a + b;
}));
console.log(getRollbackMessage(fullPrice));
console.log(getTitle(title));
console.log(servicePercentPrice);
console.log(screens[1]);








