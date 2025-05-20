# Operators that Share the Same Symbol 


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment
From Exercise 09 Merger (Unit 03 - Functions):
> Include a doc file in which you explain why two operators might have the same symbol but work differently based on the type of the parameters.

<p>&nbsp;</p>



# Approach to Solution

## Case Study: `+`

The `+` symbol in JavaScript serves as multiple operators, which conduct different operations depending on the context in which they are used.
Although using the same symbol, JavaScript determines which operator to apply based on how many operands are to be worked on, and their types.

For example, the `+` symbol is used for these two operators:

<p>&nbsp;</p>

### **Unary Plus `+` Operator (`+x`)**:

An unary operator. The `+` operator tries to convert its operand into a number.

- If it's unable to (e.g. such as with strings that can't be parsed into a number, like `hello`), it'll convert the value to `NaN`.

- When the Unary `+` Operator is applied to a BigInt value, it throws a `TypeError` to prevent unintended implicit coercion causing loss of precision.

<p>&nbsp;</p>

### **Addition `+` Operator (Binary `x + y`)**:

When evaluating it's operands, the `+` operator first coerces both operands to primitive data types, and then tests the two operands' types.
- When applied to **two string** operands, it concatenates the strings.
    - If one side is a string, the other operand is also converted to a string and they are concatenated.
- When applied to **two number** operands, it performs numeric addition, returning the sum of the two numbers.
    - When one of the operands is a number and the other one is of a non-string, non-BigInt value, the Addition `+` Operator coerces this second operand to a number as well (e.g. `true + 1;` returns 2).

- When both operands are **BigInts**, it performs *BigInt addition*. But if one operand is a BigInt and the other is of a different type, it throws a `TypeError`.

<p>&nbsp;</p>

## Conclusion

This behavior is the result of JavaScript's **loosely-typed system** and its **type coercion** mechanism. The language was designed to be flexible, so it tries to make sense of the values it receives and to convert them into something it can operate on.

Since JavaScript doesn't strictly enforce data types, it allows operations to be applied to different types of data, with different behaviors depending on the number and types of the data the operator has to work with.

JavaScript allows operators like `+` to work with multiple data types, which is why they can behave differently based on the types of the operands.

In particular:

- **For Numeric Types**: The `+` operator acts as an arithmetic operator and adds the two numbers together.
- **For String Types**: The `+` operator becomes a string concatenation operator, joining the strings.
- **For Mixed Types**: If one operand is a string, the other operand is coerced into a string and the result is concatenation. If both operands are numbers, it performs arithmetic addition. However, if the operands are of incompatible types (such as `undefined` and `boolean`), JavaScript will coerce them into a type it can work with or return a result like `NaN` in certain cases.
