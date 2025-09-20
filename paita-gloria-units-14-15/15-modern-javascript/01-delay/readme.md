# 01 Delay

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Use promises to implement a delay function that can be used like in the code below
- Your implementation should work for any type of Javascript function such as
    - regular functions
    - arrow functions
    - anonymous functions
`delay(300).then(myFunction);`

<br>
<br>

# Approach to Solution

At first glance, the task seemed simple: create a function that waits a given amount of time, then executes another function. However, as I began testing my implementation, I encountered some unexpected behavior.

<br>

## My First Attempt

I wrote the `delay` function like this:

```js
function delay(delayedMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayedMs);
  });
}
```

I then tried calling it with:

```js
delay(2000).then(console.log("Regular named function!"));
```

To my surprise, the message appeared **immediately**, without any delay. I was confused: wasn’t the `.then()` supposed to wait for the `delay`?

<br>

## Realization: Understanding What `.then()` Expects

After a bit of debugging and researching, I realized that I had misunderstood how `.then()` works.

When I wrote:

```js
then(console.log("..."));
```

I was **calling** `console.log` immediately. Its **result** (`undefined`) was being passed to `.then()`, not the function itself. That explained why the message was logged right away.

`.then()` doesn’t want a value, it wants a **function** to run *later*.

<br>

## Fixing the Problem

I had to **pass a function**, not call it. So I rewrote my usage like this:

```js
delay(2000).then(() => console.log("Regular named function!"));
```

Now, the message was displayed **after 2 seconds**, as expected.

<br>

## Exploring Different Function Types

To be thorough, I tested the `delay` function with different types of functions:

### 1. Regular Named Function

```js
function greet() {
  console.log("Delayed regular named function!");
}

delay(2000).then(greet);
```

### 2. Arrow Function

```js
delay(4000).then(() => console.log("Delayed arrow function!"));
```

### 3. Anonymous Function

```js
delay(5000).then(function () {
  console.log("Delayed anonymous function!");
});
```

All of these worked as long as I **passed a function reference**, not the result of calling the function.

<br>

## Key Lesson Learned

The main takeaway from this experience is the following:

> **In JavaScript, `.then()` expects a function, NOT the result of a function call.**

| Code Example                | Outcome                         |
| --------------------------- | ------------------------------- |
| `then(myFunction)`          | ✅ Runs `myFunction` after delay |
| `then(() => myFunction())`  | ✅ Also valid                    |
| `then(function () { ... })` | ✅ Works as expected             |
| `then(myFunction())`        | ❌ Calls immediately             |
| `then(console.log("Hi!"))`  | ❌ Logs right away, not delayed  |

<br>

## Final Thoughts

This assignment taught me more than just how to implement a delay. It reminded me to think carefully about **function references** vs **function calls**, especially when working with asynchronous patterns like Promises.