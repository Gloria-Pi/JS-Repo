/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains my attempts at solving exercise 05 "Convert Temperature".
 * 
 * The program performs conversions between Celsius and Fahrenheit temperatures:
 * - It converts a given Celsius temperature into Fahrenheit and outputs the result.
 * - It then converts a given Fahrenheit temperature into Celsius and outputs the result.
 */

//Initializing the variables (a temperature in Celsius and one in Fahrenheit)
let celsiusTemp = 25;
let fahrenheitTemp = 119;


//Calculating, rounding and initializing using the Celsius to Fahrenheit formula
let celsiusToFahrenheit = Math.round(celsiusTemp * 1.8 + 32);

//Calculating, rounding and initializing using the Fahrenheit to Celsius formula
let fahrenheitToCelsius = Math.round((fahrenheitTemp - 32) / 1.8);


//Logging everything to console
console.log(`${celsiusTemp}°C is ${celsiusToFahrenheit}°F.`);

console.log(`${fahrenheitTemp}°F is ${fahrenheitToCelsius}°C.`);
