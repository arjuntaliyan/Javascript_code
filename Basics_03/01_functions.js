function sayMyName() { // function identifier and functino name
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("U");
    console.log("N");
}

// sayMyName() // function execution

function addTwoNumbers(number1, number2) { // parametres

    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result

    return number1 + number2 // return block below code to execute
}

const result = addTwoNumbers (3,5) // arguments 

// console.log("Result: ", result);

function loginUserMessage(username) {
    if(!username){ //username === undefined
        // console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // if its empty it return undefined


function calculateCartPrice(...num1) { // rest operator or spread opreator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)

handleObject({
    username: "sam", // object in function
    price: 399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) { // Array in function
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600, 800]));