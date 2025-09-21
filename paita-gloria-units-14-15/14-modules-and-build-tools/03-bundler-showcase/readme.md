# 03 Bundler Showcase

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

Explore [Parcel](https://parceljs.org/) or another [bundler](https://survivejs.com/books/webpack/appendices/comparison/) of your choice
- Create a small project with HTML, CSS, and JavaScript files
- Use the bundler to build and serve your project
- Ensure the output is optimized and the project runs correctly on various
browsers
- Include a README.md with a brief explanation of how the bundler handled
your files and any notable features or issues


<br>
<br>

# Approach to Solution

# Bundler Showcase: Vite

## Why Vite?

- Vite is highly recommended for modern frontend development.
- Comes with a built-in dev server and production bundling.
- Extremely fast due to its use of **esbuild** during development.
- Designed with modern JavaScript and frameworks in mind (e.g., Vue).
- Supports hot module replacement (HMR) and instant updates.
- Zero-config support for TypeScript, Sass, PostCSS, and more.

## Project Setup

Instead of using a frontend framework, this project uses **vanilla** JavaScript.

<br>

### `package.json`

Vite projects require minimal setup. Here's the `package.json`:

```json
{
  "name": "03-bundler-showcase",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^7.1.6"
  }
}
```
<br>

### Entry Point

In the HTML file, the JavaScript is imported as a module:

```html
<script type="module" src="/src/main.js"></script>
```

For TypeScript, simply rename `main.js` to `main.ts` and update the HTML reference accordingly.

> ⚠️ Vite does not do type checking — only transpilation. Use your editor (e.g., VS Code) or tools like `tsc` for type checking.

## Features

### Hot Module Replacement (HMR)

Vite provides **hot updating** instead of full reloads — which is faster. For example, when editing a CSS file:

```js
import './style.css';
```

CSS updates are applied instantly in the browser.

<br>

### Dependency Handling

* It's possible to import npm packages directly.
* Example: Bootstrap was installed with:

```bash
npm install bootstrap
```

Then imported in `main.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

Unused CSS is removed during production builds via **tree-shaking**.

<br>

### Sass Support

Sass can be used out of the box. To install it:

```bash
npm install -D sass
```

Then import `.scss` files as usual.

<br>

### Modern CSS Features

Vite (and tools like Vue) can handle:

* Rebasing URLs inside CSS
* `@import` in PostCSS
* Auto-prefixing
* Built-in support for Sass, Less, etc.

<br>

## Browser Compatibility

By default, Vite uses **esbuild**, which is fast but limited in polyfills. For legacy browser support (e.g., IE11), install the official plugin:

```bash
npm install -D @vitejs/plugin-legacy regenerator-runtime
```

Then create a `vite.config.js`:

```js
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: {
        edge: '127',
        firefox: '128',
        chrome: '127',
        safari: '17.5',
        ie: '11', // ⚠️ Increases polyfills and output size
      },
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true,
    }),
  ],
});
```

<br>

## Comparison with Webpack

Here's a rough comparison between the final Vite and Webpack `package.json` files for the same project:

### Vite (`package.json` excerpt)

```json
{
  "name": "03-bundler-showcase",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@vitejs/plugin-legacy": "^7.2.1",
    "regenerator-runtime": "^0.14.1",
    "sass": "^1.93.0",
    "vite": "^7.1.6"
  },
  "dependencies": {
    "bootstrap": "^5.3.8"
  }
}
```

<br>

### Webpack (`package.json` excerpt)

```json
{
  "name": "04-stylish-bundling-challenge",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "watch": "webpack --watch"
  },
  "keywords": [],
  "author": "GP",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@babel/core": "^7.28.4",
    "@babel/preset-env": "^7.28.3",
    "autoprefixer": "^10.4.21",
    "babel-loader": "^10.0.0",
    "css-loader": "^7.1.2",
    "html-loader": "^5.1.0",
    "html-webpack-plugin": "^5.6.4",
    "mini-css-extract-plugin": "^2.9.4",
    "postcss": "^8.5.6",
    "postcss-loader": "^8.2.0",
    "sass": "^1.92.1",
    "sass-loader": "^16.0.5",
    "style-loader": "^4.0.0",
    "webpack": "^5.101.3",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.2"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.8",
    "core-js": "^3.45.1"
  }
}
```

Webpack requires significantly more configuration and dependencies, such as Babel, style loaders, HTML plugins, etc.

<br>
<br>


## Build Output

When you run the production build command:

```bash
npm run build
```

Vite generates a `dist` folder containing the optimized output for deployment.

### Contents of `dist`

* **`index.html`**
  The entry HTML file, automatically updated with links to the built assets.

* **`assets/` folder**
  Contains all static assets with hashed filenames for cache busting, including:

  * **JavaScript files** (minified and tree-shaken)
  * **CSS files** (minified)
  * **Fonts**
  * **Images**

* **Polyfills**
  If using the legacy plugin for broad browser support, polyfills (e.g., for IE11) are also included in the build output automatically.

### Notes

* Filenames include hashes (e.g., `main.abc123.js`) to enable long-term caching.
* Assets are optimized (minified, compressed) to reduce load times.
* The HTML file references these assets with correct paths, making the output ready for deployment on any static hosting.

<br>
<br>

## Conclusion

Vite provided a lean and fast setup with:

* Instant dev server
* Native ES module support
* Zero-config support for TypeScript and Sass
* Built-in optimizations for production
* Optional legacy support via a plugin

Compared to Webpack, Vite requires far fewer dependencies and almost no boilerplate, making it ideal for small-to-medium projects or quick prototypes.