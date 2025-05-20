# 02 Reverse - Version 2/2 - String Methods


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

# Solution 2/2 - Using String Methods

This version is built using the same logic as the `printReverse()` function from the previous assignment ([solution-3, 01-print-reverse](../../01-print-reverse/solution-3/readme.md)), but with one key difference: it **returns** the reversed string instead of printing it to the console.

## Code Logic

- A new empty string `reversedText` is created.
- A `for` loop iterates from the last character of the input string to the first.
- Each character is appended to `reversedText` using the `+=` operator.
- Finally, the reversed string is returned.

---

## Code

```js
function reverse(text) {

    // Creates an empty string to store the reversed text
    let reversedText = "";
    
    // Loops through the string backwards and uses charAt() to get each character
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text.charAt(i);
    }
    
    // Returns the reversed string
    return reversedText;
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