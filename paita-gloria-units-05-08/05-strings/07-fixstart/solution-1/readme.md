# 07 FixStart - With Array Methods


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a function called `fixStart`
- It should take a single parameter, a string, and return a version where all occurrences of its first character have been replaced with '*', except for the first character itself
- You can assume that the string is at least one character long

For example `fixStart('babble'): 'ba**le'`


<br>
<br>

# Approach to Solution

## 1. Understanding the Problem
- The function should take a single string and replace all occurrences of its first character with '*', except for the first instance.
- The solution should use **array methods**.

## 2. Step-by-step structure

I wrote `fixStart()` so that it could:
- Extract the first character of the string.
- Convert the string into an array using `split("")`.
- Remove the first character temporarily to avoid modifying it.
- Use `replaceAll()` to replace all occurrences of the first character.
- Concatenate the first character back to the modified string.
- Return the final result.

---

# Function Implementation

```js
function fixStart(text) {
    // Select the first character
    let firstElement = text.charAt(0);

    // Convert string to array
    let textArray = text.split("");

    // Remove the first element and store the remaining array
    let shiftedArray = textArray.slice(1);

    // Convert the shifted array into a string
    let shiftedString = shiftedArray.join("");

    // Replace all occurrences of the first character in the shifted string
    let replacedString = shiftedString.replaceAll(firstElement, "*");

    // Concatenate the first character back to the modified string
    return firstElement + replacedString;
}
```

---

# Example Usage

```js
console.log(fixStart('babble'));
// "ba**le"

console.log(fixStart('people prefer pizza to pepsi'));
// "peo*le *refer *izza to *e*si"

console.log(fixStart('_Hi_My_Name_Is_'));
// "_Hi*My*Name*Is*"

console.log(fixStart('1_andMany1/Other_1_numb1er3s'));
// "1_andMany*/Other_*_numb*er3s"
```

---

## Notes
- **Case sensitivity:** the function differentiates between uppercase and lowercase occurrences of the first character.
- the **replaceAll** method is not supported in Internet Explorer.
