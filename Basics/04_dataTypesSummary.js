 // Primitive 

 // 7 types : String, Number, Boolean, Null, Undefined, Symbols, BigInt


 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outSideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log( id === anotherId);


 
 // Reference (Non Primitive)

 // Array, object, Functions

 const heros = ["shaktiman", "naagraj", "doga"]; // Array

 let myObj = {
    name: "Arjun", // Object
    age: 21,
 }

 const myFunction = function() {
    console.log("hello Arjun"); // Function
 }

 console.log(typeof myFunction);

 // **************************** Memory *******************************

 //                            2 types
 //                           /       \
 //             Stack (Premitive)     Heap(Non-premitive)

 let myYoutubeName = "Arjun Taliyan"

 let anotherName = myYoutubeName
 anotherName = "ChaiAurCode"

 console.log(myYoutubeName);
 console.log(anotherName);

 let userOne = {
    email: "user@gmail.com",
    upi: " user@ybl",
 }

 let userTwo = userOne

 userTwo.email = "arjun@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);