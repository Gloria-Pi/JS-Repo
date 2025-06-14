/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Gotta explain why i used the ?? null coalescing instead of ||
 */

/*
ASSIGNMENT:
- A Video has the following methods and properties
  - title (a string)
  - seconds (a number)
  - watch(x seconds [optional]) prints "You watched X seconds of 'TITLE'" e.g. "You watched
120 seconds of 'Lord of the rings'". If x is missing prints "You watched all SECONDS seconds
of 'TITLE'" e.g. "You watched all 160 seconds of 'Lord of the rings'"
- A MusicVideo extends Video and has these extra methods and properties
  - artist (a string)
  - play() prints "You played 'TITLE' by 'ARTIST'" e.g. "You played 'Another Brick in the Wall' by
'Pink Floyd'"

- Use the prototype method, not classes, to write a constructors for Video and
MusicVideo
  - The constructor functions accept a single config object
  - All arguments are optional, use defaults if missing


- Create an array that contains a mix of Video and MusicVideo instances

- Loop on the Array and for each item
  - call the watch() method
  - call the play() method only if it's a MusicVideo. Hint: Use instanceof


- Optional:
  - in a new folder, repeat the exercise using the class syntax rather than the prototype method
  - All behaviors should be identical

*/

class Video {
    constructor(config = {}) {
        // Title must be a string and non-empty if provided
        if (typeof config.title !== "undefined" && typeof config.title !== "string") {
            console.log("Invalid title.");
            this.title = "Title";
        } else {
            this.title = config.title || "Title";
        }

        // Seconds must be a non-negative number
        this.seconds = (typeof config.seconds === "number" && config.seconds >= 0)
            ? config.seconds
            : 0;
    }
}

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

class MusicVideo extends Video {
    constructor(config = {}) {
        super(config);

        // Artist must be a string if provided
        if (typeof config.artist !== "undefined" && typeof config.artist !== "string") {
            console.log("Invalid artist name.");
            this.artist = "Artist";
        } else {
            this.artist = config.artist || "Artist";
        }
    }
}


MusicVideo.prototype.play = function () {
    console.log(`You played "${this.title}" by "${this.artist}"`);
}


let mVideo = new MusicVideo({
    title: "Another Brick in the Wall",
    seconds: 300,
    artist: "Pink Floyd"
});

//Testing
console.log("=== Testing ===");
mVideo.play();                // You played "Another Brick in the Wall" by "Pink Floyd"
mVideo.watch(120);            // You watched 120 seconds of "Another Brick in the Wall"
mVideo.watch();               // You watched all 300 seconds of "Another Brick in the Wall"

let mVideo1 = new MusicVideo({});
mVideo1.play();                // You played "Title" by "Artist"
mVideo1.watch(-50);            // The number you've inputted is invalid.
mVideo1.watch();               // You watched all 0 seconds of "Title"
console.log(" ");


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

    //For formatting purposes
    console.log(" ");
});