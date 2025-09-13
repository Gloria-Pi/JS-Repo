# Webpack Starter
A simple boilerplate for modern JavaScript projects using Webpack.

<br>

## 🚀 About this Boilerplate
- Webpack 5 bundling
- Babel for ES6+ compatibility (including IE11)
- SCSS and CSS support
- Image asset support (png, jpg, svg, webp, etc.)
- HTML template handling
- Dev server with hot reload
- Source maps for easier debugging
- Content-hashed filenames for cache busting

<br>

**Note**:
- A common webpack.config.js file is used for both production and development mode
- Has a sass loader, but no Bootstrap (have to set it up manually from scratch)

<br>

## 📁 Project Structure
```bash
webpackstarter/
├── dist/ # Output folder (auto-generated)
├── src/ # Source files
│ ├── assets/
│ │ └── img/ # Image files
│ ├── styles/
│ │ ├── main.scss # Main SCSS file
│ │ └── main.css # (optional) Plain CSS
│ ├── scripts/
│ │ ├── main.js # Main JavaScript entry file
│ │ └── helper.js # Helper module
│ └── template.html # HTML template
├── package.json
├── webpack.config.js
└── .gitignore
```

<br>

## 📦 Start a new project from this boilerplate
Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/webpackstudy.git my-new-project
cd my-new-project
rm -rf .git
git init
npm install
```

This process:
- Gives you a clean starting point 
- Installs everything listed in package.json.
- Keeps your new project separate from the original template
- Lets you push the new project to its own GitHub repo

<br>

## 🧪 Development

Start the Webpack dev server:

```bash
npm run dev
```

* Runs on `http://localhost:5001/`
* Automatically opens your browser
* Live reload with Hot Module Replacement (HMR)



## 🏗️ Build for Production

Create a production-ready build:

```bash
npm run build
```

* Outputs files into the `dist/` folder
* JS and CSS are minified
* Filenames include content hashes for caching



## 🔍 Watch Mode (No Server)

Rebuilds on file changes without serving:

```bash
npm run watch
```

<br>

## 📁 Output Example (after build)

```
dist/
├── index.html
├── main.[contenthash].js
├── style.[contenthash].css
├── assets/yourimg.png (and other images)
```
