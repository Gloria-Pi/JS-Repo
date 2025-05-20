/**
 * @file main.js
 * @author Gloria Paita
 * @description This file contains the functions calculateSupplyInCups and calculateSupplyInLiters,
 * which calculate the amount of coffee consumed for rest of a person's life, respectively in cups or liters.
 */

/**
 * @function calculateSupplyInCups
 * @description Calculates the total amount of coffee a person will consume until their very last day, in cups.
 * 
 * @param {number} age - The age of the person.
 * @param {number} cupsPerDay - The number of cups of coffee consumed per day.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * calculateSupplyInCups(18, 2);        // Logs: "You will need 59860 cups of coffee to last you until the age of 100."
 * 
 * @example
 * calculateSupplyInCups(56, 5);        // Logs: "You will need 80300 cups of coffee to last you until the age of 100."
 * 
 * @example
 * calculateSupplyInCups(91, 1);        // Logs: "You will need 3285 cups of coffee to last you until the age of 100."
 * 
 */

function calculateSupplyInCups(age, cupsPerDay) {
    const maxAge = 100;
    const cupsPerYear = 365 * cupsPerDay;
    const cupsPerLife = (maxAge - age) * cupsPerYear;
    console.log(`You will need ${cupsPerLife} cups of coffee to last you until the age of ${maxAge}.`);
}

// Test Cases
calculateSupplyInCups(18, 2);        // Logs: "You will need 59860 cups of coffee to last you until the age of 100."
calculateSupplyInCups(56, 5);        // Logs: "You will need 80300 cups of coffee to last you until the age of 100."
calculateSupplyInCups(91, 1);        // Logs: "You will need 3285 cups of coffee to last you until the age of 100."



/**
 * @function calculateSupplyInLiters
 * @description Calculates the total amount of coffee a person will consume until their very last day, in liters.
 * The result is rounded to the nearest whole number.
 * 
 * @param {number} age - The age of the person.
 * @param {number} litersPerDay - The liters of coffee consumed per day.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * calculateSupplyInLiters(18, 2);              // Logs: "You will need 59860 liters of coffee to last you until the age of 100."
 * 
 * @example
 * calculateSupplyInLiters(56, 0.2);            // Logs: "You will need 3212 liters of coffee to last you until the age of 100."
 * 
 * @example
 * calculateSupplyInLiters(91, 0.36);           // Logs: "You will need 1183 liters of coffee to last you until the age of 100."
 */

function calculateSupplyInLiters(age, litersPerDay) {
    const maxAge = 100;
    const litersPerYear = 365 * litersPerDay;
    const litersPerLife = (maxAge - age) * litersPerYear;
    const litersPerLifeRounded = Math.round(litersPerLife);
    console.log(`You will need ${litersPerLifeRounded} liters of coffee to last you until the age of ${maxAge}.`);
}

//Test Cases
calculateSupplyInLiters(18, 2);              // Logs: "You will need 59860 liters of coffee to last you until the age of 100."
calculateSupplyInLiters(56, 0.2);            // Logs: "You will need 3212 liters of coffee to last you until the age of 100."
calculateSupplyInLiters(91, 0.36);           // Logs: "You will need 1183 liters of coffee to last you until the age of 100."
