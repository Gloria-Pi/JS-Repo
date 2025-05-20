# 05 My setInterval - Base Ver.


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

## **Understanding the Difference Between `setInterval()` and `setTimeout()`**
- `setInterval()`: Executes a function at fixed intervals without waiting for the previous execution to finish.
- `setTimeout()`: Executes a function once after a specified delay.
- Since `setInterval()` is not allowed, we need to create an equivalent behavior using `setTimeout()`.

<br>

## **Implementing `mySetInterval()` Using Recursion**
- `setTimeout()` is used to execute the function after a delay.
- Inside the `setTimeout()` callback, the function calls itself recursively to schedule the next execution.
- This ensures the function runs repeatedly with the specified delay.
- A unique timeout ID (`timeoutIdRecursion`) is used, but in this implementation, it is not stored or used for clearing.

```js
function mySetInterval(randomFunction, delay) {
    let timeoutIdRecursion = setTimeout(() => {

        // Execute the provided function
        randomFunction();

        // Recursively call itself
        mySetInterval(randomFunction, delay);

    }, delay);
}
```

<br>

## **Testing the Function**
- Created two test functions:
  - `printX()`: Logs the letter "X" to the console.
  - `whenWasItCalled()`: Logs the current time using `toLocaleTimeString()`.
- Both functions were executed with `mySetInterval()` at a 2-second interval.

```js
function printX() {
    console.log("X");
}

function whenWasItCalled() {
    console.log("Function called at: " + new Date().toLocaleTimeString());
}

mySetInterval(whenWasItCalled, 2000);
mySetInterval(printX, 2000);
```

## **Expected Output**
- The function should log the messages every 2 seconds.

```
Function called at: 17:20:43
X
(...)
Function called at: 17:21:11
X
```