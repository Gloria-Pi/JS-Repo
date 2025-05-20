# 04 Abracadabra - Solution 3/6


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


# Approach to Solution

## Solution 3: Substring Replace Method

### Method Overview

This method uses the `.replace()` function on a known **substring** that includes the character to be changed.

- We directly replace the substring `"raca"` with `"rXca"`.
- The target character is the **4th letter** of the original string (`"a"` at index 3), which is inside the substring being replaced.
- This solution assumes the full substring we want to replace is **predictable and unique** in the string.

<p>&nbsp;</p>

### Code

```js
// Original string
let magicWord = "Abracadabra";

// Replace the known substring "raca" with "rXca"
let newMagicWord = magicWord.replace("raca", "rXca");

// Output the result
console.log(newMagicWord);  // "AbrXcadabra"
```

<p>&nbsp;</p>


### Output

```text
AbrXcadabra
```