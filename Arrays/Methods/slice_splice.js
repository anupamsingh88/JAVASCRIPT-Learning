// slice() method is used to ectract a section or part of an array 
// it returns a new array with the extracted elements. And it does not make any changes in the original string

const marvel_Heroes = ["IronMan", "Captain America", "Antman", "Spiderman"]
let extr_Hero = marvel_Heroes.slice(1, 3); //slice(startInd,endInd).>>>>>>> endindex is exclusive
// console.log(extr_Hero); // ["Captain America", "Antman"]

// splice() method is used to add,remove or replace elements from an array
// it is used to manipulate in the orginal array and it make changes in the original array

const Marks = [1,2,3,4,5,6,7,8]

//>>> Add an element
Marks.splice(4,0,9)
// console.log(Marks); 


//>>>Replace an element 
// Marks.splice(4,2,20, 21); // splice(sartId,delCount,newElem)>>>
// console.log(Marks); 

//>>> Delete an element
// Marks.splice(4,2); 
// console.log(Marks);


// Passing only the index of an array element in splice() lead to delete the element from that index to end of array

let spl = Marks.splice(4)
console.log(spl);
console.log(Marks)