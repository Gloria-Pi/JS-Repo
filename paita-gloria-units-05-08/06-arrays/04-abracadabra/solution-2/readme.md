# 04 Abracadabra - Solution 2/6


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

## Solution 2: RegEx Replace Method

### Method Overview

This solution uses the `.replace()` method along with a **regular expression** to identify and replace a specific part of the string. Since JavaScript strings are **immutable**, we can't modify individual characters directly. Instead, we replace a known pattern of characters.

- The regex `/rac/` matches the sequence of characters starting from the 3rd to the 5th position in `"Abracadabra"`.
- By replacing `"rac"` with `"rXc"`, we effectively substitute the 4th character (index 3) with `"X"`.

<p>&nbsp;</p>

### Code

```js
// Original string
let magicWord = "Abracadabra";

// Replace the sequence "rac" with "rXc"
let newMagicWord = magicWord.replace(/rac/, "rXc");

// Output the result
console.log(newMagicWord);  // "AbrXcadabra"
```

<p>&nbsp;</p>

---

### Output

```text
AbrXcadabra
```

<p>&nbsp;</p>

---

## Notes

- This method works **only if** the string contains the predictable sequence `"rac"` at the right position.
- It’s a useful shortcut when the context is known and controlled.
