/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of two sets of functions.
 * 
 * First, the implementation of the functions squareNumber, halfNumber, percentOf, and areaOfCircle, which are used to calculate the square of a number, half of a number, the percentage of a number in relation to another number, and the area of a circle.
 *
 * The results are rounded to 2 decimal places using the built-in Math.round() method, logged to the console and returned.
 * 
 * Second, the implementation of the functions rawSquareNumber, rawHalfNumber, rawPercentOf, and rawAreaOfCircle, which perform the same calculations as the first set of functions but without rounding the results.
 * 
 * These functions simply log the results to the console and return them without any rounding.
 */


//FUNCTIONS RETURNING A ROUNDED RESULT
/**
 * @function squareNumber
 * @description This function takes a number, logs and returns the square of that number.
 * 
 * The result is rounded to 2 decimal places using the built-in Math.round() method.
 * 
 * @param {number} num - The number to be squared. 
 * @returns {number} - The square of the number, rounded to 2 decimal places.
 * 
 * @example
 * squareNumber(8);            // Logs: "The result of squaring the number 8 is 64."
 *
 * @example
 * squareNumber(21.3);         // Logs: "The result of squaring the number 21.3 is 453.69."
 * 
 * @example
 * squareNumber(-19);          // Logs: "The result of squaring the number -19 is 361."
 */
function squareNumber(num) {
    const squaredNum = Math.pow(num, 2);                                // Math.pow() is a built-in JS method equivalent to num ** 2  
    const roundedSquaredNum = Math.round(squaredNum * 100) / 100;       // Rounds the squared number to 2 decimal places
    console.log(`The result of squaring the number ${num} is ${roundedSquaredNum}.`);
    return roundedSquaredNum;
}

// Test Cases
squareNumber(8);
squareNumber(21.3);
squareNumber(-19);



/**
 * @function halfNumber
 * @description This function takes a number, logs and returns half of it.
 * The result is rounded to 2 decimal places using the built-in Math.
 * 
 * @param {number} num - The number to be halved.
 * @returns {number} - Half of the number, rounded to 2 decimal places. For negative inputs, the result is also negative.
 * 
 * @example
 * halfNumber(8);          // Logs: "Half of 8 is 4."
 * 
 * @example
 * halfNumber(21.3);       // Logs: "Half of 21.3 is 10.65."
 * 
 * @example
 * halfNumber(-19);        // Logs: "Half of -19 is -9.5."
 */
function halfNumber(num) {
    const dividedNum = num / 2;
    const roundedDividedNum = Math.round(dividedNum * 100) / 100;       // Rounds the divided number to 2 decimal places
    console.log(`Half of ${num} is ${roundedDividedNum}.`);
    return roundedDividedNum;
}

// Test Cases
halfNumber(8);
halfNumber(21.3);
halfNumber(-19);



/**
 * @function percentOf
 * @description This function calculates what percent the first number (num1) is of the second number (num2).
 *
 * The result is rounded to 2 decimal places using the built-in Math.round() method.
 * 
 * @param {number} num1 - the number to be calculated as a percentage of the second number. 
 * @param {number} num2 - the number to be used as a reference for the percentage.
 * @returns {number} - The percentage of the first number in relation to the second number, rounded to 2 decimal places. For negative inputs, the result is also negative.
 * 
 * @example
 * percentOf(2, 4);            // Logs: "2 is 50% of 4."
 * 
 * @example
 * percentOf(13, -89);         // Logs: "13 is -14.61% of -89."
 * 
 * @example
 * percentOf(3.8, 72);         // Logs: "3.8 is 5.28% of 72."
 * 
 */
function percentOf(num1, num2) {
    const percentage = num1 / num2 * 100;
    const roundedPercentage = Math.round(percentage * 100) / 100;       // Rounds the percentage to 2 decimal places
    console.log(`${num1} is ${roundedPercentage}% of ${num2}.`);
    return roundedPercentage;
}

// Test Cases
percentOf(2, 4);
percentOf(13, -89);
percentOf(3.8, 72);



/**
 * @function areaOfCircle
 * @description This function takes the radius of a circle, logs and returns the area of the circle rounded to 2 decimal places.
 * 
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle, rounded to 2 decimal places.
 * 
 * @example
 * areaOfCircle(2);        // Logs: "The area for a circle with radius 2 is 12.57."
 * 
 * @example
 * areaOfCircle(5.3);      // Logs: "The area for a circle with radius 5.3 is 88.25."
 *  
 * @example
 * areaOfCircle(-19);      // Logs: "The area for a circle with radius -19 is 1134.11."
 * 
 */
function areaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    const roundedArea = Math.round(area * 100) / 100;       // Rounds the area to 2 decimal places
    console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
    return roundedArea;
}

// Test Cases
areaOfCircle(2);
areaOfCircle(5.3);
areaOfCircle(-19);



//FUNCTIONS RETURNING A RAW (NOT ROUNDED) RESULT
/**
 * @function rawSquareNumber
 * @description This function takes a number, logs and returns the square of that number.
 * 
 * The result is calculated without rounding.
 * 
 * @param {number} num - The number to be squared. 
 * @returns {number} - The square of the number.
 * 
 * @example
 * rawSquareNumber(8);            // Logs: "The result of squaring the number 8 is 64."
 *
 * @example
 * rawSquareNumber(21.3);         // Logs: "The result of squaring the number 21.3 is 453.69000000000005."
 * 
 * @example
 * rawSquareNumber(-19);          // Logs: "The result of squaring the number -19 is 361."
 */
function rawSquareNumber(num) {
    const squaredNum = Math.pow(num, 2); // Squares the number using Math.pow() method
    console.log(`The result of squaring the number ${num} is ${squaredNum}.`);
    return squaredNum;
}

// Test Cases
rawSquareNumber(8);
rawSquareNumber(21.3);
rawSquareNumber(-19);



/**
 * @function rawHalfNumber
 * @description This function takes a number, logs and returns half of it.
 * The result is calculated without rounding.
 * 
 * @param {number} num - The number to be halved.
 * @returns {number} - Half of the number.
 * 
 * @example
 * rawHalfNumber(8);          // Logs: "Half of 8 is 4."
 * 
 * @example
 * rawHalfNumber(21.3);       // Logs: "Half of 21.3 is 10.65."
 * 
 * @example
 * rawHalfNumber(-19);        // Logs: "Half of -19 is -9.5."
 */
function rawHalfNumber(num) {
    const dividedNum = num / 2; // Divides the number by 2
    console.log(`Half of ${num} is ${dividedNum}.`);
    return dividedNum;
}

// Test Cases
rawHalfNumber(8);
rawHalfNumber(21.3);
rawHalfNumber(-19);



/**
 * @function rawPercentOf
 * @description This function calculates what percent the first number (num1) is of the second number (num2).
 * 
 * The result is calculated without rounding.
 * 
 * @param {number} num1 - The number to be calculated as a percentage of the second number. 
 * @param {number} num2 - The number to be used as a reference for the percentage.
 * @returns {number} - The percentage of the first number in relation to the second number.
 * 
 * @example
 * rawPercentOf(2, 4);            // Logs: "2 is 50% of 4."
 * 
 * @example
 * rawPercentOf(13, -89);         // Logs: "13 is -14.606741573033707% of -89."
 * 
 * @example
 * rawPercentOf(3.8, 72);         // Logs: "3.8 is 5.277777777777778% of 72."
 */
function rawPercentOf(num1, num2) {
    const percentage = (num1 / num2) * 100; // Calculates percentage
    console.log(`${num1} is ${percentage}% of ${num2}.`);
    return percentage;
}

// Test Cases
rawPercentOf(2, 4);
rawPercentOf(13, -89);
rawPercentOf(3.8, 72);



/**
 * @function rawAreaOfCircle
 * @description This function takes the radius of a circle, logs and returns the area of the circle.
 * 
 * The result is calculated without rounding.
 * 
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle.
 * 
 * @example
 * rawAreaOfCircle(2);        // Logs: "The area for a circle with radius 2 is 12.566370614359172."
 * 
 * @example
 * rawAreaOfCircle(5.3);      // Logs: "The area for a circle with radius 5.3 is 88.24733763933729."
 *  
 * @example
 * rawAreaOfCircle(-19);      // Logs: "The area for a circle with radius -19 is 1134.1149479459152."
 */
function rawAreaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2); // Calculates the area using the formula for a circle
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
    return area;
}

// Test Cases
rawAreaOfCircle(2);
rawAreaOfCircle(5.3);
rawAreaOfCircle(-19);