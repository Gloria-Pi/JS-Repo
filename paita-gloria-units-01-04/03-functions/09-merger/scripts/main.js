/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the implementation of two functions: `merger` and `coercionAndTypeCheck`.
 * 
 * Both functions explore the behavior of the `+` operator in JavaScript, which can act as:
 * - The **Addition Operator** when applied to numbers, adding them together.
 * - The **String Concatenation Operator** when applied to strings, combining them into one string.
 * 
 * The results returned by these functions depend on the types of the input parameters:
 * - If the parameters are of the same type and compatible (numbers or strings), the result is either their sum or concatenation.
 * - If the parameters are of different types, the functions return `null` (or a coerced result in the case of `coercionAndTypeCheck`).
 * 
 * These functions help demonstrate type coercion and type checking behavior in JavaScript.
 * 
 */


/**
 * @function merger
 * @description
 * This function takes two parameters and performs an operation depending on their types.
 * - If both parameters are of the same type:
 *     - If both parameters are numbers, it returns their sum
 *     - If both parameters are strings, it returns their concatenation
 *     - If both parameters are of any other type (e.g., boolean, object), it returns `null`
 * - If the parameters are of different types, it returns null
 *
 *
 * @param {*} parameter1 - The first parameter to be compared.
 * @param {*} parameter2 - The second parameter to be compared.
 * @returns {number|string|null} - The result of merging the parameters: either their sum (if numbers), concatenation (if strings), or `null` if types are mismatched or unsupported (e.g., boolean, object).
 * 
 * @example
 * console.log(merger(true, false));                // Logs: "null"
 *
 * @example
 * console.log(merger(5, 6));                      // Logs: "11"
 * 
 * @example
 * console.log(merger("Hello", "World"));          // Logs: "HelloWorld"
 */

function merger(parameter1, parameter2) {
    if (typeof parameter1 === typeof parameter2) {

        if (typeof parameter1 === "number" || typeof parameter1 === "string") {
            let concatenationOrSum = parameter1 + parameter2;
            return concatenationOrSum;
        }

        else {
            return null;
        }
    }

    else {
        return null;
    }
}

//Calling the function: the parameters have the same type and are either numbers or strings
console.log(merger(5, 6));                      // Logs: "11"
console.log(merger("Hello", "World"));          // Logs: "HelloWorld"

//Calling the function: the parameters have the same type but are neither numbers nor strings
console.log(merger(true, false));                   // Logs: null
console.log(merger(BigInt("123456789012345678901234567890"), BigInt("123456787532345678901234567890")));                    // Logs: null

//Calling the function: the parameters are of different types
console.log(merger(true, 1));                   // Logs: null
console.log(merger(5, "World"));                // Logs: null
console.log(merger(null, undefined));           // Logs: null
console.log(merger(5, "6"));                    // Logs: null




/**
 * @function coercionAndTypeCheck
 * @description
 * This function takes two parameters and performs an operation depending on their types.
 * 
 * If both parameters are of different types, it will:
 * - attempt to add them together by performing a type coercion
 * - log the type of the resulting value to the console
 * - return the result of the `+` operation.
 * 
 * If the parameters are of the same type, it returns null
 *
 * @param {*} parameter1 - The first parameter to be compared.
 * @param {*} parameter2 - The second parameter to be compared.
 * @returns {*} - The coerced result if the types are different, or `null` if the types are the same.
 * 
 * @example
 * console.log(coercionAndTypeCheck(5, "World"));          
 * // Logs: "This is a string" and returns "5World"
 *
 * @example
 * console.log(coercionAndTypeCheck(5, true)); 
 * // Logs: "This is a number" and returns "6"
 *
 * @example
 * console.log(coercionAndTypeCheck(true, "6"));
 * // Logs: "This is a string" and returns "true6"
 *
 * @example
 * console.log(coercionAndTypeCheck(undefined, null));
 * // Logs: "This is a number" and returns "NaN"
 *
 * @example
 * console.log(coercionAndTypeCheck(5, BigInt("123456789012345678901234567890")));
 * // Throws: "TypeError: Cannot mix BigInt and other types, use explicit conversions"
 */

function coercionAndTypeCheck(parameter1, parameter2) {
    if (typeof parameter1 !== typeof parameter2) {
        let coercion = parameter1 + parameter2;
        console.log(`This is a ${typeof coercion}`);
        return coercion;
    }
    
    else {
        return null;
    }  
}


//Calling the function: the parameters have the same type

console.log(coercionAndTypeCheck(5, 6));
// Logs: "null"

console.log(coercionAndTypeCheck("Hello", "World"));
// Logs: "null"

console.log(coercionAndTypeCheck(true, false));
// Logs: "null"


//Calling the function: the parameters have different types

console.log(coercionAndTypeCheck(5, "World"));          
// Logs: "This is a string" and returns "5World"

console.log(coercionAndTypeCheck(5, true));
// Logs: "This is a number" and returns "6"

console.log(coercionAndTypeCheck(true, "6"));
// Logs: "This is a string" and returns "true6"

console.log(coercionAndTypeCheck(true, undefined));
// Logs: "This is a number" and returns "NaN"

console.log(coercionAndTypeCheck(undefined, null));
// Logs: "This is a number" and returns "NaN"

console.log(coercionAndTypeCheck(6, null));
// Logs: "This is a number" and returns "6"

console.log(coercionAndTypeCheck("5", BigInt("123456787532345678901234567890")));          
// Logs: "This is a string" and returns "5123456787532345678901234567890"

console.log(coercionAndTypeCheck(5, BigInt("123456787532345678901234567890")));          
// Throws: "TypeError: Cannot mix BigInt and other types, use explicit conversions"