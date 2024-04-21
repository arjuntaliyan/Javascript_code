// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // another method to declare array
// console.log(myHeros[1]);

// Array Methods

myArr.push(6) // add value to array
// myArr.pop()   // remove last value of array

// myArr.unshift(9) // add value in starting
myArr.shift()    // remove first value

// console.log(myArr.includes(9)); // answer in boolen type
// console.log(myArr.indexOf(3)); // check index of value

const newArr = myArr.join() // convert array into string

// console.log(myArr);
// console.log(typeof newArr); 

// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // not maupulate original array not print last value like -> index '3'

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // manupulate original array delete 1,2,3 index and print last index also
console.log("C", myArr);
console.log(myn2);