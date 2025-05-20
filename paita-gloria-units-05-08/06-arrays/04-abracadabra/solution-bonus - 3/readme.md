# 04 Abracadabra - Solution 6/6

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>

# Assignment

Code 3 different solutions to change the 4th letter in the following string "Abracadabra" into an "X".

- Each solution should be in a separate folder.
  - Name them solution-1, solution-2, etc.
- Also include a doc file in which you explain what 3 ways you used

**Bonus**  
There are many ways to replace a character in a string.
Code other solutions than the above 3.

<p>&nbsp;</p>

# Solution 6: Splice and Join Method

## Method Overview

Since JavaScript strings are **immutable**, you can't directly change a character at a specific index. To work around this, the string is manipulated by turning it into an array, using the `.splice()` method to replace the character, and then joining the array back into a string using `.join("")`.

### Steps

1. **Convert the string to an array**: Use `.split("")` to turn `"Abracadabra"` into an array of letters.
2. **Replace the character at index 3**: Use `.splice(3, 1, "X")` to replace the 4th letter with `"X"`.
3. **Join the array back into a string**: Use `.join("")` to combine the array elements back into a single string.

### Code

```javascript
// Initial string
let magicWordString = "Abracadabra";

// Step 1: Convert the string to an array of letters
let magicWordArray = magicWordString.split("");

// Step 2: Replace the character at index 3 with "X"
let discardedLetter = magicWordArray.splice(3, 1, "X");

// Step 3: Join the array back into a string
let newMagicWordString = magicWordArray.join("");

// Output the result
console.log(newMagicWordString); // "AbrXcadabra"
```

### Output

```
AbrXcadabra
```