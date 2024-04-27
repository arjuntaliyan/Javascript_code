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
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // if its empty it return undefined