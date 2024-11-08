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

function findPossibleMovesRecursive(x, y, hist) {
    console.log(`Finding possible moves recursively for ${x}, ${y}`);
    // Add hist push
    hist.push(`${x}, ${y}`);

    if (((x - 1) >= 0) && ((y + 2) <= 7) && !hist.includes(`${x - 1}, ${y + 2}`)) {
        const newArray = Array.from(hist);
        // newArray.push(`${x - 1}, ${y + 2}`);
        findPossibleMovesRecursive(x - 1, y + 2, newArray);
        console.log(`${x - 1}, ${y + 2}`);
        console.log(newArray);
    }

    if (((x - 1) >= 0) && ((y - 2) >= 0) && !hist.includes(`${x - 1}, ${y - 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 1}, ${y - 2}`);
        // findPossibleMovesRecursive(x - 1, y - 2, newArray);
        console.log(`${x - 1}, ${y - 2}`);
        console.log(newArray);
    }

    if (((x + 1) <= 7) && ((y + 2) <= 7) && !hist.includes(`${x + 1}, ${y + 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 1}, ${y + 2}`);
        // findPossibleMovesRecursive(x + 1, y + 2, newArray);
        console.log(`${x + 1}, ${y + 2}`);
        console.log(newArray);
    }

    if (((x + 1) <= 7) && ((y - 2) >= 0) && !hist.includes(`${x + 1}, ${y - 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 1}, ${y - 2}`);
        // findPossibleMovesRecursive(x + 1, y - 2, newArray);
        console.log(`${x + 1}, ${y - 2}`);
        console.log(newArray);
    }

    if (((x - 2) >= 0) && ((y + 1) <= 7) && !hist.includes(`${x - 2}, ${y + 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 2}, ${y + 1}`);
        // findPossibleMovesRecursive(x - 2, y + 1, newArray);
        console.log(`${x - 2}, ${y + 1}`);
        console.log(newArray);
    }

    if (((x - 2) >= 0) && ((y - 1) >= 0) && !hist.includes(`${x - 2}, ${y - 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 2}, ${y - 1}`);
        // findPossibleMovesRecursive(x - 2, y - 1, newArray);
        console.log(`${x - 2}, ${y - 1}`);
        console.log(newArray);
    }

    if (((x + 2) <= 7) && ((y + 1) <= 7) && !hist.includes(`${x + 2}, ${y + 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 2}, ${y + 1}`);
        // findPossibleMovesRecursive(x + 2, y + 1, newArray);
        console.log(`${x + 2}, ${y + 1}`);
        console.log(newArray);
    }

    if (((x + 2) <= 7) && ((y - 1) >= 0) && !hist.includes(`${x + 2}, ${y - 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 2}, ${y - 1}`);
        // findPossibleMovesRecursive(x + 2, y - 1, newArray);
        console.log(`${x + 2}, ${y - 1}`);
        console.log(newArray);
    }

    // console.log(hist);
    console.log(`- - - - -`);
}

function findPossibleMoves(x, y) {
    console.log(`Finding possible moves for ${x}, ${y}`);

    if (((x - 1) >= 0) && ((y + 2) <= 7)) {
        console.log(`${x - 1}, ${y + 2}`);
        findPossibleMovesRecursive(x, y, []);
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

// findPossibleMoves(3, 3);

// findPossibleMoves(0, 0);

findPossibleMoves(6, 3);