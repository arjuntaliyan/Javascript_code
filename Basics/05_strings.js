const name = "Arjun"
const repoCount = 18

// console.log(name + repoCount + "Value");

// String Interpulations

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another method to declear string

const gameName = new String('Arjun')

console.log(gameName[0]); // Access keys
console.log(gameName.__proto__); // ProtoType access -> best result check in browser

console.log(gameName.length);

console.log(gameName.charAt(3)); // checking char at index
console.log(gameName.indexOf('j')); // chekking index at char


const newString = gameName.substring(0, 4) // for substrings
console.log(newString); 

const anotherString = gameName.slice(-8, 4) // to take -ve values use slice
console.log(anotherString);

console.log(anotherString.trim()); // trim extra space

const url = "https://arjuntaliyan.com/arjun%20taliyan"

console.log(url.replace('%20', '-')); // replace works