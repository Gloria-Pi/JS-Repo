# 03 Palindrome - Version 2/3 (String Methods + reverse())


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Using your `reverse()` function from the previous exercise write a simple function to check if a string is a palindrome.
- A palindrome is a word that reads the same backwards as forwards. For example, the word "madam" is a palindrome
- Write a JavaScript function called `isPalindrome` which has one parameter, a string, and which returns true if that string is a palindrome, else false
- For example, the call `isPalindrome("madam")` should return true, while `isPalindrome("madame")` should return false

**Bonus**
Try to write the same function without using the `reverse()` function


<br>
<br>

# Approach to Solution

## 1. Reversing the string manually

To solve the problem without using built-in array methods (like `split()`, `reverse()`, or `join()`), I implemented a custom `reverse()` function that:

- Loops through the string from the end to the beginning using a decrementing `for` loop;
- Collects each character using `charAt()` and builds a new reversed string;
- Returns the reversed version of the original string.

To know more about the reverse() function, please refer back to [readme](../../02-reverse/solution-2/readme.md).

<br>

## 2. Palindrome verification

The `isPalindrome()` function works by:

- Calling the custom `reverse()` function;
- Comparing the original string and the reversed string using strict equality (`===`);
- Returning `true` if the strings are identical, otherwise `false`.

This approach ensures that both the value and the type are compared.


---

## Code

```js
// Function to reverse a string without using built-in array functions
function reverse(text) {

    // Variable to store the reversed string
    let reversedString = "";

    // Loop through the string backwards, decreasing the index after each loop
    for (let index = text.length - 1; index >= 0; index--) {

        // Append each character (starting from the end) to the 'reversedString' string using charAt()
        reversedString += text.charAt(index);

    }
    return reversedString;
}

// Function to check if a string is a palindrome
function isPalindrome(text) {

    // Compare the original string with its reversed version
    // If they are identical, return true (it's a palindrome), otherwise false
    return text === reverse(text);
}
```

---

## Test Cases

```js
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
```
---

# Notes

- **Uppercase letters are considered distinct** from lowercase ones.  
  `"Madam"` is not considered a palindrome, while `"madam"` is.

- **Whitespace and punctuation are not ignored.**  
  For instance, `"Do geese see God"` is not recognized as a palindrome due to the spaces and casing.

- **Accented characters** (e.g., `"ò"`, `"à"`) are treated as different characters from their non-accented versions.

<br>

## Optional improvement

To allow for case-insensitive palindrome checks, the function can be modified as follows:

```js
function isPalindrome(text) {
    return text.toLowerCase() === reverse(text).toLowerCase();
}
```

This ensures the comparison does not fail due to uppercase or lowercase differences.
