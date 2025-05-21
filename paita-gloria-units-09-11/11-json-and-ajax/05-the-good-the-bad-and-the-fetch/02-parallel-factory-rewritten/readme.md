# 05 The Good, the Bad and the Fetch - Parallel Factory

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
To understand the full behavior of the original application please refer to the complete documentation here: [Full project README](../../04-parallel-factory/readme.md)

# SETUP

The original script used `XMLHttpRequest` to fetch data from:
- One **factory JSONBlob**
- Five **individual car JSONBlobs** (in parallel)

All these requests have been converted to `fetch()` with equivalent behavior:
- Requests are still processed in the same sequence (`factory → cars`)
- Parsing and rendering logic remains unchanged
- Error messages and loading states are fully preserved

The key functions modified are:
- `getFactoryRequest()`
- `carsGetRequest()`

<br>

# 1. Refactoring `getFactoryRequest()`

## Original `XMLHttpRequest` version:
```js
function getFactoryRequest() {
    loadingMsg("Loading data, please wait...");

    const factoryRequest = new XMLHttpRequest();
    factoryRequest.addEventListener("load", function () {
        try {
            factoryObject = JSON.parse(factoryRequest.responseText);
        } catch (e) {
            showError("Data parsing error on factoryObject: invalid JSON structure.");
            return;
        }
        displayFactory();
        carsGetRequest(); // Starts loading cars after factory is ready
    });
    factoryRequest.open("GET", factoryEndpoint);
    factoryRequest.send();
}
```

## Updated `fetch` version:

```js
function getFactoryRequest() {
    loadingMsg("Loading data, please wait...");

    fetch(factoryEndpoint)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.text();
        })
        .then(function (text) {
            try {
                factoryObject = JSON.parse(text);
                displayFactory();
                carsGetRequest(); // Load cars after factory
            } catch (e) {
                showError("Data parsing error on factoryObject: invalid JSON structure.");
            }
        })
        .catch(function (error) {
            showError("Network error while loading factory data.");
            console.error("Factory fetch failed:", error);
        });
}
```

### Differences:

* Response is explicitly converted to `.text()` before `JSON.parse()` (to preserve manual parsing logic).
* Errors are handled with `.catch()` instead of `addEventListener("error", ...)`.

<br>

# 2. Refactoring `carsGetRequest()`

## Original version:

```js
function carsGetRequest() {
    let loadedCars = 0;

    carsEndpoints.forEach((carEndpoint, index) => {
        const singleCarRequest = new XMLHttpRequest();

        singleCarRequest.addEventListener("load", function () {
            try {
                const carData = JSON.parse(singleCarRequest.responseText);
                carsArray[index] = carData;
            } catch (e) {
                showError("Data parsing error on carData: invalid JSON structure.");
                return;
            }

            loadedCars++;
            if (loadedCars === carsEndpoints.length) {
                displayCars();
                hideLoadingMsg();
            }
        });

        singleCarRequest.addEventListener("error", function () {
            showError("Network error while loading car data.");
        });

        singleCarRequest.open("GET", carEndpoint);
        singleCarRequest.send();
    });
}
```

## Refactored version:

```js
function carsGetRequest() {
    let loadedCars = 0;

    carsEndpoints.forEach(function (carEndpoint, index) {
        fetch(carEndpoint)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok.");
                }
                return response.text();
            })
            .then(function (text) {
                try {
                    const carData = JSON.parse(text);
                    carsArray[index] = carData;
                } catch (e) {
                    showError("Data parsing error on carData: invalid JSON structure.");
                    return;
                }

                loadedCars++;
                if (loadedCars === carsEndpoints.length) {
                    displayCars();
                    hideLoadingMsg();
                }
            })
            .catch(function (error) {
                showError("Network error while loading car data.");
                console.error("Car fetch failed:", error);
            });
    });
}
```

### Differences:

* Each request is handled individually
* Manual tracking (`loadedCars`) is preserved to control rendering only after all blobs are processed.
* Better readability and error separation using `.catch()`.

<br>

# 3. Summary: `fetch` vs `XMLHttpRequest`

| Feature          | `XMLHttpRequest`           | `fetch`                             |
| ---------------- | -------------------------- | ----------------------------------- |
| Syntax           | Verbose and event-based    | Promise-based, modern               |
| JSON parsing     | Manual with `JSON.parse()` | Optional via `.json()` or `.text()` |
| Error handling   | Requires event listeners   | Streamlined with `.catch()`         |
| Code readability | More nested                | Linear and easier to follow         |
| Request config   | Multiple method calls      | Single config object                |

<br>

# Troubleshooting

❗ **CORS Error in Firefox**

While testing this project in Firefox, the following error may occur:

```

Bloccata richiesta multiorigine (cross-origin): il criterio di corrispondenza dell’origine non consente la lettura della risorsa remota...

```

This is a **CORS policy restriction** caused by the remote server (`jsonblob.com`) not allowing cross-origin requests from browsers.

### To fix this during testing I could use:
- a **local development server** (e.g. Live Server or `npx serve`)
- a **CORS proxy**