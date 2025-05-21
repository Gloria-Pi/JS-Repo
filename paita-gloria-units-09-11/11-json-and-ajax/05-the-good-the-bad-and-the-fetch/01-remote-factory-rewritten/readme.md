# 05 The Good, the Bad and the Fetch - Remote Factory

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Rewrite all the code examples in this unit that use XMLHttpRequest using
the modern fetch method
- Ensure the rewritten code replicates the exact same behavior

<br>
<br>

# Approach to Solution

📎 **Note:**  
This file focuses exclusively on the refactoring of HTTP requests from `XMLHttpRequest` to the modern `Fetch API`.  
To understand the full behavior of the original application please refer to the complete documentation here: [Full project README](../../03-remote-factory/readme.md)


## Overview of the Refactoring

All HTTP requests in the application were originally made using the `XMLHttpRequest` object.  
This approach has been entirely replaced by `fetch`, while maintaining the same logic flow, error handling, and UI behavior.

The updated functions are:

- `getFactoryRequest()`
- `carsGetRequest()`
- `fetchAndDisplayFactory()`
- `fetchAndDisplayCars()`
- `saveCarsChangesToBlob()`
- `saveFactoryChangesToBlob()`

Each of these functions was rewritten using `fetch()` while preserving:
- JSON parsing
- Error messages
- DOM updates
- Data consistency

<br>

## 1. Rewriting a Simple GET Request

### Original `XMLHttpRequest` version:
```js
function getFactoryRequest() {
    const factoryRequest = new XMLHttpRequest();
    factoryRequest.addEventListener("load", function () {
        try {
            factoryObject = JSON.parse(factoryRequest.responseText);
        } catch (e) {
            showError("Data parsing error: invalid JSON structure.");
            return;
        }
        displayFactory();
    });
    factoryRequest.open("GET", factoryEndpoint);
    factoryRequest.send();
}
```

### Updated `fetch` version:

```js
function getFactoryRequest() {
    fetch(factoryEndpoint)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch factory data.");
            }
            return response.json();
        })
        .then(function (data) {
            factoryObject = data;
            displayFactory();
        })
        .catch(function (error) {
            showError(error.message);
        });
}
```

### Key Differences:

* `XMLHttpRequest` uses events (`onload`, `onerror`), while `fetch` uses Promises.
* With `fetch`, `.json()` **automatically parses the body**, avoiding manual `JSON.parse`.
* Error handling is more readable with `.catch()` than with event-based conditions.

<br>

## 2. Rewriting a GET Request with DOM Refresh

### Original:

```js
function fetchAndDisplayFactory() {
    const factoryRequest = new XMLHttpRequest();
    factoryRequest.open("GET", factoryEndpoint);
    factoryRequest.onload = function () {
        if (factoryRequest.status === 200) {
            try {
                factoryObject = JSON.parse(factoryRequest.responseText);
            } catch (e) {
                showError("Data parsing error: invalid JSON structure.");
                return;
            }
            const factoryDiv = document.getElementById("factory");
            factoryDiv.innerHTML = "";
            displayFactory();
        } else {
            showError("Failed to load factory data.");
        }
    };
    factoryRequest.onerror = function () {
        showError("Network error: Unable to load factory data.");
    };
    factoryRequest.send();
}
```

### Refactored:

```js
function fetchAndDisplayFactory() {
    fetch(factoryEndpoint)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch updated factory data.");
            }
            return response.json();
        })
        .then(function (data) {
            factoryObject = data;
            const factoryDiv = document.getElementById("factory");
            factoryDiv.innerHTML = ""; // Clear previous data
            displayFactory();
        })
        .catch(function (error) {
            showError(error.message);
        });
}
```

### Key Differences:

* `fetch` simplifies the logic by eliminating multiple callback branches.
* Network errors and server errors are all handled with `.catch()` or by checking `response.ok`.

<br>

## 3. Rewriting a PUT Request to Save JSON Data

### Original:

```js
function saveCarsChangesToBlob() {
    const carsPostRequest = new XMLHttpRequest();
    carsPostRequest.open("PUT", carsEndpoint);
    carsPostRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    carsPostRequest.onload = () => {
        if (carsPostRequest.status === 200 || carsPostRequest.status === 201) {
            fetchAndDisplayCars();
        } else {
            showError("Cars save failed");
        }
    };

    carsPostRequest.onerror = () => {
        showError("Network error while saving cars.");
    };

    const clearCarJsonCopy = JSON.stringify(cleanCarArrayCopy(carsArray));
    carsPostRequest.send(clearCarJsonCopy);
}
```

### Refactored:

```js
function saveCarsChangesToBlob() {
    const clearCarJsonCopy = JSON.stringify(cleanCarArrayCopy(carsArray));

    fetch(carsEndpoint, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: clearCarJsonCopy
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to save car data.");
            }
            console.log("Cars data saved successfully.");
            fetchAndDisplayCars();
        })
        .catch(function (error) {
            showError(error.message);
        });
}
```

### Key Differences:

* With `fetch`, the method and headers are passed directly in the options object.
* The `body` is assigned once, no need to call `.send()` separately.

<br>

## 4. General Observations on `fetch` vs `XMLHttpRequest`

| Feature            | `XMLHttpRequest`            | `fetch`                                  |
| ------------------ | --------------------------- | ---------------------------------------- |
| Syntax             | Verbose, imperative         | Declarative, promise-based               |
| JSON parsing       | Manual (`JSON.parse`)       | Automatic via `.json()`                  |
| Error handling     | Requires multiple callbacks | Unified via `.catch()` and `response.ok` |
| Readability        | Can become nested and bulky | Easier to follow with chaining           |
| Asynchronous style | Event-based                 | Promise-based (or `async/await`)         |
| Modern usage       | Legacy                      | Recommended for new projects             |