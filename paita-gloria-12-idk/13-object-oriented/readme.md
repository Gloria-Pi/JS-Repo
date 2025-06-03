# 01 DogSpeak

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Add a method to the String prototype called dogSpeak() that works as follows:

```js
let s = 'We like to learn';
s.dogSpeak();
'Dogs are smart'.dogSpeak();
```

```js
// Console output
// We like to learn Woof!
// Dogs are smart Woof!
```

Think about the following question: is it a good idea to extend prototypes of built-in Javascript objects such as String, Array, etc?


<br>
<br>

# Approach to Solution

# Adding a method to the String prototype

## 1. Extending the String Prototype

I extended JavaScript's native `String` prototype with a custom method called `dogSpeak`. This allows **all string values** to access this method.

```js
String.prototype.dogSpeak = function () {
    console.log(this + " Woof!");
};
```

* Used `this` inside the method to refer to the string instance that called `dogSpeak()`.
* Appended `" Woof!"` to the original string and printed it using `console.log()`.
* The method does **not return anything**, since the requirement was to display output, not transform or return values.

<br>

## 2. Testing the Function

The method works in both of the following cases:

### Case 1: Using a string variable

```js
let absoluteTruth = "We like to learn";
absoluteTruth.dogSpeak(); // We like to learn Woof!
```

### Case 2: Calling directly on a literal

```js
"Dogs are smart".dogSpeak(); // Dogs are smart Woof!
```

<br>
<br>

# Answering the question

> Is it a good idea to extend prototypes of built-in JavaScript objects such as `String`, `Array`, etc.?

Extending built-in JavaScript object prototypes (like `String.prototype`, `Array.prototype`, etc.) is **generally considered bad practice**. While it may seem convenient to customize these objects, the potential drawbacks significantly outweigh the benefits.

<br>

## Why It’s a Bad Idea

Here are the main reasons why extending built-in prototypes is discouraged:

- **Unpredictable Behavior**  
  Modifying a native prototype changes the behavior for *all* instances of that object globally. This can lead to bugs that are hard to detect and fix.

- **Name Collisions**  
  If multiple libraries (or your own code) define a method with the same name (e.g. `Array.prototype.contains`), the latest definition will override the previous ones. This can lead to **conflicts**, especially when the implementations behave differently.

- **Breaking Future Compatibility**  
  If a future version of JavaScript introduces a method with the same name but a different implementation, your custom method might be **overwritten silently** or cause unexpected behavior (this is exactly what happened during the [SmooshGate](https://github.com/tc39/proposal-flatMap#smooshgate)).

- **Security Risks**  
  Adding enumerable or unsafe methods to prototypes can open up **security vulnerabilities**, especially if malicious scripts can iterate over them or hijack their behavior.

- **Cross-Browser Incompatibility**  
  Custom prototype extensions may not behave consistently across different browsers or JavaScript environments.

- **Namespace Pollution**  
  Since prototypes are shared, adding your own methods introduces **global changes**. This leads to **namespace clashes** and potential bugs, especially in larger codebases or when using third-party libraries.

<br>

## When It *Might* Be Acceptable

There are a few limited scenarios where extending native prototypes *can* be justified:

- **Polyfills**  
  If you're writing a polyfill (i.e. implementing a missing method that exists in the JavaScript standard but not in older browsers), extending a prototype is acceptable — but only if you first check that the method doesn’t already exist.

  ```js
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (value) {
      return this.indexOf(value) !== -1;
    };
  }
  ```

<br>

 - ### Real-World Example: Backporting `Array.prototype.forEach`
  
    One legitimate reason to extend a native prototype is to **backport** a method that already exists in modern JavaScript specifications but might not be available in older environments.

    For example, `Array.prototype.forEach` was introduced in ECMAScript 5, but developers used to backport it for compatibility with older browsers like Internet Explorer 8:

    ```js
    if (!Array.prototype.forEach) {
      Array.prototype.forEach = function (callback, thisArg) {
        for (let i = 0; i < this.length; i++) {
          if (this.hasOwnProperty(i)) {
            callback.call(thisArg, this[i], i, this);
          }
        }
      };
    }
    ```

    This kind of polyfill ensures future compatibility and doesn’t introduce naming conflicts as long as the method name and behavior follow the official spec.

<br>

## Better Alternatives

* **Create Custom Utility Functions**

  Instead of modifying built-ins, create standalone helper functions that are safer and easier to maintain.

* **Use Libraries**

  Libraries like Lodash or Ramda provide well-tested utility methods without modifying prototypes.

<br>

## ⚠️ Monkey Patching Warning

Extending built-in prototypes is often referred to as **monkey patching**. This practice has been the source of major compatibility issues in the past and is discouraged by the JavaScript community. For example:

```js
Array.prototype.myMethod = function () {
  // custom logic
};
```

This method will now exist on **every** array, which is risky and potentially harmful — especially if a future JavaScript version adds a method with the same name but different behavior.

<br>

### ⚠️ The MooTools `.flatten()` Accident (a.k.a. SmooshGate)

The JavaScript community has experienced real issues due to prototype extension. A famous example is the **MooTools** library, which added a custom method called `.flatten()` to `Array.prototype`.

When TC39 (the committee behind ECMAScript) proposed adding `Array.prototype.flatten()` as a standard method, it collided with MooTools’ existing implementation. This caused errors in websites using MooTools because the method signatures were different.

To avoid breaking the web, the committee had to **rename the official method to `flat()`**, which eventually led to the now well-known **SmooshGate**.

📚 [More on SmooshGate](https://github.com/tc39/proposal-flatMap#smooshgate)

This incident is a cautionary tale: **even large-scale libraries can introduce major issues by modifying built-in prototypes**.

<br>
<br>

# Sources

* [Great Frontend: Why is extending built-in JavaScript objects not a good idea?](https://www.greatfrontend.com/questions/quiz/why-is-extending-built-in-javascript-objects-not-a-good-idea)
* [Stack Overflow: Why is extending native objects a bad practice?](https://stackoverflow.com/questions/14034180/why-is-extending-native-objects-a-bad-practice)
* [MDN Web Docs: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
* [SmooshGate explanation (GitHub)](https://github.com/tc39/proposal-flatMap#smooshgate)