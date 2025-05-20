# 01 Print Reverse - Version 3/3 (String Methods + For Loop)


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

# Solution 3/3 - Using String Methods

In this implementation, the function uses a `for` loop to iterate **backwards** through the string.  
Instead of converting the string into an array (like in other versions), this function works directly with strings and uses **`.charAt()`** to extract each character from the end to the beginning.

It then appends each character to an initially empty string using the `+=` operator.

### Main Techniques Used:

- `charAt(index)` – retrieves a single character at the given index
- string concatenation `+=` – adds each character to the result string

## Code Logic

1. The function starts by creating an empty string, `reversedText`, to store the reversed string.
2. It then loops through the original string in reverse order (starting from the last character).
3. Each character is appended to `reversedText` using the `+=` operator.
4. Finally, the function logs the reversed string to the console.


<br>

---

## Code

```javascript
function printReverse(text) {

    // Creates an empty string to store the reversed text
    let reversedText = "";
    
    // Loops through the string backwards
    for (let i = text.length - 1; i >= 0; i--) {

        // Uses charAt() to get each character
        reversedText += text.charAt(i);
    }

    // Prints the reversed string
    console.log(reversedText);
}
```
<br>


## Examples

```javascript
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";

printReverse(message);
// Output: "dlroW olleH"

printReverse(message1);
// Output: "notlitS-ominoreG"

printReverse(message2);
// Output: ".boS 3< evah ew gniht suoicerp tsom eht si emiT"
```

<br>

---

## Notes

- This version uses `.charAt()` instead of `text[i]` (bracket notation) for accessing characters.
- Both approaches are valid in modern JavaScript. `text[i]` is commonly used (especially on arrays), but `text.charAt(i)` is preferable when working with strings, older environments or for handling edge cases.