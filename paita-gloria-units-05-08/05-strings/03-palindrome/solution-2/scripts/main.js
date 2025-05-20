/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description This file contains a version of the `reverse()` and `isPalindrome()` functions
 * that **do not use array methods** like `split()`, `reverse()` or `join()`.
 * Instead, the reversal is achieved manually through character-by-character concatenation.
 * 
 * This version demonstrates how to reverse and analyze strings using only basic string operations.
 * 
 * Notes:  
 * - Uppercase and lowercase characters are treated as different.  
 * - Spaces and punctuation are included in the comparison.  
 * - Accented characters (e.g., "à" vs. "a") are treated as distinct.
 */



/**
 * @function reverse
 * @description
 * Reverses a given string by iterating over it backwards and concatenating characters one by one.
 * 
 * @param {string} text - The input string to reverse.
 * @returns {string} The reversed version of the input string.
 * 
 * @example
 * console.log(reverse("Hello World"));       // "dlroW olleH"
 */
function reverse(text) {
    let reversedString = "";
    for (let index = text.length - 1; index >= 0; index--) {
        reversedString += text.charAt(index);
    }
    return reversedString;
}



/**
 * @function isPalindrome
 * @description Checks if the given string is a palindrome by comparing it to its reversed version.
 * This function is case-sensitive and space-sensitive.
 * 
 * @param {string} text - The string to evaluate.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 * 
 * @example
 * console.log(isPalindrome("madam")); 
 * // true
 * 
 * console.log(isPalindrome("Madam")); 
 * // false (case-sensitive)
 */
function isPalindrome(text) {
    return text === reverse(text);
}



// INITIALIZING THE MESSAGES
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";
let message3 = "madam";
let message4 = "girafarig";
let message5 = "Madam";
let message6 = "Do geese see God";
let message7 = "do geese see god";
let message8 = "dòdàdòd";
let message9 = "dòdàdod";



// TEST CASES
console.log(`"${message}" is a Palindrome? ${isPalindrome(message)}`);
// "Hello World" is a Palindrome? false

console.log(`"${message1}" is a Palindrome? ${isPalindrome(message1)}`);
// "Geronimo-Stilton" is a Palindrome? false

console.log(`"${message2}" is a Palindrome? ${isPalindrome(message2)}`);
// "Time is the most precious thing we have <3 Sob." is a Palindrome? false

console.log(`"${message3}" is a Palindrome? ${isPalindrome(message3)}`);
// "madam" is a Palindrome? true

console.log(`"${message4}" is a Palindrome? ${isPalindrome(message4)}`);
// "girafarig" is a Palindrome? true

console.log(`"${message5}" is a Palindrome? ${isPalindrome(message5)}`);
// "Madam" is a Palindrome? false

console.log(`"${message6}" is a Palindrome? ${isPalindrome(message6)}`);
// "Do geese see God" is a Palindrome? false

console.log(`"${message7}" is a Palindrome? ${isPalindrome(message7)}`);
// "do geese see god" is a Palindrome? false

console.log(`"${message8}" is a Palindrome? ${isPalindrome(message8)}`);
// "dòdàdòd" is a Palindrome? true

console.log(`"${message9}" is a Palindrome? ${isPalindrome(message9)}`);
// "dòdàdod" is a Palindrome? false