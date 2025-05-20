# 10 Clock

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Implement a javascript clock that prints the current time to the console
every second
- The output should be in the format HH:mm:ss e.g. 17:03:06

<br>
<br>

# Approach to Solution










## Creating the Clock Function

I created a function named `clock(date)` that:

- Accepts a `Date` object as input.
- Extracts the current `hours`, `minutes`, and `seconds`.
- Uses `padStart(2, '0')` to ensure that single-digit values are formatted correctly (e.g., `05` instead of `5`).
- Logs the formatted string in the form `HH:mm:ss`.

```js
function clock(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  console.log(`${hours}:${minutes}:${seconds}`);
}
```

---

## Setting the Interval

I used `setInterval()` to call the `clock()` function every 1000 milliseconds (1 second).

```js
const clockIntervalId = setInterval(() => {
  clock(new Date());
}, 1000);
```

---

# Example Output

```
00:10:50
00:10:51
00:10:52
00:10:53
00:10:54
00:10:55
00:10:56
00:10:57
00:10:58
00:10:59
00:11:00
00:11:01
```

---

# Notes

- The time is printed to the console every second.
- The clock uses the **system time** and is updated in **real-time**.
- The interval continues to run unless cleared using `clearInterval(clockIntervalId)`.
