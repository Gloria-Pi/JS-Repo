# 05 Geometry Library


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Create a function called `calcCircumference`:
    - Pass the radius to the function
    - Calculate the circumference based on the radius, and output "The circumference is NN"

2. Create a function called `calcArea`:
    - Pass the radius to the function.
    - Calculate the area based on the radius, and output "The area is NN"



<p>&nbsp;</p>


# Approach to Solution

## 1. Creating the `calcCircumference` function

This function calculates the circumference of a circle, given its radius (number), by using the formula: C=2πr.
- The value of π is given by accessing the `Math.PI` property.
- It's possible to round a number to two decimals by using `Math.round()` in combination with multiplying and dividing by 100.
- The result displayed on the console is rounded to two decimal places for convenience's sake.

```javascript
    function calcCircumference(radius) {
        const circumference = 2 * Math.PI * radius;
        const roundedCircumference = Math.round(circumference * 100) / 100;
        console.log(`The circumference is ${roundedCircumference}.`);
    }
```

**OUTPUT:**

```javascript
    calcCircumference(3);               // Logs: "The circumference is 18.85."
    calcCircumference(19);              // Logs: "The circumference is 119.38."
    calcCircumference(13.72);           // Logs: "The circumference is 86.21."
```

<p>&nbsp;</p>

## 2. Creating the `calcArea` function
This function calculates the area of a circle, given its radius (number), using the formula: A=πr^2.
- The value of π is given by accessing the `Math.PI` property.
- It's possible to round a number to two decimals by using `Math.round()` in combination with multiplying and dividing by 100.
- The result displayed on the console is rounded to two decimal places for convenience's sake.


```javascript
    function calcArea(radius) {
        const area = radius ** 2 * Math.PI;                     // radius ** 2 is the equivalent of Math.pow(radius, 2), or radius * radius
        const roundedArea = Math.round(area * 100) / 100;       // rounds to two decimal places
        console.log(`The area is ${roundedArea}.`);
    }
```

**OUTPUT:**

```javascript
    calcArea(3);                // Logs: "The area is 28.27."
    calcArea(19);               // Logs: "The area is 1134.11."
    calcArea(13.72);            // Logs: "The area is 591.37."
```
