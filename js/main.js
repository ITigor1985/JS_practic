let user = "Igor";
console.log(typeof user);

// const isComing = "Please confirm hotel reservation";
// confirm(isComing);

// const userName = prompt("Enter yours name");
// console.log(userName);

console.log("Type of variable userName:", typeof userName);

let x = "fg";
console.log(Number.isNaN(x)); // false
const y = 10;
const z = 5;

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log("x=5 > y=10:", x > y); // false
console.log("x=5 < y=10:", x < y); // true
console.log("x=5 < z=5:", x < z); // false
console.log("x=5 <= z=5:", x <= z); // true
console.log("x=5 === y=10:", x === y); // false
console.log("x=5 === z=5:", x === z); // true
console.log("x=5 !== y=10:", x !== y); // true
console.log("x=5 !== z=5:", x !== z); // false

console.log(Number.parseInt("5px5"));
// -----------------------------------------------------------------
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41
// -----------------------------------------------------------------
// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.round(Math.random() * (10 - 1) + 1)); // псевдослучайное число от 1 до 10