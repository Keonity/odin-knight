import './styles.css';

console.log(`Welcome To The Eye Of Odin Knights Travails Project`);

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
    if (!hist.includes(`${x}, ${y}`)) {
        hist.push(`${x}, ${y}`);
    }

    if (((x - 1) >= 0) && ((y + 2) <= 7) && !hist.includes(`${x - 1}, ${y + 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 1}, ${y + 2}`);
        findPossibleMovesRecursive(x - 1, y + 2, newArray);
        console.log(`${x - 1}, ${y + 2}`);
        console.log(newArray);
    }

    if (((x - 1) >= 0) && ((y - 2) >= 0) && !hist.includes(`${x - 1}, ${y - 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 1}, ${y - 2}`);
        findPossibleMovesRecursive(x - 1, y - 2, newArray);
        console.log(`${x - 1}, ${y - 2}`);
        console.log(newArray);
    }

    if (((x + 1) <= 7) && ((y + 2) <= 7) && !hist.includes(`${x + 1}, ${y + 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 1}, ${y + 2}`);
        findPossibleMovesRecursive(x + 1, y + 2, newArray);
        console.log(`${x + 1}, ${y + 2}`);
        console.log(newArray);
    }

    if (((x + 1) <= 7) && ((y - 2) >= 0) && !hist.includes(`${x + 1}, ${y - 2}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 1}, ${y - 2}`);
        findPossibleMovesRecursive(x + 1, y - 2, newArray);
        console.log(`${x + 1}, ${y - 2}`);
        console.log(newArray);
    }

    if (((x - 2) >= 0) && ((y + 1) <= 7) && !hist.includes(`${x - 2}, ${y + 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 2}, ${y + 1}`);
        findPossibleMovesRecursive(x - 2, y + 1, newArray);
        console.log(`${x - 2}, ${y + 1}`);
        console.log(newArray);
    } 

    if (((x - 2) >= 0) && ((y - 1) >= 0) && !hist.includes(`${x - 2}, ${y - 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x - 2}, ${y - 1}`);
        findPossibleMovesRecursive(x - 2, y - 1, newArray);
        console.log(`${x - 2}, ${y - 1}`);
        console.log(newArray);
    }

    if (((x + 2) <= 7) && ((y + 1) <= 7) && !hist.includes(`${x + 2}, ${y + 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 2}, ${y + 1}`);
        findPossibleMovesRecursive(x + 2, y + 1, newArray);
        console.log(`${x + 2}, ${y + 1}`);
        console.log(newArray);
    } 

    if (((x + 2) <= 7) && ((y - 1) >= 0) && !hist.includes(`${x + 2}, ${y - 1}`)) {
        const newArray = Array.from(hist);
        newArray.push(`${x + 2}, ${y - 1}`);
        findPossibleMovesRecursive(x + 2, y - 1, newArray);
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

function knightMovesIterative(x, y, x2, y2) {
    const queue = [];
    queue.push(([[x, y], [[x, y]]]));
    let currentNode = queue.shift();

    // Main idea: 
    // Set current node to first node
    // Check current node, if destination, return path
    // Check children node, if destination, return path
    // Every child that is movable to, we add to queue.

    // How to keep track of path history?
    // Idea 1: Each node has its own history property 
    // Idea 2: ??? Maybe think of an alternative if possible.

    // 11/11 Update: Nodes are repeating themselves, make sure to add a way to avoid adding previous nodes to our history and queue.

    // console.log(currentNode[0][1]);

    while (currentNode[0][0] != x2 || currentNode[0][1] != y2) {

        /* console.log(currentNode[0][0]);
        console.log(currentNode[0][1]);
        console.log(x2);
        console.log(y2);
        console.log(`Current node: `);
        console.log(currentNode); */

        x = currentNode[0][0];
        y = currentNode[0][1];

        // console.log(`Check 1:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 1, y + 2])));

        if (((x - 1) >= 0) && ((y + 2) <= 7) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 1, y + 2])) < 0) {
            // console.log(`Pushing 1`);
            queue.push(([[x - 1, y + 2], currentNode[1].concat([[x - 1, y + 2]])]));
            // console.log(`${x - 1}, ${y + 2}`);
        }
    
        // console.log(`Check 2:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 1, y - 2])));

        if (((x - 1) >= 0) && ((y - 2) >= 0) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 1, y - 2])) < 0) {
            // console.log(`Pushing 2`);
            queue.push(([[x - 1, y - 2], currentNode[1].concat([[x - 1, y - 2]])]));
            // console.log(`${x - 1}, ${y - 2}`);
        }
    
        // console.log(`Check 3:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 1, y + 2])));

        if (((x + 1) <= 7) && ((y + 2) <= 7) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 1, y + 2])) < 0) {
            // console.log(`Pushing 3`);
            queue.push(([[x + 1, y + 2], currentNode[1].concat([[x + 1, y + 2]])]));
            // console.log(`${x + 1}, ${y + 2}`);
            /* console.log(`Includes check:`);
            console.log(JSON.stringify(currentNode[1]));
            console.log(JSON.stringify([[x + 1, y + 2]]));
            console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 1, y + 2])));
            console.log(queue[queue.length - 1]); 
            console.log(`${x + 1}, ${y + 2}`);
            console.log(`Second check:`);
            console.log(queue[queue.length - 1][1][1]); */

            // BELOW = WORKING DETECTION CODE
            // console.log(JSON.stringify(queue[queue.length - 1][1][1]).indexOf(JSON.stringify([x + 1, y + 2])));
        }
    
        // console.log(`Check 4:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 1, y - 2])));

        if (((x + 1) <= 7) && ((y - 2) >= 0) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 1, y - 2])) < 0) {
            // console.log(`Pushing 4`);
            queue.push(([[x + 1, y - 2], currentNode[1].concat([[x + 1, y - 2]])]));
            // console.log(`${x + 1}, ${y - 2}`);
        }

        // console.log(`Check 5:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 2, y + 1])));
    
        if (((x - 2) >= 0) && ((y + 1) <= 7) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 2, y + 1])) < 0) {
            // console.log(`Pushing 5`);
            queue.push(([[x - 2, y + 1], currentNode[1].concat([[x - 2, y + 1]])]));
            // console.log(`${x - 2}, ${y + 1}`);
        } 

        // console.log(`Check 6:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 2, y - 1])));
    
        if (((x - 2) >= 0) && ((y - 1) >= 0) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x - 2, y - 1])) < 0) {
            // console.log(`Pushing 6`);
            queue.push(([[x - 2, y - 1], currentNode[1].concat([[x - 2, y - 1]])]));
            // console.log(`${x - 2}, ${y - 1}`);
        }
    
        // console.log(`Check 7:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 2, y + 1])));

        if (((x + 2) <= 7) && ((y + 1) <= 7) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 2, y + 1])) < 0) {
            // console.log(`Pushing 7`);
            queue.push(([[x + 2, y + 1], currentNode[1].concat([[x + 2, y + 1]])]));
            // console.log(`${x + 2}, ${y + 1}`);
        } 
    
        // console.log(`Check 8:`);
        // console.log(JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 2, y - 1])));

        if (((x + 2) <= 7) && ((y - 1) >= 0) && JSON.stringify(currentNode[1]).indexOf(JSON.stringify([x + 2, y - 1])) < 0) {
            // console.log(`Pushing 8`);
            queue.push(([[x + 2, y - 1], currentNode[1].concat([[x + 2, y - 1]])]));
            // console.log(`${x + 2}, ${y - 1}`);
        }
    
        // console.log(`Queue Length: ${queue.length}`);
        // console.log(queue);

        if (queue.length <= 0) {
            break;
        }

        currentNode = queue.shift();
        // console.log(hist);
    }

    console.log(`Shortest path found: `);
    console.log(`Shortest path length: ${currentNode[1].length}`);
    console.log(`Shortest path: `);
    currentNode[1].forEach((elem) => {
        console.log(`${elem[0]}, ${elem[1]}`);
    })
}

knightMovesIterative(3, 3, 0, 0);