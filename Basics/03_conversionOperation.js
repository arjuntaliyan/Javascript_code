let score = null

// console.log(typeof score);
// console.log(typeof(score));

let valueNumber = Number(score)
// console.log(typeof valueNumber);
// console.log(valueNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Arjun"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "Arjun" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ***************************** Operations *****************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // use for power
// console.log(2/2);
// console.log(2%3 );

let str1 = "Hello"
let str2 = " Arjun"

let str3 = str1 + str2

// console.log(str3);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);

// **************************** Comparisions ****************************

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Null & undefined are always confusing in comparsion
console.log(undefined == 0);
console.log(undefined > 0 );
console.log(undefined < 0);

// ===

console.log("2" === 2);