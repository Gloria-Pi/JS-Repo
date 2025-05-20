# 09 Not Bad


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment
Create a function called `notBad` that takes a single parameter, a string
- It should find the first appearance of the substring 'not' and 'bad'
- If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
'good' and return the result
- If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
sentence


**EXAMPLE**  
`notBad('This dinner is not that bad!')`: 'This dinner is good!'

`notBad('This movie is not so bad!')`: 'This movie is good!'

`notBad('This dinner is bad!')`: 'This dinner is bad!'


<br>

# Approach to Solution

## Understanding the Problem

The challenge lies in correctly identifying and replacing the phrase *only* when "bad" follows "not" in the **same segment** of the sentence.  
It should also substitute the first occurrence of "not.. bad", while ignoring the ones after that.

## Using Regular Expressions

To detect the phrase, I used the following **regular expression**:

```regex
/not.*?bad/i
```

### Breakdown of the Regex:
- `not` → Matches the word "not" exactly.
- `.*?` → Matches **any characters** (including spaces) between "not" and "bad", but in a **non-greedy** way (stops at the first occurrence of "bad").
- `bad` → Matches the word "bad" exactly.
- `i` → **Case-insensitive** match (handles "Not", "NOT", etc.).

This ensures that **only** the first "not ... bad" phrase is captured and replaced, without affecting later occurrences.

## Implementation Plan
This function:  
1. Defines a regex pattern to find "not" followed by "bad".
2. Checks if the pattern exists in the input sentence using `.test()`.
3. Uses `.replace()` to substitute the matched phrase with "good".
4. Returns the modified sentence or the original sentence if no match is found.

## Code Implementation

```javascript
function notBad(text) {

    const notBadPattern = /not.*?bad/i;

    //If the regex finds a "not" followed by a "bad", even with other characters in between
    if (notBadPattern.test(text)) {

        //Substitutes the entire "not * bad" substring with "good"
        let notBadIsGood = text.replace(notBadPattern, "good");

        return notBadIsGood;

    } else {

        //If it doesn't find the right sequence, returns the original string
        return text;

    }
}
```

---

# Test Cases

```javascript
console.log(notBad("This movie sucks!"));
// Expected output: "This movie sucks!" (no change)

console.log(notBad("This movie is not that bad!"));
// Expected output: "This movie is good!"

console.log(notBad("The bad thing about not sleeping enough is..."));
// Expected output: "The bad thing about not sleeping enough is..." (no change)

console.log(notBad("It's not quite that bad. It can be improved, but it's not that bad."));
// Expected output: "It's good. It can be improved, but it's not that bad." (only the first instance changes)
```
