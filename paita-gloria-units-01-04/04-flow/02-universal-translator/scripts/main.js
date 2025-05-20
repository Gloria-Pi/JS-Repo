/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains the implementation of the helloWorld() function.
 * This function takes a language code as an argument and returns the message "Hello, World!" translated into that language.
 */

/**
 * @function helloWorld
 * @description This function takes a language code (e.g. "it") as a parameter and returns the message "Hello World!" translated into that language.
 * 
 * English is the default value. If the language code is not recognized or missing, the function defaults to English.
 * 
 * @param {string} lang - The chosen language code.  
 * @returns {string} The translated "Hello World!" message that corresponds to the chosen language.
 * 
 * @example
 * console.log(helloWorld("it"));
 * 
 * // Logs: "Ciao, Mondo!"
 * @example
 * console.log(helloWorld("ru"));
 * 
 * // Logs: "Hello, World!"
 * @example
 * console.log(helloWorld());
 * 
 * // Logs: "Hello World!"
 */


function helloWorld(lang) {

    let message;

    switch (lang) {
        case "it":
            message = "Ciao, Mondo!";
            break;
        case "de":
            message = "Hallo, Welt!";
            break;
        case "fr":
            message = "Salut, le Monde!";
            break;
        case "jp":
            message = "Konnichiwa, Sekai!";
            break;
        default:
            message = "Hello, World!";
    }

    return message;
}


//test cases
console.log(helloWorld("it"));            // "Ciao, Mondo!"
console.log(helloWorld("de"));            // "Hallo, Welt!"
console.log(helloWorld("fr"));            // "Salut, le Monde!"
console.log(helloWorld("jp"));            // "Konnichiwa, Sekai!"
console.log(helloWorld());                // "Hello, World!"


//calling the function with a language code that hasn't been defined in the function
console.log(helloWorld("ru"));            // "Hello, World!"