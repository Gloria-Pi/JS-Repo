/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the functions addNumbers() and addNumbers1().
 * 
 * These functions are designed to demonstrate the concepts of global and local scope in JavaScript.
 * 
 * - addNumbers() adds two numbers and logs the result using a local variable.
 * - addNumbers1() adds two numbers and logs the result using a global variable.
 */

/**
 * @function addNumbers
 * @description This is a function that adds two numbers.
 * The result is stored in a local variable `localResult` and is not accessible outside the function's scope.
 * 
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} - The sum of the two numbers, num1 and num2. The result is stored in the local variable `localResult`.
 * 
 * @example
 * addNumbers(5, 7);
 * // Logs: "The local result is: 12"
 * 
 * @example
 * console.log(localResult);
 * // "ReferenceError: localResult is not defined"
 */

function addNumbers(num1, num2) {
    // initialization of the local variable
    let localResult = num1 + num2;

    console.log("The local result is: " + localResult);
}

// Calling the function
addNumbers(5, 7);           // "The local result is: 12"

// trying to access the local variable from the global scope
// console.log(localResult);
// "ReferenceError: localResult is not defined"


//Declaring the global variable
let globalResult;

/**
 * @function addNumbers1
 * @description  This function adds two numbers and logs the result to the console using a global variable.
 * The result is stored in the global variable `globalResult` and is accessible outside the function's scope.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The sum of the two numbers, num1 and num2. The result is stored in the global variable globalResult.
 * 
 * @example
 * addNumbers1(5, 7);
 * // Logs: "The global result is: 12"
 * 
 * @example
 * console.log(globalResult);
 * // Logs: "12"
 */
function addNumbers1(num1, num2) {
    // assigning a value to the global variable
    globalResult = num1 + num2;

    console.log("The global result is: " + globalResult);
}

//Calling the function
addNumbers1(5, 7);          // "The global result is: 12"

// Accessing the global variable from the global scope
console.log(globalResult);              // "12"