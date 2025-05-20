# 04 Capital - BONUS


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write a JavaScript function called capital which has one parameter, a string, and which returns that string with the first letter capitalized
- For example, the call `capital("hello world")` should return the string "Hello world"

**Bonus**  
Modify the function so that it capitalizes each word. `capital("my name is john")` should return the string "My Name Is John"


<br>
<br>

# Approach to Solution

## 1. Brainstorming
Since I need to capitalize the first letter of each word, I need to identify where a new word starts.

In my approach I selected:
- the first character of the string (using a regex pattern)
- any letter that comes immediately after a space (`" "`)

<br>

## 2. Creating the Regular Expression
To detect the first letter of each word, we use the regex pattern:

`/^[a-z]|(\s[a-z])/g`

**Explanation:**
- `^[a-z]` → Matches the first lowercase letter at the beginning of the string.
- `\s[a-z]` → Matches a lowercase letter preceded by a whitespace (`" "`).
- The `g` flag ensures we find **all** matches in the string.

<br>

## 3. Using `replaceAll()`
The `replaceAll()` method allows us to replace every matched character using a callback function:
```javascript
text.replaceAll(/^[a-z]|(\s[a-z])/g, (match) => match.toUpperCase());
```
Here’s how it works:
1. JavaScript searches for all instances that match the regex.
2. It passes each matched substring (single lowercase letter) to the callback function.
3. The callback function converts the matched character to uppercase.

**Limitation:** `replaceAll()` is not supported in Internet Explorer.

<br>

## Code

```javascript

function capital(text) {
    return text.replaceAll(/^[a-z]|(\s[a-z])/g, (match) => match.toUpperCase());
}
```


## Test Cases

```js
// Test Cases
console.log(capital("hello world"));
// "Hello World"

console.log(capital("geronimo-stilton"));
// "Geronimo-stilton"

console.log(capital("time is the most precious thing we have <3 sob."));
// "Time Is The Most Precious Thing We Have <3 Sob."

console.log(capital("àccents òr çrying çs."));
// "àccents òr çrying çs."
```

<br>

---

## Possible Improvements
- **Handling hyphenated words**: we could adjust the regex to consider cases like "mother-in-law".
- **Supporting accented letters**: we could modify the regex to include Unicode character ranges.
