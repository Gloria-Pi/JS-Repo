# 02 DOM Factory

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Write your cars and factory objects as JSON strings in a variable
- Parse them with JSON.parse();
- Write each of them to the DOM in a list
    - You should use a styled CSS `<ul><li>` list with no bullets
    - Don’t use `<table>`

<br>
<br>

# Approach to Solution

1. **JSON Creation**
    - **`cars`**: An array of car objects, each containing properties such as `make`, `model`, `year`, `price`, `features`, `carId` and `insurance`.

    - **`factory`**: A single object representing the factory, including details like `name`, `location`, `facilities`, and a list of associated car IDs.

    - Example of defining the JSON strings:
        ```js
        const cars = `[
            {
                "carId": "car01",
                "make": "Pikachu Motors",
                "model": "Thunderbolt",
                "year": 2018,
                "price": 18000,
                "isElectric": true,
                "features": ["Bluetooth", "Remote Start", "Backup Camera", "Heated Seats"],
                "insurance": {
                    "company": "Kanto Insurance",
                    "policyNumber": "KA234567890",
                    "expiryDate": "2025-04-10",
                    "isPaid": true
                },
                "previousOwners": null,
                "mileage": 0
            }
        ]`;
        ```
  <br>
  
2. **Parsing JSON**
    - `JSON.parse()` is used to convert both JSON strings into JavaScript objects:
        ```js
        const carsObject = JSON.parse(cars);
        const factoryObject = JSON.parse(factory);
        ```
    - This allows the data to be manipulated and rendered dynamically in the DOM.

<br>

3. **DOM Rendering**
   - **Cars Array**:
     - Each car object in the `cars` array is iterated over using `forEach`.
     - A `<ul>` is created for each car, and its properties are added as `<li>` elements.
     - If a property is an object (e.g., `insurance`), a nested `<ul>` is created to display its key-value pairs.
     - Arrays (e.g., `features`) are displayed as comma-separated values in a single `<li>`.
   - **Factory Object**:
     - The `factory` object is rendered similarly, with nested `<ul>` elements for its `facilities` property.
   - Example of appending the lists to the DOM:
        ```js
        headerNode.insertAdjacentElement("afterend", singleCarUl);
        ```
<br>

4. **CSS Styling**
   - To remove bullet points from the lists:
        ```css
        ul {
            list-style-type: none;
        }
        ```

<br>

## Example Output

Each car and the factory will appear on the page as its own `<ul>` block with each key/value pair listed.

Nested objects like `insurance` are shown as sublists.

<br>

### Example Structure:
```html
<ul>
  <li>carId: car01</li>
  <li>make: Pikachu Motors</li>
  <li>model: Thunderbolt</li>
  <li>year: 2018</li>
  <li>price: 18000</li>
  <li>isElectric: true</li>
  <li>features: Bluetooth, Remote Start, Backup Camera, Heated Seats</li>
  <li>insurance:
    <ul>
      <li>company: Kanto Insurance</li>
      <li>policyNumber: KA234567890</li>
      <li>expiryDate: 2025-04-10</li>
      <li>isPaid: true</li>
    </ul>
  </li>
  <li>previousOwners: null</li>
  <li>mileage: 0</li>
</ul>
```

<br>

## Why I Haven’t Used hasOwnProperty()

In this code, I’ve chosen not to use `hasOwnProperty()` because I’m confident that the objects being processed don’t have any *inherited properties*. The objects are plain objects, and I control their structure, so there’s no risk of including unwanted properties from prototypes.

However, while it’s not necessary in the current context, implementing `hasOwnProperty()` would be useful in the future. If the structure of these objects changes, or if new objects are introduced from external sources or libraries, using `hasOwnProperty()` ensures the code will correctly handle only the object's own properties, avoiding any potential issues from prototype inheritance.