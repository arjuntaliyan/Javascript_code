
const marvel_heros = [ "thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it add array into array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // in work on new array and return also new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator same work as concat
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // slove all sub-array at infinity depth
// console.log(real_another_array);

console.log(Array.isArray("Shivam")); // checking array or not
console.log(Array.from("Arjun")); // convert into array
console.log(Array.from({name: "arjun"})) // ***** not convert direct *****

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3)); // combine element to  make array
