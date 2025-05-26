/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script transforms an array of "noises" by capitalizing one letter at a time 
 * and appending a growing number of exclamation marks. The result is an array with 
 * stylized sound effects.
 */

/**
 * The input array containing the original noise strings.
 * @type {string[]}
 */
let noisesArray = ['quack', 'sneeze', 'boom'];

/**
 * An array that will hold the transformed noise strings.
 * @type {string[]}
 */
let transformedNoises = [];

/**
 * For each noise in the original array, this loop:
 * - Iterates over each character index
 * - Capitalizes that specific letter
 * - Adds a number of exclamation marks equal to the index + 1
 * - Stores the resulting string in the transformedNoises array
 */
noisesArray.forEach(noise => {

    for (let letterToCapitalize = 0; letterToCapitalize <= noise.length - 1; letterToCapitalize++) {

        let capitalizedLetter = noise[letterToCapitalize].toUpperCase();

        let capitalizedWord =
            noise.slice(0, letterToCapitalize) +
            capitalizedLetter +
            noise.slice(letterToCapitalize + 1);

        let capitalizedNoise = capitalizedWord + "!".repeat(letterToCapitalize + 1);
        transformedNoises.push(capitalizedNoise);
    }
});

console.log(transformedNoises);