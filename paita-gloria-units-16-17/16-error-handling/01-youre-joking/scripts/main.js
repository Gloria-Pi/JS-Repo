/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Create a function called `fetchRandomJoke()` that fetches one random joke from a `Random joke API` and returns a promise that resolves with the text of the joke.

Create a page that uses the function and displays the joke on the page or an error message if the
promise rejects.

The function:  
- Should use error handling to handle errors that may occur during the fetching
- Should return a Promise that resolves with the joke text, not the joke text itself
- If the fetch operation fails, the function should retry the operation up to 3 times before
giving up
- If the fetch operation fails after 3 attempts, the function should reject the promise

**Bonus**  
Create variants that can fetch jokes by number and by type.
 */

function fetchRandomJoke() {

    const oneRandomJokeUrl = "https://official-joke-api.appspot.com/jokes/random";

    let oneJokePromise = new Promise((resolve, reject) => {
        console.log(resolve);

    }

    return oneJokePromise;


}
