# 03 Greatest Hits - 02 Enhanced Arrivals

# Author
**Author**: Gloria Paita  
**Email**: gloria.paita@edu-its.it  
**Course**: Web Developer 2024-2026

<br>

# Context: the project

This project demonstrates an enhanced flight arrivals table using modern JavaScript and Webpack. For more information on how I refactored the code, please refer to this [readme](./readme.md). 

# Webpack Configuration Notes

## Project Structure

```bash
02-modern-enhanced-arrivals/
├── webpack-notes.md
├── readme.md
├── node_modules/
├── package.json
├── package-lock.json
├── webpack.config.js
├── /src
│   ├── /assets/img
│   │   └── logo.svg
│   ├── /scripts
│   │   ├── flightsGenerator.js
│   │   ├── main.js
│   │   ├── tableGenerator.js
│   │   └── updateStatus.js
│   ├── /styles
│   │   └── main.css
│   └── template.html
└── /dist
├── index.html
└── main.js

```

<br>

## Installed Dependencies

| **Section**         | **Details**                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| **Project Name**    | `02-modern-enhanced-arrivals`                                                            |
| **Version**         | `1.0.0`                                                                                  |
| **Author**          | GP                                                                                       |
| **License**         | ISC                                                                                      |
| **Scripts**         | - `build`: `webpack --mode production` (Builds production bundle)                        |
|                     | - `dev`: `webpack serve --mode development` (Runs development server with hot reloading) |
|                     | - `watch`: `webpack --watch` (Watches files and rebuilds on changes)                     |
| **Dependencies**    | - `core-js` v3.45.1 (Polyfill for modern JavaScript features)                            |
| **DevDependencies** | Babel:                                                                                   |
|                     | - `@babel/core` v7.28.4                                                                  |
|                     | - `@babel/preset-env` v7.28.3                                                            |
|                     | - `babel-loader` v10.0.0                                                                 |
|                     | Loaders & Plugins:                                                                       |
|                     | - `css-loader` v7.1.2                                                                    |
|                     | - `html-loader` v5.1.0                                                                   |
|                     | - `html-webpack-plugin` v5.6.4                                                           |
|                     | - `mini-css-extract-plugin` v2.9.4                                                       |
|                     | - `postcss-loader` v8.2.0                                                                |
|                     | - `postcss-preset-env` v10.4.0                                                           |
|                     | - `sass` v1.92.1                                                                         |
|                     | - `sass-loader` v16.0.5                                                                  |
|                     | - `style-loader` v4.0.0                                                                  |
|                     | Webpack & Tools:                                                                         |
|                     | - `webpack` v5.101.3                                                                     |
|                     | - `webpack-cli` v6.0.1                                                                   |
|                     | - `webpack-dev-server` v5.2.2                                                            |


<br>

## Webpack Configuration Summary

This Webpack configuration is tailored for a modern JavaScript project, focusing on efficient asset handling, development convenience, and production readiness.

### Entry & Output

* **Entry point:** `src/scripts/main.js` — starting point for module bundling.
* **Output:** Bundled files are emitted to the `dist` folder.

  * Filenames include content hashes (`[contenthash]`) for cache busting.
  * Asset filenames preserve original names and extensions.
  * The output directory is cleaned before each build to remove outdated files.

### Mode & Source Maps

* **Mode Detection:** The configuration dynamically detects whether it's running in development or production mode by checking the environment variable `NODE_ENV`. This enables conditional settings based on the current environment:

  ```js
  const isProduction = process.env.NODE_ENV === 'production';
  ```

  This boolean flag controls behavior such as whether CSS is extracted into files (production) or injected via JavaScript for hot reloading (development).

* **Source Maps:** Inline source maps (`inline-source-map`) are enabled by default to make debugging easier during development. This setting helps map compiled code back to the original source for a better debugging experience.

### Development Server

* Serves files from `dist`.
* Runs on port `5001`.
* Automatically opens the browser on start.
* Supports Hot Module Replacement (HMR) for faster live updates.
* Compresses files to reduce transfer sizes.
* Watches HTML files in `src` for changes to trigger reloads.

### Loaders (Module Rules)

* **CSS:**

  * In development, uses `style-loader` to inject styles into the DOM.
  * In production, extracts CSS into separate files via `MiniCssExtractPlugin.loader`.
  * Processes CSS with `css-loader` and `postcss-loader` (using `postcss-preset-env` for modern CSS features and vendor prefixing).
* **Images:**

  * Favicons are emitted as separate resources to a dedicated folder.
  * Other images are inlined as Base64 if under 50KB; otherwise, emitted as separate files.
* **JavaScript:**

  * Transpiles modern JS using `babel-loader` with `@babel/preset-env`.
  * Targets a broad set of browsers (Edge, Firefox, Chrome, Safari, IE 11).
  * Uses `core-js` polyfills on demand (`useBuiltIns: 'usage'`).
* **HTML:**

  * Processes HTML files with `html-loader` to correctly resolve image URLs and other resources.

### Plugins

* **HtmlWebpackPlugin:**

  * Generates `index.html` based on a template in `src/template.html`.
  * Automatically injects bundled scripts and styles.
* **MiniCssExtractPlugin:**

  * Extracts CSS into separate files for production.
  * Uses content hashes in filenames for cache busting.

### Optimization

* Minimizes output files to reduce bundle size for production.

<br>

## How to Install and Run

### 1. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
````

This will install all required dependencies for the project.

### 2. Run development server

Start the local development server with hot reloading:

```bash
npm run dev
```

This will serve the project at `http://localhost:5001/` by default.

### 3. Build for production

Create an optimized production build in the `/dist` folder:

```bash
npm run build
```

### 4. Watch for changes

To automatically rebuild on source file changes:

```bash
npm run watch
```