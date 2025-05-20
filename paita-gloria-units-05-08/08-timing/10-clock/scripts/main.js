/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * Implements a digital clock that logs the current time to the console every second.
 * The format used is "HH:mm:ss", such as "17:03:06".
 */


/**
 * Prints the current time in "HH:mm:ss" format to the console.
 *
 * @function clock
 * @param {Date} date - The current date and time object.
 * @returns {void}
 *
 * @example
 * // Called every second using setInterval:
 * setInterval(() => {
 *   clock(new Date());
 * }, 1000);
 *
 * // Example Output:
 * // 17:03:06
 * // 17:03:07
 * // 17:03:08
 */
function clock(date) {
    
     // Format the date as "HH:mm:ss"
     const hours = String(date.getHours()).padStart(2, '0');
     const minutes = String(date.getMinutes()).padStart(2, '0');
     const seconds = String(date.getSeconds()).padStart(2, '0');
     
     console.log(`${hours}:${minutes}:${seconds}`); 
}


const clockIntervalId = setInterval(() => {
    clock(new Date())
}, 1000);



/* Example Output:
00:10:50
00:10:51
00:10:52
00:10:53
00:10:54
00:10:55
00:10:56
00:10:57
00:10:58
00:10:59
00:11:00
00:11:01
00:11:02
*/