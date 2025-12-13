// Rest operator is used to collect multiple elements into a single array or objects property.
// It is represented by three dots (...) followed by a variable name.

// Example with arrays:
function sum(...numbers){
    return numbers.reduce((acc, arg)=> acc + arg,0);
}

console.log(sum(1,2,3,4,5)); // Output: 15   