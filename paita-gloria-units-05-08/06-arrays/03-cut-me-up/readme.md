# 03 Cut Me Up


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

In the exercise folder create a .txt or .doc or .md file in which you explain
the difference between the following array methods:
- `slice()`, `splice()`
- Explain the differences in terms of parameters and behavior
- Provide code examples to prove your point

<p>&nbsp;</p>

# Approach to Solution

# Array Methods: `slice()` vs `splice()`

# Introduction

In this file, we'll explore two JavaScript array methods: `slice()` and `splice()`. These methods are often confused because they both deal with extracting or modifying parts of an array. However, they work quite differently in terms of behavior, syntax, and return values. 

This README will:
1. Provide a quick summary of both methods.
2. Present a schema comparing the two methods.
3. Dive into a detailed explanation of both methods, including syntax and parameters.
4. Provide practical examples for each method to help clarify their usage.

<p>&nbsp;</p>


# Quick Summary: `slice()` vs `splice()`

- **`slice()`**: Creates a **shallow copy** of a section of an array and returns a new array without modifying the original. The method extracts a portion of the array from a specified starting index to an ending index (exclusive).

- **`splice()`**: Changes the contents of an array by removing, replacing, or adding elements. It **modifies the original array** and returns an array of the removed elements.

<p>&nbsp;</p>


## Syntax Overview:

- **`slice()`**
  ```javascript
  array.slice(start, end);
  ```

- **`splice()`**
  ```javascript
  array.splice(start, deleteCount, item1, item2, ..., itemN);
  ```

<p>&nbsp;</p>


# Comparison of `slice()` and `splice()`

| **Feature**                   | **`slice()`**                                               | **`splice()`**                                             |
|-------------------------------|-------------------------------------------------------------|-----------------------------------------------------------|
| **Purpose**                    | Extracts a shallow copy of a portion of the array.          | Modifies the array in place by removing, adding, and/or replacing elements. |
| **Modifies Original Array**    | No                  | Yes                       |
| **Return Value**               | A new array containing the extracted elements.              | An array of the elements that were removed from the array. |
| **Parameters**                 | `start`, `end` (both optional)                              | `start`, `deleteCount`, `item1, item2, ...` (deleteCount and items are optional) |
| **Start Index Behavior**       | Zero-based index to start extraction. Negative indices count from the end of the array. | Zero-based index at which to start modifying the array. Negative indices count from the end of the array. |
| **End Index Behavior**         | Not inclusive. The extraction ends at the `end` index (exclusive). If `end` is omitted, it extracts to the end of the array. | Not applicable. |
| **Negative Indices**           | `start` and `end` can accept negative indices to count backwards from the end of the array. | `start` can accept negative indices to count backwards from the end of the array. |
| **Removing Elements**          | No | Yes, it removes elements from the array starting from the `start` index. |
| **Adding Elements**            | No                               | Yes, it can add new elements to the array at the specified index. |
| **Replacing Elements**         | No | Yes, it can replace removed elements with new ones. |
| **Use Case**                   | When you want to extract a portion of an array without modifying it. | When you need to modify an array by adding, removing, and/or replacing elements. |

---

<p>&nbsp;</p>
<p>&nbsp;</p>


# `slice()` Method Overview

The `slice()` method is used to create a shallow copy of a portion of an array. It does not modify the original array. Instead, it returns a new array that contains the elements from the start index (inclusive) up to, but not including, the end index (exclusive). 

## Syntax:

```javascript
array.slice(start, end);
```

- **`start`** (optional):

    - The index at which to begin extraction.
    - If negative, it counts from the end of the array.
    - If omitted, or if `start < -array.length`, is `0`.
    - If `start >= array.length`, an empty array is returned.

- **`end`** (optional):

    - The index at which to stop extraction (not inclusive).
    - If negative, it counts from the end.
    - If omitted, or `end >= array.length` it slices until the end of the array.
    - If `end` implies a position before or at the position that `start` implies, an empty array is returned


## Return Value:
`slice()` returns a new array containing the elements between `start` and `end`. If no elements are selected, it returns an empty array.

<p>&nbsp;</p>

## Examples

```javascript
const planets = ["Earth", "Saturn", "Pluto", "Mars"];
const somePlanets = planets.slice(1, 3);

console.log(somePlanets); // ["Saturn", "Pluto"]
console.log(planets); // ["Earth", "Saturn", "Pluto", "Mars"] (Original array is unchanged)
```

In the example above, the method extracts elements from index 1 up to, but not including, index 3.

<p>&nbsp;</p>

## Using Negative Indices:

```javascript
const vegetables = ["Carrot", "Spinach", "Turnip", "Broccoli"];
const someVegetables = vegetables.slice(-2);

console.log(someVegetables); // ["Turnip", "Broccoli"]
```

Here, `slice(-2)` extracts the last two elements of the array.

---

```javascript
const vegetables = ["Carrot", "Spinach", "Turnip", "Broccoli"];

const someMoreVegetablesX2 = vegetables.slice(1, -1);

console.log(someMoreVegetablesX2);
// ["Spinach", "Turnip"]

```
In this example, `slice(1, -1)` extracts elements from index 1 (included) to index -1 (excluded).

<p>&nbsp;</p>

## Omitting the end parameter

```javascript
const vegetables = ["Carrot", "Spinach", "Turnip", "Broccoli"];

const someVegetables = vegetables.slice(2);

console.log(someVegetables);
// ["Turnip", "Broccoli"]

```
In this example, `slice(2)` extracts elements from index 2 to the end of the array.

<p>&nbsp;</p>

## Creating an empty array

```javascript
const vegetables = ["Carrot", "Spinach", "Turnip", "Broccoli"];

const noVegetables = vegetables.slice(1, -3);

console.log(noVegetables);
// []

```
In this example, `slice(1, -3)` extracts 0 elements, because indexes of `start` and `end` match.

---

<p>&nbsp;</p>
<p>&nbsp;</p>



# `splice()` Method Overview

The `splice()` method is used to **modify** an array by removing, replacing, or adding elements. It directly affects the original array.

## Syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ..., itemN);
```

- **`start`** (required): The index at which to start changing the array.

    - Negative indices count from the end of the array.
    - If `start < -array.length`, 0 is used.
    - If `start >= array.length`, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
    - If `start` is omitted (and `splice()` is called with no arguments), nothing is deleted.

- **`deleteCount`** (optional): The number of elements to remove from the array.

    - If omitted, all elements from `start` to the end of the array will be removed.
    - if **deleteCount >= to the number of elements after the position specified by start**, then all the elements from `start` to the `end` of the array will be deleted
    - If 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

- **`item1, item2, ..., itemN`** (optional): Elements to add to the array starting from the `start` index. If no items are provided, `splice()` will only remove elements.

## Return Value:
`splice()` returns an array containing the elements that were removed. If no elements were removed, it returns an empty array.

<p>&nbsp;</p>

## Examples

### Example 1: **Replacing an Element**
```js
const seasons = ["Spring", "Summer", "Fall", "Winter"];
const newSeasons = seasons.splice(2, 1, "Autumn");
console.log(newSeasons);  // ["Fall"]
console.log(seasons);     // ["Spring", "Summer", "Autumn", "Winter"]
```
- Replaces "Fall" at index 2 with "Autumn".
- Returns an array of the removed elements (`["Fall"]`), while modifying the original `seasons` array.

---
<p>&nbsp;</p>


### Example 2: **Removing Multiple Elements and Adding New Ones**
```js
const cardinalDirections = ["North", "South", "East", "West"];
const cutCardinalDirections = cardinalDirections.splice(1, 1, "Sud", "Est", "Ovest");
console.log(cardinalDirections);   // ["North", "Sud", "Est", "Ovest", "East", "West"]
console.log(cutCardinalDirections);  // ["South"]
```
- Replaces "South" with "Sud", "Est", and "Ovest" starting from index 1.
- Returns an array of removed elements (`["South"]`), while modifying the `cardinalDirections` array.

---
<p>&nbsp;</p>


### Example 3: **Inserting Elements Without Removing Any**
```js
const directions = ["Left", "Right"];
const cutDirections = directions.splice(0, 0, "Up", "Down");
console.log(directions);   // ["Up", "Down", "Left", "Right"]
console.log(cutDirections);  // []
```
- Inserts "Up" and "Down" at the beginning without removing any elements.
- Returns an empty array because no elements were removed.

---
<p>&nbsp;</p>


### Example 4: **Inserting Elements Before an Index**
```js
const languages = ["IT", "JP", "ES"];
const cutLanguages = languages.splice(2, 0, "ENG", "FR");
console.log(languages);   // ["IT", "JP", "ENG", "FR", "ES"]
console.log(cutLanguages);  // []
```
- Inserts "ENG" and "FR" before "ES" at index 2, without removing any elements.
- Returns an empty array because no elements were removed.

---
<p>&nbsp;</p>


### Example 5: **Removing All Elements After a Specific Index**
```js
const names = ["Louis", "Giancarlo", "Anais", "Romulus"];
const cutNames = names.splice(2);
console.log(names);   // ["Louis", "Giancarlo"]
console.log(cutNames);  // ["Anais", "Romulus"]
```
- Removes all elements starting from index 2 onward.
- Returns an array with the removed elements (`["Anais", "Romulus"]`).

---
<p>&nbsp;</p>


### Example 6: **Omitting Start and Delete Count**
```js
const cars = ["Lamborghini", "Ferrari", "Panda"];
const cutCars = cars.splice();
console.log(cars);   // ["Lamborghini", "Ferrari", "Panda"]
console.log(cutCars);  // []
```
- No elements are removed because `splice()` is called without arguments.
- Returns an empty array as no changes were made.