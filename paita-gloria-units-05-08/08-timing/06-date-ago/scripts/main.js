/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script provides a utility function `getDateAgo` that calculates and logs the day of the month 
 * a given number of days before or after a specific date. 
 * <br>
 * The function supports positive, negative, and zero values for the `days` parameter:
 * - Positive values return a past date.
 * - Negative values return a future date.
 * - Zero returns the date of the given day.
 * <br>
 * It also includes several test cases demonstrating the use of the function with current dates,
 * leap years, and manually defined dates.
 */


/**
 * @function getDateAgo
 * @description
 * Calculates the day of the month that occurred a specific number of days 
 * before (or after, if `days` is negative) a given date. It uses timestamps to perform
 * the date calculation and logs a context-aware message depending on the `days` value.
 *
 * @param {Date} date - The base date from which the calculation starts.
 * @param {number} days - The number of days to go back (positive), forward (negative), or 0.
 * 
 * @returns {number} The day of the month (1 to 31) resulting from the calculation.
 * 
 * @example
 * // Get the date 1 day ago from today
 * getDateAgo(new Date(), 1);
 * // Output: The date from 1 day(s) prior to "Sat Mar 29 2025..." was the 28.
 *
 * @example
 * // Get the date 5 days after a specific date
 * getDateAgo(new Date("2025-03-30"), -5);
 * // Output: In 5 day(s) from "Sun Mar 30 2025..." it'll be the 4.
 *
 * @example
 * //Targetting the leap day of 2024
 * console.log(getDateAgo(new Date("2025-04-06"), 402));
 * // Output: "The date from 402 day(s) prior to "Sun Apr 06 2025..." was the 29.
 *
 * @example
 * // Using zero days returns the current day of the month
 * getDateAgo(new Date("2025-03-30"), 0);
 * // Output: Want to know the chosen day's date? It's the 30.
 */
function getDateAgo(date, days) {

    const givenMsSinceUnix = date.getTime();

    //86400000 is the n of milliseconds in a day
    const daysToSubtractInMs = days*86400000;

    const resultingDateInMs = givenMsSinceUnix - daysToSubtractInMs;

    const resultingDate = new Date(resultingDateInMs);
    
    const resultingDateAgo = resultingDate.getDate(); 

    if (days > 0) {

        console.log(`The date from ${days} day(s) prior to "${date}" was the ${resultingDateAgo}.`);
        
    } else if (days < 0) {
        
        // Put a "-" to make the sentence more readable by turning the negative number into a positive one
        console.log(`In ${-days} day(s) from "${date}" it'll be the ${resultingDateAgo}.`);
        
    } else {
        
        console.log(`Want to know the chosen day's date? It's the ${resultingDateAgo}.`);
    }
    
    return resultingDateAgo;
}


//Current Date
console.log(getDateAgo(new Date(), 1));

//A set date
const chosenDate = new Date("2025-03-30");

//Targetting the leap day of 2024
console.log(getDateAgo(new Date("2025-04-06"), 402));
//29 Feb

//Previous Month
console.log(getDateAgo(chosenDate, 31));

//Next Month
console.log(getDateAgo(chosenDate, -5));

//Same Day
console.log(getDateAgo(chosenDate, 0));