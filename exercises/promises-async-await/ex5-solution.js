import axios from "axios";

/*
    =========== EXERCISE 5. - Now create a function that calls the cat API and then returns the data in a new object { fact: 'the fact', length: the lenght, uselessProperty: 'Hi' }
    This function should return a promise as well
    Use this to get the cat fact: axios.get('https://catfact.ninja/fact');
*/


console.log('Exercise 5 - New Promise', '\n');

// TODO: Create the function here. Remember the function will just return a new Promise. 
// When creating the Promise, you have to give it the "executor" - a function that takes resolve and reject as parameters and does the actual work, calling resolve after it's done.
let processCatData = function(){
    return new Promise((resolve, reject) => {
        axios.get('https://catfact.ninja/fact')
        .then((response) => {
            const returnObj = {
                ...response.data,
                uselessProperty: 'Hi'
            }
            resolve(returnObj);
        })
    });
};

processCatData().then((result) => {
    console.log('Fact: ', result.fact);
    console.log('Length: ', result.length);
    console.log('Useless Property: ', result.uselessProperty, '\n');
    console.log('I should print after the cat fact object is returned.', '\n');
});

console.log('I don\'t care if I print first or last.');