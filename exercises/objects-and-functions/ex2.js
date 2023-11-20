/*
    =========== EXERCISE 2.1. - Create an object using the object literal syntax that represents a person: should have a firstName property (string), a lastName (a string), 
    an age (a number) and a function that prints all of that information (the function property should be called getInformation)
*/

// TODO: create object
let person;

// log created object info, you should see the information of the person object that was printed by the function
console.log('Exercise 2.1 - Create person object')
console.log(person?.getInformation(), '\n\n');







/*
    =========== EXERCISE 2.2. - Create a similar object to the one from the previous exercise using the object literal syntax (you can copy paste) but without the function.
    Use the function from the previous object to print the information from this new object: HINT ===========================================================================> remember the call() and apply() functions, which are methods available to all function and receive an object which the 'this' keyword will refer to
*/

// TODO: create object
let newPerson;

// log created object info, you should see the information of the newPerson object that was printed by the function
console.log('Exercise 2.2 - Borrow function')
// TODO: Print the new object information here using the function of the object created in 2.1.

console.log('\n');








/*
    =========== EXERCISE 2.3. - Create a function from multiplyByX that multiplies the number passed as a parameter by 10. You are not allowed to create it from scratch. HINT =========================================================================> Remember the bind() method.
*/

const multiplyByX = function(y) {
    return this * y;
};

// TODO: create the copy of the function that multiplies the number given as a parameter by
let multiplyBy10;


// call the created function, you should see the updated information printed
console.log('Exercise 2.3 - Bind function')
multiplyBy10? multiplyBy10(2) : ''; // should log 20
console.log('\n\n');







/*
    =========== EXERCISE 2.4. - Create a function that receives an object and a callback. This function sould update the firstName and lastName properties of the object and then call the callback.
    Check how the function created is called below (start getting used to arrow functions and anonymous functions being used to quickly create callbacks)
*/

const individual = { // even though this is declared with the const keyword, you can change the values of properties inside the object but not reassign the variable
    firstName: 'Filinto',
    lastName: 'Fiambre',
    age: 35
};

// TODO: create the function that receives the object and the callback, changes the object's names and executes the callback, passing it the updated object
let logPersonWithNameOfAnActualHumanBeing;


console.log('Exercise 2.4 - Execute callback')
// calls the created function and passes it the individual, and a function that takes an object as a parameter and logs the info on that object
logPersonWithNameOfAnActualHumanBeing ? logPersonWithNameOfAnActualHumanBeing(individual, (object) => console.log(object.firstName, object.lastName, object.age)) : ''; 
console.log('\n');







/*
    =========== EXERCISE 2.5.1 - Create a function that receives a firstName and a lastName as parameters, creates a string with the full name, and returns a new function that receives a greeting as a parameter 
    and greets the person with the names given to the high-order function.
*/

const firstName = 'Júlio';
const lastName = 'Joelho';

/* 
TODO: create a function that:
 - takes a firstName and a lastName as parameters
 - creates a string with the full name
 - returns a function that:
    - takes a greeting as its only parameter
    - returns a string greeting the fullName created
*/
let highOrderFunc;

const greetFunc = highOrderFunc ? highOrderFunc(firstName, lastName) : undefined;

// log the greeting, you should see the greeting and the full name, even though the high-order function is done running, the function returned still has access to the full name variable created inside it thanks to the closure
const greeting = greetFunc ? greetFunc('Hello there') : '';
console.log('Exercise 2.5.1 - Closure');
console.log(greeting, '\n');







/*
    =========== THEORY (or not) EXERCISE 2.5.2 - Can you tell what happens when you pass an object with the names to the high-order function (objects are passed by reference), used it directly in the returned function and then changed its value in the outer scope?
    Feel free to copy the above exercise and experiment. How would you avoid that behaviour when passing objects
*/