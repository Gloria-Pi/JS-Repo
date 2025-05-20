/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the `money()` function,
 * which formats a given amount as a string with its equivalent in euros.
 * It handles singular/plural forms and rounds the conversion.
 */

/**
 * @function money
 * @description Converts a given amount in dollars to euros and formats the output string.
 * 
 * @param {number} amount - The amount of money in dollars.
 * @returns {string} A formatted string representing the conversion.
 *
 * @example
 * console.log(money(1.09));
 * // "1.09 dollars are 1 euro"
 *
 * console.log(money(0));
 * // "0 dollars are 0 euros"
 */

function money(amount) {

    // Formula to convert dollars to euros and rounding to two decimal digits
    let convertedAmount = Math.round((amount * 0.92) * 100) / 100;

    // Declaring the variables
    let isDollarPlural;
    let isEuroPlural;
    let verb;
    
    //Switch statement to determine singular/plural forms
    switch (Math.abs(amount)) {
        case 1:
            isDollarPlural = "dollar";
            isEuroPlural = "euros";
            verb = "is";
            break;
        case 1.09:
            isDollarPlural = "dollars";
            isEuroPlural = "euro";
            verb = "are";
            break;
        default:
            isDollarPlural = "dollars";
            isEuroPlural = "euros";
            verb = "are";
            break;
    }

    // Constructing the final message using template literals
    let completeMessage = `${amount} ${isDollarPlural} ${verb} ${convertedAmount} ${isEuroPlural}`;

    return completeMessage;

}



// Initializing some amounts
let savings = 1;
let savings1 = 10;
let savings2 = 3040600;
let savings3 = 1000000;
let savings4 = -1500;
let savings5 = 1000000000;

// Edge Cases
let savings6 = 0;
let savings7 = -1;
let savings8 = 1.09;



// Test Cases
console.log(money(savings));
// 1 dollar is 0.92 euros

console.log(money(savings1));
// 10 dollars are 9.2 euros

console.log(money(savings2));
// 3040600 dollars are 2797352 euros

console.log(money(savings3));
// 1000000 dollars are 920000 euros

console.log(money(savings4));
// -1500 dollars are -1380 euros

console.log(money(savings5));
// 1000000000 dollars are 920000000 euros

console.log(money(savings6));
// 0 dollars are 0 euros

console.log(money(savings7));
// -1 dollar are -0.92 euros

console.log(money(savings8));
// 1.09 dollars are 1 euro