# 05 Clone Strings

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

Write a function cloneStrings() that only clones string properties of an object.

Starting with the example object of the previous exercise this should be the result:

```js
{
    name: 'Green Mueller',
    email: 'Rigoberto_Muller47@yahoo.com',
    address: '575 Aiden Forks',
    bio: 'Tenetur voluptatem odit labore et voluptatem vel qui placeat sit.',
    bankInformation:
    { amount: '802.04',
    business: 'Bernhard, Kuhn and Stehr',
    name: 'Investment Account 8624',
    type: 'payment',
    account: '34889694' }
}
```

<br>
<br>

# Approach to Solution

## Step 1: Defining the Problem

The goal was to extract **only the string-type values** from a complex object, including any nested structures, and return a new object (or array) containing only those string properties.

<br>

## Step 2: Implementing cloneStrings()

I implemented a recursive solution that:

* Traverses objects **and arrays** (merely because... why not?).
* Clones only string values.
* Skips numbers, booleans, nulls, and Dates.
* Avoids adding empty nested objects.


```js
function cloneStrings(thingToClone) {
    if (thingToClone === null || typeof thingToClone !== "object") {
        return undefined;
    }

    if (thingToClone instanceof Date) {
        return undefined;
    }

    const clonedObjectOrArray = Array.isArray(thingToClone) ? [] : {};

    Object.entries(thingToClone).forEach(([key, value]) => {
        if (typeof value === "string") {
            clonedObjectOrArray[key] = value;
        } else if (typeof value === "object" && value !== null) {
            const nested = cloneStrings(value);
            if (nested && Object.keys(nested).length > 0) {
                clonedObjectOrArray[key] = nested;
            }
        }
    });

    return clonedObjectOrArray;
}
```

<br>
<br>


# Key Considerations and Explanations

## Why were some properties initially returning `undefined`?

In the first version of the function, I had:

```js
if (thingToClone === null || typeof thingToClone !== "object") {
    return;
}
```

This caused the function to return `undefined` implicitly. As a result, when `cloneStrings()` was called on string or primitive values inside the object, the recursive call returned `undefined`, and the cloned result either contained unwanted `undefined` values or entirely empty nested objects.

I've solved this by making the `return` explicit and limiting it to the top-level logic: instead of returning nothing, I either avoided assigning the value entirely or assigned valid cloned data only when conditions were met.

For example:

```js
if (typeof value === "string") {
    clonedObjectOrArray[key] = value;
}
```

And for nested objects:

```js
const nested = cloneStrings(value);
if (nested && Object.keys(nested).length > 0) {
    clonedObjectOrArray[key] = nested;
}
```


<br>

## Why handle possibly empty nested objects?

If we clone this:

```js
bankInformation: {
    date: new Date(...),
    account: 34889694
}
```

Without checks, we'd end up with:

```js
bankInformation: {}
```

Seeing as the assignment was about cloning strings and only strings, I decided to only include a nested object if at least one string property exists inside it.

```js
if (nested && Object.keys(nested).length > 0) {
    clonedObjectOrArray[key] = nested;
}
```

<br>

## Why make the function work on arrays?

Even if the original object didn’t include arrays, this clone function was designed to be **more general-purpose** and work with arrays as well.

```js
const clonedObjectOrArray = Array.isArray(thingToClone) ? [] : {};
```