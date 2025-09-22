# 04 Stylish Bundling Challenge

# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<br>

# Assignment

Use the following resources:  
- [style-loader](https://webpack.js.org/loaders/style-loader/), [sass-loader](https://webpack.js.org/loaders/sass-loader/), [Asset Modules Guide](https://webpack.js.org/guides/asset-modules/)

Create a small project with HTML, SCSS, JavaScript files, and images  
- Use Webpack to:  
  1. Build SCSS files into a single CSS bundle  
  2. Handle various image types with automatic decision between inlining  
  and emitting based on file size (e.g., 50KB)  

- Include a README.md file with a brief explanation of your Webpack  
configuration and how it handles SCSS and images

<br>
<br>

# Approach to Solution

# Webpack Configuration Notes
## Tech Stack
| Technology                  | Version | Purpose                                             |
| --------------------------- | ------- | --------------------------------------------------- |
| **webpack**                 | 5.101.3 | Bundling                                            |
| **webpack-cli**             | 6.0.1   | CLI for webpack                                     |
| **webpack-dev-server**      | 5.2.2   | Development server                                  |
| **@babel/core**             | 7.28.4  | JavaScript transpilation / polyfills                |
| **@babel/preset-env**       | 7.28.3  | Modern JavaScript syntax support                    |
| **babel-loader**            | 10.0.0  | Babel integration with webpack                      |
| **css-loader**              | 7.1.2   | CSS import and resolution                           |
| **style-loader**            | 4.0.0   | Inject CSS into the DOM                             |
| **sass-loader**             | 16.0.5  | Loads and compiles SCSS/SASS files                  |
| **sass**                    | ^1.92.1 | SASS compiler used to process `.scss`/`.sass` files |
| **mini-css-extract-plugin**| 2.9.4   | Extract CSS to separate files                       |
| **postcss**                 | 8.5.6   | CSS post-processing                                 |
| **postcss-loader**          | 8.2.0   | Integrate PostCSS with webpack                      |
| **postcss-preset-env**      | 10.3.1  | Modern CSS features / polyfills                     |
| **html-webpack-plugin**     | 5.6.4   | Inject HTML templates into output                   |
| **html-loader**             | 5.1.0   | Import HTML and resolve linked assets               |
| **autoprefixer**            | 10.4.21| Adds vendor prefixes to CSS automatically           |
| **core-js**                 | 3.45.1  | JavaScript polyfills for compatibility              |
| **@bootstrap**              | 5.3.8   | Frontend UI framework for responsive design         |
| **@popperjs/core**          | 2.11.8  | Tooltip & popover positioning engine (used by Bootstrap) |
| **Node.js**                 | ≥16.x   | Runtime for scripts and tooling                     |


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
    ├── temp.html            # HTML template
    ├── 📁 assets/           # Static assets
    │   ├── 📁 fonts/
    │   │   └── ci-gaemdev.ttf
    │   └── 📁 img/
    │       ├── pikachu.jpg
    │       ├── pokemon-emerald.avif
    │       ├── (...)
    │       └── pokemon-snap.avif
    ├── 📁 scripts/           
    │   ├── helper.js         # Helper functions
    │   └── main.js           # Main script
    └── 📁 styles/            # CSS & SCSS files
        └── main.scss       
```

<br>


## Webpack General Settings
- Webpack 5 bundling
- Babel for ES6+ compatibility (including IE11)
- SCSS and CSS support
- Image asset support (png, jpg, svg, webp, etc.)
- Images under 70KB will be inlined, above 70KB will be emitted as a file
- HTML template handling
- Dev server with hot reload
- Source maps for easier debugging
- Content-hashed filenames for cache busting


**Note**: A common webpack.config.js file is used for both production and development mode

<br>

## Running the Project

### Install dependencies:

```bash
npm install
```

### Start dev server:

```bash
npm run start
```

### Build for production:

```bash
npm run build
```

<br>

## Image Handling

This Webpack config uses `type: 'asset'` to handle images intelligently:

- Small images (≤ 70KB) are inlined as base64 strings into the JavaScript bundle to reduce HTTP requests.
- Larger images are emitted to the `dist/assets/` folder and loaded via standard `<img>` or CSS `background-image`.

This behavior is controlled by `parser.dataUrlCondition.maxSize = 70 * 1024` in the Webpack module rules.

<br>
<br>

# The Project: Pokémon Games Showcase

## Overview

This is a simple frontend project showcasing different categories of Pokémon games. It's built with **HTML**, **SCSS**, **JavaScript (ES6+)**, and images, and bundled using **Webpack 5**.

The main goals of this project were to:

* Set up a working Webpack build pipeline
* Compile SCSS into a single CSS file
* Handle image assets efficiently (inlining vs emitting based on file size)
* Manage static assets like fonts
* Get comfortable working with loaders, plugins, and Webpack dev server

<br>

## Project Features

## SCSS → CSS Build

SCSS files are compiled using `sass-loader`, processed by `postcss-loader` (with `autoprefixer`), and extracted into a separate CSS file using `MiniCssExtractPlugin`.

```js
{
  test: /\.(scss|css)$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer']
        }
      }
    },
    'sass-loader'
  ]
}
```

The final CSS bundle is hashed and output as `style.[contenthash].css`.

<br>

### Image Handling (Asset Modules)

Image assets are handled using Webpack 5's **Asset Modules** feature with the `type: 'asset'` option, which lets Webpack decide whether to inline or emit the file based on size.

```js
{
  test: /\.(svg|ico|png|webp|jpg|gif|jpeg|avif)$/i,
  type: 'asset',
  generator: {
    filename: 'assets/[name][ext]'
  },
  parser: {
    dataUrlCondition: {
      maxSize: 70 * 1024 // 70KB
    }
  }
}
```

### Important Notes:

* I removed `asset/resource` and replaced it with `asset` to let Webpack handle both inlining and emitting automatically.
* I verified that two images under 70KB were **not copied into the `dist/` folder**, meaning they were correctly inlined as Base64.
* For now, I’m keeping the original image formats (e.g., `.png`, `.jpg`) to help validate how Webpack handles them before optimizing to `.webp` or `.avif`.

<br>

### JavaScript

JavaScript is compiled with Babel using `@babel/preset-env` to support a wide range of modern and legacy browsers (including IE11 for demonstration purposes).

```js
{
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [[
        '@babel/preset-env',
        {
          targets: {
            chrome: '127',
            firefox: '128',
            edge: '127',
            safari: '17.5',
            ie: '11'
          },
          useBuiltIns: 'usage',
          corejs: '3.21.1'
        }
      ]]
    }
  }
}
```

<br>

### Fonts

Font files are handled using `asset/resource` and emitted to `dist/assets/fonts/`.

```js
{
  test: /\.(woff(2)?|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[name][ext]'
  }
}
```

<br>

### HTML & Templating

HTML is processed using `html-loader`, which ensures that image paths inside HTML files are resolved correctly.

The final `index.html` is generated using `HtmlWebpackPlugin`, using `src/temp.html` as a template.

<br>
<br>

# Known Issues & Warnings

## Sass / Bootstrap Deprecations

While building the project, I got several warnings related to **deprecated Sass features** used internally by Bootstrap:

Examples:

* `red()` is deprecated. Suggested replacement: `color.channel($color, "red")`
* Global built-in functions like `unit()` are deprecated — use `math.unit()`
* Sass `@import` is deprecated and will be removed in Dart Sass 3.0.0

A **temporary workaround** would have been to downgrade Dart Sass, but that wouldn't have been sustainable in the long run.

  The **better fix**: to wait for Bootstrap’s next major version (probably v6) which should address these issues.

<br>

## Performance Considerations

* The combined asset size is around **1.47 MiB**, which exceeds Webpack’s recommended size of **244 KiB** for initial loads.
* Bootstrap is currently imported as a full package. No tree-shaking or selective imports are used yet.
* No dynamic imports or lazy loading have been added, which could help split up the JS bundle.

Webpack also gave this warning:

> **WARNING in performance recommendations**:
> You can limit the size of your bundles by using `import()` or `require.ensure()` to lazy-load some parts of your application.
> Ref: [https://webpack.js.org/guides/code-splitting/](https://webpack.js.org/guides/code-splitting/)

<br>

## Dev Server & Live Reloading

The Webpack dev server is configured with:

```js
devServer: {
  static: {
    directory: path.resolve(__dirname, 'dist')
  },
  port: 5001,
  open: true,
  hot: true,
  compress: true,
  watchFiles: [path.resolve(__dirname, 'src/**/*.html')]
}
```

This allows hot reload and live updates when changing HTML or JS/SCSS.

<br>

## Future Improvements

* Enable tree-shaking and only import the Bootstrap components I use
* Optimize images with `image-webpack-loader` or convert to WebP/AVIF
* Implement lazy loading with `import()` to split the bundle
* Improve accessibility — fix modal-related `aria-hidden` focus warnings
* Clean up bundle sizes and add performance budgets