# 6 MixUp - Without Array Methods


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
- The function needs to swap the first two characters of both input words.
- The modified words should be concatenated with a space.
- I'll assume that each input string will be at least two characters long.

## 2. Implementation Details
This function:  
- Extracts the first two characters of each string using `charAt()`.
- Constructs new words (strings) by swapping these characters using `replace()`.
- Concatenates the new words with a space separator.
- Returns the final result.
- Preserves original case (e.g. "C" is different from "c") in the swapped letters.


<br>


# Code

```js
function mixUp(text1, text2) {

    // Select the first two characters of both strings
    let firstCharaString1 = text1.charAt(0);
    let secondCharaString1 = text1.charAt(1);

    let firstCharaString2 = text2.charAt(0);
    let secondCharaString2 = text2.charAt(1);
    
    // Swap using replace()
    let firstMixString1 = text1.replace(firstCharaString1, firstCharaString2);
    let secondMixString1 = firstMixString1.replace(secondCharaString1, secondCharaString2);

    let firstMixString2 = text2.replace(firstCharaString2, firstCharaString1);
    let secondMixString2 = firstMixString2.replace(secondCharaString2, secondCharaString1);

    // Concatenate the strings
    let mixedString = secondMixString1.concat(" ", secondMixString2);

    return mixedString;
}
```

# Example Usage

```js
console.log(mixUp("hello", "world"));
// "wollo herld"

console.log(mixUp("kitty", "dog"));
// "dotty kig"

console.log(mixUp("òlly", "àttila"));
// "àtly òltila"
```