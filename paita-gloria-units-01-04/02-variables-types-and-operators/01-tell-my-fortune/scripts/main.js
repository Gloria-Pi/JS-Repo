/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains my solutions for the "Tell My Fortune" assignment. 
 * The task requires storing the following information in variables: number of children, 
 * partner's name, geographic location, and job title. The goal is to output a sentence 
 * describing the "fortune" in the format: 
 * 
 * "You will be a X in Y, and married to Z with N kids."
 * 
 * Since there are multiple ways to concatenate variables into a sentence, I am exploring 
 * different approaches to achieve the same output.
 */

//Initializing the variables
let numberOfChildren = 0;                   //this variable is a number
let partnersName = "Gianluigino";
let geographicLocation = "Wondertown";
let jobTitle = "Dog Trainer";


//Initializing a variable that contains the complete message
let tellMyFortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;


//Different ways to output the same message to the console:

//1) Using commas and the operator + in order to compose the sentence (here the value of numberOfChildren remains a number)
console.log("You will be a", jobTitle, "in", geographicLocation + ",", "and married to", partnersName, "with", numberOfChildren, "kids.");

//2) Using commas and the operator + in order to compose the sentence
console.log("You will be a", jobTitle, "in", geographicLocation + ",", "and married to", partnersName, "with " + numberOfChildren, "kids.");

//3) Using the operator + for full string concatenation
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", " + "and married to " + partnersName + " with " + numberOfChildren + " kids.");

//4) Using backticks and the variables I've initialized in order to format the sentence
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);

//5) Using a pre-defined variable to output the message
console.log(tellMyFortune);


/*
OUTPUT OF 1:
You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.
Note: The number 0 of "0 kids" remains a number.

OUTPUT OF 2-5:
You will be a Dog Trainer in Wondertown, and married to Gianluigino with 0 kids.
Note: In methods 2-5, the number 0 is implicitly converted to a string.
*/