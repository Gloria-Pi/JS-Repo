# 01 Print Reverse - Version 2/3 (Array Methods + For Loop)


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write a JavaScript function called `printReverse` which:
- Has one parameter (a string)
- Prints that string in reverse

For example, the call `printReverse("foobar")` should result in `"raboof"` being displayed.

<br>
<br>

# Approach to Solution

# Solution 2/3 - Using Array Methods

Instead of using the built-in `.reverse()` method, this version of the function was built to practice using `for` loops and the `.unshift()` method.

## Logic Overview

- The input string is split into an array of characters using `.split("")`
- A `for` loop iterates through the array
- Each character is prepended to a new array using `.unshift()`
- The new reversed array is converted back to a string using `.join("")`
- The final reversed string is logged to the console


<br>


## Code

```js
function printReverse(text) {

    // Converts the input string into an array of characters (including spaces)
    let textArray = text.split("");

    // Initializes an empty array to store the reversed characters
    let reversedTextArray = [];

    // Stores the length of the original array
    let arrayLength = textArray.length;

    let currentCharacter;

    // Loops through each character of the original array
    for (let index = 0; index < arrayLength; index++) {

        // Retrieves the current character in the original order and stores it in a variable
        currentCharacter = textArray[index];

        // Adds the character to the beginning of the new array (reversing the order)
        reversedTextArray.unshift(currentCharacter);
    }

    // Joins the reversed array back into a single string
    let reversedText = reversedTextArray.join("");

    // Outputs the reversed string to the console
    console.log(reversedText);
}
```

<br>

---

## Test Cases

```js
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";

printReverse(message);
//"dlroW olleH"

printReverse(message1);
//"notlitS-ominoreG"

printReverse(message2);
//".boS 3< evah ew gniht suoicerp tsom eht si emiT"
```
<br>

---

## Notes

- This version avoids `.reverse()` on purpose, to gain hands-on experience with:
  - `for` loops
  - String-to-array conversion
  - Array mutation using `.unshift()`
- It also reinforces understanding that **strings in JavaScript are immutable**, so reversal requires creating a new structure.
- `.unshift()` adds an item at the **start** of an array, making it useful for reversing logic.
