/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the implementation of the `reverse` function,
 * which takes a string and returns its reversed version,
 * and the `isPalindrome` function, which checks whether a given string is a palindrome.
 * 
 * A palindrome is a word or phrase that reads the same backward as forward.
 * 
 * The comparison is case-sensitive and includes all characters, including spaces, symbols, and punctuation.
 */



/**
 * @function reverse
 * @description Reverses the input string by converting it to an array,
 * reversing the array, and joining it back into a string.
 * 
 * @param {string} text - The original string to be reversed.
 * @returns {string} The reversed version of the input string.
 * 
 * @example
 * console.log(reverse("Hello World"));       // "dlroW olleH"
 */
function reverse(text) {
    let textArray = text.split("");
    let reversedTextArray = textArray.reverse();
    let reversedString = reversedTextArray.join("");
    return reversedString;
}



/**
 * @function isPalindrome
 * @description Checks whether a given string is a palindrome by comparing it with its reversed version.
 * The comparison is case-sensitive and includes all characters (e.g., spaces, punctuation).
 * 
 * @param {string} text - The string to check.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 * 
 * @example
 * console.log(isPalindrome("madam"));
 * // true
 * 
 * console.log(isPalindrome("Hello"));
 * // false
 */
function isPalindrome(text) {
    let reversedString = reverse(text);
    return text === reversedString;
}


//INITIALIZING THE VARIABLES
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