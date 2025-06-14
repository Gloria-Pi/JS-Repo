# 02 Digital Age - Class Syntax Version

<br>

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Assignment

- A Video has the following methods and properties
  - title (a string)
  - seconds (a number)
  - `watch(x seconds [optional])` prints "You watched X seconds of 'TITLE'" e.g. "You watched 120 seconds of 'Lord of the rings'".  
    - If x is missing prints "You watched all SECONDS seconds of 'TITLE'" e.g. "You watched all 160 seconds of 'Lord of the rings'"

- A `MusicVideo` extends `Video` and has these extra methods and properties
  - `artist` (a string)
  - `play()` prints "You played 'TITLE' by 'ARTIST'" e.g. "You played 'Another Brick in the Wall' by 'Pink Floyd'"

- Use the prototype method, not classes, to write a constructors for `Video` and
`MusicVideo`
  - The constructor functions accept a single config object
  - All arguments are optional, use defaults if missing

- Create an array that contains a mix of `Video` and `MusicVideo` instances

- Loop on the Array and for each item
  - call the `watch()` method
  - call the `play()` method only if it's a MusicVideo. Hint: Use `instanceof`

- Optional:  
  - in a new folder, repeat the exercise using the class syntax rather than the prototype method  
  - All behaviors should be identical


<br>
<br>

# Approach to Solution

## 1. Creating the Video class

I started by defining a `Video` class using the `class` syntax:

```js
class Video {
    constructor(config = {}) {
        if (typeof config.title !== "undefined" && typeof config.title !== "string") {
            console.log("Invalid title.");
            this.title = "Title";
        } else {
            this.title = config.title || "Title";
        }

        this.seconds = (typeof config.seconds === "number" && config.seconds >= 0)
            ? config.seconds
            : 0;
    }
}
```

In this line:

```js
this.title = config.title || "Title";
```

I used the `||` operator to provide a **fallback default value** of `"Title"` in case `config.title` is:

* `undefined`
* `null`
* `""` (empty string)
* `0`, `false`, or any other falsy value

This guarantees the title is never left empty. However, we guard against incorrect types (`typeof config.title !== "string"`) *before* using `||`, ensuring that we only apply this fallback to valid or missing string values.

> ⚠️ If I wanted to allow `""` as a valid title, the `??` operator would have been a better choice, but in this case I prefer a default over an empty string.

<br>

## 2. Adding the `watch` method to the Video prototype

```js
Video.prototype.watch = function (nSeconds) {
    if (nSeconds !== undefined) {
        if (typeof nSeconds !== "number" || nSeconds < 0) {
            console.log("The number you've inputted is invalid.");
        } else {
            console.log(`You watched ${nSeconds} seconds of \"${this.title}\"`);
        }
    } else {
        console.log(`You watched all ${this.seconds} seconds of \"${this.title}\"`);
    }
};
```

* If a value is passed, it prints the number of seconds watched.
* If not, it assumes the user watched the full duration (`this.seconds`).

<br>

## 3. Creating the MusicVideo class (child of Video)

```js
class MusicVideo extends Video {
    constructor(config = {}) {
        super(config);

        if (typeof config.artist !== "undefined" && typeof config.artist !== "string") {
            console.log("Invalid artist name.");
            this.artist = "Artist";
        } else {
            this.artist = config.artist || "Artist";
        }
    }
}
```

* It calls `super(config)` to inherit the `Video` properties.
* It adds a new `artist` property, validated similarly to `title`.

<br>

## Method: `play`

```js
MusicVideo.prototype.play = function () {
    console.log(`You played \"${this.title}\" by \"${this.artist}\"`);
};
```

A simple message is logged showing the title and artist.

<br>

## 4. Playlist and Looping

The script creates an array of mixed `Video` and `MusicVideo` objects and loops through them:

```js
const playList = [
    new Video({ title: "Pinocchio Trailer", seconds: 120 }),
    new MusicVideo({ title: "World is Mine", seconds: 510, artist: "Hatsune Miku" }),
    new Video({ title: "Best Bugs Bunny Moments", seconds: 2400 }),
    new MusicVideo({ title: "What Makes You Beautiful", seconds: 300, artist: "One Direction" }),
    new MusicVideo({ title: "River Flows in You", seconds: 340, artist: "Yiruma" }),
    new MusicVideo({})
];

playList.forEach(playableVid => {
    playableVid.watch();
    if (playableVid instanceof MusicVideo) {
        playableVid.play();
    }
    console.log(" ");
});
```

It checks the type using `instanceof` before calling `.play()`.


## Results

```bash
You watched all 120 seconds of "Pinocchio Trailer"
 
You watched all 510 seconds of "World is Mine"
You played "World is Mine" by "Hatsune Miku"
 
You watched all 2400 seconds of "Best Bugs Bunny Moments"
ed all 300 seconds of "What Makes You Beautiful"
You played "What Makes You Beautiful" by "One Direction"
 
You watched all 340 seconds of "River Flows in You"
You played "River Flows in You" by "Yiruma"
 
You watched all 0 seconds of "Title"
You played "Title" by "Artist"
```

<br>
<br>


# Considerations - Prototype Syntax vs Class Syntax

| Feature           | Class Syntax              | Prototype Syntax                                     |
| ----------------- | ------------------------- | ---------------------------------------------------- |
| Readability       | More modern and intuitive | Verbose and procedural                               |
| Method Definition | Usually inside the class body     | Explicitly on the prototype                          |
| Inheritance       | `extends` and `super()`   | Manual via `Object.create()` or constructor chaining |
| Syntax sugar      | Yes                       | No                                                   |
| Clarity of Intent | High                      | Lower (looks more like object assignment)            |


<br>

## Class Methods and the Prototype

Defining a method directly on the class prototype — such as:

```js
Video.prototype.watch = function (nSeconds) {
  // ...
};
```

is perfectly valid in JavaScript, even when the class syntax is used.

Inside a `class` declaration, methods are automatically added to the prototype:

```js
class Video {
  watch(nSeconds) {
    // ...
  }
}
```

Under the hood, both approaches store the method on `Video.prototype`, so the behavior is equivalent. Explicitly attaching a method to the prototype can be useful when the method is defined after the class declaration, especially when extending built-in or existing types or separating logic for readability.