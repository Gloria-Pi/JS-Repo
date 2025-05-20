/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file documents the functions tellFortune(), tellFortune1(), and tellFortuneWithoutVariables() with examples.
 * These functions demonstrate the concepts of parameters and arguments, as well as storing a string in a global variable or just logging it to the console.
*/

// Global variables declared outside of the functions
let fortune;
let fortune1;

/**
 * @function tellFortune
 * @description This function logs the fortune of a person to the console using a global variable, `fortune`. 
 * The variable is assigned the result of `console.log()`, which logs the personalized fortune message.
 * 
 * @param {string} jobTitle - The job title of the person.
 * @param {string} location - The geographic location where the person will live.
 * @param {string} partner - The name of the person's partner.
 * @param {number} numChildren - The number of children the person will have.
 * @returns {void} - This function logs the result to the console and does not return anything.
 * 
 * @example
 * tellFortune("Dog Trainer", "Hawaii", "Brad Pitt", 1);
 * // Logs: "You will be a Dog Trainer in Hawaii, and married to Brad Pitt with 1 kids."
 */

function tellFortune(jobTitle, location, partner, numChildren) {
    fortune = console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`);
}

tellFortune("Dog Trainer", "Hawaii", "Brad Pitt", 1);
// Logs: "You will be a Dog Trainer in Hawaii, and married to Brad Pitt with 1 kids."



/**
 * @function tellFortune1
 * @description This function logs the fortune of a person to the console using a global variable, `fortune1`. 
 * The variable stores the resulting personalized message as a string and is then logged to the console.
 * 
 * @param {string} jobTitle - The job title of the person.
 * @param {string} location - The geographic location where the person will live.
 * @param {string} partner - The name of the person's partner.
 * @param {number} numChildren - The number of children the person will have.
 * @returns {void} - This function logs the result to the console and does not return anything.
 * 
 * @example
 * tellFortune1("Cat Sitter", "NY", "Lara Croft", 3);
 * // Logs: "You will be a Cat Sitter in NY, and married to Lara Croft with 3 kids."
 */

function tellFortune1(jobTitle, location, partner, numChildren) {    
    fortune1 = `You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`;
    console.log(fortune1);
}

tellFortune1("Cat Sitter", "NY", "Lara Croft", 3);
// Logs: "You will be a Cat Sitter in NY, and married to Lara Croft with 3 kids."



/**
 * @function tellFortuneWithoutVariables
 * @description This function directly logs the fortune of a person to the console without using any variables.
 * 
 * @param {string} jobTitle - The job title of the person.
 * @param {string} location - The geographic location where the person will live.
 * @param {string} partner - The name of the person's partner.
 * @param {number} numChildren - The number of children the person will have.
 * @returns {void} - This function logs the result to the console and does not return anything.
 * 
 * @example
 * tellFortuneWithoutVariables("Pigeon Whisperer", "Moscow", "MysteryPerson", 0);
 * // Logs: "You will be a Pigeon Whisperer in Moscow, and married to MysteryPerson with 0 kids."
 */
function tellFortuneWithoutVariables(jobTitle, location, partner, numChildren) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${numChildren} kids.`);
}

tellFortuneWithoutVariables("Pigeon Whisperer", "Moscow", "MysteryPerson", 0);
// Logs: "You will be a Pigeon Whisperer in Moscow, and married to MysteryPerson with 0 kids."



// Calling the function three times with different arguments:

tellFortune1("singer", "Italy", "Ilaria", 0); 
// Logs: "You will be a singer in Italy, and married to Ilaria with 0 kids."

tellFortune1("knight", "Prussia", "Albert", 2);
// Logs: "You will be a knight in Prussia, and married to Albert with 2 kids."

tellFortune1("professional table tennis player", "Japan", "Suzuki", 1);
// Logs: "You will be a professional table tennis player in Japan, and married to Suzuki with 1 kids."
