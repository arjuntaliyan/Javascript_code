const num = [1,2,3,4,5,6,7,8,9];
console.log(num)

// PUSH - push element in last of a array
// num.push(10)
// console.log(num[num.length-1])
console.log(num.push(10))

// UNSHIFT - unshift is used to push element in first of a array
// num.unshift(0)
console.log(num.unshift(0))
  
// POP - last value get out 
// not giving any input in pop
console.log(num.pop())

// SHIFT - remove first value of a array
console.log(num.shift())

// Changing index number of any value

num[0] = 10
console.log(num)

const names = ['Arjun', 'Chiku', 'Avam', "Shourya", 'Aryan', 'Ritesh', 'Deepak', 'Prakshit']

// INDEX-OF
// names.indexOf('Chiku');
console.log(names.indexOf('Chiku'));

// LASTINDEX-OF
// names.lastIndexOf('Ritesh');
console.log(names.lastIndexOf('Ritesh'));

// INCLUDE - searching in a array
// names.include('Avam');
// INCLUDE were only used in premitive datatypes not work in refrence datatypes.
console.log(names.includes('Avam'));

// FIND - searching work in refrences datatypes also.
let channels = [{
    name: 'Apna College',
    subscriber: 10000
},{
    name: 'Apni Kaksha',
    subscriber: 20000
},{
    name: 'Arjun Taliyan',
    subscriber: 50000
}];

console.log(channels.find(function(element){
   return element.subscriber === 50000
 }))

// ARROW FUNCTION

console.log(channels.find(element => {
    return element.name === 'Apni kaksha'
}))

// CONCATITION

let names1 = ['Arjun', 'Chiku', 'Avam']
let names2 = ["Shourya", 'Aryan', 'Ritesh', 'Deepak']
let names3 = [names1.concat(names2)]

console.log(names1.concat('Harsh'))
console.log(names1.concat(names2))

// SLICE - removing values between two given index

console.log(names3.slice(3,5))

// FOR LOOP

for (let i =0; i<names.length; i++){
    // console.log(names[i])
}

// FOR OF LOOP

for (let name of names) {
    // console.log(name)
}

// FOR EACH LOOP

names.forEach(function(name, index){
   // console.log(name, index);
})

// JOIN

let student = ['A', 'r', 'j', 'u', 'n']
console.log(student.join(''))

// FILTER

let cities = [
    {name: 'Delhi', population: 2234567890},
    {name: 'Meerut', population: 1234567890},
    {name: 'Pune', population: 723456890},
    {name: 'Surat', population: 92343467890},
    {name: 'Bangularu', population: 5234567890},
    {name: 'Haridwar', population: 3234567890}
];

console.log(cities.filter(city => {
    return city.population > 30000000000
}))

// MAP
cities.map