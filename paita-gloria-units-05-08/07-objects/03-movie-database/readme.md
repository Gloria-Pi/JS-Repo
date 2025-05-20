# 03 Movie Database


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

- Create an object to store the following information about a movie: title (a
string), duration (a number), and stars (an array of strings).
- Create an Array of objects that can hold several movies.
- Create a function to print out the movie information like so: "Puff the Magic
Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
- Test the function by printing one movie.
- Use the function to print all the movies in the Array.


<br>

# Approach to Solution

# Creating the object

Created an object called `myMovie` that stores multiple key-value pairs:
- a `title` (string)
- a `duration` (number)
- a `stars` property (array of strings)

<br>

# Creating the array

Created an array called `movieDatabase` that stores multiple movie objects. Each object has:
- a `title` (string)
- a `duration` (number)
- a `stars` property (array of strings)

<br>

# Creating the function

Wrote a function called `movieInfo` that:
- takes a movie object as input
- uses template literals to create a formatted string with the movie information
- joins the array of stars with commas
- adds a newline `\n` for spacing when printing multiple entries

<br>

# Function Code

```js
function movieInfo(movie) {
    console.log(`"${movie.title}" lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.\n`);
}
```

<br>


# Testing

- Called `movieInfo()` once with a single movie to test output.
- Used a `for...of` loop to iterate through the full `movieDatabase` and print all movies.

---

<br>

## Brainstorming & Loop Confusion

I was initially unsure whether to use `for...in` or `for...of` for iterating over the movie array. After a bit of research, here's what I found:

| Loop Type   | Use Case                         | Iterates Over          | Value in Each Iteration          |
|-------------|----------------------------------|-------------------------|----------------------------------|
| `for...in`  | Best for objects                 | Object keys/indexes for arrays | Number (e.g., 0, 1, 2...)          |
| `for...of`  | Best for arrays and iterables   | Values                  | Direct element (e.g., movie object) |

<br>

###  `for...in`

```js 
for (let movie in movieDatabase) { 
    movieInfo(movieDatabase[movie]);
}
```

The `for...in` loop iterates over the **keys of an object**, or the **indices of an array**, but it is more appropriate for objects as it's designed to loop over object properties. In this case, in each iteration, `movie` would be the index (a number) of the current movie in the `movieDatabase` array and I'd need to access `movieDatabase`[movie] to get the actual movie object.

<br>

###  `for...of`

```js 
for (let movie of movieDatabase) {
    movieInfo(movie); 
}
```

The `for...of loop` is specifically designed to iterate over the **values** of an iterable (like an array, string, or Map). In this case, in each iteration, `movie` will be the movie object itself, not an index or key.

<br> 

## Final Decision

Used `for...of` because:
- It directly gives access to the values of the `movieDatabase` array
- It's cleaner and more readable in this scenario

<br>


<br>

# Example Output for a single movie

```js
movieInfo(myMovie);
// Logs: "A Very Cool Very Engaging Movie" lasts for 20 minutes. Stars: Ian McCool, John Coolio, Jane Tarzan.
```

<br>

# Example Output for a every movie in the array

```js
for (let movie of movieDatabase) {
    movieInfo(movie);
}
```

```txt
"Is this 'Burn Out'?" lasts for 120 minutes. Stars: Gloria Pigeon, Matteo Birdman, Lady ITS, Mr. Stress.

"Twisted Wonderland" lasts for 180 minutes. Stars: Riddle Rosehearts, Azul Ashengrotto, Jamil Viper, Jade Leech.

"A Thousand Tears" lasts for 1000 minutes. Stars: Sir Lots O' Water, Pretty Face, The Eyes Twins, Miss. Sadness.

"Jurassic Park" lasts for 170 minutes. Stars: George the T-Rex, April the Pterodactyl, Hernest the Velociraptor, Linda the Triceratops.
```

