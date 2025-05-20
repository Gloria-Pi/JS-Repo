# 05 My setInterval - Stop After 15 Intervals Ver.


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Pretend that `setInterval()` doesn't exist
- Re-create it using `setTimeout` naming your function `mySetInterval`
- Test your new function
- Modify your function so that it automatically stops after 15 intervals

<br>
<br>

# Approach to Solution

## **Mimicking `setInterval()` with `setTimeout()`**
Since `setInterval()` continuously executes a function at fixed intervals, I needed to replicate this behavior using `setTimeout()` recursively.

<br>

## **Tracking the Execution Time**
To ensure the function stops after 15 intervals, I:
- Stored the **start timestamp** when `mySetInterval()` was first called.
- Used `Date.now()` to compare the elapsed time to `delay * 15`.

<br>

## **Recursive Execution with Stop Condition**
Instead of infinite recursion, the function stops when `Date.now()` surpasses the start time plus `delay * 15`.

<br>

## Implementation

```js
function mySetInterval(randomFunction, delay) {

    const startTimestamp = Date.now();

    function have15IntervalsPassed(randomFunction, delay) {

        // Stops the recursion if 15 intervals have passed...
        if (Date.now() >= startTimestamp + (delay * 15)) {
            
            return;
    
        // ...otherwise, keeps executing the given function once every n of milliseconds
        } else {
    
            let timeoutIdRecursion = setTimeout(() => {

                randomFunction();
                have15IntervalsPassed(randomFunction, delay);
                
            }, delay);
        }

    }

    //First time the function is invoked
    have15IntervalsPassed(randomFunction, delay);

}
```

<br>

## Testing the Function

To test `mySetInterval()`, I created a function that logs the elapsed time since execution began:

```js
let startTime;

function howManyMsHavePassed() {

    // If it's the first time this function gets called, set a startTime
    if (!startTime) {

        startTime = new Date().getTime();
    }
        
    let timeElapsed = new Date().getTime() - startTime;  
    console.log(`Elapsed time: ${timeElapsed} ms.`);

}

// Start the interval with a 1-second delay
mySetInterval(howManyMsHavePassed, 1000);
```

### **Expected Output:**

```
Elapsed time: 0 ms.
Elapsed time: 1003 ms.
Elapsed time: 2007 ms.
Elapsed time: 3021 ms.
...
Elapsed time: 14096 ms.
```

After 15 intervals, the function stops executing automatically.