let myDate = new Date() // Object
// console.log(myDate.toString());

// console.log(myDate.toDateString()); // date
// console.log(myDate.toLocaleString()); // use for time


// const myCreatedate = new Date(2023, 0, 23, 5, 3)

let myCreatedate = new Date("01-14-2023")
// console.log(myCreatedate.toDateString());

// console.log(myCreatedate.toLocaleString());

let myTimeStamp = Date.now() // in milisecond

// console.log(myTimeStamp); 
// console.log(myCreatedate.getTime());

// console.log(Math.floor(Date.now()/1000)); // convert into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // to get day and month

newDate.toLocaleString('default', {
    weekday: "long",
                      // to describe more methods
})

console.log(newDate);