// // let name = "Anupam";
// (function data() {
//     var name = "Anubhav";
//     console.log(`DB is connected name is ${name}`);
// })();

// console.log(name);

// let name = "Bombardilo Crocodilo"

// function greet(){
//     let name = "Anupam";
//     console.log(`Hello ${name}`);
// }
// greet();
// console.log(name)

var counter = (function() {
    var count = 0;
 
    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
})();
 
// Increment the counter
counter.increment();
counter.increment();
counter.increment();
 
console.log(counter.getCount()); // Output: 3
 
// Trying to access the private count variable directly
console.log(counter.count);