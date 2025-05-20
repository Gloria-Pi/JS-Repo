# 01 Regex Validation


# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>


# Assignment

Write regular expressions to validate the following inputs  

1. **Email Address**  
   Expected pattern: `[any characters]@[any characters].[2-4 letters]`  

2. **Phone Number**     
   Expected pattern: `[optional + or country code] [digits, possibly separated by dashes or spaces]`  

3. **Password**  
   Expected pattern: `[at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character]`  

4. **URL**  
   Expected pattern: `[protocol]://[domain].[top-level domain]/[optional path]?[optional query string]#[optional fragment]`  

<br>

**NOTE:**
Invent multiple test cases to thoroughly test your regular expressions

<br>
<br>

# Approach to Solution

# 📧 Email Address

## Creating the Regular Expression

I used a literal regex to define the pattern.

```javascript
const emailPattern = /^[a-zA-Z0-9\._%£$+-]+@[a-zA-Z0-9\._%£$+-]+\.[a-zA-Z]{2,4}$/;
```

**NOTE:** the character set `[a-zA-Z0-9\._%£$+-]` includes some non-standard characters (i.e not officially valid according to the RFC 5322 standard) for flexibility.

### Breakdown of the pattern:

- `^` asserts the **start** of the string.
- `[a-zA-Z0-9\._%£$+-]+` matches one or more characters that can be:
  - letters (`a-z`, `A-Z`)
  - digits (`0-9`)
  - dot `.`
  - underscore `_`
  - percentage `%`
  - pound sign `£`
  - dollar sign `$`
  - plus `+`
  - hyphen `-` (must be at the **end** of the character set to avoid being interpreted as a range)
- `@` matches the **@** symbol.
- `[^\s@]` ensures that the character following the `@` symbol is neither a `whitespace` nor another `@`.- Another `[a-zA-Z0-9._%£$+-]+` block is used for the domain name.
- `\.` is used to escape the dot, so it matches a **literal period**.
- `[a-zA-Z]{2,4}` ensures the domain extension has between **2 and 4 letters** (e.g. `.com`, `.fr`, `.info`).
- `$` asserts the **end** of the string.

<br>

> **Note:**  
> According to the [RFC 5322 standard](https://datatracker.ietf.org/doc/html/rfc5322), characters like `%`, `$`, and `£` are **not officially valid** in the local part of an email.  
> The more accurate pattern would be:

> ```javascript
> /^[a-zA-Z0-9\._%+-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,4}$/
> ```

<br>

## Test Cases

```javascript
const email = "pincopanco@gmail.it";
const email1 = "123_STELLa@yahoo.com";
const email2 = "napo%eonbo$$apa£te@tiscali.fr";
const email3 = "wantA_TranquilLifeH123@outl00k.com";
const email4 = "this_mail_shouldn't_w@rk@wrong.com";
const email5 = "hère_còmè_dà_àççénts@stillwrong.net";

console.log(`Testing the validity of email "${email}". The result is: ${emailPattern.test(email)}`);
console.log(`Testing the validity of email "${email1}". The result is: ${emailPattern.test(email1)}`);
console.log(`Testing the validity of email "${email2}". The result is: ${emailPattern.test(email2)}`);
console.log(`Testing the validity of email "${email3}". The result is: ${emailPattern.test(email3)}`);
console.log(`Testing the validity of email "${email4}". The result is: ${emailPattern.test(email4)}`);
console.log(`Testing the validity of email "${email5}". The result is: ${emailPattern.test(email5)}`);
```

<br>

### Output:

```bash
Testing the validity of email "pincopanco@gmail.it". The result is: true
Testing the validity of email "123_STELLa@yahoo.com". The result is: true
Testing the validity of email "napo%eonbo$$apa£te@tiscali.fr". The result is: true
Testing the validity of email "wantA_TranquilLifeH123@outl00k.com". The result is: true
Testing the validity of email "this_mail_shouldn't_w@rk@wrong.com". The result is: false
Testing the validity of email "hère_còmè_dà_àççénts@stillwrong.net". The result is: false
```

## Observations

- The `^` and `$` anchors ensure that **only** valid email strings are accepted — no extra characters before or after.
- The `-` character **must be at the end** of the character set (e.g. [a-zA-Z0-9._%£$+-]). Otherwise, it is interpreted as a **range**.
- `\.` is used to match a **literal dot**, not any character.
- **Accented letters** (e.g. `è`, `ç`) are not matched by `[a-zA-Z]` and therefore are considered invalid by this pattern.

<br>
<br>
<br>






# 📞 Phone Numbers

## Understanding the US Phone Number Format
For simplicity, I focused on the standard US phone number structure:

```text
+1 (Area Code) XXX-XXXX
```

Where:

- `+1` → The country code for the United States (optional).
- `(Area Code)` → A three-digit area code.
- `XXX-XXXX` → A 7-digit local number, which can be separated by dashes or spaces.

<br>

Examples of valid formats:

- `+1 212-555-1234` (Country code +1, area code, and local number with hyphen)
- `+1 415 555 1234` (Country code +1, area code, and local number with spaces)
- `1 415 555 1234` (Without `+`, but includes country code `1`)
- `415-555-1234` (Standard format without country code)
- `1-415-555-1234` (With country code and hyphens)

<br>

Examples of invalid formats:
- Non-US numbers like `+39 02 1234 5678`
- Incorrectly formatted country code like `+ 415 555 1234`
- Incomplete numbers like `+1 123 4567`

---


## Constructing the Regular Expression

```javascript
const phonePattern = /^(\+?\d{1})?(\-|\x20)?(\d{3})(\-|\x20)?(\d{3})(\-|\x20)?(\d{4})$/;
```

### Breakdown of the Regex:
- `^` and `$` → Ensure the entire string matches the pattern.
- `(\+?\d{1})?` → Matches an optional `+` followed by a single digit (country code). This pattern can appear once or not at all.
- `(\-|\x20)?` → Matches an optional `-` or space separator.
- `(\d{3})` → Matches a three-digit area code.
- `(\-|\x20)?` → Optional separator between sections (a "-" or a space character (represented by `\x20`, ASCII code 32).
- `(\d{3})(\-|\x20)?(\d{4})` → Matches the main 7-digit number, allowing optional separators ("-" or the space character).

---

## Test Cases

We define a set of valid and invalid US phone numbers:

```javascript
// Valid US phone numbers
const phone = "+1 212-555-1234";
const phone1 = "+1 415 555 1234";
const phone2 = "1 415 555 1234";
const phone3 = "415-555-1234";
const phone4 = "1-415-555-1234";

// Invalid phone numbers (not US format)
const phone5 = "+39 02 1234 5678";
const phone6 = "+ 415 555 1234";
const phone7 = "+1 123 4567";

// Testing outputs
console.log(`Testing the validity of the number "${phone}". The result is: ${phonePattern.test(phone)}`); // true
console.log(`Testing the validity of the number "${phone1}". The result is: ${phonePattern.test(phone1)}`); // true
console.log(`Testing the validity of the number "${phone2}". The result is: ${phonePattern.test(phone2)}`); // true
console.log(`Testing the validity of the number "${phone3}". The result is: ${phonePattern.test(phone3)}`); // true
console.log(`Testing the validity of the number "${phone4}". The result is: ${phonePattern.test(phone4)}`); // true
console.log(`Testing the validity of the number "${phone5}". The result is: ${phonePattern.test(phone5)}`); // false
console.log(`Testing the validity of the number "${phone6}". The result is: ${phonePattern.test(phone6)}`); // false
console.log(`Testing the validity of the number "${phone7}". The result is: ${phonePattern.test(phone7)}`); // false
```

---

## Further Improvements

- Further improvements could include supporting parentheses around the area code (e.g., `(415) 555-1234`).

- This regex was specifically designed to validate US phone numbers. The next step would be to make the pattern more flexible, accommodating the phone number formats of other countries.



<br>
<br>
<br>


# 🔐 Password

The following regular expression is used to validate the password:

```javascript
const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_])[^\s]{8,}$/;
```

## Breakdown of the pattern

- `^`: Anchors the pattern to the start of the string.
- `(?=.*[A-Z])`: Lookahead for at least one uppercase letter.
- `(?=.*[a-z])`: Lookahead for at least one lowercase letter.
- `(?=.*[0-9])`: Lookahead for at least one digit.
- `(?=.*[\W_])`: Lookahead for at least one special character (non-word characters, including punctuation).
- `[^\s]{8,}`: Ensures the password is at least 8 characters long and does not contain any spaces.
- `$`: Anchors the pattern to the end of the string.

## Notes

- Anchors (`^` and `$`): These ensure the entire string is validated, preventing any extra characters before or after the password.
- `.*` vs `.+`: At first I tried solving the exercise by using the lookahead with `.+`, but soon discovered that `.+` would enforce at least one character before matching. Instead, the `.*` ensures that the required characters (uppercase, lowercase, digit, special) can appear anywhere in the string.
- `^\s`: The use of `[^\s]` ensures that spaces are excluded from the password.
- `[\W_]`: This part ensures the presence of at least one special character (including punctuation).

---

## Test Cases

```javascript
const pass = "hello1";
const pass1 = "Nq7$Wm2!xC^eL9#";
const pass2 = "SmartP@nda7!z";
const pass3 = "___mew0LMAO";
const pass4 = "123456543@";
const pass5 = "accèèèènts_MAKE_everything_wr0ng";
const pass6 = "Unval1D_ pass";
const pass7 = "Val1D_pass";

console.log(`Is "${pass}" a valid password? ${passPattern.test(pass)}`);
console.log(`Is "${pass1}" a valid password? ${passPattern.test(pass1)}`);
console.log(`Is "${pass2}" a valid password? ${passPattern.test(pass2)}`);
console.log(`Is "${pass3}" a valid password? ${passPattern.test(pass3)}`);
console.log(`Is "${pass4}" a valid password? ${passPattern.test(pass4)}`);
console.log(`Is "${pass5}" a valid password? ${passPattern.test(pass5)}`);
console.log(`Is "${pass6}" a valid password? ${passPattern.test(pass6)}`);
console.log(`Is "${pass7}" a valid password? ${passPattern.test(pass7)}`);
```

### Output:

```bash
Is "hello1" a valid password? false
Is "Nq7$Wm2!xC^eL9#" a valid password? true
Is "SmartP@nda7!z" a valid password? true
Is "___mew0LMAO" a valid password? true
Is "123456543@" a valid password? false
((((Is "accèèèènts_MAKE_everything_wr0ng" a valid password? false))))
Is "Unval1D_ pass" a valid password? false
Is "Val1D_pass" a valid password? true
```


<br>
<br>
<br>


# 🔗 URL

## Assignment Overview

The goal of this exercise is to write a regular expression that can validate URLs, ensuring they follow the following expected pattern:

> [protocol]://[domain].[top-level domain]/[optional path]?[optional query string]#[optional fragment]

For the purpose of this exercise, the URL regex pattern was designed to match the following constraints:

- **Protocol**: `http` or `https` with the corresponding `://`.
- **Domain**: in accordance with RFC 1035, only alphanumeric characters or hyphens (`[a-zA-Z0-9-]`) are permitted.
- **Top-Level Domain**: one of the following hardcoded values: `.com`, `.org`, `.net`, `.int`, `.edu`, `.gov`, `.mil`.
- **Optional Path**: zero or more segments following the domain, consisting of alphanumeric characters and hyphens, each preceded by a `/`.
- **Optional Query**: an optional query string starting with a `?`, followed by key-value pairs, where each pair consists of alphanumeric characters, `=` and `&`.
- **Optional Fragment**: An optional fragment starting with a `#`, followed by alphanumeric characters.

## Regular Expression

```javascript
const urlPattern = /https?:\/\/[a-zA-Z0-9-]+\.(com|org|net|int|edu|gov|mil)(\/[a-zA-Z0-9-]+)*(\?[a-zA-Z0-9=&]+)?(\#[a-zA-Z0-9]*)?/;
```

## Breakdown of the Pattern

- `https?`: matches `http` or `https` (making the s optional).
- `:\/\/`: escapes the forward slashes, ensuring that the URL contains `://` after the protocol.
- `[a-zA-Z0-9-]+`: matches the domain, which can consist of letters (both uppercase and lowercase), digits, and hyphens.
- `\.`: escapes the dot (.) to match a literal dot between the domain and top-level domain (TLD).
- `(com|org|net|int|edu|gov|mil)`: matches one of the seven hardcoded valid TLDs: `.com`, `.org`, `.net`, `.int`, `.edu`, `.gov`, or `.mil`.
- `(\/[a-zA-Z0-9-]+)*`: matches the optional path, consisting of zero or more path segments that begin with a `/` followed by alphanumeric characters or hyphens.
- `(\?[a-zA-Z0-9=&]+)?`: matches the optional query string, which starts with a `?` and includes key-value pairs (e.g., `key=value&key2=value2`).
- `(\#[a-zA-Z0-9]*)?`: matches the optional fragment identifier, which starts with a `#` and contains alphanumeric characters.


## Test Cases

Here are some examples of URL test cases and their validation results using the regex pattern:

```javascript
const url = "https://www.example.com:433/resources/newpage.html?key1=value&key2=value2#faw";
const url0 = "https://example.com/resources/newpage?key1=value&key2=value2#faw";
const url1 = "https://www.hostwinds.com/blog/url-structure";
const url2 = "https://hostwinds.com/blog/url-structure";
const url3 = "http://blog.rankwatch.com/technology/URL-optimation-for-search-engines";
const url4 = "https://www.example.co.uk:443/blog/article/search?docid=720&hl=en#dayone";
const url5 = "https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG";
const url6 = "https://mobileversion.com/blog/digital-video#location";

console.log(`Is "${url}" a valid URL? ${urlPattern.test(url)}`);    // false
console.log(`Is "${url0}" a valid URL? ${urlPattern.test(url0)}`);  // true
console.log(`Is "${url1}" a valid URL? ${urlPattern.test(url1)}`);  // false
console.log(`Is "${url2}" a valid URL? ${urlPattern.test(url2)}`);  // true
console.log(`Is "${url3}" a valid URL? ${urlPattern.test(url3)}`);  // false
console.log(`Is "${url4}" a valid URL? ${urlPattern.test(url4)}`);  // false
console.log(`Is "${url5}" a valid URL? ${urlPattern.test(url5)}`);  // false
console.log(`Is "${url6}" a valid URL? ${urlPattern.test(url6)}`);  // true
```

### Output:

```bash
Is "https://www.example.com:433/resources/newpage.html?key1=value&key2=value2#faw" a valid URL? false
Is "https://example.com/resources/newpage?key1=value&key2=value2#faw" a valid URL? true
Is "https://www.hostwinds.com/blog/url-structure" a valid URL? false
Is "https://hostwinds.com/blog/url-structure" a valid URL? true
Is "http://blog.rankwatch.com/technology/URL-optimation-for-search-engines" a valid URL? false
Is "https://www.example.co.uk:443/blog/article/search?docid=720&hl=en#dayone" a valid URL? false
Is "https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG" a valid URL? false
Is "https://mobileversion.com/blog/digital-video#location" a valid URL? true
```


### Optional Enhancements
- Currently, the regex only supports the `http` and `https` protocols, but it could be expanded to allow other protocols like `ftp`, `mailto`, etc.

- The regex only supports a limited list of TLDs (`.com`, `.org`, `.net`, etc.). To accommodate more TLDs (such as `.io`, `.co`, `.xyz`), I could either use a complete list of all available TLDs or a more flexible pattern like `[a-z]{2,}`. However, relying on a complete list isn't ideal, as TLDs are constantly being updated, and maintaining an up-to-date list could become cumbersome.

- The regex doesn't support subdomains (`www.example.com`), ports (`example.com:8080`), and more advanced URL structures like TLDs with multiple dots (e.g., `.co.uk`).


