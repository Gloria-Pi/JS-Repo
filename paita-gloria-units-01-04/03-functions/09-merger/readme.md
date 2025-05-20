# 09 Merger


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

Write a function called `merger()` that takes two parameters and performs the following operation:
- If both parameters are numbers, return the sum
- If both parameters are strings, return the concatenation of the strings
- If the parameters are anything else, return `null`

Include a doc file in which you explain why two operators might have the same symbol but work differently based on the type of the parameters.


<p>&nbsp;</p>


# Approach to Solution

## Creating the `merger` Function
This function takes two parameters (`parameter1`, `parameter2`) and performs an operation based on their types.
- If both parameters are numbers, it returns their sum.
- If both are strings, it concatenates them.
- If the types are anything else, it returns `null`.


```javascript
    function merger(parameter1, parameter2) {

        // Checks if the two parameters are of the same type
        if (typeof parameter1 === typeof parameter2) {

            // Checks if the type of both parameters is number or string and returns the result accordingly
            if (typeof parameter1 === "number" || typeof parameter1 === "string") {
                let concatenationOrSum = parameter1 + parameter2;
                return concatenationOrSum;
            }

            // If it's not a number or string (i.e. other types), returns null
            else {
                return null;
            }
        }

         // Returns null if the parameters have different types
        else {
            return null;
        }
    }
```

**OUTPUT:**

```javascript
    merger(5, 6);                       // Logs: "11"
    merger("Hello", "World");           // Logs: "HelloWorld"
    merger(true, false);                // Logs: "null"
    merger(BigInt("123456789012345678901234567890"), BigInt("123456787532345678901234567890"));  // Logs: "null"
    merger(5, "World");                 // Logs: "null"
```

<p>&nbsp;</p>

---

## Bonus: Studying Type Coercion Using the + Operator

The function `coercionAndTypeCheck()` was created to study the consequences of using the `+` operator for type coercion when operands are of different types. While the `merger()` function focuses on matching types before performing an operation, `coercionAndTypeCheck()` investigates what happens when types differ.

The `coercionAndTypeCheck()` function checks if two parameters are of different types:
- if they are, it attempts to add them together, logging the type of the resulting value to the console and returning the result of the `+` operation.
- if they aren't, it returns `null`.

```javascript
    function coercionAndTypeCheck(parameter1, parameter2) {

        if (typeof parameter1 !== typeof parameter2) {
            let coercion = parameter1 + parameter2;
            console.log(`This is a ${typeof coercion}`);
            return coercion;

        } else {
            return null;
        }
    }
```

**OUTPUT:**

```javascript
    coercionAndTypeCheck(5, 6);                 // Logs: "null"
    coercionAndTypeCheck("Hello", "World");     // Logs: "null"
    coercionAndTypeCheck(true, false);          // Logs: "null"
    (...)
    coercionAndTypeCheck(5, "World");           // Logs: "This is a string" and returns "5World"
    coercionAndTypeCheck(5, true);              // Logs: "This is a number" and returns "6"
    coercionAndTypeCheck(true, "6");            // Logs: "This is a string" and returns "true6"
    coercionAndTypeCheck(undefined, null);      // Logs: "This is a number" and returns "NaN"
    coercionAndTypeCheck(6, null);              // Logs: "This is a number" and returns "6"

    coercionAndTypeCheck("5", BigInt("123456787532345678901234567890"));
    // Logs: "This is a string" and returns "5123456787532345678901234567890"

    coercionAndTypeCheck(5, BigInt("123456787532345678901234567890"));
    // Throws: "TypeError: Cannot mix BigInt and other types, use explicit conversions"
```

<p>&nbsp;</p>

---

## Conclusion
The `+` symbol in JavaScript serves multiple roles, with the specific behavior depending on the context in which it is used. JavaScript determines which operation to apply based on the types of the operands:

- ### **Addition Operator**
    A binary operator. When evaluating it's operands, the `+` operator first coerces both operands to primitive data types, and then tests the two operands' types.
    - When applied to **two string** operands, it concatenates the strings.
            - If one side is a string, the other operand is also converted to a string and they are concatenated.
    - When applied to **two number** operands, it performs numeric addition, returning the sum of the two numbers.
            - When one of the operands is a number and the other one is of a non-string, non-BigInt value, the Addition `+` Operator coerces this second operand to a number as well (e.g. `true + 1;` returns 2).

    - When both operands are **BigInts**, it performs *BigInt addition*. But if one operand is a BigInt and the other is of a different type, it throws a `TypeError`.
    

- ### **Unary Plus Operator**
    An unary operator. The `+` operator tries to convert its operand into a number. If it's unable to (e.g. such as with a string like `hello`), it'll evaluate to `NaN`. When the Unary `+` Operator is applied to a BigInt value, it throws a `TypeError` to prevent unintended implicit coercion causing loss of precision.

<p>&nbsp;</p>

While the + operator may appear the same, its behavior can vary significantly depending on the types of the operands. It can either perform **addition**, **string concatenation**, or **type coercion**, which makes it a highly context-dependent operator in JavaScript.