# 08 Calculator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a function that will:
- take one parameter (a number)
- perform the following operations, using the functions you wrote earlier:

    - Take half of the number and store the result
    - Square the result of #1 and store that result
    - Calculate the area of a circle with the result of #2 as the radius
    - Calculate what percentage that area is of the squared result (#3)



<p>&nbsp;</p>


# Approach to Solution

## 0. Copy-pasting the helper functions

The following functions have been created as part of a previous assignment:
- `rawHalfNumber`: Halves a given number and returns the result.
- `rawSquareNumber`: Squares a given number and returns the result.
- `rawPercentOf`: Calculates what percentage the first number is of the second number.
- `rawAreaOfCircle`: Calculates the area of a circle using a given radius.

You can read more about them by checking out the [README.md](../07-math-library/README.md) file within the `07-math-library` folder.

<p>&nbsp;</p>

---

## 1. Creating the `calculator` function

This function takes a number (`num`, *number*), performs a series of calculations, logs the result of each operation to the console, and returns the final result.

The steps performed are:

1. The number is halved using the `rawHalfNumber` function.
2. The halved number is squared using the `rawSquareNumber` function.
3. The area of a circle is calculated using the squared number as the radius with the `rawAreaOfCircle` function
4. The percentage of the area relative to the squared number is calculated with the `rawPercentOf` function.
5. The final result is rounded to 2 decimal places using the built-in `Math.round()` method.

```javascript
    function calculator(num) {
        // Halves the input number
        const calcHalvedNum = rawHalfNumber(num);

        // Squares the halved number
        const calcSquaredNum = rawSquareNumber(calcHalvedNum);

         // Calculates the area of a circle with the squared number as the radius
        const calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);

        // Calculates what percentage the area of the circle is of the squared number
        const calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);

        // Rounds the result to two decimal places
        const roundedCalcResult = Math.round(calcPercentOf * 100) / 100;

        // Logs the rounded result to the console
        console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);

        //returns the rounded result
        return roundedCalcResult;
    }
```

**OUTPUT:**

```javascript
    calculator(8);
    // Half of 8 is 4.
    // The result of squaring the number 4 is 16.
    // The area for a circle with radius 16 is 804.247719318987.
    // 804.247719318987 is 5026.548245743669% of 16.
    // The rounded result of all those calculations is 5026.55.
    
    calculator(-1);
    // Half of -1 is -0.5.
    // The result of squaring the number -0.5 is 0.25.
    // The area for a circle with radius 0.25 is 0.19634954084936207.
    // 0.19634954084936207 is 78.53981633974483% of 0.25.
    // The rounded result of all those calculations is 78.54.
    
    console.log(`If you input 21.3 in the calculator function, it returns ${calculator(21.3)}`);
    // Half of 21.3 is 10.65.
    // The result of squaring the number 10.65 is 113.42250000000001.
    // The area for a circle with radius 113.42250000000001 is 40415.53236213972.
    // 40415.53236213972 is 35632.72927517883% of 113.42250000000001.
    // The rounded result of all those calculations is 35632.73.
    // If you input 21.3 in the calculator function, it returns 35632.73.
```

<p>&nbsp;</p>

---


## 2. The rawCalculator function
In the previous function, the final result is rounded to two decimal places to simplify the output and make it easier to read. Rounding is useful when you want a clean, manageable result without dealing with too many decimal points.

However, rounding the result means losing some precision. The exact value is altered to fit within the specified decimal places, which could lead to small discrepancies, especially in calculations where precision is critical.

By modifying the last few statements of the calculator function, I've created the rawCalculator function so that the full precision of the calculation will be retained.


```javascript
    function rawCalculator(num) {
        // Halves the input number
        const calcHalvedNum = rawHalfNumber(num);

        // Squares the halved number
        const calcSquaredNum = rawSquareNumber(calcHalvedNum);

        // Calculates the area of a circle with the squared number as the radius
        const calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);

        // Calculates what percentage the area of the circle is of the squared number
        const calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);
        
        // Logs the result to the console
        console.log(`The result of all those calculations is ${calcPercentOf}.`);

        // Returns the raw result without rounding
        return calcPercentOf;
    }
```

**OUTPUT:**

```javascript
    rawCalculator(8);
    // Half of 8 is 4.
    // The result of squaring the number 4 is 16.
    // The area for a circle with radius 16 is 804.247719318987.
    // 804.247719318987 is 5026.548245743669% of 16.
    // The result of all those calculations is 5026.548245743669.
    
    rawCalculator(-1);
    // Half of -1 is -0.5.
    // The result of squaring the number -0.5 is 0.25.
    // The area for a circle with radius 0.25 is 0.19634954084936207.
    // 0.19634954084936207 is 78.53981633974483% of 0.25.
    // The rounded result of all those calculations is 78.53981633974483.
    
    console.log(`If you input 21.3 in the rawCalculator function, it returns ${rawCalculator(21.3)}`);
    // Half of 21.3 is 10.65.
    // The result of squaring the number 10.65 is 113.42250000000001.
    // The area for a circle with radius 113.42250000000001 is 40415.53236213972.
    // 40415.53236213972 is 35632.72927517883% of 113.42250000000001.
    // The result of all those calculations is 35632.72927517883.
    // If you input 21.3 in the calculator function, it returns 35632.72927517883.
```
