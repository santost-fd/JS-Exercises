import axios from "axios";

/*
    =========== EXERCISE 4 - Log the information retrieved form the API (the actual content is in response.data) - Remember the axios request returns a promise. HINT ====================================================================> use then() to execute code after the promise is resolved
    Can you tell what the log order will be?
*/

const response = axios.get('https://catfact.ninja/fact'); // cat fact i guess

console.log('Exercise 4 - Simple Promise', '\n');

// TODO: Log the response here

console.log('I was the second log! Or not?!?!', '\n');