# 08 Verbing


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

Create a function called `verbing`:
- It should take a single parameter, a string.
- If its length is at least 3, it should add 'ing' (double the letter) to its end, unless it already ends in 'ing', in which case it should add 'ly' instead
- If the string length is less than 3, it should leave it unchanged

For example
- verbing("swim"): "swimming"
- verbing("swimming"): "swimmingly"
- verbing("go"): "go"


<br>
<br>

# Approach to Solution

## 1. Understanding the Problem
The objective of this function is to transform a verb into its "-ing" form, or trasform it in an adverb (e.g. "swimming" -> "swimmingly") following standard English grammar rules.

In detail:
- The function should **only modify words that are at least 3 characters long**.
- If the verb already ends in "ing", it appends "ly" to the end.

- The main complexity comes from **following correct English grammar rules** for verb conjugation.
- If the verb ends in "e", it removes the final "e" before adding "ing".
- If the verb ends in consonant + vowel + consonant (except "w", "x", "y"), it doubles the last consonant before adding "ing".
- Otherwise, it simply adds "ing" to the verb.
- Some special rules apply (e.g., dropping "e", doubling final consonants in certain cases).

<br>

## 2. Choosing the Right Implementation Strategy
I considered different ways to approach this problem:
- Using **`if-else` statements**: This allows for **clear** rule-checking and sequential transformations.
- Using **regular expressions (`regex`)**: Regex is **ideal** for pattern matching, especially when checking:
  - If the word **already ends in "ing"** (`/ing$/i`).
  - If the word **ends in "e"** (`/e$/i`).
  - If the word **follows the consonant-vowel-consonant (CVC) pattern** (`/[bcdfghjklmnpqrstvwxyz][aiueo][bcdfghjklmnpqrstvz]$/i`).

I initially considered using a `switch` statement but realized that it doesn't support regex directly, making `if-else` a better choice.

<br>

## 3. Limitations
- The function is **case-insensitive** (`/pattern/i` in regex ensures this).
- **Verbs with different endings**:
  - Some verbs ending in CVC **do not always double the final consonant** (e.g., `open` → `opening`, but `run` → `running`).
  - This function follows the **most common rules**, but there are some exceptions in English that it does not cover.


<br> 

## Function

```js

function verbing(verb) {
    
    let resultingVerb;

    // OUTER IF
    // Checks if the verb length is less than three letters
    if (verb.length < 3) {
        return verb;

    // Checks if the verb already ends in "ing" (regex + test())
    } else if (/ing$/i.test(verb)) {
        return resultingVerb = verb.concat("ly");

    } else {

        // INNER IF (to handle more complex verb transformations)
        // If the verb ends in consonant + vowel + consonant (except w x y) --> double final consonant + ing
        if (/[bcdfghjklmnpqrstvwxyz][aiueo][bcdfghjklmnpqrstvz]$/i.test(verb)) {

            // Store the final letter of the verb in a new variable
            let finalLetter = verb.charAt(verb.length-1);

            // Adds the same letter to the end of the verb
            let doubledLastLetterVerb = verb.concat(finalLetter);

            // Concatenates the "ing" and returns 
            return resultingVerb = doubledLastLetterVerb.concat("ing");

        
        // If the verb ends in "e", drops the "e" and adds "ing"
        } else if (/e$/i.test(verb)) {
            
            // Stores the verb minus the last letter into a new variable
            let removedLastLetterVerb = verb.slice(0, -1);

            // Concatenates the "ing" and returns 
            return resultingVerb = removedLastLetterVerb.concat("ing");

            
        // Adds -ing
        } else {
            return resultingVerb = verb.concat("ing");
        }
    }
}

```

---

## Example Usage

```js
console.log(verbing("fly"));
// flying

console.log(verbing("write"));
// writing

console.log(verbing("swimming"));
// swimmingly

console.log(verbing("be"));
// be

console.log(verbing("run"));
// running

console.log(verbing("skydiving"));
// skydivingly
```