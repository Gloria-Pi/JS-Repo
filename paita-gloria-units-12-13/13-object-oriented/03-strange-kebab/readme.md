# 03 Strange Kebab

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Add a method to the String prototype called `toStrangeKebab()` that transforms strings to kebab-case

```js
// Given the following array
const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
];

source.forEach(item => console.log(item.toStrangeKebab()));
```

The output should exactly match this:

```bash
my-name-is-my-passport-verify-me
my-name-is-my-passport-verify-me-m-m-m
my-name-is-my-passport-p
m-y-name-is-2023
mynameismypassport
my-name-is
my-name-is
```

<br>
<br>

# Approach to Solution




## 1. Extending the String prototype

The method `toStrangeKebab()` is added to the prototype of `String`, so it can be called directly on any string:

```js
'MyNameIsJohn'.toStrangeKebab(); // "my-name-is-john"
```

<br>

## 2. Defining transformation steps

A list of transformation functions is defined. Each function performs a specific operation:

```js
const transformations = [
  str => str.replace(...),
  str => str.replace(...),
  ...
];
```

These steps include:

* Separating *camelCase* or *PascalCase* transitions
* Replacing symbols and spaces with hyphens
* Removing leading digits and trimming excess hyphens
* Converting the final string to lowercase

<br>

## 3. Applying transformations using `reduce()`

The `reduce()` method is used to apply each transformation in sequence:

```js
    const result = transformations.reduce((acc, currTransformationFn) => currTransformationFn(acc), this);
```

Explanation:

* `acc` is the result after applying the previous transformation.
* `currTransformationFn` is the current function being applied.
* `this` refers to the original string.

This mechanism avoids deeply nested function calls and improves the legibility of the code.  
Each transformation modifies the string progressively until the final format is returned.

<br>
<br>

# Final Code

```js
String.prototype.toStrangeKebab = function () {

    const transformations = [

        // Separates consecutive uppercase letters
        str => str.replace(/([A-Z])(?=[A-Z])/g, "$1 "),

        // Adds space between lowercase/number followed by uppercase (e.g., "userName" becomes "user Name")
        str => str.replace(/([a-z0-9])(?=[A-Z])/g, "$1 "),

        // Replaces all non-word characters, whitespace, and underscores with hyphens
        str => str.replace(/\W|\s|_/g, "-"),

        // Replaces digits at the start of the string with a hyphen
        str => str.replace(/^[0-9]+/g, "-"),

        // Replaces multiple consecutive hyphens with a single one
        str => str.replace(/-{2,}/g, "-"),

        // Removes any leading or trailing hyphens
        str => str.replace(/^-|-$/g, ""),

        // Converts the string to lowercase
        str => str.toLowerCase()
    ];

    // Applies all transformations in sequence
    const result = transformations.reduce((acc, currTransformationFn) => currTransformationFn(acc), this);
    return result;
};
```

<br>

# Example Results

Given the input:

```js
const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
];
```

The output is:

```bash
my-name-is-my-passport-verify-me
my-name-is-my-passport-verify-me-m-m-m
my-name-is-my-passport-p
m-y-name-is-2023
mynameismypassport
my-name-is
my-name-is
```