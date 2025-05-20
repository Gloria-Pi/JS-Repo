# 03 Catwalk - Variant 02

# Author

**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- The cat should start from the left side of the screen
- Write a function `catWalk()` that moves the cat 10 pixels to the right
- Make the cat move across the screen by calling that function every 50ms

- Write different versions of the function to handle the following variants:
    - Variant 2: When the cat reaches the right side of the screen, it should move backwards. When it reaches the left it should move forwards

<br>
<br>

# Approach to Solution

# Cat Walk Animation (Back and Forth)

## Setup

### 1. Add a Cat Image to Your HTML

The **first `<img>` element** on the page will be the cat image:

```html
<img src="path_to_your_cat_image.jpg" alt="Cat" />
```

### 2. Complete JavaScript code


```javascript
const cat = document.getElementsByTagName('img')[0];

function catWalkBackForth() {
    function catMoonWalk() {
        let backwardId = window.setInterval(() => {
            if (parseInt(cat.style.left) <= 0) {
                clearInterval(backwardId);
                catWalkForwards();
            } else {
                let oldXPosition = parseInt(cat.style.left);
                let newXPosition = oldXPosition - 10;
                cat.style.left = newXPosition + "px";
            }
        }, 50);
    }

    function catWalkForwards() {
        let forwardId = window.setInterval(() => {
            if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
                clearInterval(forwardId);
                catMoonWalk();
            } else {
                let oldXPosition = parseInt(cat.style.left);
                let newXPosition = oldXPosition + 10;
                cat.style.left = newXPosition + "px";
            }
        }, 50);
    }

    catWalkForwards();
}

document.body.style.overflow = "hidden";
cat.style.position = "absolute";
cat.style.left = "0px";
catWalkBackForth();
```

<br>

## How It Works (Step-by-Step)

1. **Initial Setup**

   * The cat is positioned absolutely on the screen:

     ```js
     cat.style.position = "absolute";
     cat.style.left = "0px";
     ```

2. **Walking Right**

   * The `catWalkForwards()` function moves the cat 10px right every 50ms.
   * When it reaches the **right edge**, it switches to `catMoonWalk()`.

3. **Walking Left**

   * The `catMoonWalk()` function moves the cat 10px left every 50ms.
   * When it reaches the **left edge**, it switches back to `catWalkForwards()`.

4. **Animation Loop**

   * The two functions call each other, creating an infinite back-and-forth loop.

<br>

## Notes: Scrollbar

* The `overflow` is hidden to prevent scrollbars from appearing:

  ```js
  document.body.style.overflow = "hidden";
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