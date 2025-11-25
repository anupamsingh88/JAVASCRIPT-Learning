// Program to find the length of the array without using the Length property

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function retlen(array, el){
    return array.push(el);
}
console.log(retlen(arr, 12));

// The push() method adds a new element to the end of an array and returns the new length of the array.
// So, by adding a new element (12 in this case) to the array, we can get the length of the array.
// Note: This method modifies the original array by adding a new element.

// If you want to get the length without modifying the original array, you can use a loop to count the elements.
let count = 0;
for (let i = 0; arr2[i] !== undefined; i++){
    count++;
}
console.log(`Length of the array is: ${count}`);
// Output: Length of the array is: 10
// This method iterates through the array until it finds an undefined element, counting the number of elements in the process.

// But what if the array contains undefined elements? This method will stop counting at the first undefined element encountered.

// To handle such cases, we can use a different approach by using for...of loop.

let arr2 = [1, 2, undefined, 4, 5, undefined, 7, 8, 9, 10];

let count2 = 0;
// let count = 0;
for(let element of arr2){
    count2++;
}
console.log(`Length of the array is: ${count2}`);

// for (let i = 0; arr2[i] !== undefined; i++){
//     count++;
// }
// console.log(`Length of the array is: ${count}`); 
// This will return 2 because it stops counting at the first undefined element.