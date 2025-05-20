# 03 Catwalk - Variant 03

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
    - Variant 3: When the cat reaches the middle of the screen, replace the img with a different cat image. Keep it in the middle for 10 seconds, and then replace the img with the original image and have it continue the walk as in variant 2


<br>
<br>

# Approach to Solution

# Cat Walk Animation (Pause at Center)

This project animates a cat walking across the screen, reversing direction at each edge. When the cat reaches the center of the screen, it pauses for 10 seconds and changes to a different image before continuing.

<br>

# Cat's Behavior

1. **Walk Right**

   - The cat starts walking to the right.
   - When it reaches the center of the screen, it:

     - Pauses
     - Switches to a "laptop cat" GIF
     - Waits 10 seconds
     - Resumes walking and switches back to original

2. **Walk Left**

   - After reaching the right edge, the cat walks left.
   - The same center-pause logic runs again.


<br>

# Code Logic

## 1. **`catWalkPause()` function**:

* This function is the starting point of the animation. It calls the `catWalkForwards()` function, which makes the cat start walking to the right. The logic of walking and pausing is controlled by the two inner functions: `catMoonWalk()` and `catWalkForwards()`.

<br>

## 2. **`catMoonWalk()` function**:

```js
function catMoonWalk() 
   let backwardId = window.setInterval(() => 
      let oldXPosition = parseInt(cat.style.left);
      let newXPosition = oldXPosition - 10;
      cat.style.left = newXPosition + "px"
      // Stop at left edge and reverse direction
      if (parseInt(cat.style.left) <= 0) {
         clearInterval(backwardId);
         catWalkForwards();
      
      // Pause at center and change image
      if (cat.offsetWidth / 2 + parseInt(cat.style.left) <= window.innerWidth / 2 &&
         cat.offsetWidth / 2 + parseInt(cat.style.left) >= window.innerWidth / 2 - 10) {
         clearInterval(backwardId);
         cat.src = "./assets/gifs/laptop-cat.gif"; // Show alternate cat
         setTimeout(() => {
            cat.src = "./assets/gifs/cat-walk.gif"; // Restore original
            catMoonWalk(); // Resume walking
         }, 10000);
      }
    }, 50);
}
```

* This function animates the cat moving to the left (backwards).
* **Step-by-step behavior**:

  1. **Moving left**:

     * A `setInterval()` is set to execute every 50 milliseconds, which moves the cat 10px to the left each time.
     * The cat’s position is updated by decreasing its `left` style property by 10px.

  2. **Edge check**:

     * When the cat reaches the left edge (position `<= 0`), the animation stops by clearing the interval, and the cat starts moving forwards (right) by calling the `catWalkForwards()` function.

  3. **Center check**:

     * When the cat reaches the center of the screen (within a range of +/- 10px from the center), the animation stops, and the cat's image is changed to `"laptop-cat.gif"`.
     * After a 10-second pause (`setTimeout()`), the cat’s image is restored to `"cat-walk.gif"`, and the cat resumes walking (backwards) with the `catMoonWalk()` function.

<br>

## 3. **`catWalkForwards()` function**:

```js
function catWalkForwards() {
      let forwardId = window.setInterval(() => {
         let oldXPosition = parseInt(cat.style.left);
         let newXPosition = oldXPosition + 10;
         cat.style.left = newXPosition + "px";
         // Stop at right edge and reverse direction
         if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
             clearInterval(forwardId);
             catMoonWalk();
         }
         // Pause at center and change image
         if (cat.offsetWidth / 2 + parseInt(cat.style.left) >= window.innerWidth / 2 &&
             cat.offsetWidth / 2 + parseInt(cat.style.left) <= window.innerWidth / 2 + 10) {
             clearInterval(forwardId);
             cat.src = "./assets/gifs/laptop-cat.gif";
             setTimeout(() => {
                 cat.src = "./assets/gifs/cat-walk.gif";
                 catWalkPause(); // Restart walk logic
             }, 10000);
         }
      }, 50);
   }
   catWalkForwards(); // Start the animation moving right
}
```

* This function animates the cat moving to the right (forwards).
* **Step-by-step behavior**:

  1. **Moving right**:

     * Similar to the previous function, a `setInterval()` runs every 50 milliseconds, and the cat’s position is increased by 10px, making it move right.
  2. **Edge check**:

     * When the cat reaches the right edge of the screen (`>= window.innerWidth`), the animation stops by clearing the interval, and the cat starts moving backwards (left) by calling the `catMoonWalk()` function.
  3. **Center check**:

     * When the cat reaches the center of the screen, its image changes to `"laptop-cat.gif"`.
     * After a 10-second pause, the original image (`"cat-walk.gif"`) is restored, and the cat starts walking again by calling `catWalkPause()`, which begins the next cycle of the animation.

<br>

## 4. **Initial Setup**:

* **Prevent Scrollbars**: `document.body.style.overflow = "hidden";` ensures no scrollbars are visible while the animation is running.
* **Positioning the cat**: `style="position:absolute;` in the HTML and `cat.style.left = "0px";` in the script set the cat's position to start at the left edge of the screen (0px from the left).
* **Starting the animation**: `catWalkPause();` is called at the end to start the whole animation process.

<br>

## Summary:

* The cat moves back and forth across the screen.
* When it reaches the center, it pauses for 10 seconds and switches its image.
* It then resumes walking in the opposite direction after the pause.
* The entire process loops infinitely, alternating between walking to the left and right while pausing at the center and changing the image.



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