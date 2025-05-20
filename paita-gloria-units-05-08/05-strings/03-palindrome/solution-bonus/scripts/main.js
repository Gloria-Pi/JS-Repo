/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains a version of the `isPalindrome()` function written **without using the `reverse()` function** or array methods.
 * Instead, the function compares characters from the beginning and end of the string one by one,
 * moving inward, and returns false as soon as a mismatch is found.
 * 
 * Notes:  
 * - Uppercase and lowercase characters are treated as different.  
 * - Spaces and punctuation are included in the comparison.  
 * - Accented characters (e.g., "à" vs. "a") are treated as distinct.
 */

/**
 * @function isPalindrome
 * @description Checks whether a string is a palindrome without using a reverse function.
 * 
 * @param {string} text - The string to be evaluated.
 * @returns {boolean} `true` if the string is a palindrome, `false` otherwise.
 * 
 * @example
 * console.log(isPalindrome("madam"));
 * // true
 * 
 * @example
 * console.log(isPalindrome("Madam"));
 * // false (case-sensitive)
 * 
 * @example
 * console.log(isPalindrome("do geese see god"));
 * // false (spaces included in comparison)
 */
function isPalindrome(text) {
    let lastIndex = text.length - 1;
    for (let index = 0; index <= lastIndex; index++) {
        if (text.charAt(index) !== text.charAt(lastIndex)) {
            return false;
        }
        lastIndex--;
    }
    return true;
}



// INITIALIZING SOME VARIABLES
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



// TEST
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