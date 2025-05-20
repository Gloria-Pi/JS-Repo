# 08 Timed Conversion - setInterval ver.


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- We will modify ‘Temperature conversion’ exercise from the lesson about
functions

- Call `celsiusToFahrenheit` on temperatures from 0 to 100 so that one
temperature is printed to the console every second
    - Use `setInterval` to achieve this goal.
    - Do the same thing using `setTimeout`.

<br>
<br>

# Approach to Solution

## Requirements
- Use `setInterval()` to call the function `celsiusToFahrenheit()` every second.
- Stop the execution once the temperature reaches 100°C.

<br>

## **Celsius to Fahrenheit Conversion**
The formula used for conversion is:

\[ \text{Fahrenheit} = (\text{Celsius} \times \frac{9}{5}) + 32 \]

- The function `celsiusToFahrenheit()` performs this conversion and logs the result to the console.
- The result is rounded to one decimal place for readability.

```js
function celsiusToFahrenheit(celsiusTemp) {
   const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
   const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
   console.log(`${celsiusTemp}°C is ${roundedFahrenheitTemp}°F.`);
}
```

## **Using `setInterval()` to Print Temperatures**

To meet the assignment's requirement of printing one temperature per second, I:

1. Initialized a variable `currentTemperature` at `0` to keep track of the iteration.
2. Used `setInterval()` to repeatedly call a "throwaway" function every 1000 milliseconds (1 second).
3. This "throwaway" function:
   - Calls `celsiusToFahrenheit(currentTemperature)`
   - Increments `currentTemperature`
   - If `currentTemperature` exceeds 100, calls `clearInterval()` to stop execution.

<br>

## Code Implementation

```js
let currentTemperature = 0;

let intervalId = setInterval( () => {

    celsiusToFahrenheit(currentTemperature);

    currentTemperature++;

    if (currentTemperature > 100) {
          clearInterval(intervalId);
    }

}, 1000);
```

<br>

# Alternative Approach: Using `setTimeout()` Recursively
Another approach to solving this problem is using `setTimeout()` recursively instead of `setInterval()`.

(See [solution-2](../solution-2/readme.md) for more details)

### Pros of `setTimeout()`
- Provides better control over execution timing.
- Allows dynamic adjustments between intervals.

### Cons of `setTimeout()`
- More complex than `setInterval()`.
- Requires explicit recursive calls.