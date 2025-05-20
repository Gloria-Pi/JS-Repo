# 06 Temperature Conversion


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Create a function called `celsiusToFahrenheit`:
    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".

2. Create a function called `fahrenheitToCelsius`:
    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."



<p>&nbsp;</p>


# Approach to Solution

## 1. Creating the `celsiusToFahrenheit` function

This function converts a given Celsius temperature (`celsiusTemp`, *number*) to the corresponding Fahrenheit temperature, rounds the result to one decimal place and displays it on the console.

The formula used for the conversion is: Fahrenheit = (Celsius * 9 / 5) + 32.

```javascript
    function celsiusToFahrenheit(celsiusTemp) {
        const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
        const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;           // Rounds the result to one decimal place.
        console.log(`${celsiusTemp}°C is ${roundedFahrenheitTemp}°F.`);
    }
```

**OUTPUT:**

```javascript
    celsiusToFahrenheit(0);         // Logs: "0°C is 32°F."
    celsiusToFahrenheit(84.5);      // Logs: "84.5°C is 184.1°F."
    celsiusToFahrenheit(-9);        // Logs: "-9°C is 15.8°F."
```

<p>&nbsp;</p>

## 2. Creating the `fahrenheitToCelsius` function
This function converts a given Fahrenheit temperature (`fahrenheitTemp`, *number*) to the corresponding Celsius temperature, rounds the result to one decimal place and displays it on the console.

The formula used for the conversion is: Celsius = (Fahrenheit − 32) * 5 / 9.


```javascript
    function fahrenheitToCelsius(fahrenheitTemp) {
        const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
        const roundedCelsiusTemp = Math.round(celsiusTemp * 10) / 10;           // Rounds the result to one decimal place.
        console.log(`${fahrenheitTemp}°F is ${roundedCelsiusTemp}°C.`);
    }
```

**OUTPUT:**

```javascript
    fahrenheitToCelsius(32);        // Logs: "32°F is 0°C." 
    fahrenheitToCelsius(212.3);     // Logs: "212.3°F is 100.2°C."
    fahrenheitToCelsius(-51);       // Logs: "-51°F is -46.1°C."
```
