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
    console.log(`Hello there! :)`);
});

function findPossibleMoves(x, y) {
    console.log(`Finding possible moves for ${x}, ${y}`);

    if (((x - 1) >= 0) && ((y + 2) <= 7)) {
        console.log(`${x - 1}, ${y + 2}`);
    }

    if (((x - 1) >= 0) && ((y - 2) >= 0)) {
        console.log(`${x - 1}, ${y - 2}`);
    }

    if (((x + 1) >= 0) && ((y + 2) <= 7)) {
        console.log(`${x + 1}, ${y + 2}`);
    }

    if (((x + 1) >= 0) && ((y - 2) >= 0)) {
        console.log(`${x + 1}, ${y - 2}`);
    }

    if (((x - 2) >= 0) && ((y + 1) <= 7)) {
        console.log(`${x - 2}, ${y + 1}`);
    }

    if (((x - 2) >= 0) && ((y - 1) >= 0)) {
        console.log(`${x - 2}, ${y - 1}`);
    }

    if (((x + 2) <= 7) && ((y + 1) <= 7)) {
        console.log(`${x + 2}, ${y + 1}`);
    }

    if (((x + 2) <= 7) && ((y - 1) >= 0)) {
        console.log(`${x + 2}, ${y - 1}`);
    }

    console.log(`- - - - -`);
}

findPossibleMoves(3, 3);

findPossibleMoves(0, 0);

findPossibleMoves(6, 3);