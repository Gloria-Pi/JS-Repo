# 05 One To Many


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>

# Assignment

1. Write a function named oneToMany() that:
- takes 2 parameters, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

2. Call that function for a few different scores and log the result to make sure it
works.

3. **Bonus**: Make it handle a few collective nouns like "sheep" and "geese".

<p>&nbsp;</p>

## Approach to Solution

### 1. Implementing the oneToMany Function

The function first checks if `num` is 0 or greater than 1. If so, it determines the correct plural form of `noun`:
- **Predefined values**:  
  - `"cat"` → `"cats"`
  - `"dog"` → `"dogs"`
  - `"sheep"` → `"sheep"`
  - `"goose"` → `"geese"`

- **Default behavior**: If the noun is not in the predefined list, the function simply adds `"s"` to pluralize it.

If `num` is **1**, the function returns the singular noun as is.

```javascript
function oneToMany(num, noun) {

    if (num == 0 || num > 1) {

        let plural;
        let pluralResult;

        switch (noun) {
            case "cat":
                plural = "cats";
                break;
            case "dog":
                plural = "dogs";
                break;
            case "sheep":
                plural = "sheep";
                break;
            case "goose":
                plural = "geese";
                break;
            default:
                plural = `${noun}s`;
        }

        pluralResult = `${num} ${plural}`;
        return pluralResult;

    } else {
        return `${num} ${noun}`;
    }

}
```

<p>&nbsp;</p>

## 2. Example Outputs

The function produces the following outputs:

```javascript
console.log(oneToMany(1, "cat"));     // Logs: "1 cat"
console.log(oneToMany(1, "dog"));     // Logs: "1 dog"
console.log(oneToMany(1, "goose"));   // Logs: "1 goose"
console.log(oneToMany(1, "sheep"));   // Logs: "1 sheep"

console.log(oneToMany(2, "cat"));     // Logs: "2 cats"
console.log(oneToMany(3, "dog"));     // Logs: "3 dogs"
console.log(oneToMany(4, "goose"));   // Logs: "4 geese"
console.log(oneToMany(5, "sheep"));   // Logs: "5 sheep"
console.log(oneToMany(0, "bird"));    // Logs: "0 birds"
```

<p>&nbsp;</p>

## 3. Considerations

- The function assumes that the noun is in **lowercase**.
  - `"Goose"` → `"Gooses"`

- It does **not** account for complex English irregular plural forms such as:
  - `"child"` → `"children"`
  - `"mouse"` → `"mice"`
  - `"person"` → `"people"`

- The function does **not** handle non-alphabetical characters or compound words (`"mother-in-law"` should become `"mothers-in-law"`).

- When `noun` is an empty string:
    - if `num` is 1, the returned string will be "1 " (with a space)
    - if `num` is 0 or a number greater than 1, the returned string will be "${num} s"
