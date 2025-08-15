let name = "Anupam Singh"; 
let fname = 'Anupam';
let lname = `Singh`;

console.log(name); // Output: Anupam Singh

// STRING FUNCTION
// > concat()---> Used to create a new string by concatenating two or more strings.
let str1 = "Helo";
console.log(str1.concat(" World")); // Output: HeloWorld

// We can use +(operater) to concatenate two or more string
console.log("Anupam"+"Singh");// ANupamSingh

// But we consider concat() because 

// > toUpperCase()
let str = "Anupam";
let upStr = str.toUpperCase();
let lowStr = str.toLowerCase();
console.log(upStr); // Output: ANUPAM
console.log(lowStr); // Output: anupam

let text = "Hello World";

// indexOf() - returns first occurrence
console.log(text.indexOf("World")); // Output: 6

// includes() - returns true if found
console.log(text.includes("Hello")); // Output: true

// startsWith() and endsWith()
console.log(text.startsWith("Hello")); // Output: true
console.log(text.endsWith("World")); // Output: true