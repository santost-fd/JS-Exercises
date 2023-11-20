import axios from "axios";

/*
    =========== EXERCISE 6 - Create the same function as in exercise 5, but using the async and await syntax
    Use this to get the cat fact: axios.get('https://catfact.ninja/fact');
*/


console.log('Exercise 6 - Async await syntax', '\n');

// TODO: Create the function here. It should still call the cat fact api and process the data in the same way as the previous exercise ( { fact: 'the fact', length: the lenght, uselessProperty: 'Hi' } )
let processCatData = async function() {
    const {data} = await axios.get('https://catfact.ninja/fact');
    return {
        ...data, // could just type the properties directly in the object e.g. data.fact and data.length
        uselessProperty: 'Hi'
    };
};

// logs the results
const result = await processCatData();
console.log('Fact: ', result.fact);
console.log('Length: ', result.length);
console.log('Useless Property: ', result.uselessProperty, '\n');
console.log('I should print after the cat fact object is returned.', '\n');

console.log('I should print last now.');