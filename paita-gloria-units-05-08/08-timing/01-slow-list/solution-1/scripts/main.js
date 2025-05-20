/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script prints one item from an array of 30 Pokemon names every second 
 * until all elements have been printed, using `setInterval()`.
 */

/**
 * An array containing a list of 30 Pokemon names.
 * @constant {string[]}
 */
const pokemonArray = [
    "Pikachu",
    "Charmander",
    "Bulbasaur",
    "Squirtle",
    "Eevee",
    "Jigglypuff",
    "Meowth",
    "Snorlax",
    "Mewtwo",
    "Charizard",
    "Squirtle",
    "Pidgey",
    "Rattata",
    "Zubat",
    "Geodude",
    "Onix",
    "Machop",
    "Poliwag",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Psyduck",
    "Diglett",
    "Ekans",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Dragonite",
    "Mankey",
    "Bellsprout"
];


let pokedexNumber = 0;


/**
 * @function printEachPokemon
 * @description Prints one Pokemon name from `pokemonArray` to the console every second.
 * @returns {void} This function does not return a value. The result is logged to the console.
 *
 * @example
 * // Expected output (one per second):
 * // Pikachu
 * // Charmander
 * // Bulbasaur
 * // ...
 * // Bellsprout
 */
function printEachPokemon() {

    // Logs a single element of the array and moves to the next one
    if (pokedexNumber < pokemonArray.length) {
        console.log(pokemonArray[pokedexNumber]);
        pokedexNumber++;

    } else {

        // Stops the interval once all elements are printed
        clearInterval(intervalId);
    }
}


// Invokes the function every second (1000 ms)
let intervalId = setInterval(printEachPokemon, 1000);