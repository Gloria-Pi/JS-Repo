# 04 Capital


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write a JavaScript function called capital which has one parameter, a string, and which returns that string with the first letter capitalized
- For example, the call `capital("hello world")` should return the string "Hello world"

**Bonus**  
Modify the function so that it capitalizes each word. `capital2("my name is john")` should return the string "My Name Is John"


<br>
<br>


# Approach to Solution

## Brainstorming
To solve this problem, I needed a way to:
1. **Capitalize the first letter** of a given string.
2. **(Bonus)** Capitalize the first letter of each word.

## Capitalizing Only the First Letter
- The `.toUpperCase()` method converts an entire string to uppercase, but I only need to modify the first letter.
- Since strings are immutable in JavaScript, I needed to construct a new string with the modified character.
- I decided to use **arrays** to manipulate the string, because arrays allow direct element access and modifications.
- Approach:
  1. Convert the string into an array using `.split("")`.
  2. Extract the first character (`textArray[0]`).
  3. Convert it to uppercase.
  4. Replace the first element in the array with its capitalized version.
  5. Convert the array back into a string using `.join("")`.

### Why `toSpliced()`?
- `toSpliced()` (introduced in ES2023) allows replacing elements in an array **without modifying the original array**.
- Unlike `splice()`, which mutates the original array, `toSpliced()` creates a new one, making it a safer choice.


<br>
<br>

# Code Implementation

```javascript

function capital(text) {
    // Converts the string into an array
    let textArray = text.split("");

    // Extracts the first character of the array
    let firstCharacter = textArray[0];

    // Turns the selected character into its uppercase version
    let capitalizedFirstCharacter = firstCharacter.toUpperCase();

    // toSpliced() creates a new array where the first character is replaced by its uppercase version
    let capitalizedArray = textArray.toSpliced(0, 1, capitalizedFirstCharacter);

    // Converts the array back to a string
    let capitalizedString = capitalizedArray.join("");

    // Returns the capitalized string
    return capitalizedString;
}

```

## Output

```javascript
console.log(capital("hello world"));
// "Hello world"

console.log(capital("geronimo-stilton"));
// "Geronimo-stilton"

console.log(capital("time is the most precious thing we have <3 sob."));
// "Time is the most precious thing we have <3 sob."
```

