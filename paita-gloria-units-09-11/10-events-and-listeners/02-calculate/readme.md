# 02 Calculate

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Add inputs for half number, percentage and circle area
- Use the functions from the previous calculator exercises
- For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div
- Afterwards, change the code so that you respond to key presses so that the user doesn't have to click the button

<br>
<br>

# Approach to Solution  

## Structure of the Code  

- **Basic Functions**: Mathematical operations adapted from a previous assignment.
- **DOM Setup**: Programmatic creation of missing fields and Reset button.
- **Event Management**: 
  - Button-based calculation.
  - Key-based calculation (Enter/Delete).
- **Reset Mechanism**: Clears the solution div and all input fields.
- **Display Functions**: Handles result insertion cleanly with line breaks.


<br>

## 1. **Basic Calculation Functions**  

Before building the full interface, basic calculation functions were refined based on earlier exercises:
- **rounder(numToRound)**: Utility to round a number to two decimal places.
- **squareNumber()**: Retrieves input, calculates the square, rounds it, and displays the result.
- **halfNumber()**: Retrieves input, divides it by two, rounds it, and displays the result.
- **percentOf()**: Retrieves two inputs, calculates the percentage relation between them, rounds it, and displays the result.
- **areaOfCircle()**: Retrieves the radius, calculates the circle's area, rounds it, and displays the result.

Examples:
```javascript
function rounder(numToRound) {
    const roundedNum = Math.round(numToRound * 100) / 100;
    return roundedNum;
}
```

```javascript
function squareNumber() {
    const num = document.querySelector("#square-input").value;
    const squaredNum = rounder(Math.pow(num, 2));
    const result = `The result of squaring the number ${num} is ${squaredNum}.`;
    addTextNodeToSolutionDiv(result);
}
```

<br>

## 2. **Dynamic HTML Content Creation**  

In order to keep the HTML file minimal and clean, the missing input fields were created dynamically:
- **createLineBreak()**: Simple utility to create a `<br>` element.
- **addLabelToDoc(typeOfCalc, idName)**: Dynamically creates `labels` and associated `input` fields for each type of calculation.

Example:
```javascript
function addLabelToDoc(typeOfCalc, idName) {
    const newLabel = document.createElement("label");
    const htmlLabel = document.querySelector("body label:last-of-type").insertAdjacentElement("afterend", newLabel);
    htmlLabel.textContent = `${typeOfCalc} this number: `;
    htmlLabel.insertAdjacentElement("beforebegin", createLineBreak());

    function addInputToLabel(idName) {
        const newInput = document.createElement("input");
        newInput.setAttribute("type", "number");
        newInput.setAttribute("id", `${idName}`);
        htmlLabel.appendChild(newInput);
    }
    addInputToLabel(idName);
}
```

The input fields for **halfNumber**, **percentOf**, and **areaOfCircle** were added programmatically after the original `square-input`.

<br>

## 3. **Handling User Interaction**  

Two different types of user interaction were implemented:

- **Button Clicks**:  
The Calculate button checks all input fields and triggers the appropriate calculation functions if any field contains a value.

```javascript
button.addEventListener("click", function () {
    const valueOfSquareInput = document.getElementById("square-input").value;
    const valueOfHalvedInput = document.getElementById("halved-input").value;
    const valueOfPercentageInput = document.getElementById("percentage-input").value;
    const valueOfReferenceInput = document.getElementById("reference-input").value;
    const valueOfRadiusInput = document.getElementById("radius-input").value;

    if (valueOfSquareInput !== "") { squareNumber(); }
    if (valueOfHalvedInput !== "") { halfNumber(); }
    if (valueOfPercentageInput !== "" && valueOfReferenceInput !== "") { percentOf(); }
    if (valueOfRadiusInput !== "") { areaOfCircle(); }
});
```

- **Key Presses**:  
Listening for the **Enter** key allows instant calculation without clicking the button.  
Listening for the **Delete** key resets the corresponding input field.


```javascript
document.getElementById("square-input").addEventListener("keydown",
    function (event) {
        if (event.key === "Enter" &&
            document.getElementById("square-input").value !== "") {
            squareNumber();
        }

        if (event.key === "Delete") {
            deleteInputContent();
        }
});
```

Each input field has a dedicated `keydown` event listener to handle this behavior.

<br>

## 4. **Reset Functionality**  

As a personal improvement, a Reset button was created and dynamically inserted into the DOM:
- Clicking Reset clears all the inputs and the `solution` div.

Example:
```javascript
function deleteDivContent() {
    const solutionDiv = document.getElementById("solution");
    solutionDiv.textContent = "";
}
```

```javascript
function deleteInputContent() {
    document.getElementById("square-input").value = "";
    document.getElementById("halved-input").value = "";
    document.getElementById("percentage-input").value = "";
    document.getElementById("reference-input").value = "";
    document.getElementById("radius-input").value = "";
}
```

<br>

## 5. **Displaying Results**  

Each calculation result is appended to the `solution` div using the following helper:

```javascript
function addTextNodeToSolutionDiv(resultText) {
    const solutionDiv = document.getElementById("solution");
    const newTextNode = document.createTextNode(`${resultText}`);
    solutionDiv.appendChild(newTextNode);
    solutionDiv.appendChild(createLineBreak());
}
```

Each result is displayed on a new line, maintaining readability.

<br>

# Example Usage  

**Case 1**:  
- Square Input: `4`
- Calculate →  
> The result of squaring the number 4 is 16.

**Case 2**:  
- Halved Input: `8`
- Calculate →  
> Half of 8 is 4.

**Case 3**:  
- Percentage Inputs: `25` and `100`
- Calculate →  
> 25 is 25% of 100.

**Case 4**:  
- Radius Input: `5`
- Calculate →  
> The area for a circle with radius 5 is 78.54.

<br>
<br>

## About the Provided HTML Structure  

The HTML page used in this exercise was provided as part of the assignment instructions. Even though it serves its functional purpose, it contains a few technical inaccuracies that would be flagged by a standard HTML validator:

<br>

- **Missing `lang` Attribute**:  
  The `<html>` tag does not specify a `lang` attribute. Without it, browsers and assistive technologies (such as screen readers) cannot properly identify the language of the page, potentially impacting accessibility and SEO.  
  Example of a correct opening tag would be:
  ```html
  <html lang="en">
  ```

- **Incorrect Use of Trailing Slash on Void Elements**:  
  In HTML5, void elements like `<meta>` should not be self-closed using a trailing slash (`/>`). While it does not break the page, it may cause minor issues when combined with unquoted attribute values, and it is generally better to omit the slash:
  ```html
  <meta charset="utf-8">
  ```

- **Invalid `size` Attribute on `<input type="number">`**:  
  The `size` attribute is not valid on `<input type="number">` elements. The `size` attribute is only permitted on `<input>` elements of types `text`, `search`, `tel`, `url`, `email`, and `password`. Although browsers tend to ignore this mistake and still render the input correctly, strictly speaking, it does not conform to HTML5 specifications.

<br>

**Reason for Keeping It Unchanged**:  
Despite these minor validation warnings, the structure was intentionally preserved exactly as originally provided by the assignment. The focus of the task was the JavaScript interactivity and dynamic DOM manipulation, not the correction of the base HTML. Therefore, no structural changes were made to the original HTML to maintain consistency with the exercise's expectations.