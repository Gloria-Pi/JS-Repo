/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `money`, which formats a given amount as a string
 * with the word "dollar" or "dollars" and includes personalized messages for specific ranges.
 */


/**
 * @function money
 * @param {number} amount - The amount of money.
 * @returns {string} A formatted string representing the amount and an appropriate message.
 *
 * @example
 * console.log(money(1));
 * // "1 dollar"
 *
 * console.log(money(10));
 * // "10 dollars"
 *
 * console.log(money(1000000));
 * // "1000000 dollars ;)"
 */
function money(amount) {

    // Initializing the message variable
    let message = "dollars";

    if (amount === 1 || amount === -1) {
        message = "dollar";
    } else if (amount == 1000000) {
        message = "dollars ;)";
    } else if (amount > 1000000 && amount < 1000000000) {
        message = "dollars --> you're doing amazing!";
    } else if (amount <= 0 && amount > -1000) {
        message = "dollars :(";
    } else if (amount <= -1000) {
        message = "dollars --> bud, you doing okay? :(";
    } else if (amount >= 1000000000) {
        message = "dollars --> congrats, you are now a billionaire!";
    }

    let completeMessage = amount + " " + message;

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


// Test Cases
console.log(money(savings));
// "1 dollar"

console.log(money(savings1));
// "10 dollars"

console.log(money(savings2));
// "3040600 dollars --> you're doing amazing!"

console.log(money(savings3));
// "1000000 dollars ;)"

console.log(money(savings4));
// "-1500 dollars --> bud, you doing okay? :("

console.log(money(savings5));
// "1000000000 dollars --> congrats, you are now a billionaire!"

console.log(money(savings6));
// "0 dollars :("

console.log(money(savings7));
// "-1 dollar"