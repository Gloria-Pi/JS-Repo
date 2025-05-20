# 04 Coffee Supply Calculator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Write a function named **calculateSupply** that:
    - takes 2 parameters: age, amount per day.
    - calculates the amount consumed for rest of the life (based on a constant max age).
    - outputs the result to the screen like so: "You will need NN cups of coffee to last you until the age of X"

Call that function three times, passing in different values each time

2. **Bonus:**
    - Calculate in liters, accepting floating point values for amount per day (0.3 liters of coffee)
    - Round the result to a round number


<p>&nbsp;</p>


# Approach to Solution

## 1. Writing the `calculateSupplyInCups()` function

The function calculates how many cups of coffee one will drink until they reach their maximum lifespan, by:
- initializing the `maxAge`, `cupsPerYear` `cupsPerLife` variables:
    - `maxAge`: the maximum lifespan of a human being (arbitrarily set to 100)
    - `cupsPerYear`: the amount of coffee cups consumed in a year
    - `cupsPerLife`: the amount of coffee cups that a person will be able consume from the very moment they run the program to the moment they reach their last year of life 

- logging the result to the console using `console.log()`

```javascript
    function calculateSupplyInCups(age, cupsPerDay) {
        const maxAge = 100;
        const cupsPerYear = 365 * cupsPerDay;
        const cupsPerLife = (maxAge - age) * cupsPerYear;
        console.log(`You will need ${cupsPerLife} cups of coffee to last you until the age of ${maxAge}.`);
    }
```

**OUTPUT:**

```javascript
    calculateSupplyInCups(18, 2);        // Logs: "You will need 59860 cups of coffee to last you until the age of 100."
    calculateSupplyInCups(56, 5);        // Logs: "You will need 80300 cups of coffee to last you until the age of 100."
    calculateSupplyInCups(91, 1);        // Logs: "You will need 3285 cups of coffee to last you until the age of 100."
```

<p>&nbsp;</p>

## 2. BONUS: Writing the `calculateSupplyInLiters()` function
The same function, but instead of measuring the amount of coffee to be consumed in cups, it'll measure the same value in liters.

The result displayed on the console is rounded to the nearest whole number.


```javascript
    function calculateSupplyInLiters(age, litersPerDay) {
        const maxAge = 100;
        const litersPerYear = 365 * litersPerDay;
        const litersPerLife = (maxAge - age) * litersPerYear;
        const litersPerLifeRounded = Math.round(litersPerLife);
        console.log(`You will need ${litersPerLifeRounded} liters of coffee to last you until the age of ${maxAge}.`);
    }
```

**OUTPUT:**

```javascript
    calculateSupplyInLiters(18, 2);              // Logs: "You will need 59860 liters of coffee to last you until the age of 100."
    calculateSupplyInLiters(56, 0.2);            // Logs: "You will need 3212 liters of coffee to last you until the age of 100."
    calculateSupplyInLiters(91, 0.36);           // Logs: "You will need 1183 liters of coffee to last you until the age of 100."
```
