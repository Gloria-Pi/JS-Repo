# 03 Greatest Hits - 02 Enhanced Arrivals

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Greatest Hits: Assignment

- Rewrite some previous exercises in modern JS syntax
  - Credit Card Validation
  - Advanced Arrivals
  - Reduce All
- Try to use as many modern features as you can
- In readme.md document any important changes
- **Bonus**:
  - Use webpack, make your code compatible with older browsers

<br>

# Enhanced Arrivals: Assignment
- Start with the ‘Arrivals’ exercise from a previous lesson
- Add the following features:
    - When the user clicks a row, it should expand to show more information about the flight
    - When the user clicks an open row it should close again
    - If the user clicks a row, any other open rows should close
        - Like in this [example of an accordion](https://jqueryui.com/accordion/#collapsible)
    - Add a ‘Departures’ section with departing flights
    - The user should be able to switch between Arrivals and Departures with a fade-in/fade-out
animation

## Link to the original implementation
To learn more about the original version of this project, please refer to this [README](../../../../paita-gloria-units-09-11/10-events-and-listeners/05-enhanced-arrivals/readme.md).

## Webpack Notes

In this document, I explained how I refactored my flight management code to improve maintainability, readability, and modern JavaScript usage. If you want to learn more about the specific Webpack configurations and module bundling strategies I used in this project, please refer to the separate documentation file: [`webpack-notes.md`](./webpack-notes.md).

<br>

# Approach to Solution

This document explains the modernization of a JavaScript snippet that regularly updates a UI with flight information. We'll compare the **original implementation** with the **modern version**, highlighting key syntax and design improvements.

<br>

# `main.js`

## Original Code

```js
initializeFlights();
initUI();

// Index to track the next flight to add to the table
let arrFlightsIndex = 0;
let depFlightsIndex = 0;

setInterval(() => {
    updateTimeMsg();

    const arrivingFlight = arrivals[arrFlightsIndex];
    const departingFlight = departures[arrFlightsIndex];

    if (arrFlightsIndex < arrivals.length) {
        addNextFlight(arrivingFlight);
        arrFlightsIndex++;
    }

    if (depFlightsIndex < departures.length) {
        addDepartingFlight(departingFlight);
        depFlightsIndex++;
    }

    updateTable();
}, 10000);
```

## Updated Code (Modern Syntax)

```js
initializeFlights();
initUI();

let arrFlightsIndex = 0;
let depFlightsIndex = 0;

setInterval(() => {
    updateTimeMsg();

    const arrivingFlight = arrivals?.[arrFlightsIndex];
    const departingFlight = departures?.[depFlightsIndex];

    if (arrFlightsIndex < arrivals.length) {
        addNextFlight(arrivingFlight);
        arrFlightsIndex++;
    }

    if (depFlightsIndex < departures.length) {
        addDepartingFlight(departingFlight);
        depFlightsIndex++;
    }

    updateTable();
}, 10000);
```

<br>

## Key Improvements Explained

### 1. Optional Chaining for Safe Access

**Before:**

```js
const arrivingFlight = arrivals[arrFlightsIndex];
```

**After:**

```js
const arrivingFlight = arrivals?.[arrFlightsIndex];
```

**Why it matters:**

* Prevents runtime errors if `arrivals` or `departures` are `undefined` or `null`.
* Using `?.[]` ensures we only attempt to access the array when it’s defined.

<br>

### 2. Readability and Clean Syntax

* Cleaner spacing and consistent formatting improve maintainability.
* The function inside `setInterval` is written as an arrow function, which is the modern default for inline callbacks.

<br>

# `flightsGenerator.js`

## Date & Time Formatting Improvements

In the updated code, I replaced manual string formatting with modern, locale-aware methods using `Date.prototype.toLocaleDateString()` and `toLocaleTimeString()`. This improves readability, consistency, and avoids common bugs when working with dates and times.

### Before (Manual Formatting)

```js
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const formattedDate = `${day}-${month}`;

const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const formattedTime = `${hours}:${minutes}`;
```

Issues:  
* Verbose
* Off-by-one risk with `getMonth()`
* Not locale-aware

<br>

### After (Modernized with `toLocaleDateString` and `toLocaleTimeString`)

```js
const formattedDate = delayedDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit"
}).replace(/\//g, "-");

const formattedTime = delayedDate.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});
```

### Explanation

| Line                                 | Purpose                                                       |
| ------------------------------------ | ------------------------------------------------------------- |
| `toLocaleDateString("en-GB", {...})` | Formats the date as `"DD/MM"` using British format            |
| `.replace(/\//g, "-")`               | Converts slashes to dashes to get `"DD-MM"`                   |
| `toLocaleTimeString("en-GB", {...})` | Formats the time as `"HH:MM"` in 24-hour format               |
| `hour12: false`                      | Ensures 24-hour clock (e.g. `"14:37"` instead of `"2:37 PM"`) |
| `"2-digit"` options                  | Adds leading zeros (e.g. `"09"` instead of `"9"`)             |

<br>

## Flight Status Assignment — Modernization Refactor

I’ve updated the logic for assigning statuses to **arrivals** and **departures** to use clean, modern JavaScript syntax (ES6+), while still keeping both functions separated for clarity and maintainability.

---

### Before

```js
if (flightHour === currentHour && flightMinutes === currentMinutes) {
    flight.status = "ARRIVED";
} else {
    flight.status = statusList[Math.floor(Math.random() * statusList.length)];
    if (flight.status === "DELAYED") {
        const randomDelayTime = Math.floor(Math.random() * 10 * 60000) + 60000;
        const delayedDate = new Date(flight.dateObject.getTime() + randomDelayTime);
        flight.notes = `EXPECTED AT ${hours}:${minutes}`;
        flight.expectedDateObject = delayedDate;
    }
}
```
Issues:  
* Verbose and repetitive
* Manual time formatting with `padStart()`
* Random logic repeated in both functions
* Redundant variable declarations and nested blocks

<br>

### After

```js
export const addArrivalsStatus = (arrivalsList, statusList) => {
  const date = new Date();

  arrivalsList.forEach(flight => {
    const flightHour = flight.dateObject.getHours();
    const flightMinutes = flight.dateObject.getMinutes();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();

    if (flightHour === currentHour && flightMinutes === currentMinutes) {
      flight.status = "ARRIVED";
      return;
    }

    const randomStatus = statusList[Math.floor(Math.random() * statusList.length)];
    flight.status = randomStatus;

    if (randomStatus === "DELAYED") {
      const delay = getRandomDelay();
      const delayedDate = new Date(flight.dateObject.getTime() + delay);
      flight.notes = `EXPECTED AT ${formatTime(delayedDate)}`;
      flight.expectedDateObject = delayedDate;
    }
  });
};
```

### Helper Functions Used

```js
const getRandomDelay = () => {
  const min = 60000;
  const max = 10 * 60000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatTime = (date) => {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
};
```

### Also Updated: Departures

The same improvements were applied to `addDeparturesStatus`, with an additional formatted departure time included in the `"DEPARTED AT HH:MM"` status when applicable.

---

### Explanation of Key Improvements

| Refactor                   | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| **Arrow functions**        | Used for cleaner syntax and modularity                 |
| **Return early**           | Avoids unnecessary `else` nesting                      |
| **Helper functions**       | `getRandomDelay()` and `formatTime()` centralize logic |
| **`toLocaleTimeString()`** | Handles zero-padding and formatting internally         |
| **`const` usage**          | Prevents accidental variable reassignments             |


<br>

## `initializeFlights` function
This function wasn't present in the original project. It acts as an exportable wrapper for the inner logic.

### Original Version

```js
export const initializeFlights = () => {

    // Generate flight dates and times
    generateDateHour(arrivals);
    generateDateHour(departures);

    // Sort flights by date and time
    sortFlights(arrivals);
    sortFlights(departures);

    // Assign initial statuses to flights
    addArrivalsStatus(arrivals, arrivalStatuses);
    addDeparturesStatus(departures, departureStatuses);
};
```

Pros:
* ✅ Clean and readable

Cons:
* ❌ Repetitive code blocks
* ❌ Could benefit from array iteration
* ❌ Not easily extendable to more lists (e.g., `delayedFlights`, `cancelledFlights`, etc.)
<br>

### Modernized Version (ES6+)

```js
export const initializeFlights = () => {
  // Apply date generation and sorting to both lists
  [arrivals, departures].forEach(list => {
    generateDateHour(list);
    sortFlights(list);
  });

  // Assign statuses separately for clarity
  addArrivalsStatus(arrivals, arrivalStatuses);
  addDeparturesStatus(departures, departureStatuses);
};
```

### Before vs After

| Before                                         | After                                       |
| ---------------------------------------------- | ------------------------------------------- |
| Repeated logic for `arrivals` and `departures` | Uses array iteration to reduce repetition   |
| Verbose and not very extensible                | Clean, DRY (Don't Repeat Yourself) approach |
| Hardcoded for two lists only                   | Easily extendable to more datasets          |

### Final Thoughts

* I kept side-effect functions like `addArrivalsStatus()` and `addDeparturesStatus()` explicitly separate for clarity.
* If all flight lists shared identical status logic, they could be unified — but separation is intentional here.

<br>
<br>

# `tableGenerator.js`

## `setupTabs` Function

### Original Version

```js
function setupTabs() {
    const tabs = document.querySelectorAll(".tab");
    const tableDivs = document.querySelectorAll("div.h2 ~ div");

    tabs.forEach((tab, tabIndex) => {
        tab.addEventListener("click", () => {

            // Highlights the clicked tab
            tabs.forEach(t => { t.classList.remove("highlighted"); });
            tab.classList.add("highlighted");

            //Shows the matching table, while hiding the others
            tableDivs.forEach((div, tableIndex) => {
                if (tabIndex === tableIndex) {
                    div.classList.add("in");
                } else {
                    div.classList.remove("in");
                }
            });
        });
    });
}
```

<br>

### Modernized Version (After)

```js

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const tableDivs = document.querySelectorAll("div.h2 ~ div");

  tabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", () => {
      // Highlight the selected tab and un-highlight others
      tabs.forEach(t => t.classList.toggle("highlighted", t === tab));

      // Show the corresponding table and hide others
      tableDivs.forEach((div, tableIndex) => {
        div.classList.toggle("in", tableIndex === tabIndex);
      });
    });
  });
}
```

<br>

### What `.classList.toggle()` Does

The [`Element.classList.toggle()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList/toggle) method adds or removes a class from an element **depending on a condition**.

```js
element.classList.toggle(className, condition);
```

* If `condition` is `true`, it **adds** the class.
* If `condition` is `false`, it **removes** the class.

---

### Example 1 of how it's used in `setupTabs`

```js
tabs.forEach(t => t.classList.toggle("highlighted", t === tab));
```

* `t` is the current tab being iterated over.
* `tab` is the one that was just clicked.
* The condition `t === tab` is `true` only for the clicked tab.

So this line:

* Adds the `"highlighted"` class **only** to the clicked tab.
* Removes it from all others — in **one** line, no `if`/`else` needed.

### Example 2 of how it's used in `setupTabs`

```js
tableDivs.forEach((div, tableIndex) => {
  div.classList.toggle("in", tableIndex === tabIndex);
});
```

* `tabIndex` is the index of the clicked tab.
* `tableIndex` is the index of each table div.
* Only the table matching the clicked tab index gets the `"in"` class.

Result:

* Shows the table that matches the clicked tab.
* Hides the others — again, **cleaner** than using `if/else` or manual `add`/`remove`.


### Summary

| Change                             | Description                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Class toggling**               | Replaced verbose `add`/`remove` calls with `.classList.toggle()` for cleaner logic.                                              |
| **Redundancy removed**           | Eliminated extra `if/else` blocks.                                                                                               |
| **Improved readability**         | The modern version is shorter, more expressive, and easier to understand.                                                        |
| **Preserved function structure** | Still uses `function setupTabs()` instead of arrow functions for clarity and hoisting, consistent with module exports if needed. |

<br>
<br>

## Refactoring: Merging `addNextFlight` and `addDepartingFlight`

### Background

Originally, the application used two separate functions:

* `addNextFlight(flight)` for handling arrivals
* `addDepartingFlight(flight)` for handling departures

Both functions were nearly identical in structure:

* They created a `<tr>` element with flight data
* Appended it to the relevant table body
* Created an accordion row for additional details
* Handled the `"delayed"` status class
* Stored references to DOM elements on the `flight` object

The only real difference was:

* Departures had an extra `checkin` column
* Different target table bodies: `arrivals-table-body` vs `departures-table-body`
* Different `colspan` value in the accordion row (7 vs 8)

<br>

### Why the Functions Were Merged

To reduce duplication and improve maintainability, these two functions were replaced by a single, flexible function: `addFlightRow(flight, tableBodyId, columns, accordionColspan)`

This general-purpose function takes:

* A `flight` object
* The `ID` of the table body it should render to
* A list of flight object keys (`columns`) that determine which `<td>` elements to render
* The appropriate `colspan` value for the accordion row

<br>

### Updated `main.js` Logic

In the main update loop (`setInterval`), the logic that previously called two separate functions was updated to call the generic `addFlightRow` function:

```js
addFlightRow(
  arrivingFlight,
  "arrivals-table-body",
  ["date", "hour", "origin", "flight", "status", "notes", "airplane"],
  7
);

addFlightRow(
  departingFlight,
  "departures-table-body",
  ["date", "hour", "origin", "flight", "status", "notes", "airplane", "checkin"],
  8
);
```

<br>

### Benefits of This Refactor

#### 1. **Code Reuse**

One function handles both use cases, reducing duplication.

#### 2. **Ease of Maintenance**

Future changes (e.g., adding a column, changing styling) only need to be made in one place.

#### 3. **Scalability**

If a third flight type (e.g., charters or cargo) needs to be added, no new function is necessary. You can simply call `addFlightRow` with different parameters.

#### 4. **Improved Readability**

The `columns` parameter makes it immediately clear which fields are being rendered in the UI.

#### 5. **Cleaner DOM Logic**

All DOM interactions (element creation, class handling, appending) are handled in a centralized and consistent way.

<br>

## Modern Syntax Improvements

Along with the refactor, several ES6+ syntax improvements were made across the codebase:

### 1. **Destructuring**

Replaced repetitive property access like `flight.date`, `flight.status`, etc. with object destructuring:

```js
const { date, hour, origin, flight: flightCode, status, notes, airplane } = flight;
```

In cases where the property name conflicted with the function parameter (`flight`), destructuring was done using an alias (`flight: flightCode`) for clarity.

### 2. **Arrow Functions**

Used arrow functions for inline callbacks, such as:

```js
newRow.addEventListener("click", () => toggleAccordion(flight));
```

### 3. **Template Literals**

All string concatenation was replaced with template literals for readability:

```js
newRow.innerHTML = `
  <td>${date}</td>
  <td>${hour}</td>
  ...
`;
```

### 4. **Optional Chaining**

Used optional chaining in places like:

```js
const arrivingFlight = arrivals?.[arrFlightsIndex];
```

This helps prevent runtime errors if the `arrivals` or `departures` arrays are undefined or incomplete.

### 5. **Const over Var**

Used `const` and `let` appropriately throughout the code, with `const` for DOM elements and values that don’t change, and `let` for indexes or reassignable values.

### 6. `.map()` for dynamic HTML generation

Used `.map()` to dynamically build the table cells based on the provided column list. This allows the same function to handle different table structures without hardcoding any fields:

newRow.innerHTML = columns
  .map(col => `<td>${flight[col] ?? ""}</td>`)
  .join("");

### 7. Nullish Coalescing (`??`)

Used the `??` operator to safely fall back to an empty string (`""`) when a flight property is undefined or null. This prevents broken table cells or runtime issues when optional flight fields are missing.

<br>

## Refactoring: Improving `toggleAccordion`

### Background

Originally, the application used the function `toggleAccordion(flight)` to handle opening and closing a flight's accordion row. However, the logic was verbose, repetitive, and relied on checking all `.accordion-title` elements (even those not currently active).

In addition, a separate function (`setupAccordionClickHighlighting`) was responsible for toggling the `"active"` class, which duplicated logic already covered in `toggleAccordion`.

<br>

### Original structure

```js
export function toggleAccordion(flight) {
  const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach(row => {
    if (row !== flight.rowElement && row.classList.contains("active")) {
      row.classList.remove("active");
      const content = row.nextElementSibling;
      if (content && content.classList.contains("accordion-content")) {
        content.style.display = "none";
      }
    }
  });

  const content = flight.details;
  if (content.style.display === "none") {
    flight.rowElement.classList.add("active");
    content.style.display = "";
  } else {
    flight.rowElement.classList.remove("active");
    content.style.display = "none";
  }
}
```

Additionally, this logic was partly duplicated in `setupAccordionClickHighlighting()`, which handled `.active` class toggling separately.

<br>

## Refactored Version

```js
export function toggleAccordion(flight) {
  const { rowElement, details } = flight;

  // Close all other active accordion rows
  document.querySelectorAll(".accordion-title.active").forEach(activeRow => {
    if (activeRow !== rowElement) {
      activeRow.classList.remove("active");

      const nextRow = activeRow.nextElementSibling;
      if (nextRow?.classList.contains("accordion-content")) {
        nextRow.style.display = "none";
      }
    }
  });

  // Toggle current accordion state
  const isOpen = details.style.display !== "none";

  if (isOpen) {
    rowElement.classList.remove("active");
    details.style.display = "none";
  } else {
    rowElement.classList.add("active");
    details.style.display = "";
  }
}
```

<br>

## Removed `setupAccordionClickHighlighting`

This function:

```js
function setupAccordionClickHighlighting() {
  const allAccordions = document.querySelectorAll(".accordion-title");
  allAccordions.forEach(title => {
    title.addEventListener("click", () => {
      allAccordions.forEach(title => {
        title.classList.remove("active");
      });
      title.classList.add("active");
    });
  });
}
```

was **redundant**. Its only purpose was to toggle the `.active` class, which is already handled by the updated `toggleAccordion()` logic.

<br>

## Modern JavaScript Features Used

| Feature                      | Description                                       | Code Example                                           |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| **Destructuring**            | Makes object property usage cleaner               | `const { rowElement, details } = flight;`              |
| **Optional chaining (`?.`)** | Avoids errors if an element is missing            | `nextRow?.classList.contains(...)`                     |
| **Boolean clarity**          | Replaces direct string checks                     | `const isOpen = details.style.display !== "none";`     |
| **Query filtering**          | Limits DOM traversal to only what’s needed        | `document.querySelectorAll(".accordion-title.active")` |
| **Removed side-function**    | `setupAccordionClickHighlighting` was unnecessary | Logic merged into `toggleAccordion`                    |

<br>
<br>

# `updateStatus.js`

## Refactoring: `changeDelayedStatusForDepartures`

### Before

```js
function changeDelayedStatusForDepartures(departuresList) {
  departuresList.forEach(flight => {
    if (flight.updateCounter === undefined) {
      flight.updateCounter = 0;
    } else {
      flight.updateCounter++;
    }

    if (flight.status === "DELAYED" && flight.updateCounter >= 6) {
      flight.status = "ON_TIME";
      flight.notes = "-";

      const flightCode = flight.flight || "Anonymous Flight";
      flight.additionalMsg = `Sorry for the inconvenience. Flight ${flightCode} is once again on time.`;

      if (flight.additionalMsg && flight.rowElement) {
        const detailsRow = flight.rowElement.nextElementSibling;
        if (detailsRow && detailsRow.classList.contains("accordion-content")) {
          const detailsDiv = detailsRow.querySelector(".flight-details");
          if (detailsDiv && !detailsDiv.querySelector(".additional-msg")) {
            const messageP = document.createElement("p");
            messageP.classList.add("additional-msg");
            messageP.textContent = flight.additionalMsg;
            detailsDiv.appendChild(messageP);
          }
        }
      }

      if (flight.rowElement && flight.rowElement.children.length >= 6) {
        flight.rowElement.classList.remove("delayed");
        flight.rowElement.children[4].textContent = "ON_TIME";
        flight.rowElement.children[5].textContent = "-";
      }
    }

    if (flight.status === "ON_TIME" && flight.updateCounter >= 6) {
      if (flight.rowElement && flight.rowElement.children[5]) {
        flight.rowElement.children[5].textContent = "-";
      }
    }
  });
}
```

<br>

### After

```js
export function changeDelayedStatusForDepartures(departuresList) {
  departuresList.forEach(flight => {
    // Initialize or increment the update counter
    flight.updateCounter = (flight.updateCounter ?? 0) + 1;

    const { rowElement, status, updateCounter } = flight;

    if (status === "DELAYED" && updateCounter >= 6) {
      flight.status = "ON_TIME";
      flight.notes = "-";

      const flightCode = flight.flight || "Anonymous Flight";
      flight.additionalMsg = `Sorry for the inconvenience. Flight ${flightCode} is once again on time.`;

      // Append the additional message once
      const detailsRow = rowElement?.nextElementSibling;
      const detailsDiv = detailsRow?.classList.contains("accordion-content")
        ? detailsRow.querySelector(".flight-details")
        : null;

      if (detailsDiv && !detailsDiv.querySelector(".additional-msg")) {
        const messageP = document.createElement("p");
        messageP.classList.add("additional-msg");
        messageP.textContent = flight.additionalMsg;
        detailsDiv.appendChild(messageP);
      }

      if (rowElement?.children.length >= 6) {
        rowElement.classList.remove("delayed");
        rowElement.children[4].textContent = "ON_TIME";
        rowElement.children[5].textContent = "-";
      }
    }

    if (status === "ON_TIME" && updateCounter >= 6) {
      if (rowElement?.children[5]) {
        rowElement.children[5].textContent = "-";
      }
    }
  });
}
```

<br>

## Improvements and Benefits

| Change                                                        | Benefit                                               |
| ------------------------------------------------------------- | ----------------------------------------------------- |
| `flight.updateCounter = (flight.updateCounter ?? 0) + 1`      | Cleaner initialization using **nullish coalescing**   |
| Destructuring (`const { rowElement, status, updateCounter }`) | Improves readability, reduces repetition              |
| Optional chaining (`rowElement?.nextElementSibling`)          | Avoids null/undefined DOM errors                      |
| Removed redundant conditionals                                | Clearer separation of delayed/on-time logic           |
| Clearer structure                                             | Easier to maintain and extend for future status logic |
| Scoped DOM updates                                            | DOM is only modified if all conditions are safely met |

<br>

## Modern JavaScript Features Used

### 1. **Destructuring**

```js
const { rowElement, status, updateCounter } = flight;
```

### 2. **Optional Chaining (`?.`)**

```js
const detailsRow = rowElement?.nextElementSibling;
```

### 3. **Nullish Coalescing (`??`)**

```js
flight.updateCounter = (flight.updateCounter ?? 0) + 1;
```

### 4. **Guarded DOM Manipulation**

```js
if (detailsDiv && !detailsDiv.querySelector(".additional-msg")) {
  // Append once
}
```

<br>

## Refactor: `isArrived()` and `isDeparted()` → `updateFlightStatusByTime()`

### Original Problem

The application originally had two nearly identical functions:

* `isArrived(flights)`: Checked if arriving flights had arrived.
* `isDeparted(flights)`: Checked if departing flights had departed.

Both functions:

* Used similar logic to compare the current time against a flight's `dateObject` or `expectedDateObject`
* Updated the `status`, `notes`, and relevant DOM elements
* Had duplicated structure with only minor differences (e.g. `"ARRIVED"` vs `"DEPARTED"`)

<br>

## Refactored Version

```js
export function updateFlightStatusByTime(flights, targetStatus) {
  const currentTime = Date.now(); // more efficient than creating a new Date multiple times

  flights.forEach(flight => {
    const { status, expectedDateObject, dateObject, rowElement } = flight;

    if (!rowElement || !rowElement.children?.length) return;

    const hasArrived =
      (status === "DELAYED" && expectedDateObject?.getTime() <= currentTime) ||
      (status !== targetStatus && dateObject?.getTime() <= currentTime);

    if (hasArrived) {
      flight.status = targetStatus;
      flight.notes = "-";

      rowElement.classList.remove("delayed");
      rowElement.children[4].textContent = targetStatus;
      rowElement.children[5].textContent = "-";
    }
  });
}
```

---

## Usage

```js
updateFlightStatusByTime(arrivals, "ARRIVED");
updateFlightStatusByTime(departures, "DEPARTED");
```

---

## 🔍 Why This Refactor Was Necessary

| Problem in Old Code                                | Solution in New Code                                |
| -------------------------------------------------- | --------------------------------------------------- |
| Two functions doing almost exactly the same thing  | Unified into one generic, reusable function         |
| Hardcoded strings for `"ARRIVED"` and `"DEPARTED"` | Replaced with a `targetStatus` parameter            |
| Repeated logic structures                          | Centralized once in one place                       |
| Risk of DOM errors if row was missing              | Added optional chaining and early return guards     |
| Multiple `new Date()` calls                        | Replaced with a single `Date.now()` for performance |

---

## Modern JavaScript Features Used

| Feature                   | Purpose                                                       |
| ------------------------- | ------------------------------------------------------------- |
| `Date.now()`              | More efficient than `new Date().getTime()`                    |
| Destructuring             | Cleaner and more readable access to flight properties         |
| Optional chaining (`?.`)  | Safely access nested properties like `rowElement.children`    |
| Short-circuit return      | Skip processing if flight is missing necessary DOM references |
| Function parameterization | Allows flexible use for both arrivals and departures          |

<br>

# Refactoring Flight Removal Functions

## Background

Previously, the codebase contained two nearly identical functions for removing flights from the DOM after they remained in a terminal status for a certain number of intervals:

* `removeArrivedFlights` for flights with status `"ARRIVED"`
* `removeDepartedFlights` for flights with status `"DEPARTED"`

Both functions tracked how long each flight stayed in its respective status using separate counters (`arrivalCounter` and `departureCounter`) before removing the flight’s DOM elements.

<br>

## What Changed and Why

### 1. Merged into a Single Reusable Function

The two separate functions were merged into one flexible function: `removeFlightsByStatus`.

**Reason:**
Both functions followed the exact same logic, only differing in the status string and counter property name. Merging reduces duplication (DRY principle), making the code easier to maintain and less error-prone.

```js
export function removeFlightsByStatus(flights, statusKey, counterKey, threshold = 6) {
    flights.forEach(flight => {
        if (flight.status === statusKey) {
            // Initialize or increment the counter
            flight[counterKey] = (flight[counterKey] ?? 0) + 1;

            // If the flight has remained in this status for too long, remove it
            if (flight[counterKey] >= threshold) {
                flight.rowElement?.remove();
                flight.details?.remove();
            }
        }
    });
}
```

<br>

### 2. Dynamic Counter and Status Keys

The new function accepts parameters for:

* `statusKey`: the status string to check (e.g., `"ARRIVED"` or `"DEPARTED"`)
* `counterKey`: the flight object property to count intervals (e.g., `"arrivalCounter"`, `"departureCounter"`)
* `threshold`: how many intervals the flight must remain in that status before removal (default is 6)

**Benefit:**
This makes the function reusable for any similar flight status and counter without rewriting logic.

<br>

### 3. Modern JavaScript Syntax

* **Optional chaining (`?.`)** was used when removing DOM elements to safely handle missing references and avoid runtime errors.
* **Nullish coalescing (`??`)** cleanly initializes and increments counters without verbose checks.
* Default parameter values provide flexibility and better function usability.

## Example Usage

```js
removeFlightsByStatus(arrivals, "ARRIVED", "arrivalCounter");
removeFlightsByStatus(departures, "DEPARTED", "departureCounter", 8); // custom threshold
```