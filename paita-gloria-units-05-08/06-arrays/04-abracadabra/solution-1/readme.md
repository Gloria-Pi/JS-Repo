# 04 Abracadabra - Solution 1/6


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

# Solution 1: Array Conversion Method

## Method Overview

Since JavaScript strings are **immutable**, you can't directly change a character at a specific index.  
To work around this, the string is converted to an array of characters using `.split("")`, which allows direct access and modification of elements by index. Once the desired character is changed, the array is converted back to a string using `.join("")`.

<p>&nbsp;</p>

### Code

```js
// Initial string
let magicWordString = "Abracadabra";

// Step 1: Convert to array
let magicWordArray = magicWordString.split("");

// Step 2: Modify the 4th character (index 3)
magicWordArray[3] = "X";

// Step 3: Rejoin array into a string
let newMagicWordString = magicWordArray.join("");

// Output the result
console.log(newMagicWordString);  // "AbrXcadabra"
```

<p>&nbsp;</p>

---

### Output

```text
AbrXcadabra
```