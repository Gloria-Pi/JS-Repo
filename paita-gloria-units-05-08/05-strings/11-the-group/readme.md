# 11 The group


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

Use the previous function to write another function called `group` that checks whether a string is part of another longer string that is a list of names of a group.  
The function should output the results to the console

**EXAMPLE**

```js
let group = "Mary, James, and John";
let oldGuy = "James";
// Outputs: "James IS part of the group"

let newGuy = "Philip";
// Outputs: "Philip is NOT part of the group"
```

<br>
<br>


# Approach to Solution

## Step 1: Original Attempt Using `indexOf()`

The first version of the `group` function used the `indexOf()` method to check whether a name was found inside the full group string.

```js
function group(listOfNames, nameToFind) {

    let isInGroup;

    // Checks if nameToFind can be found inside listOfNames
    let indexOfPattern = listOfNames.indexOf(nameToFind);

    // If the index is -1 it means that the match hasn't been found
    if (indexOfPattern === -1) {
        isInGroup = false;
    } else {
        isInGroup = true;
    }

    // Logs the answer
    if (isInGroup) {
        console.log(`"${nameToFind}" IS part of the group "${listOfNames}"`);
    } else {
        console.log(`"${nameToFind}" is NOT part of the group "${listOfNames}"`);
    }
}
```

<br>

### Why this version was not enough

The function above works in a very general way: it simply checks if the text is present somewhere inside the larger string.  
However, this leads to incorrect results in some cases.  
For example:

```js
group("Mary, Philip, and John", "lip");
// "lip" IS part of the group "Mary, Philip, and John"
```

This happens because `"lip"` is part of the name `"Philip"`, but not a valid name by itself.  
Therefore, this approach is **not reliable for name matching**.

<br>

## Step 2: Improved Solution Using Name Extraction

The function was rewritten to solve this issue by identifying each name individually, trimming extra spaces, and checking for an **exact** match (case-insensitive).  
To do this, `"and"` is first replaced with a comma, and the string is split into an array of names.

```js
function group(listOfNames, nameToFind) {

    // Replaces " and " with a comma and trims the listOfNames to remove leading/trailing spaces
    listOfNamesWithoutAnd = listOfNames.trim().replace(/\s*and\s*/g, ",");

    // Splits the listOfNamesWithoutAnd into an array of names by commas
    let names = listOfNamesWithoutAnd.split(",");

    // Checks if nameToFind exactly matches any name in the array
    let isInGroup = false;

    for (let i = 0; i < names.length; i++) {
        // Trims spaces and checks for exact match (case-insensitive)
        if (names[i].trim().toLowerCase() === nameToFind.toLowerCase()) {
            isInGroup = true;
            break;
        }
    }

    if (isInGroup) {
        console.log(`"${nameToFind}" IS part of the group "${listOfNames}"`);
    } else {
        console.log(`"${nameToFind}" is NOT part of the group "${listOfNames}"`);
    }
}
```

This approach solves the earlier issue by preventing partial matches like `"lip"` in `"Philip"`.

<br>

# Test Cases

Several test cases were written to validate the new version of the function.

```js
let groupA = "Alice, Bob, and Charlie"; 
let groupA1 = "Emma, Liam, and Noah";
let groupA2 = "Sophia, Oliver, and Ava";

let nameToCheck0 = "Roger"; // Should not match anywhere
let nameToCheck = "Alice";
let nameToCheck1 = "Liam";
let nameToCheck2 = "Ava";
let nameToCheck3 = "ava";   // Lowercase test
let nameToCheck4 = "liver"; // Should fail (partial match)

group(groupA, nameToCheck);
// "Alice" IS part of the group "Alice, Bob, and Charlie"

group(groupA1, nameToCheck1);
// "Liam" IS part of the group "Emma, Liam, and Noah"

group(groupA2, nameToCheck2);
// "Ava" IS part of the group "Sophia, Oliver, and Ava"

group(groupA, nameToCheck0);
// "Roger" is NOT part of the group "Alice, Bob, and Charlie"

group(groupA1, nameToCheck0);
// "Roger" is NOT part of the group "Emma, Liam, and Noah"

group(groupA2, nameToCheck0);
// "Roger" is NOT part of the group "Sophia, Oliver, and Ava"

group(groupA2, nameToCheck3);
// "ava" IS part of the group "Sophia, Oliver, and Ava"

group(groupA2, nameToCheck4);
// "liver" is NOT part of the group "Sophia, Oliver, and Ava"
```

<br>

# Summary

- The original version using `indexOf()` failed to distinguish between full names and substrings.  
- A new version was implemented to extract and compare names directly.  
- The improved version solves edge cases and supports case-insensitive comparisons.