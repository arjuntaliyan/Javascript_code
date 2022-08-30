/*FOR LOOP

 for (let i=0; i<10; i++){
    console.log("Namaste World")
}

*/

/*WHILE LOOP

 let i=0;
while(i<10){
    console.log("Namaste World")
    i++
}

*/ 
/* DO-WHILE LOOP

let j = 0;
do {
    console.log("Namaste World")
    j++
}
while(j<10)

*/

/* FOR-IN LOOP */

let animal = {
    name : "Lion",
    leg : 4
};
for(let key in animal){
    console.log(key, animal[key]);
}

// Arrays

let names = ["Rahul", "Neha", "Arjun", "Jaat" ];
for (let index in names){
    console.log(index, names[index])
}

/* FOR-OF LOOP */

for(let name of names){
    console.log(name)
}