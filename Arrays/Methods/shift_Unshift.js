// unshift() is used to add a new element at the beginning of the array.
// It make chnages in the original array and return a new array

const marvel_Heroes = ["IronMan", "Captain America", "Antman", "Spiderman"]
marvel_Heroes.unshift("Black Panther")
console.log( marvel_Heroes );

// Output: [ 'Black Panther', 'IronMan', 'Captain America', 'Antman',

// shift() is used to remove the first element from the array.
// It make chnages in the original array and return the removed element

let remHero = marvel_Heroes.shift()
console.log(remHero);

