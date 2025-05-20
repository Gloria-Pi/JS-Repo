/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the function greaterNum(), which, given two numbers, will return the greater of the two.
 */

/**
 * @function greaterNum
 * @description This function takes two numbers and returns the greater number of the two.
 * If the two arguments aren't numbers, the function will return a string to warn the user of the reason why it can't return the greater number.
 * Note: this function only accepts arguments that are of the number type, which means that it isn't optimized to deal with BigInts.
 * 
 * @param {number} number1 - The first number to be compared. 
 * @param {number} number2 - The second number to be compared. 
 * @returns {number|string} - The greater number of the two, or a string in the event that the two arguments are the same number or aren't numbers at all.
 * 
 * @example
 * console.log(`The greater number of 3 and 19 is ${greaterNum(3, 19)}.`);
 * 
 * // Logs: "The greater number of 3 and 19 is 19."
 * 
 * @example
 * console.log(`The greater number of 1 and 1 is ${greaterNum(1, 1)}.`);
 * 
 * // Logs: "The greater number of 1 and 1 is neither, because they are the same number."
 * 
 * @example
 * console.log(`The greater number of 3 and 1234567890123456789012345678901234567890n is ${greaterNum(3, 1234567890123456789012345678901234567890n)}.`);
 *
 * // Logs: "The greater number of 3 and 1234567890123456789012345678901234567890n is neither, because one or both values are not numbers."
 */

function greaterNum(number1, number2) {
    //Checks if the both the arguments are numbers
    if (typeof number1 === "number" && typeof number2 === "number") {

        //Checks whether the arguments are different numbers
        if (number1 !== number2) {
            if (number1 > number2) {
                return number1;
            } else {
                return number2;
            }

        //If they are the same number, returns a string
        } else {
            return "neither, because they are the same number";
        }

    //If the arguments aren't numbers, returns a string
    } else {
        return "neither, because one or both values are not numbers";
    }
}


//Test cases
console.log(`The greater number of 3 and 19 is ${greaterNum(3, 19)}.`);

console.log(`The greater number of 143.2 and -10 is ${greaterNum(143.2, -10)}.`);

console.log(`The greater number of 1 and 1 is ${greaterNum(1, 1)}.`);

console.log(`The greater number of 3 and 1234567890123456789012345678901234567890n is ${greaterNum(3, 1234567890123456789012345678901234567890n)}.`);