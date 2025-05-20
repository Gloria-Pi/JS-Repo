# 01 Variable Scope


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


## Assignment

- Write a .js file that uses both *local* and *global* variables in the same project
- Recreate the local and global scope examples in your browser
- Try to call the function “addNumbers” a few more times
- Make sure that you understand exactly what’s happening at every stage


<p>&nbsp;</p>

## Approach to Solution

### 1.Writing the .js file and recreating the local and global scope examples
First, I initialized a function that, using a **local variable**, could add two given arguments (*numbers*) and return said result:
    
```javascript
function addNumbers(num1, num2) {
    let localResult = num1 + num2;
    console.log("The local result is: " + localResult);
}
```

Second, I wrote the same function, but instead of initializing the variable locally, I initialized it outside of the function (in the **global scope**):
    
```javascript
    
let globalResult;

function addNumbers1(num1, num2) {
    globalResult = num1 + num2;
    console.log("The global result is: " + globalResult);
}
```

Then, I called those functions and tried to store their resulting values to the console log.
 

```javascript
addNumbers(5, 7);                 // "The local result is: 12"
//console.log(localResult);       // "ReferenceError: localResult is not defined"


addNumbers1(5, 7);                // "The global result is: 12"
console.log(globalResult);        // "12"
```

<p>&nbsp;</p>

### 2. Running the code
After running the program, I discovered that `console.log(localResult)` leads to a Reference Error; that's because `localResult` is a **local variable**, initialized *inside* the function, which means that it's inaccessible outside of it.
The reason why `addNumbers(5, 7)` works is because the last statement of the function prints the result to the console, calling `localResult` from within the function itself.

In order to keep the interpreter from pointing out the error and interrupting the program, I've turned `console.log(localResult)` into a comment.

Running `addNumbers1(5, 7)` and `console.log(globalResult)` doesn't lead to errors because `globalResult` is a variable which exists outside of the function, and can be accessed anywhere in the script.

<p>&nbsp;</p>


### 3. Calling AddNumbers() multiple times
By calling `addNumbers()` and `addNumbers1()` multiple times with different arguments, I noticed the same behaviour described above.
- The variable `localVariable` gets recreated whenever I call `addNumbers()`.
- The variable `globalVariable` is simply updated whenever I call `addNumbers1()`.

<p>&nbsp;</p>

### 4. Bonus Considerations
Another way to initialize a global variable is to omit `let`, `const`, `var` from the initialization process inside the function.
Example:

```javascript
function addNumbers(num1, num2) {
    implicitGlobalResult = num1 + num2;
    console.log("This result is implicitly part of the global scope: " + implicitGlobalResult);
}
```

This is not good practice, though, as omitting `let`, `const`, `var` can lead to unintended side effects.