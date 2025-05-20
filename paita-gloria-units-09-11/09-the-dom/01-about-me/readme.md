# 01 About Me

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026  

<br>

# Assignment

- Add an external javascript file called `main.js`
- In JavaScript:
   - Change the `body` style so it has a font-family of "Arial, sans-serif"
   - Replace each of the `spans` (nickname, favorites, hometown) with your own information
   - Iterate through each `li` and change the class to "list-item"
   - Create a new `img` element and set its src attribute to a picture of you
   - Append that element to the page
- Add an external css file using Javascript
   - The external css file should make items with the .list-item class white, bold and with an
orange background
   - The external css file should be applied after 4 seconds

<br>
<br>

# Approach to Solution

## 1. Setting the Font via JavaScript

The first step was straightforward: applying a new font-family (`Arial, sans-serif`) to the entire document body.

```js
document.body.style.fontFamily = "Arial, sans-serif";
```

> **Note:** While effective, this approach is typically discouraged in real-world applications, as it violates separation of concerns. CSS should generally handle styling.

<br>
<br>

## 2. Replacing Span Content

Initially, I attempted to replace the contents of the `<span>` elements using `replaceChildren()`:

```js
let nickname = document.getElementById("nickname");
nickname.textContent = "Glo";

let spanNode = document.getElementsByTagName("span");
let listNode = document.getElementsByTagName("li");

listNode[0].replaceChildren(spanNode, nickname.textContent);
```

### Problem:
- `spanNode` is an `HTMLCollection`, not a single element.
- `replaceChildren()` expects actual nodes, not strings.

### Resolution:
Instead of trying to replace child elements, I simplified the logic and directly set the `textContent` of each span:

```js
nickname.textContent = "Glo";
favorites.textContent = "Ravioli";
hometown.textContent = "Pallet Town";
```

However, the assignment phrased it as "replace the spans," so I eventually chose to **completely replace the span nodes** with `createTextNode()` and `replaceChild()` for full compliance:

```js
let newText = document.createTextNode("Glo");
nickname.parentNode.replaceChild(newText, nickname);
```

<br>
<br>

## 3. Updating List Items' Class

Using `querySelectorAll`, I selected each `<li>` and changed its class to `"list-item"`:

```js
let liNodes = document.querySelectorAll("ul > li");

liNodes.forEach(liNode => {
    liNode.className = "list-item";
});
```

This allowed later CSS styling to target the list elements.

<br>
<br>

## 4. Appending a Personal Image

A new `<img>` element was dynamically created and appended to the page with a custom image source:

```js
let newImg = document.createElement("img");
newImg.src = "./assets/img/madagascar.webp";
document.body.appendChild(newImg);
```

<br>
<br>

## 5. Adding External CSS After a Delay

The requirement specified loading an external CSS file 4 seconds after the page loads. I first considered using `insertAdjacentHTML`, but realized that using `createElement` is a cleaner and safer approach.

### Final Implementation:
```js
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./styles/style.css";
setTimeout(() => {
    document.head.appendChild(link);
}, 4000);
```
<br>

### `createElement` was chosen over `insertAdjacentHTML` because:
- It's more secure, since it avoids XSS* vulnerabilities.
- It's less error-prone (no risk of broken HTML strings).
- It's more flexible, useful for future changes.

> *Notes:
> Cross-site scripting (XSS) is a web security vulnerability where attackers inject malicious scripts into legitimate websites, allowing them to execute these scripts in the context of the victim's browser.