# 03 Palindrome - Version 3/3 BONUS


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Using your `reverse()` function from the previous exercise write a simple function to check if a string is a palindrome.
- A palindrome is a word that reads the same backwards as forwards. For example, the word "madam" is a palindrome
- Write a JavaScript function called `isPalindrome` which has one parameter, a string, and which returns true if that string is a palindrome, else false
- For example, the call `isPalindrome("madam")` should return true, while `isPalindrome("madame")` should return false

**Bonus**
Try to write the same function without using the `reverse()` function

<br>
<br>

# Approach to Solution

## 1. Creating the Function

In this version, the function does **not** use the `reverse()` helper function.  
Instead, it compares characters starting from both ends of the string — moving inward — to determine if the input is a palindrome.

### Logic Behind the Approach

- A **palindrome** is a string that reads the same forwards and backwards.
- Therefore, for a string to qualify:
  - The first character must match the last,
  - The second must match the second-to-last,
  - And so on, until the middle of the string is reached.

To implement this:
- I initialized two pointers: one at the start (`index = 0`), and one at the end (`lastIndex = text.length - 1`).
- At each step:
  - the function compares the character at `index` with the one at `lastIndex`.
  - If the characters don't match, the function returns `false`.
  - If they do, the loop continues by moving both pointers closer to the center.
- If no mismatches are found, the function returns `true`.

<br>

## 2. Considerations

This function performs a **strict character-by-character comparison**, so:

- **Capital letters are treated as different** from lowercase ones. For example, `"madam"` is a palindrome, but `"Madam"` is not.
- **Spaces are also considered characters**, so they must match in position.
- **Accented letters** (e.g., `ò`, `à`) are **not** considered equal to their unaccented versions (`o`, `a`).

<br>

## 3. Studying Index Behavior

To better understand how string indices work in this context:

| Character |  c |  i |  a |  o |
|-----------|----|----|----|----|
| Index     |  0 |  1 |  2 |  3 |
| Reverse   | -4 | -3 | -2 | -1 |

- `text.length` gives the number of characters.
- The first character is at index `0`, the last is at `text.length - 1`.

<br>

---

# Code

```javascript
function isPalindrome(text) {

    // Set lastIndex to the last character of the string
    let lastIndex = text.length - 1;

    // Loop from start to middle of the string
    for (index = 0; index <= lastIndex; index++) {

        // Compare characters from both ends
        if (text.charAt(index) !== text.charAt(lastIndex)) {
            return false;
        }

        // Move the end pointer towards the center
        lastIndex--;
    }

    // If all characters matched, it's a palindrome
    return true;
}
```

<br>

---

# Test Cases

```js
let message = "Hello World";
let message1 = "Geronimo-Stilton";
let message2 = "Time is the most precious thing we have <3 Sob.";
let message3 = "madam";
let message4 = "girafarig";
let message5 = "Madam";
let message6 = "Do geese see God";
let message7 = "do geese see god";
let message8 = "dòdàdòd";
let message9 = "dòdàdod";



console.log(`"${message}" is a Palindrome? ${isPalindrome(message)}`);
// "Hello World" is a Palindrome? false

console.log(`"${message1}" is a Palindrome? ${isPalindrome(message1)}`);
// "Geronimo-Stilton" is a Palindrome? false

console.log(`"${message2}" is a Palindrome? ${isPalindrome(message2)}`);
// "Time is the most precious thing we have <3 Sob." is a Palindrome? false

console.log(`"${message3}" is a Palindrome? ${isPalindrome(message3)}`);
// "madam" is a Palindrome? true

console.log(`"${message4}" is a Palindrome? ${isPalindrome(message4)}`);
// "girafarig" is a Palindrome? true

console.log(`"${message5}" is a Palindrome? ${isPalindrome(message5)}`);
// "Madam" is a Palindrome? false

console.log(`"${message6}" is a Palindrome? ${isPalindrome(message6)}`);
// "Do geese see God" is a Palindrome? false

console.log(`"${message7}" is a Palindrome? ${isPalindrome(message7)}`);
// "do geese see god" is a Palindrome? false

console.log(`"${message8}" is a Palindrome? ${isPalindrome(message8)}`);
// "dòdàdòd" is a Palindrome? true

console.log(`"${message9}" is a Palindrome? ${isPalindrome(message9)}`);
// "dòdàdod" is a Palindrome? false
```