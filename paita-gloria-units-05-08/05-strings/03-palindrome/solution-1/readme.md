# 03 Palindrome - Version 1/3 (Array Methods)


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

## 1. Creating the `reverse` Function

To check if a string is a palindrome, the first step is to create a function that reverses a string.

The `reverse(text)` function:
  - Converts the string into an array of characters using `.split()`
  - Reverses the array with `.reverse()`
  - Joins it back into a string using `.join()`
  - Returns the reversed string

```javascript
function reverse(text) {

    // Splits the string into an array of characters, including spaces
    let textArray = text.split("");

    // Reverses the array
    let reversedTextArray = textArray.reverse();

    // Joins the array back into a string
    let reversedString = reversedTextArray.join("");

    return reversedString;
}
```

To know more about this function, please refer back to this [readme](../../02-reverse/solution-1/readme.md).

<br>

## 2. Writing the `isPalindrome` Function

The main function to check if a string is a palindrome compares:
- The **original string**
- The **reversed version** of that string

If the two match (using strict equality `===`), the string is a palindrome.

```javascript
function isPalindrome(text) {

    // Reverse the input string
    let reversedString = reverse(text);

    // Return true if the original and reversed strings match
    return text === reversedString;
}
```

<br>

## 3. Test Cases

Tested the function with a variety of strings, including:
- Valid palindromes
- Non-palindromes
- Edge cases with spacing, special characters, and case sensitivity

```javascript
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


<br>

## 4. Notes and Considerations

- The function requires two key variables:
  - One to store the original input string
  - One to store the reversed version of that string (generated using the `reverse()` function)

- Initially, I considered using a basic `if...else` structure to return `true` or `false` manually. However, this process has been simplified by returning the result of the expression `text === reversedString` directly (since this comparison evaluates to a boolean, it eliminates the need for additional conditional logic).

- Important behavioral considerations:
  - The function treats uppercase and lowercase letters as distinct characters. For example, `"madam"` and `"Madam"` are not considered equal.
  - Spaces, symbols, and punctuation are included in the comparison. This means a sentence such as `"Do geese see God"` is not recognized as a palindrome unless it is perfectly symmetrical, including all characters.

- A potential future enhancement for this function could involve adding normalization and preprocessing steps (e.g., converting to lowercase or removing non-letter characters). This would allow for a more flexible comparison, rather than the current strict, literal comparison between the original and reversed strings.