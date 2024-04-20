const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(1)); // used for to get decimal places

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); // for precise value

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));

// *************************** MATHS **********************************

// console.log(Math);
// console.log(Math.abs(-4)); // change -ve to +ve

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // choose upper value always
// console.log(Math.floor(4.9)); // Choose lower value always

console.log(Math.random()); // random value b/w 0 to 1

// for dice

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) +  1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);