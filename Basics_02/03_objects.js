// singleton
// object.create

// object literals

const mySym = Symbol("key1") // symbol object

const JsUser = {
    name: "Arjun",
    "full name": "Arjun Taliyan", // never access by . in console
    [mySym]: "mykey1", // correct syntax to access symbol
    age: 18,
    location: "Jaipur",
    email: "arjun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "arjun@chatgpt.com"
// Object.freeze(JsUser) // it freeze the value 
JsUser.email = "arjun@accenture.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`); // this refference same object
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());