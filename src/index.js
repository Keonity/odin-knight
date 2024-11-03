import './styles.css';
import testBg from './coffeeBg.jpg';

console.log(`Welcome To The Eye Of Odin Weather Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const description = document.querySelector(`#description`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);
const loadAnimation = document.querySelector(`#loadAnimationOff`);

const queryLocation = `Las Vegas`;

submit.addEventListener("click", () => {
    console.log(`Hello there! :)`)
});