// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Harsh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arjun",
            lastname: "Taliyan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // access object inside objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) // add multiple objects
const obj3 = {...obj1, ...obj2} // major using syntax

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gamil.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // access all value keys of object in array form
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // make different array of all keys and values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // search property in object