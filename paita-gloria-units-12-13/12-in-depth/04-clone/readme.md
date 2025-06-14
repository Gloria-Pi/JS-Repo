# 04 Clone

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Write a function `clone()` that clones any object

- Test it on the object in the next slide  
- Change the name of the cloned object and make sure that the original did not change

> Important:  
> Write the function yourself, do not use built-in functions such as `Object.assign()`, `jQuery.extend()` or
> `JSON.parse(JSON.stringify())`

The object to clone and test:

```js
{
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    active: false,
    salary: 37993,
    birth: Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time),
    bankInformation:
    { amount: '802.04',
    date: Thu Feb 02 2012 00:00:00 GMT+0100 (W. Europe Standard Time),
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694' }
}
```

<br>
<br>

# Approach to Solution

## 1. **Understanding the Goal**

The goal was to create a **deep cloning function** that can:

* Copy **primitives** as-is.
* Duplicate **objects** and **arrays** recursively.
* Handle **Date objects** by cloning them by value, not reference.

<br>

## 2. **Creating the Function**

The function is called `clone()` and determines the type of the input before deciding how to copy it.

```js
function clone(thingToClone) {
    if (thingToClone === null || typeof thingToClone !== "object") {
        return thingToClone;
    }

    if (thingToClone instanceof Date) {
        return new Date(thingToClone);
    }

    const clonedObjectOrArray = Array.isArray(thingToClone) ? [] : {};

    Object.entries(thingToClone).forEach(entry => {
        const [key, value] = entry;
        clonedObjectOrArray[key] = clone(value);
    });

    return clonedObjectOrArray;
}
```

<br>

## 3. **Testing the Function**

The function was tested by:

* Changing a property (`name`) in the cloned object and confirming the original remained unchanged.
* Replacing a nested `Date` object inside the clone with a string, to verify separation.

```js
// Test 1: Change name in clone and verify original remains unchanged
clonedObject.name = "Pinco Panco";
console.log("The name in the cloned object (after changing it) is " + clonedObject.name);
console.log("The name in the original object is still " + originalObject.name);

// Test 2: Mutate the clone's nested property
console.log(`Is the "date" property in the cloned object a Date object? ${clonedObject["bankInformation"]["date"] instanceof Date}`);
clonedObject["bankInformation"]["date"] = "not a date anymore.";
console.log("After having changed the 'date' property in the cloned object, its value is " + clonedObject["bankInformation"]["date"]);
console.log("...while the 'date' property in the original object still reads: " + originalObject["bankInformation"]["date"]);
```


<br>

## Final Result

* Changing `clonedObject.name` does **not** affect `originalObject.name`.  
* Modifying nested properties (`bankInformation.date`) in the clone also leaves the original untouched.  
* `Date` objects were successfully cloned using:

```js
if (thingToClone instanceof Date) {
    return new Date(thingToClone);
}
```

<br>
<br>

# Explanation of Key Concepts

## Reference vs Value — Why Deep Copies Are Needed

JavaScript differentiates between **primitive values** and **reference types**:

| Type                                                                   | Assigned / Cloned by |
| ---------------------------------------------------------------------- | -------------------- |
| `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | **By Value**         |
| `object`, `array`, `function`, `Date`, etc.                            | **By Reference**     |

If one writes:

```js
const a = { name: "Ash" };
const b = a;
b.name = "Misty";
```

Then `a.name` will also be `"Misty"`, because both variables point to the same object in memory.

This is why **deep cloning** is important: it breaks the reference and creates a **fully independent** structure that can be safely modified.

<br>

## Why Deep Cloning with a Custom Function Is Discouraged

Using custom deep cloning logic in production code is considered **bad practice** for several reasons:

* **Edge cases** are hard to manage (e.g., functions, circular references, custom class instances).  
* It may silently fail or create inconsistent behavior for special object types.  
* Modern apps are better off using structured cloning or external libraries.

The function provided is not suitable for large-scale, real-world applications.

<br>

## Key/Value Ordering in the Cloned Object

In JavaScript, the order of keys in an object is **not guaranteed**, especially between **string keys and symbol keys**, or keys that are numeric strings.

When cloning with:

```js
Object.entries(thingToClone).forEach(entry => {
    const [key, value] = entry;
    clonedObjectOrArray[key] = clone(value);
});
```

the **insertion order is preserved** as long as the engine internally maintains it. However, the moment one logs or inspects the object, the order may appear **different** due to how browsers print key/value pairs (e.g., placing numeric keys first). This is purely a matter of display, not a mutation of the structure.

<br>

## The Date problem

The object provided for testing the clone() function caused a SyntaxError in the Chrome console.  
The reason being that this syntax:

```js
birth: Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)
```

is **not valid JavaScript**.

That's because `Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)` is just a *human-readable* `Date` string (the result of `console.log(new Date(...))`). When we try to assign it without quotes or `new Date(...)`, it gets treated as an undefined variable or object → hence the **syntax error**.

<br>

### What to do instead

To **create a valid `Date` object**, you must wrap the string in `new Date(...)`, like so:

```js
birth: new Date("Sun Apr 18 1965 13:38:00 GMT+0200 (W. Europe Daylight Time)")
```

or, simpler and more robust:

```js
birth: new Date("1965-04-18T13:38:00+02:00")
```