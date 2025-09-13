// import styles from '..styles/main.css';
import '../styles/main.scss';
import helper from './helper.js';

//Checks if the server is running in production mode or development mode
console.log(console.log('Running in mode:', process.env.NODE_ENV));

console.log("Hola!");
console.log('Webpack with Sass is working!');

document.body.append(helper()); 