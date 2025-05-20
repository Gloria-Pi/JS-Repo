# 02 Calculate My Age


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


## Assignment

- Store your birth year in a variable.
- Store a future year in a variable.
- Calculate your 2 possible ages for that year based on the stored values.
- For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

- Output them to the console like so: "I will be either NN or NN in YYYY", substituting the values


<p>&nbsp;</p>

## Approach to Solution

### 1. Initializing the variables


**Required Variables:**
```javascript
let birthYear = 1996;               //the year when I was born
let futureYear = 2034;              //a random year in the future

let howOldAmI = futureYear - birthYear;
//My age if I already have celebrated my birthday this year

let howOldAmI2 = howOldAmI - 1;
//My age if I still haven't celebrated my birthday this year
```

<p>&nbsp;</p>

### 2. Using the console.log() method to display the message

JavaScript determines how variables are treated based on the operators used in the statement. Below are two different ways of concatenating strings and numbers, with an explanation of how JavaScript handles type conversion in each case.

1. **Using commas and the operator + in order to compose the sentence**
    ```javascript
    console.log("I will be either", howOldAmI, "or", howOldAmI2, "in", futureYear + ".");
    ```

     **OUTPUT**
    
    I will be either 38 or 37 in 2034.

    **CONSIDERATIONS**

    - 38 and 37 remain numbers, because the comma inside console.log() doesn't concatenate values. It just separates the arguments, preserving their original data types.

    - 2034 was turned into a string due to the `+` operator. Since `futureYear` was followed by a string (`"."`), it forced JavaScript to convert the value 2034 into a string before performing concatenation.
    
<p>&nbsp;</p>


2. **Using template literals with backticks**

    ```javascript
    console.log(`I will be either ${howOldAmI} or ${howOldAmI2} in ${futureYear}.`);
    ```

    **OUTPUT**
    
    I will be either 38 or 37 in 2034.

    **CONSIDERATIONS**

    Template literals automatically convert all variables to strings when they are inside ${}.

    `howOldAmI`, `howOldAmI2`, and `futureYear` are numbers, but in this case they were implicitly converted to strings before being inserted into the final output.