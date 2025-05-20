# 04 Abracadabra - Solution 4/6


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

# Solution 4: Slice and Concat Method

## Method Overview

Since JavaScript strings are **immutable**, we can't directly change a character at a specific index. To work around this, the string is manipulated using the `.slice()` method to extract parts of the string before and after the character to be replaced. These parts are then concatenated with the new character `"X"` to form the desired result.

### Steps

1. We use `.slice(0, 3)` to extract the substring `"Abr"` before the character meant to be changed.
2. We use `.slice(4)` to extract the substring `"cadabra"` after the character meant to be changed.
3. We **concatenate** the two substrings with `"X"` in between using `.concat()`.

### Code

```javascript
// Initial string
let magicWord = "Abracadabra";

// Step 1: Extract the part before the 4th letter (index 3)
let newMagicWordStart = magicWord.slice(0, 3);

// Step 2: Extract the part after the 4th letter
let newMagicWordEnd = magicWord.slice(4);

// Step 3: Concatenate the two parts with "X" in the middle
let completeNewMagicWord = newMagicWordStart.concat("X", newMagicWordEnd);

// Output the result
console.log(completeNewMagicWord); // "AbrXcadabra"
```

### Output

```
AbrXcadabra
```