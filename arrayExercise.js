const characters = [
    {
        name: 'Arjun Taliyan',
        height: '190',
        mass: '80',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Chiku ',
        height: '150',
        mass: '55',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Avam Kumar',
        height: '170',
        mass: '150',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Tushar Garg',
        height: '155',
        mass: '100',
        eye_color: 'black',
        gender: 'male',
    },
    {
        name: 'Shourya Partap',
        height: '160',
        mass: '15',
        eye_color: 'black',
        gender: 'male',
    },
];

// Get an array of all names

const names = characters.map(ch => ch.name)
// console.log(names);

// Get an array of objects with just name and height properties

const propertiesOfCh = characters.map(ch => {
    return { name: ch.name, height: ch.height}
})
// console.log(propertiesOfCh);

// Get the total height of all characters 

const totalHeight = characters.reduce((prevHeight, character) => {
    return prevHeight + Number(character.height);
},0);
// console.log(totalHeight);

// Get characters with mass greater than 100

const greaterThanMass = characters.filter((character) => {
    return character.mass > 100
})
// console.log (greaterThanMass);

// Get all male characters

const getMale = characters.filter((character )=> {
    return character.gender == 'male'
})
// console.log (getMale);

// Sort by Name

const sortByName = characters.sort((character1, character2 )=> {
    if (character1.name < character2.name) {
        return -1;
    }
    if (character1.name > character2.name){
        return 1;
    }
    return 0
})
// console.log (sortByName);

// Sort by gender

const sortByGender = characters.sort((character1, character2 )=> {
    if (character1.gender < character2.gender) {
        return -1;
    }
    if (character1.gender > character2.gender){
        return 1;
    }
    return 0
})
// console.log (sortByGender);

 // Does every characters have mass morethan 40 ?

 console.log(characters.every((character) =>{
    return character.mass > 40; 
 }))

// Does every characters have blue eyes ?

console.log(characters.every((character) =>{
    return character.eye_color ==  'blue' 
 }))

// Is there at least one male character ?

console.log(characters.some((character) => character.gender))

// Is there at least one character taller than 200 ?

console.log(characters.some((character) => character.height > 200))

