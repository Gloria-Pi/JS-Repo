/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script demonstrates how to implement a `delay` function using JavaScript Promises
 * to execute functions after a specified delay. The `delay` function returns a Promise
 * that resolves after a given number of milliseconds, allowing `.then()` to be used
 * with regular, arrow, and anonymous functions.
 */

/**
 * Returns a Promise that resolves after the specified number of milliseconds.
 *
 * @function
 * @param {number} delayedMs - The number of milliseconds to wait before resolving.
 * @returns {Promise<string>} A Promise that resolves with the string "Solved!" after the delay.
 *
 * @example
 * delay(1000).then(() => console.log("1 second later"));
 */

/**
 * Returns a Promise that resolves after the specified number of milliseconds.
 *
 * @function
 * @param {number} delayedMs - The number of milliseconds to wait before resolving.
 * @returns {Promise<string>} A Promise that resolves with the string "Solved!" after the delay.
 *
 * @example
 * delay(1000).then(() => console.log("1 second later"));
 */
const delay = (delayedMs) => {
    return new Promise((resolve) => {
    setTimeout( () => {
        resolve("Solved!")
    }, delayedMs);
});
};

/**
 * Logs a greeting message to the console.
 *
 * @function
 */
function greet() {
    console.log("Delayed regular named function!");    
}

// Regular named function
delay(2000).then(greet);

// Arrow function
delay(4000).then(() => console.log("Delayed arrow function!"));

// Anonymous function
delay(5000).then(function () {console.log("Delayed anonymous function!")});