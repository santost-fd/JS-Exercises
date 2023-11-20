/*
    =========== EXERCISE 1.1. - Create two variables using either var (although you should avoid this one), const or let: firstName and lastName
*/

// create variables
let firstName = 'John';
let lastName = 'Doe';

// log created variables, you should see the created variables printed
console.log('Exercise 1.1 - Create two variables:')
console.log(firstName, lastName, '\n\n');








/*
    =========== EXERCISE 1.2. - Create a simple function (and assign it to the createdFunction variable - remember functions are first-class!)
    that receives those two variables as parameters and formats them to your liking and prints them (something like 'Hello, John Doe')
*/

// create function
let printName = function(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}.`); // this is using string literals (you can type the string and just use ${variableName} when you want to use a variable)
};                                                   // you can also just use 'Hello, ' + firstName + ' ' + lastName + '.'

// calls the function (you should see the formated string printed)
console.log('Exercise 1.2. - Create a simple function:')
printName(firstName, lastName);
console.log('\n');







/*
    =========== EXERCISE 1.3. - Now create another simple function that does the same (and assign it to the parameterlessFunction variable), but this time do not take any parameters in the function and do not create any new variables. 
    Print the name in the same format as the previous version with the variables created in 1.1.
*/

// create the function
let parameterlessFunction = function() {
    console.log(`Hello, ${firstName} ${lastName}.`); // remember if a variable is not found in the current scope, JS will try to find it in the outer scopes
};

// calls the function - you should still see the name printed, can you tell why?
console.log('Exercise 1.3. - Create a simple parameterless function:')
parameterlessFunction();
parameterlessFunction?.length > 0 ? console.log('You cheated though. Can\'t use parameters in the function.'): '';
console.log('\n');







/*
    =========== EXERCISE 1.4. Can you predict the output of the printName function (vscode gives you a hint) and tell why?
*/

firstName = 'John';
lastName = 'Doe';

// function to change names
function changeNames(){
    firstName = 'Jane';
    let lastName = 'Smith';
}

// call changeNames and print the names
changeNames();
console.log('Exercise 1.4. - Predict the output of printName (function scope):')
printName(firstName, lastName);
console.log('\n');







/*
    =========== EXERCISE 1.5. Can you predict the output of the printName function again and tell why?
*/

firstName = 'John';
lastName = 'Doe';
const superUsefulFlag = true;

if (superUsefulFlag) {
    let firstName = 'Not John';
}

// call printName
console.log('Exercise 1.5. - Predict the output of printName (block scope):');
printName(firstName, lastName);
console.log('\n');