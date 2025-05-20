# 03 Dog Age Calculator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>



# Assignment

1. Write a function named `calculateDogAge` that:
    - takes 1 parameter: the dog's age in human years
    - calculates the dog's age based on the conversion rate of 1 human year to 7 dog years
    - outputs the result to the screen like so: "Your dog is NN years old in dog years!"
Call the function three times with different sets of values
 
2. Bonus:
    Add another parameter to the function that takes the conversion rate of human to dog years


<p>&nbsp;</p>


# Approach to Solution

## 1. Write the calculateDogAge() function

The function converts a dog's age into human years by:
- multiplying the age of the dog (represented by the parameter `dogAge`) by 7
- storing the result of said multiplication (a *number*) in a local variable, called `convertedAge`

and logs the result to the console using `console.log()`

```javascript
    function calculateDogAge(dogAge) {
        let convertedAge = dogAge * 7;
        console.log(`Your dog is ${convertedAge} years old in dog years!`);
    }
```

**OUTPUT:**

```javascript
    calculateDogAge(1);         // Logs: "Your dog is 7 years old in dog years!"
    calculateDogAge(6);         // Logs: "Your dog is 42 years old in dog years!"
    calculateDogAge(13);        // Logs: "Your dog is 91 years old in dog years!"
```

<p>&nbsp;</p>

## 2. BONUS: Write the calculateDogAgeBonus() function
This function is similar to the previous one, but offers us the possibility of picking the conversion rate of human to dog years ourselves through the added parameter `conversionRate`.

**NOTE:** `conversionRate` takes a number.


```javascript
    function calculateDogAgeBonus(dogAge, conversionRate) {
        let convertedAge = dogAge * conversionRate;
        console.log(`Your dog is ${convertedAge} years old in dog years!`);
    }
```

**OUTPUT:**

```javascript
    calculateDogAgeBonus(1, 7);         // Logs: "Your dog is 7 years old in dog years!"
    calculateDogAgeBonus(6, 8);         // Logs: "Your dog is 48 years old in dog years!"
    calculateDogAgeBonus(13, 9);        // Logs: "Your dog is 117 years old in dog years!"
```
