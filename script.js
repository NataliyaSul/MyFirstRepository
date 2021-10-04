const title = "My project";
const screens = "простые , сложные , интерактивные , ";
let screenPrice = 20;
let rollback = 16;
let fullPrice = 1000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(screenPrice);
console.log(fullPrice);
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback / 200));
