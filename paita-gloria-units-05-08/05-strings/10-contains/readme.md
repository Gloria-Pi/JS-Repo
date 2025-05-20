# 10 Contains


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Create a function called `aContainsb`. It should:
- take in two strings
- return true if the first string contains the second
- otherwise it should return false

**NOTE**  
For example
- aContainsB ("Another hello world", "hell");


<br>
<br>

# Approach to Solution

## 1. Creating the Function

I implemented the `aContainsB` function using the `.indexOf()` method, which:

- Returns the index of the first occurrence of a substring
- Returns `-1` if the substring is **not found**
- Is **case sensitive** by default

### Why `indexOf()`?
- Simple and effective for checking if one string is contained in another
- Perfectly fits the task since we only need a **true/false** answer
- Doesn't require regular expressions (unlike `.search()` or `.match()`)

<br>

## 2. Function Logic

The function:
- Checks if `textB` exists inside `textA` using `indexOf()`
- If the index is `-1`, returns `false`
- If the index is `0` or higher, returns `true`

### Code:
```js
function aContainsB(textA, textB) {

    // Checks if textB can be found inside textA
    let indexOfPattern = textA.indexOf(textB);

    // If the index is -1, the match hasn't been found
    if (indexOfPattern === -1) {
        return false;
    } else {
        return true;        // if the index is ≥ 0, a match was found
    }
}

```

<br>

## 3. Testing the Function

I tested the function with various scenarios:

### ✅ When the substring is found:
```js
aContainsB("Another hello world", "other"); 
// → true

aContainsB("The elephant danced in the room", "ant"); 
// → true

aContainsB("The singer sings a song in the park", "sin"); 
// → true
```

### ❌ When the substring is **not** found:
```js
aContainsB("Another hello world", "run"); 
// → false

aContainsB("The elephant danced in the room", "run"); 
// → false

aContainsB("The singer sings a song in the park", "run"); 
// → false
```

<br>

# Notes & Observations

- The function is **case sensitive**. This means:
  ```js
  aContainsB("Hello", "hello") 
  // → false (uppercase vs lowercase)
  ```

- Alternative methods like `.search()` or `.test()` (with regex) were considered, but `.indexOf()` was simpler and met all requirements.

- The function can be made **case-insensitive** by converting both strings to lowercase before comparison.

<br>
<br>

# BONUS: Case-Insensitive Version

To handle case-insensitive matching, I added a small change --> I converted both input strings to lowercase.

### Bonus Version Code:
```js
function aContainsB(textA, textB) {

    // Convert both textA and textB to lowercase
    let lowerTextA = textA.toLowerCase();
    let lowerTextB = textB.toLowerCase();

    // Use indexOf to find the match
    let indexOfPattern = lowerTextA.indexOf(lowerTextB);

    // If the index is -1, it means no match was found
    if (indexOfPattern === -1) {
        return false;
    }

    // If the index is greater than or equal to 0, a match was found
    return true;
}
```

### Example:
```js
aContainsB("Another HELLO world", "hello"); 
// → true (case-insensitive check)
```
