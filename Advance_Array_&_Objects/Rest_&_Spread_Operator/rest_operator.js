// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    // Your code here
    for (items of args) {
        console.log(items)
    }
}

unknownArgs("Hello", 1, 2, 3, 4,[7], 5);
unknownArgs("Hello", "World")