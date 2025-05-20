/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines the function `verbing`, which modifies English verbs according to specific 
 * transformation rules when converting them into their "-ing" form.
 */


/**
 * **Specifications**:
 * 
 * - If the verb has fewer than 3 letters, it remains unchanged.
 * - If the verb already ends in "ing", it appends "ly" to the end.
 * - If the verb ends in "e", it removes the final "e" before adding "ing".
 * - If the verb ends in consonant + vowel + consonant (except "w", "x", "y"), it doubles the last consonant before adding "ing".
 * - Otherwise, it simply adds "ing" to the verb.
 * 
 * **Limitations:**
 * - This function does not handle all exceptions in English spelling rules.
 * - Some verbs ending in consonant + vowel + consonant (e.g., "enter", "open") may not follow the expected transformation.
 * - This function is **case-insensitive**.
 * 
 * @function verbing
 * @description Transforms a verb based on specific English grammar rules.
 * This function does not handle all exceptions in English spelling rules.
 * 
 * @param {string} verb - The input verb (assumed to be a valid English verb).
 * @returns {string} The transformed verb following the specified rules.
 *
 * @example
 * console.log(verbing("fly"));
 * // "flying"
 *
 * console.log(verbing("swimming"));
 * // "swimmingly"
 *
 * console.log(verbing("be"));
 * // "be"
 */
function verbing(verb) {
    
    let resultingVerb;

    // OUTER IF
    // Checks if the verb length is less than three letters
    if (verb.length < 3) {
        return verb;

    // Checks if the verb already ends in "ing" (regex + test())
    } else if (/ing$/i.test(verb)) {
        return resultingVerb = verb.concat("ly");

    } else {

        // INNER IF (to handle more complex verb transformations)
        // If the verb ends in consonant + vowel + consonant (except w x y) --> double final consonant + ing
        if (/[bcdfghjklmnpqrstvwxyz][aiueo][bcdfghjklmnpqrstvz]$/i.test(verb)) {

            // Store the final letter of the verb in a new variable
            let finalLetter = verb.charAt(verb.length-1);

            // Adds the same letter to the end of the verb
            let doubledLastLetterVerb = verb.concat(finalLetter);

            // Concatenates the "ing" and returns 
            return resultingVerb = doubledLastLetterVerb.concat("ing");

        
        // If the verb ends in "e", drops the "e" and adds "ing"
        } else if (/e$/i.test(verb)) {
            
            // Stores the verb minus the last letter into a new variable
            let removedLastLetterVerb = verb.slice(0, -1);

            // Concatenates the "ing" and returns 
            return resultingVerb = removedLastLetterVerb.concat("ing");

            
        // Adds -ing
        } else {
            return resultingVerb = verb.concat("ing");
        }
    }
}


// Initializing the variables
let word = "fly";
let word0 = "write";
let word1 = "swimming";
let word2 = "be";
let word3 = "run";
let word4 = "skydiving";


// Test Cases
console.log(verbing(word));
// flying

console.log(verbing(word0));
// writing

console.log(verbing(word1));
// swimmingly

console.log(verbing(word2));
// be

console.log(verbing(word3));
// running

console.log(verbing(word4));
// skydivingly