# 02 Digital Age - Class Version

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

- Use the class syntax method to write a constructors for `Video` and
`MusicVideo`

- Create an array that contains a mix of `Video` and `MusicVideo` instances

- Loop on the Array and for each item
  - call the `watch()` method
  - call the `play()` method only if it's a MusicVideo. Hint: Use `instanceof`

<br>
<br>

# Approach to Solution