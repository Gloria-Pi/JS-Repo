/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * Provides constructor functions for `Video` and `MusicVideo` using prototypal inheritance.
 * Implements default values, validation, and behavior methods like `watch()` and `play()`.
 */

/**
 * Creates a Video object with title and duration.
 * Accepts an optional config object with custom values.
 *
 * @constructor
 * @param {Object} [config={}] - Configuration object.
 * @param {string} [config.title="Title"] - Title of the video.
 * @param {number} [config.seconds=0] - Duration of the video in seconds.
 */
function Video(config) {

    config = config || {};

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

/**
 * Displays a message about how many seconds of the video were watched.
 * If no value is passed, assumes the entire video was watched.
 *
 * @param {number} [nSeconds] - Number of seconds watched (optional).
 */
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

/**
 * Creates a MusicVideo object, extending Video with an artist property.
 *
 * @constructor
 * @param {Object} [config={}] - Configuration object.
 * @param {string} [config.title="Title"] - Title of the music video.
 * @param {number} [config.seconds=0] - Duration of the music video in seconds.
 * @param {string} [config.artist="Artist"] - Artist performing the music video.
 */
function MusicVideo(config) {

    config = config || {};

    // Call the parent constructor
    Video.call(this, config);

    // Artist must be a string if provided
    if (typeof config.artist !== "undefined" && typeof config.artist !== "string") {
        console.log("Invalid artist name.");
        this.artist = "Artist";
    } else {
        this.artist = config.artist || "Artist";
    }
}

// Inherit from Video prototype
MusicVideo.prototype = Object.create(Video.prototype);

/**
 * Displays a message indicating the music video was played.
 */
MusicVideo.prototype.play = function () {
    console.log(`You played "${this.title}" by "${this.artist}"`);
}

// ---------------------------------------------------------
// Testing the constructors and methods

let mVideo = new MusicVideo({
    title: "Another Brick in the Wall",
    seconds: 300,
    artist: "Pink Floyd"
});

console.log("=== Testing ===");
mVideo.play();                // You played "Another Brick in the Wall" by "Pink Floyd"
mVideo.watch(120);            // You watched 120 seconds of "Another Brick in the Wall"
mVideo.watch();               // You watched all 300 seconds of "Another Brick in the Wall"

let mVideo1 = new MusicVideo({});
mVideo1.play();                // You played "Title" by "Artist"
mVideo1.watch(-50);            // The number you've inputted is invalid.
mVideo1.watch();               // You watched all 0 seconds of "Title"
console.log(" ");

// -----------------------------------------------------------------------------
// Creating a playlist and looping through items

/** @type {(Video|MusicVideo)[]} */
const playList = [
    new Video({ title: "Pinocchio Trailer", seconds: 120 }),
    new MusicVideo({ title: "World is Mine", seconds: 510, artist: "Hatsune Miku" }),
    new Video({ title: "Best Bugs Bunny Moments", seconds: 2400 }),
    new MusicVideo({ title: "What Makes You Beautiful", seconds: 300, artist: "One Direction" }),
    new MusicVideo({ title: "River Flows in You", seconds: 340, artist: "Yiruma" }),
    new MusicVideo({})
];

playList.forEach(playableVid => {
    // Calls the shared method
    playableVid.watch();

    // Plays only if it's a MusicVideo instance
    if (playableVid instanceof MusicVideo) {
        playableVid.play();
    }

    // Adds spacing between items
    console.log(" ");
});