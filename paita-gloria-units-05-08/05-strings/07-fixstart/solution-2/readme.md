# 07 FixStart - Without Array Methods


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


# Approach to Solution

## Implementation Details
This version of `fixStart()` doesn't use array methods.
In this case, the function:
- Uses `charAt(0)` to extract the first character.
- Uses `slice(1)` to remove the first character from the string.
- Applies `replaceAll()` on the remaining string to replace all occurrences of the first character.
- Concatenates the first character back to the modified string and returns it.

<br>

## Function Implementation

```js
function fixStart(text) {
    // Selects and stores the first character of the string
    let firstCharacter = text.charAt(0);
    
    // Extracts the first character out of the string
    let restOfString = text.slice(1);
    
    // Replaces all occurrences of the first character using replaceAll()
    let replacedString = restOfString.replaceAll(firstCharacter, "*");

    // Concatenates the first character back
    return firstCharacter + replacedString;
}
```

---

## Example Usage

```js
console.log(fixStart('I want to eat ice cream in Iceland'));
// "I want to eat ice cream in *celand"

console.log(fixStart('people prefer pizza to pepsi'));
// "peo*le *refer *izza to *e*si"

console.log(fixStart('_Hi_My_Name_Is_'));
// "_Hi*My*Name*Is*"

console.log(fixStart('1_andMany1/Other_1_numb1er3s'));
// "1_andMany*/Other_*_numb*er3s"
```

<br>

## Notes
- The function differentiates between uppercase and lowercase occurrences of the first character.
- the **replaceAll** method is not supported in Internet Explorer.