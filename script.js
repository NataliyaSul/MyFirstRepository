'use strict';
const title = prompt('Как называется ваш проект', "My project");
console.log(title);
let screens = prompt('Какие типы экранов нужно разработать?', "простые, сложные, интерактивные");
console.log(screens);
let screenPrice = prompt('Сколько будет стоить данная работа?', 20);
console.log(screenPrice);
// необходимо ли переводить число 20 из strict  в number ? в ТЗ этого просто не было
let rollback = 16;
let fullPrice = 1000;
let adaptive = confirm("Нужен ли адаптив на сайте?", true);
console.log(!!adaptive);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screenPrice);
console.log(fullPrice);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 200));

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - rollback;
console.log(Math.ceil(servicePercentPrice));

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



