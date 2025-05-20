# 04 Parallel Factory

# Author

**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Create another version of the factory that uses the same [JSONBlobs](https://jsonblob.com/) that you created for the previous exercise
- Make sure that each car information is stored in a different jsonblob
- The page should display the list of cars with detailed information about each car directly visible without a collapsible panel
- Make sure that you request all jsonblobs in parallel (at the same time) not in sequence (one after another)
- Show a loader or a loading message while loading and show the list only when data has returned from all jsonblobs and all requests finished
- Make sure that your code handles all error

<br>
<br>

# Approach to Solution


# JSONBlob

## 1. JSONBlob Usage

- **Six separate blobs** are used:
  - One for the factory metadata (e.g. name, location, a list of `carId`s).
  - Five for each car object.


## 2. Initial JSON Files

The project includes a `/json/` folder with the original JSON files:
- `factory.json`: contains factory details like name, address, manager, and an array of `carId`s.
- five `car.json` files: contain an array of car objects, each with fields like `carId`, `make`, `model`, `engine`, etc.

These were uploaded to JSONBlob manually.


## 3 Blob Information

### JSONBlob URLs

* **Factory Blob:** [https://jsonblob.com/1372889222368911360](https://jsonblob.com/1372889222368911360)
* **Car01 Blob:** [https://jsonblob.com/1374118226572795904](https://jsonblob.com/1372887680802807808)
* **Car02 Blob:** [https://jsonblob.com/1374118447876857856](https://jsonblob.com/1372887680802807808)
* **Car03 Blob:** [https://jsonblob.com/1374118559613116416](https://jsonblob.com/1372887680802807808)
* **Car04 Blob:** [https://jsonblob.com/1374118653330644992](https://jsonblob.com/1372887680802807808)
* **Car05 Blob:** [https://jsonblob.com/1374118770653716480](https://jsonblob.com/1372887680802807808)

### Blob IDs

| Purpose | Blob ID               |
| ------- | --------------------- |
| Factory | `1372889222368911360` |
| Car01    | `1374118226572795904` |
| Car02    | `1374118447876857856` |
| Car03    | `1374118559613116416` |
| Car04    | `1374118653330644992` |
| Car05    | `1374118770653716480` |

<br>

## 1. Fetching the Factory Data

```js
getFactoryRequest();
```

The entry point is `window.onload`, which starts the loading of the factory JSONBlob via `getFactoryRequest()`. While the request is in progress, a loading message is displayed to the user using:

```js
loadingMsg("Loading data, please wait...");
```

When the request completes, the script parses the JSON and calls `displayFactory()` to inject the factory data into the DOM.

Error handling is implemented to catch parsing errors or invalid data structures:

```js
try {
  factoryObject = JSON.parse(factoryRequest.responseText);
} catch (e) {
  showError("Data parsing error on factoryObject: invalid JSON structure.");
}
```

<br>

## 2. Parallel Loading of Car Data

Initially, I've tried loading cars one after another sequentially. Then I soon changed to parallel requests using multiple `XMLHttpRequest`s and a counter to track completion.

Once the factory data is loaded, the script immediately invokes:

```js
carsGetRequest();
```

This function iterates over all endpoints stored in `carsEndpoints` and fires all `XMLHttpRequest` calls in parallel. Each successful response is stored in the correct index of the `carsArray`.

A counter `loadedCars` ensures the script only proceeds to render once all car requests have completed successfully:

```js
if (loadedCars === carsEndpoints.length) {
  displayCars();
  hideLoadingMsg();
}
```

Each request is also equipped with `.addEventListener("error")` to handle and report network issues.

<br>

## 3. Displaying the Factory

```js
displayFactory();
```

This function dynamically creates a nested unordered list `<ul>` to render each key-value pair of the `factoryObject`. It supports:

* `null` values
* Arrays (rendered as comma-separated lists)
* Nested objects (rendered using nested `<ul>` structures)

Each value is carefully handled based on its type.

<br>

## 4. Displaying Each Car

```js
displayCars();
```

Each car is rendered as a `<ul>` in the container `#cars-list`.

Key features of this function include:

* A clear visual separation between the car's "title" and "content" using CSS class names `title` and `content`.
* Dynamic handling of primitive values, arrays, `null`, and nested objects.
* For nested objects, the script uses nested lists inside each `<li>`, and properly labels them using paired `<p>` elements with styling classes.

This structure ensures all car details are visible immediately, without toggles or hidden panels, as per assignment specs.

<br>

## 5. Error and Loading UI

Two visual helpers are provided:

* `showError(message)` — Displays a message inside the error container for 8 seconds.
* `loadingMsg(message)` — Displays a loader message until `hideLoadingMsg()` is called (after all requests finish).

These help provide user feedback during potentially long network operations.

CSS classes are used to toggle visibility instead of inline styles or `!important`.

<br>

# Example Output

- Factory info displayed as a nested list with keys and subkeys.
- Each car listed with its details, including nested object properties fully expanded.
- Loading message visible on start, disappearing on complete load.
- Error message visible if any data fails to load or parse.