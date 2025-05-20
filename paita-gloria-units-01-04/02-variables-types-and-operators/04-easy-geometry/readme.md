# 04 Easy Geometry


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


## Assignment

Calculate properties of a circle, using the definitions here.
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".


<p>&nbsp;</p>

## Approach to Solution

### 1. Calculate the Circumference

1. **Initializing the radius of the circle as a variable**
    ```javascript
    let circleRadius = 4.8;
    ```
<p>&nbsp;</p>


2. **Calculating the circumference of the circle and storing it as a variable**
    ```javascript
    let circleCircumference = Math.round(2 * Math.PI * circleRadius);
    ```

    **NOTE:** We're also using the Math.round() method in order to round the resulting number
<p>&nbsp;</p>


3. **Logging everything to console using console.log()**
    ```javascript
    console.log(`The circumference is ${circleCircumference}.`);
    ```

    **OUTPUT**
    ```javascript
    The circumference is 30.
    ```


<p>&nbsp;</p>
<p>&nbsp;</p>


### 1. Calculate the Area

1. **Initializing the radius of the circle as a variable**
    ```javascript
    let circleRadius = 4.8;
    ```

    **NOTE:**
    We've already initialized this variable in the previous step.

<p>&nbsp;</p>

2. **Calculating the area of the circle and storing it as a variable**
    ```javascript
    let circleArea =  Math.round(Math.PI * Math.pow(circleRadius, 2));
    ```

    **NOTE:** We're also using the Math.round() method in order to round the resulting number

<p>&nbsp;</p>

3. **Logging everything to console using console.log()**
    ```javascript
    console.log(`The area is ${circleArea}.`);
    ```

    **OUTPUT**
    ```javascript
    The area is 72.
    ```