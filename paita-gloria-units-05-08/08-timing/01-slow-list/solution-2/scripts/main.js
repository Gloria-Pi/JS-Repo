/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script prints one item from an array of 30 Pokemon names every second 
 * using `setTimeout()`, ensuring a staggered effect.
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
 * Iterates through `pokemonArray` and schedules each Pokemon 
 * to be printed at an increasing delay using `setTimeout()`.
 * 
 * @example
 * // Expected output (one per second):
 * // Pikachu
 * // Charmander
 * // Bulbasaur
 * // ...
 * // Bellsprout
 */
for (let pokedexNumber in pokemonArray) {

    let timeoutId = setTimeout(() => {
        
        console.log(pokemonArray[pokedexNumber]);
    
    }, 1000 * pokedexNumber);       // Delay increases by one second with each iteration
}