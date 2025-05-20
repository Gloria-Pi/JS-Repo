/**
 * @file main.js
 * @author Gloria Paita
 *
 * @description
 * This script contains my attempt to solve the assignment "05 My setInterval" from the "Timing" unit.
 * It implements `mySetInterval()`, a function that mimics `setInterval()` using `setTimeout()`
 * and automatically stops execution after 15 intervals.
 */



/**
 * @function mySetInterval
 * @description Executes a given function at fixed time intervals, mimicking `setInterval()`.
 * The execution automatically stops after 15 intervals.
 * 
 * @param {Function} randomFunction - The function to execute repeatedly.
 * @param {number} delay - The time in milliseconds between each function execution.
 * @return {void} This function doesn't return anything. The return is used to break out of the recursion.
 * 
 * @example
 * function logTime() {
 *     console.log("Current time:", new Date().toLocaleTimeString());
 * }
 * 
 * mySetInterval(logTime, 1000);
 * // Logs the time every second, stopping after 15 executions.
 */
function mySetInterval(randomFunction, delay) {

    // Timestamp of the first time the function is called, marking the start time
    const startTimestamp = Date.now();

    function have15IntervalsPassed(randomFunction, delay) {

        // Stops the recursion if 15 intervals have passed...
        if (Date.now() >= startTimestamp + (delay * 15)) {
            
            return;
    
        // ...otherwise, keeps executing the given function once every n of milliseconds
        } else {
    
            let timeoutIdRecursion = setTimeout(() => {

                // Executes the function given as argument
                randomFunction();
    
                // Invokes the function recursively after a certain delay
                have15IntervalsPassed(randomFunction, delay);
            }, delay);
        }

    }

    //First time the function is invoked
    have15IntervalsPassed(randomFunction, delay);

}



/**
 * Logs the time elapsed since the first execution.
 */
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



/* OUTPUT:
Elapsed time: 0 ms.
Elapsed time: 1003 ms.
Elapsed time: 2007 ms.
Elapsed time: 3021 ms.
Elapsed time: 4026 ms.
Elapsed time: 5034 ms.
Elapsed time: 6036 ms.
Elapsed time: 7049 ms.
Elapsed time: 8052 ms.
Elapsed time: 9059 ms.
Elapsed time: 10072 ms.
Elapsed time: 11074 ms.
Elapsed time: 12084 ms.
Elapsed time: 13089 ms.
Elapsed time: 14096 ms.
*/