# 02 Reverse - Version 1/2 - Array Methods


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write a JavaScript function called `reverse` which has one parameter, a string, and which returns that string in reverse.

For example, the call reverse("foobar") should return the string "raboof"

<br>
<br>

# Approach to Solution

# Solution 1/2 - Using Array Methods

This version is built using the same logic as the `printReverse()` function from the previous assignment ([solution-1, 01-print-reverse](../../01-print-reverse/solution-1/readme.md)), but with one key difference: it **returns** the reversed string instead of printing it to the console.

### Main Techniques Used:

- `split()` – converts the string into an array of characters  
- `reverse()` – reverses the elements of the array  
- `join()` – combines the reversed characters back into a string

<br>

---

## Code

```js
function reverse(text) {

    // Splits the string into an array of characters
    let textArray = text.split("");

    // Reverses the array using the built-in method
    let reversedTextArray = textArray.reverse();

    // Rejoins the reversed characters into a string
    let reversedString = reversedTextArray.join("");

    // Returns the reversed string
    return reversedString;
}
```

---

## Test Cases

```js
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";

console.log(reverse(message));  
// Output: "dlroW olleH"

console.log(reverse(message1));  
// Output: "notlitS-ominoreG"

console.log(reverse(message2));  
// Output: ".boS 3< evah ew gniht suoicerp tsom eht si emiT"
```