/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * Contains two functions to calculate time-based values relative to the current day:
 * - `getSecondsToday()`: returns the number of seconds that have passed since the beginning of today.
 * - `getSecondsToTomorrow()`: returns the number of seconds remaining until tomorrow.
 */


/**
 * @function getSecondsToday
 * @description
 * Calculates the total number of seconds that have passed since the beginning of the current day.
 * It gets the current hour, minute, and second, converts them all to seconds, and sums them up.
 * 
 * @returns {number} The total number of seconds passed since 00:00:00 of today.
 * 
 * @example
 * // Suppose it's 01:30:15 AM
 * getSecondsToday(); // returns 5415 (3600 + 1800 + 15)
 */
function getSecondsToday() {

    const currentDateTime = new Date();

    // H * 3600  = S
    const currentHoursInSeconds = currentDateTime.getHours() * 3600;

    // M * 60 = S
    const currentMinutesInSeconds = currentDateTime.getMinutes() * 60;

    const currentSeconds = currentDateTime.getSeconds();

    const totalSecondsOfToday = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;

    return totalSecondsOfToday;

}


console.log(`The number of seconds from the beginning of today is: ${getSecondsToday()}.`);



/**
 * @function getSecondsToTomorrow
 * @description
 * Calculates the number of seconds remaining until the beginning of tomorrow.
 * It subtracts the number of seconds passed today from the total number of seconds in a day (86400).
 * 
 * @returns {number} The number of seconds remaining until 00:00:00 of the next day.
 * 
 * @example
 * // Suppose it's 01:30:15 AM
 * getSecondsToTomorrow(); // returns 80985 (86400 - 5415)
 */
function getSecondsToTomorrow() {

    const currentDateTime = new Date();

    // H * 3600  = S
    const currentHoursInSeconds = currentDateTime.getHours() * 3600;

    // M * 60 = S
    const currentMinutesInSeconds = currentDateTime.getMinutes() * 60;

    const currentSeconds = currentDateTime.getSeconds();

    const totalSecondsOfToday = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;

    // 86400 is the number of seconds in a day
    const totalSecondsUntilTomorrow = 86400 - totalSecondsOfToday;

    return totalSecondsUntilTomorrow;

}

console.log(`The number of seconds 'til tomorrow: ${getSecondsToTomorrow()}.`);