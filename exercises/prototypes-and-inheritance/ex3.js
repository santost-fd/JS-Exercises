/*
    =========== EXERCISE 3.1. - Create a constructor function for a Person object. It should contain firstName, lastName, age. 
    Create a logInformation() function that is available to every object created by that constructor function, 
    but is not directly in the object's properties and changing something in that function should change it for every object created as well. HINT ===========================================================> prototype. EVEN MORE HINTS =============================================> person.prototype
*/

// TODO: create the Person constructor function that sets the following properties: firstName, lastName, age.
// Make the logInformation function available to every object created by that constructor.


const person = new Person('Rodrigo', 'Rolha', 27);

// call the created function, you should see the person information printed
console.log('Exercise 3.1. - Constructor Functions')
person.logInformation(); // should log the information
console.log('\n\n');







/*
    =========== EXERCISE 3.2. - Fill the blanks (TODOs) below for Developer to fully inherit from Employee
*/

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.raise = () => console.log('I got raised!!!');

function Developer(name, age, position) {
    // TODO: inherit properties from Employee. HINT ================================================================> Borrow function

    this.position = position;
}

// TODO: Replace the string with the correct object that the Developer.prototype should inherit from. Remember, object.create creates a brand new object withthe parameter as its prototype
Developer.prototype = Object.create('REPLACE HERE');

const dev = new Developer('John', 30, 'Backend Intern');

// raise the backend intern's salary ;). Accesses the raise function from the "super class", should see the raise message
console.log('Exercise 3.2. - Inheritance using prototype');
dev.raise()
console.log('\n');







/*
    =========== BONUS - Just look through the syntax for classes. It's an easier to understand way to use prototypes for inheritance
*/

class EmployeeClassImp {
    
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    raise(){ 
        console.log('I got raised!!!');
    }
}

class DeveloperClassImp extends EmployeeClassImp {

    constructor(firstName, lastName, age, position){
        super(firstName, lastName, age);
        this.position = position;
    }
}

const newDev = new DeveloperClassImp('Carlos', 'Cabeças', 29, 'Backend Intern');

newDev.raise(); // Once again ;)
console.log('\n');