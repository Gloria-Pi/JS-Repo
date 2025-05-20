/**
 * @file main.js
 * @author Gloria Paita 
 * 
 * @description This file contains the implementation of two functions: `calculator` and `rawCalculator`. 
 * 
 * The `calculator` function takes a number, performs a series of calculations on it, and returns the rounded result.
 * 
 * The `rawCalculator` function performs the same calculations but returns the raw result without rounding.
 * 
 * Both functions rely on the following functions from the 07-math-library folder: `rawSquareNumber`, `rawHalfNumber`, `rawPercentOf`, and `rawAreaOfCircle`.
 */

// The functions that will be invoked by the calculator and rawCalculator functions.
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



// The two functions requested for the assignment
/**
 * @function calculator
 * @description This function takes a number, performs a series of calculations on it, and returns the rounded result.
 * 
 * It uses functions from the math-library module to calculate half of the input, square that result, calculate the area 
 * of a circle with the squared value as the radius, and finally, determine what percentage the area is of the squared value.
 * The result of all these calculations is then rounded to two decimal places, logged to the console, and returned.
 * 
 * @param {number} num - The number to be used in the calculations
 * @returns {number} - The result of all the calculations, rounded to two decimal places.
 * 
 * @example
 * calculator(8);
 * 
 * // Half of 8 is 4.
 * // The result of squaring the number 4 is 16.
 * // The area for a circle with radius 16 is 804.247719318987.
 * // 804.247719318987 is 5026.548245743669% of 16.
 * // The rounded result of all those calculations is 5026.55.
 *
 * @example
 * calculator(-1);
 *
 * // Half of -1 is -0.5.
 * // The result of squaring the number -0.5 is 0.25.
 * // The area for a circle with radius 0.25 is 0.19634954084936207.
 * // 0.19634954084936207 is 78.53981633974483% of 0.25.
 * // The rounded result of all those calculations is 78.54.
 * 
 * @example
 * console.log(`If you input 21.3 in the calculator function, it returns ${calculator(21.3)}`);
 * 
 * // Half of 21.3 is 10.65.
 * // The result of squaring the number 10.65 is 113.42250000000001.
 * // The area for a circle with radius 113.42250000000001 is 40415.53236213972.
 * // 40415.53236213972 is 35632.72927517883% of 113.42250000000001.
 * // The rounded result of all those calculations is 35632.73.
 * // If you input 21.3 in the calculator function, it returns 35632.73.
 */
function calculator(num) {
    // Halves the input number
    const calcHalvedNum = rawHalfNumber(num);

    // Squares the halved number
    const calcSquaredNum = rawSquareNumber(calcHalvedNum);

    // Calculates the area of a circle with the squared number as the radius
    const calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);

    // Calculates what percentage the area of the circle is of the squared number
    const calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);

    // Rounds the result to two decimal places
    const roundedCalcResult = Math.round(calcPercentOf * 100) / 100;

    // Logs the rounded result to the console
    console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);

    return roundedCalcResult;
}

// Calling the function
calculator(8);
calculator(-1);

// Testing the return of the correct value
console.log(`If you input 21.3 in the calculator function, it returns ${calculator(21.3)}.`);



/**
 * @function rawCalculator
 * @description This function takes a number, performs a series of calculations on it, and returns the raw result.
 * 
 * It uses functions from the math-library module to calculate half of the input, square that result, calculate the area 
 * of a circle with the squared value as the radius, and finally, determine what percentage the area is of the squared value.
 * The result of all these calculations is logged to the console and returned.
 * 
 * @param {number} num - The number to be used in the calculations
 * @returns {number} - The result of all the calculations.
 * 
 * @example
 * rawCalculator(8);
 * 
 * // Half of 8 is 4.
 * // The result of squaring the number 4 is 16.
 * // The area for a circle with radius 16 is 804.247719318987.
 * // 804.247719318987 is 5026.548245743669% of 16.
 * // The result of all those calculations is 5026.548245743669.
 *
 * @example
 * rawCalculator(-1);
 *
 * // Half of -1 is -0.5.
 * // The result of squaring the number -0.5 is 0.25.
 * // The area for a circle with radius 0.25 is 0.19634954084936207.
 * // 0.19634954084936207 is 78.53981633974483% of 0.25.
 * // The result of all those calculations is 78.53981633974483.
 * 
 * @example
 * console.log(`If you input 21.3 in the rawCalculator function, it returns ${rawCalculator(21.3)}`);
 * 
 * // Half of 21.3 is 10.65.
 * // The result of squaring the number 10.65 is 113.42250000000001.
 * // The area for a circle with radius 113.42250000000001 is 40415.53236213972.
 * // 40415.53236213972 is 35632.72927517883% of 113.42250000000001.
 * // The result of all those calculations is 35632.72927517883.
 * // If you input 21.3 in the calculator function, it returns 35632.72927517883.
 */

function rawCalculator(num) {
    // Halves the input number
    const calcHalvedNum = rawHalfNumber(num);

    // Squares the halved number
    const calcSquaredNum = rawSquareNumber(calcHalvedNum);

     // Calculates the area of a circle with the squared number as the radius
    const calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);

    // Calculates what percentage the area of the circle is of the squared number
    const calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);
    
    // Logs the result to the console
    console.log(`The result of all those calculations is ${calcPercentOf}.`);

    // Returns the raw result without rounding
    return calcPercentOf;
}

// Calling the function
rawCalculator(8);
rawCalculator(-1);

// Testing the return of the correct value
console.log(`If you input 21.3 in the rawCalculator function, it returns ${rawCalculator(21.3)}.`);
