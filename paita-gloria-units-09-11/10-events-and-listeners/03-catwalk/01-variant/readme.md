# 03 Catwalk - Variant 01

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- The cat should start from the left side of the screen
- Write a function ‘catWalk()’ that moves the cat 10 pixels to the right
- Make the cat move across the screen by calling that function every 50ms

- Write different versions of the function to handle the following variants:
    - Variant 1: When the cat reaches the right side of the screen it should restart from the left

<br>
<br>

# Approach to Solution

# Cat Walk Animation (With Reset)

This project animates a cat image walking from the left side of the screen to the right. When the cat reaches the edge of the screen, it resets to the left and keeps walking.

## Setup

### Add a cat image to index.html

```html
<img src="path_to_your_cat_image.jpg" alt="Cat" />
```

It must be the **first `<img>`** element in the HTML, as the JavaScript targets the first image.

## Full Code

```javascript
const cat = document.getElementsByTagName('img')[0];

let catWalkWithReset = function () {
    if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
        cat.style.left = "0px";
    } else {
        let oldXPosition = parseInt(cat.style.left);
        let newXPosition = oldXPosition + 10;
        cat.style.left = newXPosition + "px";
    }
};

cat.style.position = "absolute";
cat.style.left = "0px";
document.body.style.overflow = "hidden";

window.setInterval(catWalkWithReset, 50);
```

<br>

## Step-by-Step Logic

### 1. **Select the Cat Image**

```javascript
const cat = document.getElementsByTagName('img')[0];
```

- This line selects the **first `<img>` tag** in your HTML.
- It assumes the cat image is the first image on the page.

<br>

### 2. **Define the Animation Function**

```javascript
let catWalkWithReset = function () {
```

- This function will handle moving the cat and resetting its position if needed.

<br>

### 3. **Check If the Cat Reached the Right Edge**

```javascript
if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
    cat.style.left = "0px";
}
```

- `cat.offsetWidth`: the width of the image in pixels.
- `parseInt(cat.style.left)`: the current left position of the cat.
- `window.innerWidth`: the width of the browser window.
- If the **cat's right edge** goes beyond the screen, its position is reset to `0px`, which is the far left.

<br>

### 4. **Move the Cat to the Right**

```javascript
else {
    let oldXPosition = parseInt(cat.style.left);
    let newXPosition = oldXPosition + 10;
    cat.style.left = newXPosition + "px";
}
```

* If the cat hasn't reached the edge:

  - It moves **10 pixels to the right** by updating the `left` CSS property.

<br>

### 5. **Set Initial Positioning**

```javascript
cat.style.position = "absolute";
cat.style.left = "0px";
```

- `position: absolute` allows the image to move freely across the screen.
- `left = 0px` places the cat at the **starting point (left side)** of the screen.

<br>

### 6. **Prevent Scrolling**

```javascript
document.body.style.overflow = "hidden";
```

- Hides scrollbars that might appear when the cat moves.
- Keeps the animation clean and inside the visible area.

<br>

### 7. **Start the Animation**

```javascript
window.setInterval(catWalkWithReset, 50);
```


<br>

## Notes: Modifications to Provided HTML

The original HTML included the following image element:

```html
<img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
```

However, when loading this over HTTPS (as modern browsers often do by default), Firefox blocked the image due to a **mixed content error** — this occurs when secure (HTTPS) pages attempt to load insecure (HTTP) resources.

To resolve this, I downloaded the walking cat GIF and saved it locally under the project’s `assets/gifs/` directory. I then updated the image `src` attribute and added an `alt` description accordingly:

```html
<img style="position:absolute;" src="./assets/gifs/cat-walk.gif" alt="A walking black cat.">
```

This change ensures the image loads correctly in all modern browsers without security warnings or content blocking, and improves the project's compatibility and reliability when served over HTTPS.