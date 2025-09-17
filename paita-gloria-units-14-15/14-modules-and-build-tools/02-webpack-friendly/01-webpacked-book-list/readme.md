# 01 Webpacked Book List

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

## 📚 Table of Contents

- [Original Assignment Overview](#original-assignment---book-list)
- [Current Assignment](#current-assignment)
- [Folder Structure](#folder-structure)
- [Webpack Configuration Notes](#webpack-configuration-notes)
  - [Tech Stack](#tech-stack)
  - [Entry and Output](#entryoutput-configuration)
  - [Dist Folder Structure](#resulting-dist-folder-structure)
  - [Development vs Production Mode](#development-vs-production-mode)
- [Notes & Challenges](#notes--challenges)
- [Syntax & Structural Changes](#syntax--structural-changes)
- [Polyfills & Compatibility](#polyfills--compatibility)
- [Browser Compatibility](#browser-compatibility)

<br>

# Original Assignment - Book List

- Create a complete webpage with a title, description and all other HTML tags
- In the body add an h1 title of "My Book List"
- In javascript, iterate through the array of books.
   - For each book, create HTML element with the book title and author and append it to the page
   - Use a ul and li to display the books
   - Add a url property to each book object that contains the cover image of the book
   - Add the image to the HTML using Javascript
   - Using javascript change the style of the book depending on whether you have read it or not
- Add an external css file that applies after 5 seconds
   - Now change the style of the book depending on whether you have read it or not using both css and javascript (the CSS should use a different color for read books)

<br>

# Current Assignment
Aims of the exercise:

- Rewrite previous units using ES6+ syntax
- Bundle with Webpack
- Use polyfills for broader browser compatibility
- Document configurations and test across multiple browsers

<br>
<br>

# Webpack Configuration Notes
## Tech Stack
| Technology                  | Version | Purpose                                |
| --------------------------- | ------- | -------------------------------------- |
| **webpack**                 | 5.101.3 | Bundling                               |
| **webpack-cli**             | 6.0.1   | CLI for webpack                        |
| **webpack-dev-server**      | 5.2.2   | Development server                     |
| **@babel/core**             | 7.28.4  | JavaScript transpilation / polyfills   |
| **@babel/preset-env**       | 7.28.3  | Modern JavaScript syntax support       |
| **babel-loader**            | 10.0.0  | Babel integration with webpack         |
| **css-loader**              | 7.1.2   | CSS import and resolution              |
| **style-loader**            | 4.0.0   | Inject CSS into the DOM                |
| **mini-css-extract-plugin** | 2.9.4   | Extract CSS to separate files          |
| **postcss**                 | 8.5.6   | CSS post-processing                    |
| **postcss-loader**          | 8.2.0   | Integrate PostCSS with webpack         |
| **postcss-preset-env**      | 10.3.1  | Modern CSS features / polyfills        |
| **html-webpack-plugin**     | 5.6.4   | Inject HTML templates into output      |
| **html-loader**             | 5.1.0   | Import HTML and resolve linked assets  |
| **core-js**                 | 3.45.1  | JavaScript polyfills for compatibility |
| **Node.js**                 | ≥16.x   | Runtime for scripts and tooling        |

<br>

## Folder Structure
```bash
📁 Root/
├── .gitignore               # Git ignore rules
├── package.json             # Project metadata, dependencies, and scripts
├── package-lock.json        # Exact versions of installed dependencies
├── readme.md                # Project documentation and assignment details
├── webpack.config.js        # Webpack configuration
└── 📁 src/                   # Source files
    ├── temp.html            # HTML template for the app

    ├── 📁 assets/           # Static assets
    │   ├── 📁 favicon/
    │   │   └── favicon.ico  # Favicon image
    │   └── 📁 img/
    │       ├── design.jpg
    │       ├── haikyuu1.jpg
    │       ├── holocaust.jpg
    │       └── notredame.jpg  # Book cover images

    ├── 📁 scripts/           # JavaScript source files
    │   ├── helper.js         # Helper functions (e.g., delayed CSS loader)
    │   └── main.js           # Main script for rendering book list

    └── 📁 styles/            # CSS files
        └── delayed.css       # CSS injected after delay
```

<br>

## Entry/output configuration

* **Entry**

  * The main entry point for the application is:

    ```js
    entry: {
      main: path.resolve(__dirname, 'src/scripts/main.js')
    }
    ```
  * This tells Webpack to start bundling from `src/scripts/main.js`.

* **Output**

  * The bundled files will be emitted to the `dist/` directory:

    ```js
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: '[name][ext]',
      clean: true,
    }
    ```
  * `filename: '[name].[contenthash].js'` ensures that the output JavaScript file includes a unique hash for cache busting (e.g., `main.abc123.js`).
  * `assetModuleFilename: '[name][ext]'` defines how static assets (e.g., images) are named and output.
  * `clean: true` ensures the `dist/` folder is cleared before each build to prevent leftover files from previous builds.

<br>

## Resulting dist folder structure
```bash
📁 dist/
├── index.html                          # Generated by HtmlWebpackPlugin from src/temp.html
├── main.[contenthash].js              # Bundled JS file (e.g., main.abc123.js)
├── style.[contenthash].css            # Extracted CSS (MiniCssExtractPlugin)
│
├── 📁 assets/
│   ├── 📁 favicon/
│   │   └── favicon.ico                # Copied from src/assets/favicon/
│   │
│   ├── 📁 img/
│   │   ├── design.jpg                 # Emitted image (if >50KB or not inlined)
│   │   ├── haikyuu1.jpg
│   │   ├── holocaust.jpg
│   │   └── notredame.jpg
│   │
│   └── delayed.[contenthash].css      # Emitted CSS file for `delayed.css`
```

### 🔍 Notes
- `main.[contenthash].js`: Output of the `main.js` entry point.
- `style.[contenthash].css`: Contains CSS from non-delayed styles, extracted by `MiniCssExtractPlugin`.
- `delayed.css`: Handled separately using `asset/resource`; it’s emitted as a standalone file under `assets/` with hashed name for cache busting.
- Images smaller than 50KB may be inlined as base64 and not appear as separate files.
- `favicon.ico` is always emitted to `assets/favicon/`, regardless of size.
- All filenames use [contenthash] to ensure proper cache invalidation.

<br>

## Development vs Production Mode

This Webpack configuration uses the environment variable `NODE_ENV` to distinguish between **development** and **production** modes:

```js
const isProduction = process.env.NODE_ENV === 'production';
```

This variable is used to conditionally configure loaders and plugins, optimizing the build differently depending on the environment.

---
### Development Mode

When `NODE_ENV !== 'production'`:

* **CSS is injected dynamically** into the `<head>` of the HTML using `style-loader`:

  ```js
  use: ['style-loader', 'css-loader', ...]
  ```
* **Source maps** are enabled with `inline-source-map` for better debugging:

  ```js
  devtool: 'inline-source-map'
  ```
* **Webpack Dev Server** is enabled:

  * Live-reloads on HTML or JS changes
  * Runs on port `5001`
  * Opens the browser automatically
  * Uses gzip compression
* **Build is not minified**, allowing for easier debugging and faster builds.

---
### Production Mode

When `NODE_ENV === 'production'`:

* **CSS is extracted into separate files** using `MiniCssExtractPlugin`, improving load performance:

  ```js
  use: [MiniCssExtractPlugin.loader, 'css-loader', ...]
  ```
* **JavaScript and CSS are minified** for smaller file sizes:

  ```js
  optimization: {
    minimize: true
  }
  ```
* **Hashed filenames** (`[contenthash]`) are used for all assets to support cache busting:

  * e.g., `main.abc123.js`, `style.def456.css`
* **The `dist/` directory is cleaned** before each build:

  ```js
  clean: true
  ```

---
### Scripts

* **Development:**

  ```bash
  NODE_ENV=development npm run start
  ```

* **Production:**

  ```bash
  NODE_ENV=production npm run build
  ```

<br>
<br>

# Approach to Solution - Webpack Ver.
For a better understanding of the original exercise and its related code, please refer to this [Readme](../../../../paita-gloria-units-09-11/09-the-dom/02-book-list/readme.md).

<br>

# Notes & Challenges

## Problem 1: Delaying the CSS Injection

While the original assignment seemed short and easy, incorporating **images** and **delaying CSS injection** with `setTimeout` using **Webpack** turned out to be more complex than expected.

The goal was to **inject a CSS file into the HTML document after a 5-second delay**, instead of having it load with the initial page render — mimicking a late-loading feature (e.g., dark mode, animations, etc.).

<br>

### Initial Refactor Attempt

To keep things organized, I moved the delayed CSS injection logic into a separate file: `helper.js`.

**Why?**

* To keep `main.js` focused on rendering logic
* To isolate side-effect code (e.g., DOM manipulation, delayed behavior)
* Easier to debug and maintain

This required turning the logic into a function and importing it:

```js
// helper.js
export function injectDelayedCSS() {
  setTimeout(() => {
    // Code to inject CSS
  }, 5000);
}

// main.js
import { injectDelayedCSS } from './helper.js';
injectDelayedCSS();
```

<br>

## Unexpected Behavior

Initially, I assumed the delayed injection would prevent the CSS from loading immediately.

However, **the styles were still applied on page load**, *before* the `setTimeout` triggered.

I added a `console.log()` inside the `setTimeout` block and confirmed that:

* The timeout worked (ran after 5 seconds)
* But the CSS was already applied immediately

### Original DOM-based CSS injection (that worked):

```js
const cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "./styles/style.css";

setTimeout(() => {
  document.head.appendChild(cssFile);
}, 5000);
```

### Import-based version (that **didn't** work):

```js
setTimeout(() => {
  import('../styles/style.css')
    .then(() => {
      console.log('CSS loaded after 5 seconds');
    })
    .catch(err => console.error('Failed to load CSS:', err));
}, 5000);
```

<br>

## 🔍 Root Cause

After investigating, I realized the problem was Webpack itself.

Webpack was **bundling the CSS during the build**, meaning that the style was already part of the final output, regardless of the `setTimeout`.

This happened because of the default CSS rule:

```js
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader', ...]
}
```

Webpack treats all imported CSS as something to bundle and inject **immediately** into the DOM or extract into a file.

<br>

## Solution

To delay the CSS injection:

1. **Renamed** the file to `delayed.css` to give it a distinct identity.
2. **Excluded** it from the main CSS loader rule using `exclude: /delayed\.css$/`.
3. **Created a separate rule** for it using `type: 'asset/resource'`, which tells Webpack to emit it as a standalone file, not inject it.

### Updated Webpack Rules

```js
{
  test: /\.css$/i,
  exclude: /delayed\.css$/,
  use: [
    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            ['postcss-preset-env', {}],
          ],
        },
      },
    },
  ],
},

{
  test: /delayed\.css$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/[name].[contenthash][ext]',
  },
}
```

<br>

## Final Working Setup

* `delayed.css` is emitted to the `dist/assets/` folder as a standalone file.
* I'm importing the URL of the CSS file using `asset/resource`. Webpack now treats `delayed.css` as a file and gives back the resolved URL string.
* In `helper.js`, I manually create a `<link>` tag and append it after a 5-second delay:

```js
export function loadDelayedCSS(delay = 5000) {
    setTimeout(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = delayedCSS; // webpack gives final URL
        document.head.appendChild(link);

        console.log(`CSS loaded after ${delay / 1000} seconds`);
    }, delay);
}
```


<br>
<br>

## Problem 2: Favicon Not Showing Up

While setting up the project, I noticed that the **favicon was not appearing** in the browser tab, even though I had included it in the HTML template:

```html
<link rel="icon" href="./assets/favicon.ico" />
```

<br>

## Root Cause

By default, Webpack doesn't automatically emit static assets like favicons unless they're:

1. Explicitly imported in JS
2. Handled via a loader like `html-loader`

Also, favicons can easily be **inlined or ignored** if treated like regular image assets.

<br>

## Solution: Add `html-loader` + Favicon Rule

### 1. Enabled `html-loader`

To make Webpack recognize and resolve assets inside HTML files (`<img>`, `<link>`, etc.), I added:

```js
{
  test: /\.html$/i,
  loader: 'html-loader',
  options: {
    sources: {
      list: [
        '...', // default sources
        {
          tag: 'link',
          attribute: 'href',
          type: 'src',
        },
      ],
    },
  },
}
```

This ensures Webpack **detects the favicon reference in HTML** and processes it as a dependency.

<br>

### 2. Created a Specific Favicon Rule

I wanted my favicon to **be emitted as a physical file** (never inlined as base64). To achieve that, I added a dedicated rule:

```js
{
  test: /favicon\.(ico|png|svg)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/favicon/[name][ext]',
  },
}
```

This ensures:

* The favicon is emitted to the `dist/assets/favicon/` folder
* It keeps its original name and extension
* It avoids being inlined

<br>

### 3. Excluded Favicons from the General Image Rule

The general image rule originally applied to all image formats, including `.ico`, `.png`, `.svg`, etc. To prevent **duplicate processing** or **inlining** of the favicon, I excluded it:

```js
{
  test: /\.(avif|svg|ico|png|webp|jpg|gif|jpeg)$/i,
  exclude: /favicon\.(ico|png|svg)$/i,
  type: 'asset',
  generator: {
    filename: 'assets/img/[name][ext]',
  },
  parser: {
    dataUrlCondition: {
      maxSize: 50 * 1024, // inline small images under 50KB
    },
  },
}
```

<br>

## Result

After making these changes:

* The favicon was correctly emitted and linked in the final `index.html`
* It showed up reliably in the browser across development and production builds

<br>
<br>

# Syntax & Structural Changes
I refactored the project by:

* Adopting modern ES6+ syntax (`import`, destructuring, template literals, ternaries)
* Improving code structure through modularization
* Leveraging Webpack features (asset handling, CSS file resolution)
* Reducing redundancy and improving readability

## 1. Modularization of CSS Loading Logic

**Old:**
CSS delay logic was written inline in the main file.

```js
const cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "./styles/style.css";

setTimeout(() => {
    document.head.appendChild(cssFile);
}, 5000);
```

**New:**
Moved to a separate helper module (`helper.js`) and imported where needed.  
Set a default time of 5000ms, but the function now accepts customized arguments.

```js
// helper.js
import delayedCSS from "../styles/delayed.css";

export function loadDelayedCSS(delay = 5000) {
    setTimeout(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = delayedCSS;
        document.head.appendChild(link);
    }, delay);
}

// main.js
import { loadDelayedCSS } from "./helper.js";
loadDelayedCSS();
```

<br>

## 2. Image Imports with Webpack

**Old:**
Images were referenced using string paths.

```js
const imgArray = [
    "./assets/img/notredame.jpg",
    "./assets/img/design.jpg",
    "./assets/img/holocaust.jpg",
    "./assets/img/haikyuu1.jpg"
];
```

**New:**
Images are imported as modules, allowing Webpack to resolve and optimize them.

```js
import notredame from "../assets/img/notredame.jpg";
import design from "../assets/img/design.jpg";
import holocaust from "../assets/img/holocaust.jpg";
import haikyuu1 from "../assets/img/haikyuu1.jpg";

const imgArray = [notredame, design, holocaust, haikyuu1];
```

<br>


## 3. Use of Destructuring in Loops

**Old:**

```js
bookList.forEach(book => {
    const title = book.title;
    const author = book.author;
    // ...
});
```

**New:**

```js
bookList.forEach(({ title, author, alreadyRead, url }) => {
    // cleaner access to properties
});
```

<br>


## 4. Template Literals Instead of `.concat()`

**Old:**

```js
li.textContent = book.title.concat(" - ", book.author);
```

**New:**

```js
li.textContent = `${title} - ${author}`;
```

<br>


## 5. Ternary Operators for Class and Style Logic

**Old:**

```js
if (book.alreadyRead) {
    li.classList.add("read");
    img.style.border = "solid 2px green";
} else {
    li.classList.add("unread");
    img.style.border = "solid 2px red";
}
```

**New:**

```js
li.classList.add(alreadyRead ? "read" : "unread");
img.style.border = `2px solid ${alreadyRead ? "green" : "red"}`;
```

<br>


## 6. Elimination of Redundant DOM Queries

**Old:**

```js
const newUl = document.createElement("ul");
pageTitle.insertAdjacentElement("afterend", newUl);

const ulElement = document.querySelector("ul");
ulElement.appendChild(li);
```

**New:**

```js
const newUl = document.createElement("ul");
pageTitle.insertAdjacentElement("afterend", newUl);

newUl.appendChild(li); // reuses the already created reference
```

<br>


## 7. Webpack-Compatible CSS Loading

**Old:**

```js
cssFile.href = "./styles/style.css";
```

**New:**

```js
import delayedCSS from "../styles/delayed.css";
link.href = delayedCSS; // Webpack provides the hashed URL
```

<br>
<br>

## Polyfills & Compatibility

To support older browsers (including IE 11), this project uses Babel with:

```js
useBuiltIns: 'usage',
corejs: '3.21.1'
```

This setup ensures that only the polyfills actually needed by the code are included in the final bundle — no more, no less.

Target browsers are defined as:

```js
targets: {
  edge: '127',
  firefox: '128',
  chrome: '127',
  safari: '17.5',
  ie: '11'
}
```

### What was polyfilled?

After building, the following polyfills from `core-js` were added:

* `es.array.concat` — used in string/array concatenation
* `es.object.to-string` — added by default to improve object type checks

These were injected automatically by Babel based on the usage in the codebase.

### What wasn’t included?

* **`regenerator-runtime`** was *not* included — because the project doesn’t use `async/await` or generator functions. Babel skipped it as expected.

### How this was verified

* Enabled `debug: true` in Babel to see what polyfills were added
* Inspected the final bundle (`dist/main.[hash].js`) for `core-js` imports
* Confirmed no unnecessary polyfills were bundled

<br>
<br>


## Browser Compatibility
The built version of this project was manually tested on the following modern browsers:

- Google Chrome
- Opera
- Microsoft Edge
- Mozilla Firefox

All features (including delayed CSS injection, image rendering, and styling) worked as expected across these browsers.  
**No compatibility issues were observed.**