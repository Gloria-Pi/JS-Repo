/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script converts temperatures from Celsius to Fahrenheit and prints 
 * them to the console at 1-second intervals using `setInterval()`. 
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


let currentTemperature = 0;


/**
 * Interval that calls `celsiusToFahrenheit()` every second (1000 ms).
 * Stops when `currentTemperature` exceeds 100.
 */
let intervalId = setInterval( () => {

    celsiusToFahrenheit(currentTemperature);

    currentTemperature++;

    if (currentTemperature > 100) {
          clearInterval(intervalId);
    }

}, 1000);