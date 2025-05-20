/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script contains my attempt to solve the assignment "05 My setInterval" from the "Timing" unit.
 * It implements the function `mySetInterval()`, which mimics the behavior of `setInterval()`
 * using `setTimeout()` recursively.
 */


/**
 * @function mySetInterval
 * @description Recursively calls a function at specified intervals, mimicking `setInterval()`.
 * 
 * @param {Function} randomFunction - The function to execute at each interval.
 * @param {number} delay - The time in milliseconds between each function execution.
 * @returns {void} This function does not return any value.
 * 
 * @example
 * function logMessage() {
 *     console.log("Hello!");
 * }
 * 
 * mySetInterval(logMessage, 1000); // Logs "Hello!" every second indefinitely.
 */
function mySetInterval(randomFunction, delay) {

    let timeoutIdRecursion = setTimeout(() => {

        // Executes the provided function
        randomFunction();

        // Recursively calls itself
        mySetInterval(randomFunction, delay);
    }, delay);
}


/**
 * @function printX
 * @description Logs the letter "X" to the console. Used to test `mySetInterval()`.
 * @returns {void} This function does not return a value. It prints an X to the console.
 * 
 * @example
 * printX();
 * 
 * // Logs: "X"
 */
function printX() {
    console.log("X");
}



/**
 * @function whenWasItCalled
 * @description Logs the current time in a human-readable format. Used to test `mySetInterval()`.
 * @returns {void} This function does not return a value. It prints a string to the console.
 * @example
 * whenWasItCalled();
 * 
 * // Logs: "Function called at: 11:46:38"
 */
function whenWasItCalled() {
    console.log("Function called at: " + new Date().toLocaleTimeString());
}



// Start the interval with a 2-second delay
mySetInterval(whenWasItCalled, 2000);
mySetInterval(printX, 2000);



/*
OUTPUT:

Function called at: 17:20:43
X
(...)
Function called at: 17:21:11
X

--> Both messages were printed once every two seconds, for 15 times.
*/