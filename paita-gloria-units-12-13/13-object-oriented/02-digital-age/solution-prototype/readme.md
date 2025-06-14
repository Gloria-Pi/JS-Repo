# 02 Digital Age - Prototype Version

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

<br>
<br>

# Approach to Solution

## 1. The `||` Operator

In both constructor functions, I used:

```js
config = config || {};
```

This ensures that if `config` is `undefined` or `null`, it defaults to an empty object `{}`.  
Without this fallback, attempting to access properties like `config.title` or `config.seconds` would throw a runtime error (e.g., `"Cannot read property 'title' of undefined"`).  
It also prevents needing to check whether `config` exists every time the program tries to access a property.

<br>

## 2. Creating the `Video` constructor

I validated the input and assigned default values:

```js
function Video(config) {
    config = config || {};
    this.title = typeof config.title === "string" ? config.title : "Title";
    this.seconds = (typeof config.seconds === "number" && config.seconds >= 0) ? config.seconds : 0;
}
```

The `watch()` method is defined on the prototype:

```js
Video.prototype.watch = function (nSeconds) {
    if (nSeconds !== undefined) {
        if (typeof nSeconds !== "number" || nSeconds < 0) {
            console.log("The number you've inputted is invalid.");
        } else {
            console.log(`You watched ${nSeconds} seconds of "${this.title}"`);
        }
    } else {
        console.log(`You watched all ${this.seconds} seconds of "${this.title}"`);
    }
};
```

<br>

## 3. Creating the `MusicVideo` constructor

I used `Video.call(this, config)` to inherit properties and reuse validation logic.

```js
function MusicVideo(config) {
    config = config || {};
    Video.call(this, config);
    this.artist = typeof config.artist === "string" ? config.artist : "Artist";
}
```

Then I set the prototype chain:

```js
MusicVideo.prototype = Object.create(Video.prototype);
```

And later on, defined the `play()` method:

```js
MusicVideo.prototype.play = function () {
    console.log(`You played "${this.title}" by "${this.artist}"`);
};
```

<br>

## 4. Testing the Constructors

First I checked the constructors' basic behavior:

```js
let mVideo = new MusicVideo({
    title: "Another Brick in the Wall",
    seconds: 300,
    artist: "Pink Floyd"
});
```

Then verified fallback defaults and input validation:

```js
let mVideo1 = new MusicVideo({});
mVideo1.play();         // "You played 'Title' by 'Artist'"
mVideo1.watch(-50);     // "The number you've inputted is invalid."
mVideo1.watch();        // "You watched all 0 seconds of 'Title'"
```

<br>

## 5. Looping Through Mixed Instances

As per the assignment, I constructed an array with both video types:

```js
const playList = [
    new Video({ title: "Pinocchio Trailer", seconds: 120 }),
    new MusicVideo({ title: "World is Mine", seconds: 510, artist: "Hatsune Miku" }),
    new Video({ title: "Best Bugs Bunny Moments", seconds: 2400 }),
    new MusicVideo({ title: "What Makes You Beautiful", seconds: 300, artist: "One Direction" }),
    new MusicVideo({ title: "River Flows in You", seconds: 340, artist: "Yiruma" }),
    new MusicVideo({})
];
```

Then looped through them and selectively called `play()`:

```js
playList.forEach(playableVid => {
    playableVid.watch();

    if (playableVid instanceof MusicVideo) {
        playableVid.play();
    }

    console.log(" ");
});
```

<br>

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

## Prototype vs. Class Syntax

To see a detailed comparison between prototype-based and class-based syntax in JavaScript, please refer to the [README](..\solution-class\readme.md), which includes a table outlining the key differences.