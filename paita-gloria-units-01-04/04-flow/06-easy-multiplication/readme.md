# 06 Easy Multiplication


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Write a **for loop** that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9 and log
the result (e.g. "2 * 9 = 18").

2. **Bonus**: Use a **nested for loop** to show the tables for every multiplier from 1
to 10 (100 results total).


<p>&nbsp;</p>

## 1. Creating the for loop
This loop iterates from **0 to 10**, multiplying each number by 9 and logging the output in the format `"number * 9 = result"`.

```javascript
for (let i = 0; i < 11; i++) {
    let multiplication = i * 9;
    console.log(`${i} * 9 = ${multiplication}`);
}
```

**OUTPUT:**

```javascript
0 * 9 = 0
1 * 9 = 9
2 * 9 = 18
3 * 9 = 27
4 * 9 = 36
5 * 9 = 45
6 * 9 = 54
7 * 9 = 63
8 * 9 = 72
9 * 9 = 81
10 * 9 = 90
```

<p>&nbsp;</p>

## 2. Bonus: Creating the nested for loop
The **nested loop** generates multiplication tables from **1 to 10**. The outer loop iterates through numbers **1 to 10**, while the inner loop multiplies each number by values **1 to 10**.

```javascript
for (let i = 1; i < 11; i++) {

    console.log(`This is the ${i} times table`);

    for (let j = 1; j < 11; j++) {
        let multiplication = i * j;
        console.log(`${i} * ${j} = ${multiplication}`);
    }
}
```

**OUTPUT:**

```javascript
This is the 1 times table
1 * 1 = 1
1 * 2 = 2
(...)
This is the 10 times table
(...)
10 * 9 = 90
10 * 10 = 100
```

<p>&nbsp;</p>

## 3. Summary
- The first loop generates the **9 times table**.
- The nested loop covers **all multiplication tables from 1 to 10**.
- The inner loop ensures each number is multiplied correctly and logs the full table.
- For greater clarity, I've added `` console.log(`This is the ${i} times table`); `` to indicate which iteration of the outer loop is currently running.

