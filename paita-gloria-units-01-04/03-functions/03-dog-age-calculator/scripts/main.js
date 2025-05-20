/**
 * @file main.js
 * @author Gloria Paita
 * @description This file contains two functions, `calculateDogAge` and `calculateDogAgeBonus`, that calculate and log a dog's age in dog years based on its age in human years. 
 * 
 * - `calculateDogAge`converts a dog's age to dog years using a fixed conversion rate of 7 dog years per human year.
 * - `calculateDogAgeBonus` allows a customizable conversion rate, multiplying the dog's age by the given conversion rate to determine its age in dog years.
*/

/**
 * @function calculateDogAge
 * @description This function converts a dog age to human years and logs the result to the console.
 * 
 * @param {number} dogAge - The age of the dog.
 * @returns {void} - This function logs the result to the console and does not return anything.
 * 
 * @example
 * calculateDogAge(1);         // Logs: "Your dog is 7 years old in dog years!"
 * 
 * @example
 * calculateDogAge(6);         // Logs: "Your dog is 42 years old in dog years!"
 * 
 * @example
 * calculateDogAge(13);        // Logs: "Your dog is 91 years old in dog years!"
 */

function calculateDogAge(dogAge) {
    let convertedAge = dogAge * 7;
    console.log(`Your dog is ${convertedAge} years old in dog years!`);
}

// Test cases
calculateDogAge(1);         // Logs: "Your dog is 7 years old in dog years!"
calculateDogAge(6);         // Logs: "Your dog is 42 years old in dog years!"
calculateDogAge(13);        // Logs: "Your dog is 91 years old in dog years!"



/**
 * @function calculateDogAgeBonus
 * @description This function calculates a dog's age in dog years based on the given conversion rate and logs the result to the console.
 * The function takes the dog's age in human years and multiplies it by the provided conversion rate to determine the equivalent dog years.
 * 
 * @param {number} dogAge - The age of the dog.
 * @param {number} conversionRate - The rate at which dog years are converted to human years.
 * @returns {void} - This function logs the result to the console and does not return anything.
 * 
 * @example
 * calculateDogAgeBonus(1, 7);         // Logs: "Your dog is 7 years old in dog years!"
 * 
 * @example
 * calculateDogAgeBonus(6, 8);         // Logs: "Your dog is 48 years old in dog years!"
 * 
 * @example
 * calculateDogAgeBonus(13, 9);        // Logs: "Your dog is 117 years old in dog years!"
 */

function calculateDogAgeBonus(dogAge, conversionRate) {
    let convertedAge = dogAge * conversionRate;
    console.log(`Your dog is ${convertedAge} years old in dog years!`);
}

// Test cases
calculateDogAgeBonus(1, 7);         // Logs: "Your dog is 7 years old in dog years!"
calculateDogAgeBonus(6, 8);         // Logs: "Your dog is 48 years old in dog years!"
calculateDogAgeBonus(13, 9);        // Logs: "Your dog is 117 years old in dog years!"
