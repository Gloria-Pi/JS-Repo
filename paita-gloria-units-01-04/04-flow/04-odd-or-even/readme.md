# 04 Odd or Even


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

- Write a **for loop** that will iterate from 0 to 20.
- For each iteration, it will check if the current number is odd or even, and
report that to the screen (e.g. "2 is even").

<p>&nbsp;</p>


# Approach to Solution

## 1. Writing the **For Loop**

The goal of the program is to iterate through numbers from 0 to 20, checking whether each number is odd or even. To achieve this, I used a `for loop` to loop through the numbers and an `if` statement to determine if the current number is even or odd.

The logic works as follows:

- if the current number (`i`) is 0, or if the number is divisible by 2 (i.e., `i % 2 == 0`), it is considered "even"
- otherwise, the number is considered "odd"
- the result is logged to the console

```javascript
for (let i = 0; i < 21; i++) {

    let oddOrEven;

    if (i == 0 || i % 2 == 0) {
        oddOrEven = "even";
    } else {
        oddOrEven = "odd";
    }
    
    console.log(`${i} is an ${oddOrEven} number.`);
}
```

**OUTPUT:**

```javascript
0 is an even number.
1 is an odd number.
2 is an even number.
3 is an odd number.
4 is an even number.
5 is an odd number.
6 is an even number.
7 is an odd number.
8 is an even number.
9 is an odd number.
10 is an even number.
11 is an odd number.
12 is an even number.
13 is an odd number.
14 is an even number.
15 is an odd number.
16 is an even number.
17 is an odd number.
18 is an even number.
19 is an odd number.
20 is an even number.
```

<p>&nbsp;</p>

## 2. Explanation of the Loop Logic

- The `for` loop starts with `i = 0` and increments `i` by 1 on each iteration until `i` reaches 20.
- At each iteration, the code checks whether the current value of `i` is even or odd:
  - if `i` is divisible by 2 (`i % 2 == 0`), it is classified as an "even" number
  - the condition `i == 0` is included to mark `0` as an even number (although `0` is technically considered even, it would still fall through the modulus check). Thus when `i == 0`, it is classified as an "even" number.
  - otherwise, the `i` is classified as an "odd" number.