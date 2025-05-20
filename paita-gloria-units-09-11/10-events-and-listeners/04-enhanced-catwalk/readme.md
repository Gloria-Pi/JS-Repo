# 04 Enhanced Catwalk

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- Start with the code from the previous ‘Catwalk’ exercise
- Add 4 buttons at the top of the page: ‘start’, ‘faster’, ‘slower’ and ‘stop’
- Add an area to display info
- When the start button is clicked the cat should start moving across the
screen
- The cat should stop moving when the stop button is clicked
- The cat moves faster when the faster button is clicked and slower when the
slower button is clicked
- Show the current speed on screen in the info area
- Disable the start/stop/faster/slower buttons at the appropriate times
    - e.g. the user shouldn't be able to click "stop" if the cat isn't currently moving


<br>
<br>

# Approach to Solution

## Overview

The page contains an image of a cat that moves horizontally across the screen. The movement is animated using JavaScript intervals. Five control buttons are dynamically added to the page:

- **Start**: begins movement

- **Stop**: halts movement

- **Faster**: increases speed

- **Slower**: decreases speed

- **Reset**: restores the default speed

The current speed is shown in real time. Each button is enabled or disabled based on context.

## 1. Creating the HTML Structure

- The page already contains an image of a cat.

- The program dynamically adds buttons and a paragraph using helper functions:
  - `createButton()`
  - `createDiv()`
  - `createP()`
  - `createSpan()`

Initial button states are set to prevent invalid actions:

```js
stopButton.disabled = true;
resetButton.disabled = true;
```

<br>

## 2. Animation Logic

- The cat moves from left to right and back.
- Movement is implemented using `setInterval`.
- When the cat reaches the right edge, its direction is flipped using CSS `transform: scaleX(-1)`.

```js
if (cat.offsetWidth + parseInt(cat.style.left) >= window.innerWidth) {
    cat.style.transform = "scaleX(-1)";
    clearInterval(forwardId);
    catWalkBackwards();
}
```

- The position is updated every `speedMs` using `pixelSpeed` as pixel distance.

<br>

## 3. Button Functionality

- `Start`: Begins the animation and disables itself to prevent double intervals.
- `Faster`: Increases `pixelSpeed` by 10 and restarts the interval.
- `Slower`: Decreases `pixelSpeed` by 10 (not below 1), disables itself if limit is reached.
- `Stop`: Clears the interval and freezes the cat.
- `Reset`: Restores `pixelSpeed` to 10 and restarts the movement.

Example:
```js
fasterButton.addEventListener("click", catHasTheZoomies);
slowerButton.addEventListener("click", catSlowDown);
resetButton.addEventListener("click", resetSpeed);
```

<br>

## 4. Displaying Speed

- The speed is shown using a `span` appended to a `p`.  
- The movement speed is based on pixelSpeed, which changes dynamically. The current speed is shown as a string like "30pixels/50ms".  
- Format: `10pixels/50ms`  
- Updated whenever speed changes or the cat is stopped.

```js
function displaySpeed(){
    span.textContent = pixelSpeed + "pixels/50ms";
}
```

<br>

## Stopping and Restarting
Stopping is handled by catWalkStop(), which clears the current setInterval and disables all relevant buttons:

```js
function catWalkStop() {
    if (cat.style.transform === "scaleX(-1)") {
        clearInterval(backwardId);
    }
    if (cat.style.transform === "scaleX(1)") {
        clearInterval(forwardId);
    }

    stopButton.disabled = true;
    startButton.disabled = false;
}
```

Restarting after a speed change is handled via:

```js
function restartCatMovement() {
    clearInterval(forwardId);
    clearInterval(backwardId);
    catWalkBackForth();
}
```

This ensures that any speed change takes immediate effect without waiting for the edge of the screen.

<br>

# Example Output

### After clicking Start

- The cat begins walking.
- Speed display: `10pixels/50ms`
- Buttons: `Start` disabled, others enabled.

### After clicking Faster twice

- Speed display: `30pixels/50ms`
- Reset button becomes enabled.

### After clicking Stop

- Cat stops mid-position.
- Speed display remains visible.
- Only `Start` button is re-enabled.

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