# 04 Cash Register


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

- Write a function called `cashRegister` that takes a shopping cart object.
- The object contains item names and prices (itemName: itemPrice).
- The function returns the total price of the shopping cart, e.g. :

```js
// Input
let cartForParty = {
 banana: "1.25",
 handkerchief: ".99",
 Tshirt: "25.01",
 apple: "0.60",
 nalgene: "10.34",
 proteinShake: "22.36"
};

// Output
cashRegister(cartForParty); // 60.55
```

<br>

# Approach to Solution

# Brainstorming

## Step 1: Basic cart setup

I created a test cart object with key-value pairs representing realistic product names and their corresponding prices as strings, following the format specified in the assignment. Since the function is designed to sum the prices, I used the unary `+` operator for concise conversion from string to number.

<br>

## Step 2: Creating the loop

Initially, I considered using a `for...in` loop to iterate over the object keys. However, I realized that I could leverage a built-in method to access an object's values while using a `for` loop. By using `Object.entries()`, I could destructure the object to access both the product name and its price in a simple and effective way.

<br>

## Step 3: Comparing `for...in` and `Object.entries()`

| **Feature**                  | **`for...in`**                          | **`Object.entries()`**                       |
|------------------------------|-----------------------------------------|---------------------------------------------|
| **Readability**               | Slightly more verbose (requires separate access to key/value). | More concise and readable with direct key-value pair access. |
| **Inclusion of inherited properties** | Includes inherited properties unless filtered out with `hasOwnProperty()` | Only includes the object's own enumerable properties. |
| **Flexibility**               | Works on all objects, but may require more checks. | More flexible when combined with array methods (e.g., `map`, `reduce`). |
| **Performance**               | Slightly faster in older JavaScript environments. | Slightly slower due to the creation of an array of key-value pairs, but minimal difference in most cases. |
| **Compatibility**             | Works in all environments (ES5+).       | Available in ES8 and beyond (may require polyfills in older environments). |


<br>

### `for...in`

```js
    for (let product in shoppingCart) {
        totalPrice += +shoppingCart[product];
    }
```

The `for...in` loop is a traditional method for iterating over the properties of an object, meaning it is compatible with older environments and browsers. It is useful for accessing the **keys** directly.

However, `for...in` will iterate over all properties of the object, including inherited ones (unless filtered out using `hasOwnProperty()`).

<br>

### `Object.entries()`

```js
    for (let [product, price] of Object.entries(shoppingCart)) {
        totalPrice += +price;
    }
```

The `Object.entries()` method creates an array of key-value pairs and:

- provides direct access to both **keys** and **values**

- enables manipulation of the data using array methods

- only gives access to the object's own properties (not its inherited ones).

As a more modern method, it is not supported in older environments (prior to ES8).

<br>

### Final Decision

Ultimately, given the simplicity of the task, which did not require complex data manipulation, I chose to implement the `for...in` logic for my function.

<br>

## Creating the function

The function `cashRegister` accepts an object where the keys are product names and the values are their prices as strings. It loops through the object and calculates the total by converting each string value into a number and summing them.

```js
function cashRegister (shoppingCart) {
  // Variable holding the total amount spent
  let totalPrice = 0;

    // Looping through the shoppingCart object using for...in to access each key
    for (let product in shoppingCart) {
        
        // Adds the price to the total after converting it to a number using the unary plus "+"
        totalPrice += +shoppingCart[product];

  }

  return totalPrice;
}
```

<br>

## Step-by-step logic

1. Initialized the variable `totalPrice` to store the final total amount.  
2. Used a `for...in` loop to iterate over the keys of the `shoppingCart` object.  
3. For each key (/the product name), accessed its corresponding value using bracket notation: `shoppingCart[product]`.  
4. Converted the string price to a number using the unary `+` operator.  
5. Added the converted number to `totalPrice`.  
6. After the loop ends, returned the final `totalPrice`.

<br>

---

# Example Output

```js
const personalCart = {
  nintendoSwitch: "299.99",
  cookies: "1.39",
  lettuce: "1.99",
  fancyShoes: "88.45",
  toiletPaper: "4.50",
  electricBoiler: "14.99"
};

console.log(cashRegister(personalCart)); // 411.31
```