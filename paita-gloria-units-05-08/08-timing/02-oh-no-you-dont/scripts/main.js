/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script schedules the execution of a function that randomly selects
 * a Pokemon from the Johto region after 10 seconds. However, the scheduled
 * function is canceled after 5 seconds, displaying a cancellation message.
 */



/**
 * An array containing 59 Pokemon names from the Johto region.
 * @constant {string[]}
 */
const johtoPokemon = [
    "Chikorita", "Bayleef", "Meganium",
    "Cyndaquil", "Quilava", "Typhlosion",
    "Totodile", "Croconaw", "Feraligatr",
    "Sentret", "Furret",
    "Hoothoot", "Noctowl",
    "Ledyba", "Ledian",
    "Spinarak", "Ariados",
    "Chinchou", "Lanturn",
    "Pichu",
    "Cleffa",
    "Igglybuff",
    "Togepi", "Togetic", "Togekiss",
    "Natu", "Xatu",
    "Mareep", "Flaaffy", "Ampharos",
    "Azumarill", "Azumarill (Mega)", "Marill",
    "Sunkern", "Sunflora",
    "Politoed", "Politoed (Mega)",
    "Hoppip", "Skiploom", "Jumpluff",
    "Aipom",
    "Wooper", "Quagsire",
    "Murkrow",
    "Slowking", "Slowking (Galarian)",
    "Donphan",
    "Corsola", "Corsola (Galarian)",
    "Remoraid", "Octillery",
    "Delibird",
    "Swinub", "Piloswine",
    "Slugma", "Magcargo",
    "Steelix",
    "Kingdra",
    "Lugia"
];



/**
 * @function useful
 * @description Selects and logs a random Pokemon from a given list.
 * 
 * @param {string[]} regionalPokemon - An array of Pokemon names from a specific region of the Pokemon world.
 * @returns {void} Logs a randomly selected Pokemon to the console.
 * 
 * @example
 * useful(johtoPokemon);
 * 
 * // Logs a random Pokemon from Johto.
 */
function useful(regionalPokemon) {

    let randomIndex = Math.floor(Math.random() * regionalPokemon.length);

    console.log(regionalPokemon[randomIndex]);

}



/**
 * @function stopUseful
 * @description Cancels the scheduled execution of the `useful` function and logs a cancellation message.
 * @returns {void} Clears the timeout and logs "Function Cancelled".
 * 
 * @example
 * stopUseful();
 * // Logs: "Function Cancelled".
 */
function stopUseful() {

    clearTimeout(timerIdUseful);
    console.log("Function Cancelled");
    
}



/**
 * Stores the timeout ID for scheduling the `useful` function.
 * @type {number}
 */
let timerIdUseful = setTimeout(useful, 10000, johtoPokemon);



/**
 * Stores the timeout ID for scheduling the cancellation of `useful`.
 * @type {number}
 */
let timerIdStopUseful = setTimeout(stopUseful, 5000);