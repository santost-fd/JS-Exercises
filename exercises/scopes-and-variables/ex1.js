/*
    =========== EXERCISE 1.1. - Create two variables using either var (although you should avoid this one), const or let: firstName and lastName
*/

// TODO: create variables

// log created variables, you should see the created variables printed
console.log('Exercise 1.1 - Create two variables:')
console.log(firstName, lastName, '\n\n');






/*
    =========== EXERCISE 1.2. - Create a simple function (and assign it to the createdFunction variable - remember functions are first-class!)
    that receives those two variables as parameters and formats them to your liking and prints them (something like 'Hello, John Doe')
*/

// TODO: create function
let printName;

// calls the function (you should see the formated string printed)
console.log('Exercise 1.2. - Create a simple function:')
printName(firstName, lastName);
console.log('\n');





/*
    =========== EXERCISE 1.3. - Now create another simple function that does the same (and assign it to the parameterlessFunction variable), but this time do not take any parameters in the function and do not create any new variables.  
    Print the name in the same format as the previous version with the variables created in 1.1.
*/

// TODO: create the function
let parameterlessFunction;

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