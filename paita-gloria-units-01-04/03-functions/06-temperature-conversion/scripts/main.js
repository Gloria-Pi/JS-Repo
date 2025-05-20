/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the functions celsiusToFahrenheit and fahrenheitToCelsius, which convert temperatures between Celsius and Fahrenheit.
 * The results are rounded to one decimal place.
 */

/**
 * @function celsiusToFahrenheit
 * @description Converts a temperature from Celsius to Fahrenheit and logs the result to the console.
 * The result is rounded to one decimal place.
 * 
 * @param {number} celsiusTemp - The temperature in Celsius to be converted to Fahrenheit.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * celsiusToFahrenheit(0);         // Logs: "0°C is 32°F."
 * 
 * @example
 * celsiusToFahrenheit(84.5);      // Logs: "84.5°C is 184.1°F."
 * 
 * @example
 * celsiusToFahrenheit(-9);        // Logs: "-9°C is 15.8°F."
 */
function celsiusToFahrenheit(celsiusTemp) {
    const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
    const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;           // Rounds the result to one decimal place.
    console.log(`${celsiusTemp}°C is ${roundedFahrenheitTemp}°F.`);
}

//Test Cases
celsiusToFahrenheit(0);         // Logs: "0°C is 32°F."
celsiusToFahrenheit(84.5);      // Logs: "84.5°C is 184.1°F."
celsiusToFahrenheit(-9);        // Logs: "-9°C is 15.8°F."



/**
 * @function fahrenheitToCelsius
 * @description Converts a temperature from Fahrenheit to Celsius and logs the result to the console.
 * The result is rounded to one decimal place.
 * 
 * @param {number} fahrenheitTemp - The temperature in Fahrenheit to be converted to Celsius.
 * @returns {void} This function logs the result to the console and does not return anything.
 * 
 * @example
 * fahrenheitToCelsius(32);        // Logs: "32°F is 0°C."
 * 
 * @example
 * fahrenheitToCelsius(212.3);     // Logs: "212.3°F is 100.2°C."
 * 
 * @example
 * fahrenheitToCelsius(-51);       // Logs: "-51°F is -46.1°C."
 */
function fahrenheitToCelsius(fahrenheitTemp) {
    const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    const roundedCelsiusTemp = Math.round(celsiusTemp * 10) / 10;           // Rounds the result to one decimal place.
    console.log(`${fahrenheitTemp}°F is ${roundedCelsiusTemp}°C.`);
}

//Test Cases
fahrenheitToCelsius(32);        // Logs: "32°F is 0°C."
fahrenheitToCelsius(212.3);     // Logs: "212.3°F is 100.2°C."
fahrenheitToCelsius(-51);       // Logs: "-51°F is -46.1°C."