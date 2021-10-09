'use strict';
const title = prompt('Как называется ваш проект', "My project");
const screens = prompt('Какие типы экранов нужно разработать?', "простые, сложные, интерактивные");
const screenPrice = prompt('Сколько будет стоить данная работа?', 20);
const rollback = 16;
const adaptive = confirm("Нужен ли адаптив на сайте?", true);

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;



const getAllServicePrices = function (a, b) {
  return a + b;
};
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
console.log(allServicePrices);


function getFullPrice() {
  const fullPrice = screenPrice + allServicePrices;
}
getFullPrice();
console.log(fullPrice);


const getServicePercentPrices = function (b, c) {
  return b - c;
};
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("скидка 10 %");
}
if (30000 > fullPrice > 15000) {
  console.log("Даем скидку в 5%");
}
if (0 < fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
}
if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

console.log(Math.ceil(servicePercentPrice));

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(!!adaptive);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screenPrice);
console.log(fullPrice);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 200));






