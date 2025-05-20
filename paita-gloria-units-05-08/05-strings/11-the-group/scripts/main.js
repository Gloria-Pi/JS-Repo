/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This script defines a function `group` that checks whether a given name is 
 * part of a longer string representing a list of names. The result is printed to the console.
 */


/**
 * @function group
 * @description Checks if a name is contained within a given list of names.
 * The search is case-insensitive.
 * @param {string} listOfNames - A string containing a list of names.
 * @param {string} nameToFind - The name to search for within the list.
 * @returns {void} This function does not return a value; it prints the result to the console.
 *
 * @example
 * group("Mary, James, and John", "James");
 * // "James" IS part of the group "Mary, James, and John"
 * 
 * group("Mary, James, and John", "Philip");
 * // "Philip" is NOT part of the group "Mary, James, and John"
 */
function group(listOfNames, nameToFind) {

    // Replaces " and " with a comma and trims the listOfNames to remove leading/trailing spaces
    let listOfNamesWithoutAnd = listOfNames.trim().replace(/\s*and\s*/g, ",");  // This replaces "and" with a comma

    // Splits the listOfNamesWithoutAnd into an array of names by commas
    let names = listOfNamesWithoutAnd.split(",");

    // Checks if nameToFind exactly matches any name in the array
    let isInGroup = false;

    for (let i = 0; i < names.length; i++) {
        // Trims spaces and checks for exact match (case-insensitive)
        if (names[i].trim().toLowerCase() === nameToFind.toLowerCase()) {
            isInGroup = true;
            break;  // Exits the loop once a match is found
        }
    }

    if (isInGroup) {
        console.log(`"${nameToFind}" IS part of the group "${listOfNames}"`);
    } else {
        console.log(`"${nameToFind}" is NOT part of the group "${listOfNames}"`);
    }
}


// Initializing some groups
let groupA = "Alice, Bob, and Charlie"; 
let groupA1 = "Emma, Liam, and Noah";
let groupA2 = "Sophia, Oliver, and Ava";


// This string shouldn't appear in any of the other strings
let nameToCheck0 = "Roger";

let nameToCheck = "Alice";
let nameToCheck1 = "Liam";
let nameToCheck2 = "Ava";
let nameToCheck3 = "ava";
let nameToCheck4 = "liver";


// Test Cases
group(groupA, nameToCheck);
// "Alice" IS part of the group "Alice, Bob, and Charlie"

group(groupA1, nameToCheck1);
// "Liam" IS part of the group "Emma, Liam, and Noah"

group(groupA2, nameToCheck2);
// "Ava" IS part of the group "Sophia, Oliver, and Ava"

group(groupA, nameToCheck0);
// "Roger" is NOT part of the group "Alice, Bob, and Charlie"

group(groupA1, nameToCheck0);
// "Roger" is NOT part of the group "Emma, Liam, and Noah"

group(groupA2, nameToCheck0);
// "Roger" is NOT part of the group "Sophia, Oliver, and Ava"

group(groupA2, nameToCheck3);
// "ava" IS part of the group "Sophia, Oliver, and Ava"

group(groupA2, nameToCheck4);
// "liver" is NOT part of the group "Sophia, Oliver, and Ava"