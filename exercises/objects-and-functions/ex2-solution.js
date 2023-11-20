/*
    =========== EXERCISE 2.1. - Create an object using the object literal syntax that represents a person: should have a firstName property (string), a lastName (a string), 
    an age (a number) and a function that returns a string with all of that information (the function property should be called getInformation)
*/

let person = {
    firstName: 'Joélder',
    lastName: 'Jumanji',
    age: 30,
    getInformation: function(){
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }
};

// log created object info, you should see the information of the person object that was printed by the function
console.log('Exercise 2.1 - Create person object')
console.log(person?.getInformation(), '\n\n');







/*
    =========== EXERCISE 2.2. - Create a similar object to the one from the previous exercise using the object literal syntax (you can copy paste) but without the function.
    Use the function from the previous object to print the information from this new object: HINT ===========================================================================> remember the call() and apply() functions, which are methods available to all function and receive an object which the 'this' keyword will refer to
*/

// TODO: create object
let newPerson = {
    firstName: 'Rodrigo',
    lastName: 'Rolha',
    age: 42
};

// log created object info, you should see the information of the newPerson object that was printed by the function
console.log('Exercise 2.2 - Borrow function')
console.log(person.getInformation.call(newPerson)); // Borrows function using call(). The parameter call will become the 'this' inside the function being called
console.log('\n');








/*
    =========== EXERCISE 2.3. - Create a function from multiplyByX that multiplies the number passed as a parameter by 10. You are not allowed to create it from scratch. HINT =========================================================================> Remember the bind() method.
*/

const multiplyByX = function(y) {
    return this * y;
};

let multiplyBy10 = multiplyByX.bind(10); // binds the value 10 to the 'this' inside the function


// call the created function, you should see the updated information printed
console.log('Exercise 2.3 - Bind function')
console.log(multiplyBy10(2)); // should log 20
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
let logPersonWithNameOfAnActualHumanBeing = function (person, logFunc){
    person.firstName = 'John';
    person.lastName = 'Doe';
    logFunc(person);
};

// call the created function, you should see the updated information printed
console.log('Exercise 2.4 - Execute callback')
logPersonWithNameOfAnActualHumanBeing(individual, (object) => console.log(object.firstName, object.lastName, object.age)); // calls the created function and passes it the individual, and a function that takes an object as a parameter and logs the info
console.log('\n');







/*
    =========== EXERCISE 2.5.1 - Create a function that receives a firstName and a lastName as parameters, creates a string with the full name, and returns a new function that receives a greeting as a parameter 
    and greets the person with the names given to the high-order function.
*/

const firstName = 'Júlio';
const lastName = 'Joelho';

let highOrderFunc = function(firstName, lastName){
    const fullName = firstName + ' ' + lastName;
    return function(greeting) {
        return greeting + ' ' + fullName;
    }
};

const greetFunc = highOrderFunc ? highOrderFunc(firstName, lastName) : undefined;

// log the greeting, you should see the greeting and the full name, even though the high-order function is done running, the function returned still has access to the full name variable created inside it thanks to the closure
const greeting = greetFunc ? greetFunc('Hello there') : '';
console.log('Exercise 2.5.1 - Closure');
console.log(greeting, '\n');







/*
    =========== EXERCISE 2.5.2 Theoretical - Can you tell what happens when you pass an object with the names to the high-order function (objects are passed by reference), used it directly in the returned function and then changed its value in the outer scope?
    Feel free to copy the above exercise and experiment. How would you avoid that behaviour when passing objects to high-order functions?
*/

/*
    When passing an object to the high-order function, this is passed by reference. If the returned function uses the object directly, it will use its reference so changes to that object, no matter where, will be reflected on that function.
    To avoid this behaviour you can simply create variables inside the high-order function and assign them the object's properties (assuming these properties are primitives) because these will be assigned by value and not by reference, and changes 
    made to the objects will not affect them
*/