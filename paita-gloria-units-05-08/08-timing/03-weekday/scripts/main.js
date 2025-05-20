/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description This file contains multiple functions that display the weekday of a given date
 * in short format, either in English or Italian.
 */


/**
 * @function getWeekDayEn
 * @description
 * Logs the weekday of a given date in short English format (e.g., "MO", "TU").
 * Uses JavaScript's `getDay()` method to extract the weekday number (0 = Sunday, 6 = Saturday).
 *
 * @param {string|Date} date - A valid date string or Date object.
 *
 * @example
 * getWeekDayEn("2025-03-29");
 * // Output: SA
 */
function getWeekDayEn(date) {

    // From a given date, extracts the weekday number (0 is Sunday, 6 is Saturday)
    const weekDayNumber = new Date(date).getDay();
    
    // Depending on the number, logs the corresponding day in short format
    switch (weekDayNumber) {
        case 0:
            console.log("SU");
            break;
        case 1:
            console.log("MO");
            break;
        case 2:
            console.log("TU");
            break;
        case 3:
            console.log("WE");
            break;
        case 4:
            console.log("TH");
            break;
        case 5:
            console.log("FR");
            break;
        case 6:
            console.log("SA");
            break;
    }
 
}


/**
 * @function getWeekDayIt
 * @description
 * Logs the weekday of a given date in short Italian format (e.g., "LUN", "MAR").
 * Uses JavaScript's `getDay()` method to extract the weekday number (0 = Sunday, 6 = Saturday).
 *
 * @param {string|Date} date - A valid date string or Date object.
 *
 * @example
 * getWeekDayIt("2025-03-29");
 * // Output: SAB
 */
function getWeekDayIt(date) {

    // From a given date, extracts the weekday number (0 is Sunday, 6 is Saturday)
    const weekDayNumber = new Date(date).getDay();
    
    // Depending on the number, logs the corresponding day in short format
    switch (weekDayNumber) {
        case 0:
            console.log("DOM");
            break;
        case 1:
            console.log("LUN");
            break;
        case 2:
            console.log("MAR");
            break;
        case 3:
            console.log("MER");
            break;
        case 4:
            console.log("GIO");
            break;
        case 5:
            console.log("VEN");
            break;
        case 6:
            console.log("SAB");
            break;
    }
 
}


/**
 * @function getWeekDayEnIt
 * @description
 * Logs the weekday of a given date in either English or Italian short format,
 * based on the provided language parameter ('en' or 'it').
 *
 * @param {string|Date} date - A valid date string or Date object.
 * @param {string} lang - Language code: "en" for English, "it" for Italian.
 *
 * @example
 * getWeekDayEnIt("2025-03-29", "en");
 * // Output: SA
 *
 * @example
 * getWeekDayEnIt(new Date("2025-03-29"), "it");
 * // Output: SAB
 */
function getWeekDayEnIt(date, lang) {
    
    if (lang === "en") {

        getWeekDayEn(date)

    } else if (lang === "it") {

        getWeekDayIt(date);
 
    }

}


// Test cases
getWeekDayEn("2025-03-29");
getWeekDayIt("2025-03-29");

getWeekDayEnIt(new Date(), "en");
getWeekDayEnIt(new Date(), "it");