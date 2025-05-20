/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script converts temperatures from Celsius to Fahrenheit and prints 
 * them to the console at 1-second intervals using `setTimeout()`. 
 * The conversion stops once it reaches 100°C.
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
*/
function celsiusToFahrenheit(celsiusTemp) {
   const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
   const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
   console.log(`${celsiusTemp}°C is ${roundedFahrenheitTemp}°F.`);
}


/**
 * @function spacedConversion
 * @description Recursively calls `celsiusToFahrenheit()` every second for temperatures 
 * from `startingTemperature` to 100°C.
 * 
 * @param {number} startingTemperature - The initial temperature to convert.
 * @returns {void} Calls itself using `setTimeout()` until it reaches 100°C.
 * 
 * @example
 * spacedConversion(0); // Starts logging temperatures every second from 0°C to 100°C.
 */
function spacedConversion(startingTemperature) {

        
    celsiusToFahrenheit(startingTemperature);
    startingTemperature++;

    
    if (startingTemperature <= 100) {
        
        setTimeout(spacedConversion, 1000, startingTemperature);
        
    } else {
        
        clearTimeout(timeoutId);

    }
    
}


let currentTemperature = 0;


// Initializes the timeout ID for the initial `setTimeout()` call.
let timeoutId = setTimeout(spacedConversion, 1000, currentTemperature);


/*
OUTPUT:
0°C is 32°F.
1°C is 33.8°F.
2°C is 35.6°F.
3°C is 37.4°F.
(...)
98°C is 208.4°F.
99°C is 210.2°F.
100°C is 212°F.
*/