// Handling Immutability in objects 

/* If we initialise the object with const then it doesn't make the object fully immutable
    >> We can still update the key value pairs and we can also reassign the value of a key without any error
*/

// Example

const person = {
    name: "Anupam",
    age: 25,
    occupation: "Software Engineer",
    location: "Lucknow",
}

person.age = 30;
console.log(person);

// So const is basically stops reassignment of a variable. It will stop when we will try to reassign the variable but it will not stop us from updating the key value pairs of an object.
// Example 

person = {
    name: "Anupam",
    age: 30,
}

// console.log(person)

/* The above code will throw an error
    >>> TypeError: Assignment to constant variable.
*/

// We can use some inbuilt methods to make the object fully immutable. We can use Object.freeze() and Object.seal() method to make the object fully immutable.

