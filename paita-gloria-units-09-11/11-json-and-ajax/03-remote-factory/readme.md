# 03 Remote Factory

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Use [JSONBlob](https://jsonblob.com/) to store JSON data about cars and a car factory
- You can use as many blobs as you need. Decide the structure in a way to
reduce the amount of data you modify with HTTP requests

- Write an application that displays a factory with a list of cars
- Clicking on each car should display a collapsible panel with more
information about the car
- It should be possible to edit the car details
- Save the modified data to jsonblob with an HTTP request
- Whenever data is modified you should reload the new data from jsonblob
once the writing has finished

- You should handle all error cases in your application. If an HTTP request
fails, you should display a message to the user
- Your project should include a folder called ‘json’ with all the initial json files
that you upload to jsonblob (the initial state of your DB)
- Your readme (markdown) should include links to all the jsonblobs that you
are using as well as a list of their IDs


<br>
<br>

# Approach to Solution

# JSONBlob

## 1. JSONBlob Usage

- **Two separate blobs** are used:
  - One for the factory metadata (e.g. name, location, a list of `carId`s).
  - One for the full list of cars (an array of car objects).

This modular setup allows updates to car data without touching the factory metadata.

## 2. Initial JSON Files

The project includes a `/json/` folder with the original JSON files:
- `factory.json`: contains factory details like name, address, manager, and an array of `carId`s.
- `cars.json`: contains an array of car objects, each with fields like `carId`, `make`, `model`, `engine`, etc.

These were uploaded to JSONBlob manually.


## 3 Blob Information

### JSONBlob URLs

* **Factory Blob:** [https://jsonblob.com/1372889222368911360](https://jsonblob.com/1372889222368911360)
* **Cars Blob:** [https://jsonblob.com/1372887680802807808](https://jsonblob.com/1372887680802807808)

### Blob IDs

| Purpose | Blob ID               |
| ------- | --------------------- |
| Factory | `1372889222368911360` |
| Cars    | `1372887680802807808` |


<br>
<br>


# How the Program Works

## Fetching Data (Startup)

On page load:

- The program sends a **GET request** to fetch:
  - Factory data from its blob URL.
  - Cars data from their blob URL.
- Each request uses `XMLHttpRequest` and wraps `JSON.parse()` in `try...catch` to prevent crashes from malformed JSON.

```js
const factoryEndpoint = "https://jsonblob.com/api/jsonBlob/1372889222368911360";
const carsEndpoint = "https://jsonblob.com/api/jsonBlob/1372887680802807808";
```

---

## Rendering Factory Info

- The factory data is displayed as a simple nested list in the `#factory` container.
- Each key/value pair is shown, including sub-objects like the factory's address.
- Arrays (like `carId`s) are rendered as comma-separated lists.

---

## Rendering the Car List

- Each car is rendered as an `<ul>` with one `<li>` per property.
- The **first `<li>` is the car's title**, and acts as an accordion trigger.
- Clicking the title:

  - Expands or collapses the car's detail panel.
  - Closes any other open car panel (only one open at a time).

- Each car has an "Edit" button at the bottom.

---

## Editing Car Data

When the user clicks "Edit":

- All fields under that car become editable (`contentEditable = true`).
- Editable fields are visually highlighted with a dashed border.
- The button changes to "Save and Exit".

When the user clicks "Save and Exit":

- The program:

  1. Loops through all modified fields.
  2. Updates the corresponding values in the in-memory `carsArray`.
  3. Also updates the `factoryObject` if the `carId` has changed.
  4. Calls both `saveCarsChangesToBlob()` and `saveFactoryChangesToBlob()`.

---

## Saving to JSONBlob

Saving works via HTTP `PUT` requests:

- Car data is deep-cloned and cleaned of non-serializable properties (`details`, `title`).
- A `PUT` request is sent with the updated array or object as JSON.
- After the response returns:

  - A **new GET request is made immediately** to re-fetch the updated blob.
  - The UI is cleared and re-rendered with the new data.

```js
carsPostRequest.send(JSON.stringify(cleanCarArrayCopy(carsArray)));
```

---

## Error Handling

Each HTTP request includes:

- `.onload` check for `status === 200 || status === 201`
- `.onerror` for network errors
- `try...catch` on every `JSON.parse()` operation

If anything goes wrong:

- A red error message is displayed in the `#error-message` container.
- The message disappears after 8 seconds using `setTimeout`.

Examples of possible errors:

- Network connection failure
- Invalid JSON from JSONBlob
- Unexpected HTTP status code (e.g. 403, 500)

<br>
<br>


# Example Use Case

1. The app fetches data from JSONBlob and renders it.
2. The user clicks on "model: Thunderbolt" → accordion expands to show details.
3. The user clicks "Edit" → all details become editable.
4. The user changes the price to "20000", then clicks "Save and Exit".
5. The program:

   - Sends a `PUT` to update the blob
   - Re-fetches the updated data
   - Re-renders the updated UI

6. The user sees the updated value immediately.

If any error happens (e.g. the blob is unreachable), the message `Network error while saving cars.` appears in red at the top.