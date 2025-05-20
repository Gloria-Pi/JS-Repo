# 01 Print Reverse - Version 1/3 (Array Methods)


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

# Solution 1/3 - Using Array Methods
The function uses the following built-in JavaScript string and array methods:

- `.split()`: Converts the string into an array of characters.
- `.reverse()`: Reverses the order of elements in the array.
- `.join()`: Converts the reversed array back into a string.

<br>

## Code:

```javascript
function printReverse(text) {
    // Splits the string into an array of characters, including spaces
    let textArray = text.split("");

    // The built-in reverse() method reverses the array
    let reversedTextArray = textArray.reverse();

    // Converts the reversed array back into a string using join()
    let reversedString = reversedTextArray.join("");

    // Prints the reversed string
    console.log(reversedString);
}
```


<br>


## Output
```javascript
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";

printReverse(message);          // "dlroW olleH"
printReverse(message1);         // "notlitS-ominoreG"
printReverse(message2);         // ".boS 3< evah ew gniht suoicerp tsom eht si emiT"
```

<br>


## Alternative (Simplified) Version

The `printReverse()` function can also be written in a more concise and readable way using method chaining:

```javascript
function printReverse(text) {
    let reversed = text.split("").reverse().join("");
    console.log(reversed);
}
```

This version achieves the same outcome with less code, making it easier to read and maintain.