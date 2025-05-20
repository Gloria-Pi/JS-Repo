# 07 Math Library


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Write a function called `squareNumber` that will:
    - take one parameter (a number)
    - square that number
    - return the result.
    
    It should also log a string like "The result of squaring the number 3 is 9."

2. Write a function called `halfNumber` that will:
    - take one parameter (a number)
    - divide it by 2
    - return the result.
    
    It should also log a string like "Half of 5 is 2.5."


3. Write a function called `percentOf` that will:
    - take two numbers
    - figure out what percent the first number represents of the second number
    - return the result.
    
    It should also log a string like "2 is 50% of 4."

4. Write a function called `areaOfCircle` that will:
    - take one parameter (the radius)
    - calculate the area based on that
    - return the result.
    
    It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    
5. **BONUS:** Round the result so there are only two digits after the decimal



<p>&nbsp;</p>



# Approach to Solution

## 1. Creating the `squareNumber` function

This function calculates the square of a given number (`num`, *number*), logs the result to the console, and returns it.

To improve readibility, the result is rounded to 2 decimal places using the built-in `Math.round()` method.

```javascript
    function squareNumber(num) {
        const squaredNum = Math.pow(num, 2);                               // Math.pow() is a built-in JS method equivalent to num ** 2
        const roundedSquaredNum = Math.round(squaredNum * 100) / 100;     // Rounds the squared number to 2 decimal places
        console.log(`The result of squaring the number ${num} is ${roundedSquaredNum}.`);
        return roundedSquaredNum;
    }
```

**OUTPUT:**

```javascript
    squareNumber(8);            // Logs: "The result of squaring the number 8 is 64."
    squareNumber(21.3);         // Logs: "The result of squaring the number 21.3 is 453.69."
    squareNumber(-19);          // Logs: "The result of squaring the number -19 is 361."
```

<p>&nbsp;</p>

---

## 2. Creating the `halfNumber` function

This function takes a number (`num`, *number*), logs half of it to the console, and returns it.

The result is rounded to 2 decimal places. For negative inputs, the result is also negative.

```javascript
    function halfNumber(num) {
        const dividedNum = num / 2;
        const roundedDividedNum = Math.round(dividedNum * 100) / 100;       // Rounds the divided number to 2 decimal places
        console.log(`Half of ${num} is ${roundedDividedNum}.`);
        return roundedDividedNum;
    }
```

**OUTPUT:**

```javascript
    halfNumber(8);            // Logs: "Half of 8 is 4."
    halfNumber(21.3);         // Logs: "Half of 21.3 is 10.65."
    halfNumber(-19);          // Logs: "Half of -19 is -9.5."
```

<p>&nbsp;</p>

---

## 3. Creating the `percentOf` function

This function calculates what percent the first number (`num1`, *number*) is of the second number (`num2`, *number*).

The result is rounded to 2 decimal places. For negative inputs, the result is also negative.

```javascript
    function percentOf(num1, num2) {
        const percentage = num1 / num2 * 100;
        const roundedPercentage = Math.round(percentage * 100) / 100;       // Rounds the percentage to 2 decimal places
        console.log(`${num1} is ${roundedPercentage}% of ${num2}.`);
        return roundedPercentage;
    }
```

**OUTPUT:**

```javascript
    percentOf(2, 4);            // Logs: "2 is 50% of 4."
    percentOf(13, -89);         // Logs: "13 is -14.61% of -89."
    percentOf(3.8, 72);         // Logs: "3.8 is 5.28% of 72."
```

<p>&nbsp;</p>

---

## 4. Creating the `areaOfCircle` function

This function calculates the area of a circle using a given radius (`radius`, *number*).

The area is logged to the console and returned, rounded to 2 decimal places.

```javascript
    function areaOfCircle(radius) {
        const area = Math.PI * Math.pow(radius, 2);             // Same as writing  Math.PI * Math.pow(radius, 2)
        const roundedArea = Math.round(area * 100) / 100;       // Rounds the area to 2 decimal places
        console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
        return roundedArea;
    }
```

**OUTPUT:**

```javascript
    areaOfCircle(2);        // Logs: "The area for a circle with radius 2 is 12.57."
    areaOfCircle(5.3);      // Logs: "The area for a circle with radius 5.3 is 88.25."
    areaOfCircle(-19);      // Logs: "The area for a circle with radius -19 is 1134.11."
```
<p>&nbsp;</p>

---

## 5. The `rawSquareNumber`, `rawHalfNumber`, `rawPercentOf`, `rawAreaOfCircle` functions
In order to improve readibility, the results of all the previous functions have been rounded to 2 decimal places using the built-in `Math.round()` method.

If one wished to obtain raw, more precise results, these are the functions that should be called:

### `rawSquareNumber`

```javascript
    function rawSquareNumber(num) {
        const squaredNum = Math.pow(num, 2);                     
        console.log(`The result of squaring the number ${num} is ${squaredNum}.`);
        return squaredNum;
    }
```

**OUTPUT:**

```javascript
    rawSquareNumber(8);            // Logs: "The result of squaring the number 8 is 64."
    rawSquareNumber(21.3);         // Logs: "The result of squaring the number 21.3 is 453.69000000000005."
    rawSquareNumber(-19);          // Logs: "The result of squaring the number -19 is 361."
```
<p>&nbsp;</p>

---

### `rawHalfNumber`

```javascript
function rawHalfNumber(num) {
    const dividedNum = num / 2;
    console.log(`Half of ${num} is ${dividedNum}.`);
    return dividedNum;
}
```

**OUTPUT:**

```javascript
rawHalfNumber(8);            // Logs: "Half of 8 is 4."
rawHalfNumber(21.3);         // Logs: "Half of 21.3 is 10.65."
rawHalfNumber(-19);          // Logs: "Half of -19 is -9.5."
```
<p>&nbsp;</p>

---

### `rawPercentOf`

```javascript
function rawPercentOf(num1, num2) {
    const percentage = (num1 / num2) * 100;
    console.log(`${num1} is ${percentage}% of ${num2}.`);
    return percentage;
}
```

**OUTPUT:**

```javascript
rawPercentOf(2, 4);            // Logs: "2 is 50% of 4."
rawPercentOf(13, -89);         // Logs: "13 is -14.606741573033707% of -89."
rawPercentOf(3.8, 72);         // Logs: "3.8 is 5.277777777777778% of 72."
```
<p>&nbsp;</p>

---

### `rawAreaOfCircle`

```javascript
function rawAreaOfCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area for a circle with radius ${radius} is ${area}.`);
    return area;
}
```

**OUTPUT:**

```javascript
rawAreaOfCircle(2);        // Logs: "The area for a circle with radius 2 is 12.566370614359172."
rawAreaOfCircle(5.3);      // Logs: "The area for a circle with radius 5.3 is 88.24733763933729."
rawAreaOfCircle(-19);      // Logs: "The area for a circle with radius -19 is 1134.1149479459152."
```