# 12 Cut me up


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

1) In the exercise folder create a .txt or .doc or .md file in which you explain the difference between the following string methods
    - `slice()`
    - `substring()`
    - `substr()`

2) Explain the differences in terms of parameters and behavior

3) Provide code examples to prove your point


<br>

# Approach to Solution

The first part of this README is dedicated to explaining the differences between the `substring()`, `substr()`, and `slice()` methods in JavaScript.

These methods are commonly used to extract parts of a string, but they behave in subtly different ways depending on the parameters provided. 

After covering their differences, I will proceed to provide a quick recap of each method, offering a clear overview of their syntax and usage as a bonus section.


<br>


## 0) Comparison Between `slice()`, `substring()`, and `substr()`

Here are the key differences between these methods:


| Behavior                      | `slice()`                        | `substring()`                          | `substr()`         |
|------------------------------|----------------------------------|----------------------------------------|-----------------------------------|
| Parameters                   | `(indexStart, indexEnd)` (*indexEnd* is optional)                   | `(indexStart, indexEnd)` (*indexEnd* is optional)                         | `(start, length)` (*both* are optional)                 |
| Negative values              | Counts backwards from the end of the string                  | Treated as 0                           | `start < 0` -> wraps to the end of the string; `length < 0` -> treated as 0           |
| `indexStart > indexEnd` behavior       | Returns `""`                     | Swaps the two                         | N/A                               |
| `length` instead of `indexEnd`    | ❌                              | ❌                                     | ✅                                |
| Legacy status                | ✅ Supported                     | ✅ Supported                           | ⚠️ Deprecated                     |


<br>

---

- **Handling of negative values:**
  - `slice()`:
      - treats NaN arguments as 0
      - when it is given negative values it counts backwards from the end of the string to find the indexes.
  - `substring()` treats negative (or NaN) arguments as `0`.
  - `substr()`:
      - treats NaN arguments as 0 
      - if `start` is negative, it''ll wrap to the end of the string
      - if `length` is negative, it'll be treated as 0.

  ```javascript
  const text = "Hello, World!";
  console.log(text.slice(-5, 2)); // "" (negative values counted from end)
  console.log(text.substring(-5, 2)); // "He" (negative values treated as 0)
  console.log(text.substr(-5, 3)); // "orl" (negative indexStart counts from the end)
  ```

<br>

---

- **Handling of `indexStart > indexEnd`:**
  - `slice()` returns an empty string.
  - `substring()` swaps the arguments, extracting a valid string.

  - `substr()`: it's second parameter is `length`, and not `indexEnd`, thus there isn't actually a direct comparison to be had in this regard. When `start + length >= str.length`, `substr()` extracts characters to the end of the string.

  ```javascript
  console.log(text.slice(5, 2)); // ""
  console.log(text.substring(5, 2)); // "lo, "
  console.log(text.substr(5, 2)); // " l"
  ```

<br>

---

- **Usage preference:**
  - `slice()` and `substring()` are the recommended methods for modern JavaScript.
  - `substr()` is considered a legacy feature and should be avoided for compatibility and maintainability.

  ---

<br>
<br>

## 1) `slice()` Method (Strings)

### **Summary:**  
The `slice()` method extracts a portion of a given string from `indexStart` (inclusive) to `indexEnd` (exclusive), and returns it as a new string. The original string remains unchanged.

### Syntax:
```javascript
string.slice(indexStart);
string.slice(indexStart, indexEnd);
```

- **`indexStart`**: The index of the first character to include in the returned substring.

- **`indexEnd` (OPTIONAL)**: The index of the first character to exclude from the returned substring. If omitted, `undefined`, or if `>= str.length`, the slice extends to the end of the string.

```javascript
const message = "I like eating pineapples.";

console.log(message.slice(7, 14));
// "eating "
```

### **Behavior and special cases:**
  
- **If `indexStart` is negative**, the index is counted from the end of the string (the last character is at index -1 by default).  
  ```javascript
  console.log(message.slice(-2, 4)); // " " (space)
  ```

- **If `indexStart` >= `str.length`**, it returns an empty string.
  ```javascript
  console.log(message.slice(28)); // ""
  ```

- **If `indexEnd <= indexStart`**, after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), an empty string is returned.
  ```javascript
  console.log(message.slice(7, 5)); // ""
  ```

- **If `indexEnd` is omitted, `undefined` or `>= str.length`**, `slice()` extracts to the end of the string.
  ```javascript
  console.log(message.slice(7)); // "eating pineapples."
  ```

- **If one of the parameters is NaN**, it is treated as `0`.

<br>

📘 Learn more: [MDN Web Docs - String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

<br>
<br>




### `slice()` as an Array method:
The `slice()` method also works with arrays to return a shallow copy of a portion of an array, from `start` (inclusive) to `end` (exclusive). The original array is not modified.

**Syntax for Arrays:**
```javascript
array.slice()
array.slice(start)
array.slice(start, end)
```
Both parameters are **OPTIONAL**.

```javascript
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits.slice(1, 3)); 
// Output: ['banana', 'cherry']
```
<br>
<br>



## 2) `substring()` Method

### **Summary:**  
The `substring()` method extracts a section of a string, starting at the given `indexStart` (inclusive) and ending at the `indexEnd` (exclusive).

If `indexStart` > `indexEnd`, the method swaps the two.

### Syntax:
```javascript
string.substring(indexStart);
string.substring(indexStart, indexEnd);
```

  - **`indexStart`**: The index where the substring starts.
  - **`indexEnd` (OPTIONAL)**: The index where the substring ends (exclusive). If omitted, the substring extends to the end of the string

```javascript
const message = "I like eating pineapples.";

console.log(message.substring(7, 14)); // "eating "
```

### **Behavior and special cases:**
  
- **If `indexStart` is greater than `indexEnd`**, `substring()` swaps the two indices.
  ```javascript
  const text = "Hello, World!";
  console.log(text.substring(7, 4)); // "lo, "
  ```

- **If `indexStart` or `indexEnd` is negative or NaN**, both are treated as `0`.
  ```javascript
  console.log(text.substring(-5, 2)); // "He"
  console.log(text.substring(-5, -2)); // ""
  ```

- **If `indexStart` or `indexEnd` exceeds string length**, it is treated as the string length.

- **If `indexStart` == `indexEnd`**, it returns an empty string.

<br>

📘 Learn more: [MDN Web Docs - String.prototype.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

<br>
<br>


## 3) `substr()` Method

### **Summary:**  
The `substr()` method is a deprecated method that returns a portion of a string, starting at the specified `indexStart` and extending for a specified number of characters. While still supported in some browsers, it’s recommended to use `substring()` or `slice()` instead, as `substr()` is being phased out.

The method returns a portion of a string, starting at the specified index and extending for a given number of *characters* afterwards.

### Syntax:
```javascript
string.substr(start);
string.substr(start, length);
```

  - **`start`**: The where the substring starts.
  - **`length` (OPTIONAL)**: The number of characters to extract. If omitted, the substring extends to the end of the string.

```javascript
const message = "I like eating pineapples.";

console.log(message.substr(7, 7)); // "eating "
```

### **Behavior and special cases:**
  
- **If `start` is negative**, it counts from the end of the string.
  ```javascript
  console.log(message.substr(-7, 7)); // "apple"
  ```

- **If `length` is negative**, an empty string is returned.
  ```javascript
  console.log(message.substr(7, -3)); // ""
  ```

- **If `length` is omitted or undefined, or if `start` + `length` >= `str.length`:**  
 `substr()` extracts characters to the end of the string.

- **If `start` >= `str.length`**, an empty string is returned.
  ```javascript
  console.log(message.substr(28, 5)); // ""
  ```

- **If `start` is omitted or undefined**, it is treated as `0`.

- **if `start` or `length` are NaN:**  
  both parameters are treated as `0`.
  
<br>


📘 Learn more: [MDN Web Docs - String.prototype.substr()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)