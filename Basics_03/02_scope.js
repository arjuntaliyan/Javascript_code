// let a = 10
// const b = 20
// var c = 30


{ } // scope

let a = 300 // global scope

if (true) {
    let a = 10 // local scope
    const b = 20
    var c = 30 // only c will  print in this scope 

    console.log("INNER: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);