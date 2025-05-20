# 04 Timed Calculator


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- We will modify **‘Calculator’** exercise from the lesson about functions
- Rewrite the last function that performs all 4 operations so that there is a
delay of 3 seconds between one operation and the next

<br>
<br>


# Approach to Solution

### 🧠 Step 1: Understanding the original goal

The original exercise included chaining multiple mathematical operations:
1. Halving a number
2. Squaring the result
3. Calculating the area of a circle using that value as radius
4. Finding the percentage of the area compared to the previous value
5. Rounding the final result

The goal now is to **introduce a 3-second delay between each operation**, without changing the logic or final result.

---

### 🛠️ Step 2: Creating the function

We wrote a function named `calculator(num)` that:
- Uses `setTimeout()` to delay each operation
- Performs the operations **sequentially** using helper functions
- Logs the final result **15 seconds** after the initial call

<br>


```js

function calculator(num) {
    // Halves the input number
    let calcHalvedNum;
    setTimeout(() => {calcHalvedNum = rawHalfNumber(num);}, 3000);

    // Squares the halved number
    let calcSquaredNum;
    setTimeout(() => {calcSquaredNum = rawSquareNumber(calcHalvedNum);}, 6000);
    
    // Calculates the area of a circle with the squared number as the radius
    let calcAreaOfCircle;
    setTimeout(() => {calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);}, 9000);
    
    // Calculates what percentage the area of the circle is of the squared number
    let calcPercentOf;
    setTimeout(() => {calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);}, 12000);
    
    // Rounds the result to two decimal places
    let roundedCalcResult;
    setTimeout(() => {
        roundedCalcResult = Math.round(calcPercentOf * 100) / 100;
        console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);
    }, 15000);
}
```

### Sample Output

```js
calculator(5);

/* After 15 seconds:
Half of 5 is 2.5.
The result of squaring the number 2.5 is 6.25.
The area for a circle with radius 6.25 is 122.7184630308513.
122.7184630308513 is 1963.4954084936207% of 6.25.
The rounded result of all those calculations is 1963.5.
*/
```

<br>
<br>

---

# 💡 Bonus Section: Alternative Version Using Nested Timeouts

### Why use nested timeouts?

The flat version above schedules all `setTimeout()`s at once with fixed delays (3s, 6s, 9s...).  
While it works, it **doesn’t ensure** that each step *only starts after the previous one has really completed*.  
Nested timeouts simulate a more reliable **step-by-step flow**, useful when future operations depend on values from previous ones.

---

### Structure of nested version

Each `setTimeout()` is placed *inside the previous one*.  
This guarantees that each step only runs after the prior one is finished (and after 3 seconds of delay).

```js
function calculator(num) {
    // Halves the input number
    setTimeout(() => {
        let calcHalvedNum = rawHalfNumber(num);
        
        // Squares the halved number
        setTimeout(() => {
            let calcSquaredNum = rawSquareNumber(calcHalvedNum);
            
            // Calculates the area of a circle with the squared number as the radius
            setTimeout(() => {
                let calcAreaOfCircle = rawAreaOfCircle(calcSquaredNum);
                
                // Calculates what percentage the area of the circle is of the squared number
                setTimeout(() => {
                    let calcPercentOf = rawPercentOf(calcAreaOfCircle, calcSquaredNum);
                    
                    // Rounds the result to two decimal places
                    setTimeout(() => {
                        let roundedCalcResult = Math.round(calcPercentOf * 100) / 100;
                        console.log(`The rounded result of all those calculations is ${roundedCalcResult}.`);
                    }, 3000);
                    
                }, 3000);
                
            }, 3000);
            
        }, 3000);
        
    }, 3000);
}
```

---

### 📝 Key differences with the flat version

- ✅ **Nested version** enforces correct order strictly  
- ❌ **Harder to read** due to "callback hell" structure  