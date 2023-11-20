/*
    =========== EXERCISE 7.1. - In a single line, obtain all the variables in the array: firstName, lastName, age, nationality
*/


const personArray = ['Felizberto', 'Folha', [ 35, 'Portuguese' ]];

// get the variables here in a single line
const [firstName, lastName, [age,nationality]] = personArray;

console.log('Exercise 7.1. - Array Destructuring', '\n');
console.log(firstName, lastName, age, nationality, '\n\n\n');







/*
    =========== EXERCISE 7.2. - Create a function that receives an object. 
    The only line allowed in the function block is this: console.log(firstName, lastName, age, isImportant);
    None of the variables logged can be undefined
*/


const person = {
    firstName: 'Bertilde',
    lastName: 'Brutamontes',
    age: 30
};

// create the function
let logFunction = function({firstName, lastName, age, isImportant = false}) {
    console.log(firstName, lastName, age, isImportant);
};

console.log('Exercise 7.2. - Object Destructuring in Function', '\n');
logFunction ? logFunction(person) : '';
console.log('\n\n');







/*
    =========== EXERCISE 7.3. - In a single line, obtain the variables in the otherPerson object. 
    The new variables should be called: otherFirstName, otherLastName, otherAge, otherStreet
*/


const otherPerson = {
    name: 'Aníbal',
    familyName: 'Abacaxi',
    yearsOnEarth: 23,
    address: {
        street: 'Rua da Rabanada',
        house: 234
    }
};

// get the variables here in a single line with the names specified in this exercise description above
const {name: otherFirstName, familyName: otherLastName, yearsOnEarth: otherAge, address: {street: otherStreet}} = otherPerson;

console.log('Exercise 7.3. - Object Destructuring with Renaming', '\n');
console.log(otherFirstName, otherLastName, otherAge, otherStreet, '\n\n\n');







/*
    =========== EXERCISE 7.4. - Create an object with the same properties as the 'newPerson' object using the spread operator
*/


const newPerson = {
    firstName: 'Horácio',
    lastName: 'Pistácio',
    age: 23,
    address: 'Rua da Rolha'
};

// create the copy of the object. 
// IMPORTANT NOTE: if one of the properties is an object, it will copy the reference, thus reflecting changes of the old object in copy
let individual = {...newPerson};

console.log('Exercise 7.4. - Array Destructuring', '\n');
console.log(individual.firstName, individual.lastName, individual.age, individual.address, '\n\n\n');







/*
    =========== EXERCISE 7.5. - Create an object with the same properties as the 'newIndividual' object using the spread operator
    and override the copy with the properties in the override object.
*/


const newIndividual = {
    firstName: 'Horácio',
    lastName: 'Pistácio',
    age: 23,
    address: 'Rua da Rolha'
};

const override = {
    lastName: 'Harmónica',
    age: 39
}

// TODO: create the copy of the object and override the properties
let individualCopy = {...newIndividual, ...override};

console.log('Exercise 7.5. - Object Destructuring with Override', '\n');
console.log(individualCopy.firstName, individualCopy.lastName, individualCopy.age, individualCopy.address, '\n\n\n');







/*
    =========== EXERCISE 7.6. - Create a function that receives any number of arguments using spread and returns an array with all of them
*/

// TODO: create function here
let spreadFunction = function(...args) {
    return args;
};

console.log('Exercise 7.6. - Spread arguments in Function', '\n');
console.log(spreadFunction ? spreadFunction(1, 4, 'Nice', true, ['hello', 'hi']) : '', '\n\n\n');