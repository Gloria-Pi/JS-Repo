/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description This file contains the modified version of the **Calculator** exercise,
 * originally introduced in the lesson on functions. The goal was to rewrite the
 * final function so that each mathematical operation is executed with a delay
 * of 3 seconds from the previous one, simulating asynchronous behavior using `setTimeout`.
 * <br>
 * The operations include:
 * - Halving the input number
 * - Squaring the halved number
 * - Calculating the area of a circle using the squared number as the radius
 * - Finding what percentage the area is of the squared number
 * - Rounding the result to two decimal places
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



//-----------------------------------------------------
// THE CALCULATOR FUNCTION



/**
 * @function calculator
 * @description
 * Executes a chain of asynchronous mathematical operations on a given number, using `setTimeout` to simulate delays between steps.
 * The steps include halving the number, squaring the result, calculating the area of a circle with that as radius, 
 * computing the percentage the area represents of the squared number, and finally rounding the result to two decimal places.
 * <br>
 * Each operation is delayed in 3-second increments, and the final result is logged after 15 seconds.
 *
 * @param {number} num - The starting number on which the calculation chain will be performed.
 *
 * @example
 * calculator(4);
 * // After 15 seconds:
 * // Output: The rounded result of all those calculations is 314.16.
 *
 * @note
 * This function assumes the existence of the following helper functions in the scope:
 * - `rawHalfNumber(number): number`
 * - `rawSquareNumber(number): number`
 * - `rawAreaOfCircle(radius): number`
 * - `rawPercentOf(part, total): number`
 *
 * These helper functions must be synchronous and return numeric values.
 */
function calculator(num) {
    // Halves the input number
    let calcHalvedNum;
    setTimeout(() => {calcHalvedNum = rawHalfNumber(num);}, 3000);

    // Squares the halved number
    let calcSquaredNum;
    setTimeout(() => {calcSquaredNum = rawSquareNumber(calcHalvedNum);}, 6000);
    
    // Calculates the area of a circle with the squared number as the radius
    let calcAreaOfCircle;
    setTimeout(() => {calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);}, 9000);
    
    // Calculates what percentage the area of the circle is of the squared number
    let calcPercentOf;
    setTimeout(() => {calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);}, 12000);
    
    // Rounds the result to two decimal places
    let roundedCalcResult;
    setTimeout(() => {
        roundedCalcResult = Math.round(calcPercentOf * 100) / 100;
        console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);
    }, 15000);
}


// Testing
calculator(5);


/* OUTPUT:
Half of 5 is 2.5.
The result of squaring the number 2.5 is 6.25.
The area for a circle with radius 6.25 is 122.7184630308513.
122.7184630308513 is 1963.4954084936207% of 6.25.
The rounded result of all those calculations is 1963.5.
*/



/* ALTERNATIVE VERSION USING NESTED -> 3000

function calculator(num) {
    // Halves the input number
    setTimeout(() => {
        let calcHalvedNum = rawHalfNumber(num);
        
        // Squares the halved number
        setTimeout(() => {
            let calcSquaredNum = rawSquareNumber(calcHalvedNum);
            
            // Calculates the area of a circle with the squared number as the radius
            setTimeout(() => {
                let calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);
                
                // Calculates what percentage the area of the circle is of the squared number
                setTimeout(() => {
                    let calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);
                    
                    // Rounds the result to two decimal places
                    setTimeout(() => {
                        let roundedCalcResult = Math.round(calcPercentOf * 100) / 100;
                        console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);
                    }, 3000);
                    
                }, 3000);
                
            }, 3000);
            
        }, 3000);
        
    }, 3000);
}
*/