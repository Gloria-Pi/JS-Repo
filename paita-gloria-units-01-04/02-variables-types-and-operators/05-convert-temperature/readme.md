# 05 Convert Temperature

## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>


## Assignment

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."


<p>&nbsp;</p>

## Approach to Solution

The conversions are done using the standard formulas:
- Celsius to Fahrenheit: (Celsius * 1.8) + 32
- Fahrenheit to Celsius: (Fahrenheit - 32) / 1.8

<p>&nbsp;</p>


### 1. Converting Celsius to Fahrenheit

1. **Initializing a temperature in Celsius**
    ```javascript
    let celsiusTemp = 25;
    ```
<p>&nbsp;</p>


2. **Converting the temperature from Celsius to Fahrenheit using the formula and storing it as a variable**
    ```javascript
    let celsiusToFahrenheit = Math.round(celsiusTemp * 1.8 + 32);
    ```

    **NOTE:** We're also using the Math.round() method in order to round the resulting number
<p>&nbsp;</p>


3. **Logging everything to console using console.log()**
    ```javascript
    console.log(`${celsiusTemp}°C is ${celsiusToFahrenheit}°F.`);
    ```

    **OUTPUT**
    ```javascript
    25°C is 77°F.
    ```


<p>&nbsp;</p>
<p>&nbsp;</p>


### 1. Converting Fahrenheit to Celsius

1. **Initializing a temperature in Fahrenheit**
    ```javascript
    let fahrenheitTemp = 119;
    ```
<p>&nbsp;</p>


2. **Converting the temperature from Fahrenheit to Celsius using the formula and storing it as a variable**
    ```javascript
    let fahrenheitToCelsius = Math.round((fahrenheitTemp - 32) / 1.8);
    ```

    **NOTE:** We're also using the Math.round() method in order to round the resulting number
<p>&nbsp;</p>


3. **Logging everything to console using console.log()**
    ```javascript
    console.log(`${fahrenheitTemp}°F is ${fahrenheitToCelsius}°C.`);
    ```

    **OUTPUT**
    ```javascript
    119°F is 48°C.
    ```
