# 08 Timed Conversion - setTimeout ver.


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

## **Implementing `setTimeout()` to Print Temperature**
To execute the function every second while iterating through temperatures **from 0 to 100**, I used a recursive approach using `setTimeout()`.

The `spacedConversion()` function was created to:
   - Call `celsiusToFahrenheit()` with the current temperature.
   - Increment the temperature by **1**.
   - Check if the new temperature is **less than or equal to 100**:

        - If the condition holds, `setTimeout()` schedules the next execution in **1 second**.
        - Otherwise, it stops execution by clearing `timeoutId`.

## Function Implementation:
```js
function spacedConversion(startingTemperature) {
    celsiusToFahrenheit(startingTemperature);
    startingTemperature++;
    
    if (startingTemperature <= 100) {
        setTimeout(spacedConversion, 1000, startingTemperature);
    } else {
        clearTimeout(timeoutId);
    }
}
```

### Initializing Execution
A `timeoutId` was defined to store the ID of the first `setTimeout()` call, allowing proper cancellation when the execution reaches 100°C.

```js
let currentTemperature = 0;
let timeoutId = setTimeout(spacedConversion, 1000, currentTemperature);
```


## Output Example
```
0°C is 32°F.
1°C is 33.8°F.
2°C is 35.6°F.
...
100°C is 212°F.
```


## Alternative Approaches
Another valid approach to achieve the same goal is using `setInterval()` (see [solution-1](../solution-1/readme.md) for more details).

### Comparison:
| Approach         | Pros | Cons |
|-----------------|------|------|
| **setInterval** | Simpler implementation | Fixed interval, less flexible |
| **setTimeout (used here)** | More control over execution, adjustable timing | Slightly more complex logic |