# 6 MixUp - With Array Methods


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a function called `mixUp`
- It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each
- You can assume that the strings are at least 2 characters long

For example
`mixUp('mix', 'pod'): 'pox mid'`
`mixUp('dog', 'dinner'): 'dig donner'`

**NOTE**  
If you used Array methods in your solution, try to write the same function without using the array methods (submit separate files for each solution)


<br>
<br>

# Approach to Solution

## 1. Understanding the Problem
- The function should take in two strings and swap their first two characters.
- The modified strings should be concatenated with a space.
- The solution should use **array methods**.

## 2. Implementation Details
This function:  
- Converts the strings into arrays using `split("")`.
- Extracts the first two characters of both arrays.
- Uses `toSpliced()` to swap the first two characters between arrays.
- Converts the modified arrays back to strings using `join("")`.
- Concatenates the strings with a space separator.


<br>

# Function Implementation

```js
function mixUp(text1, text2) {
    // Convert the strings to arrays
    let array1 = text1.split("");
    let array2 = text2.split("");

    // Select the first two characters of both arrays
    let firstCharaArray1 = array1[0];
    let secondCharaArray1 = array1[1];

    let firstCharaArray2 = array2[0];
    let secondCharaArray2 = array2[1];
    
    // Swap using toSpliced
    let splicedArray1 = array1.toSpliced(0, 2, firstCharaArray2, secondCharaArray2);
    let splicedArray2 = array2.toSpliced(0, 2, firstCharaArray1, secondCharaArray1);

    // Convert arrays back to strings
    let splicedString1 = splicedArray1.join("");
    let splicedString2 = splicedArray2.join("");

    // Concatenate the strings
    return splicedString1.concat(" ", splicedString2);
}
```

---

## Example Usage

```js
console.log(mixUp('hello', 'world'));
// "wollo herld"

console.log(mixUp('kitty cat', 'doggie poo'));
// "dotty cat kiggie poo"

console.log(mixUp('òlly', 'àttila'));
// "àtly òltila"
```
