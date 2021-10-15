'use strict';

const appData = {
  title: '',
  screens: '',
  str: '',
  screenPrice: 0,
  rollback: 16,
  adaptive: true,
  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,

  asking: function () {
    appData.title = prompt('Как называется ваш проект', "My project");
    appData.screens = prompt('Какие типы экранов нужно разработать?', " простые, сложные, интерактивные");
    appData.str = appData.screens.split(", ");

    do {
      appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 20);
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?", true);
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    let result = 0;

    for (let i = 0; i < 2; i++) {
      let servicePrice = 0;
      if (i === 0) {
        appData.service1 = +prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = +prompt("Какой дополнительный тип услуги нужен?");
      }
      do {
        appData.servicePrice = prompt('Сколько будет стоить данная работа?', 20);
      } while (!appData.isNumber(appData.servicePrice));
      result += +appData.servicePrice;

    }
    return result;
  },

  getFullPrice: function (scrPrice, allPrices) {
    return scrPrice + allPrices;
  },

  getTitle: function (myproject) {
    appData.title = myproject.trim();
    return appData.title.charAt(0).toUpperCase() + appData.title.slice(1);
  },

  getServicePercentPrices: function (fullPr, servPrPrice) {
    return fullPr - servPrPrice;
  },

  getRollbackMessage: function (price) {
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
  },

  start: function () {

    appData.asking();

    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log("Ключь:" + key + "" + "Значение:" + appData[key]);
    }
  },

};

appData.start(appData.AllServicePrices = appData.getAllServicePrices(),
  appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.AllServicePrices),
  appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice,
    (appData.fullPrice * (appData.rollback / 100))),
  appData.isNumber(),
  appData.getTitle(appData.title),

  console.log(appData.fullPrice),
  console.log(appData.servicePercentPrice),
);















