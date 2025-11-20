// for in loop can be directly used on the objects keys to iterate over them. Without converting the object into iterable variable like array.

//for in loop also iterates over the prototype chain properties.

// Example using for in loop

const car  = {
    brand : "Mustang",
    color : "white",
    maxSpeed : 200
}

let car1 = Object.create(car);
car1.year = 2020;
car1.price = 30000;

for (key in car){
    console.log(`${key}`);
}//logs brand color maxSpeed without converting into array

for( key in car1){
    console.log(`${key} : ${car1[key]}`); 
} // logs year : 2020 price : 30000 brand : Mustang color : white maxSpeed : 200..... Even the car properties are the prototype properties of car1 are also logged here.

// Explanation of how it works:
// 1. We have an object 'car' with properties brand, color, and maxSpeed.
// 2. We create another object 'car1' that inherits from 'car' and adds its own properties year and price.
// 3. We use for...in loop to iterate over the keys of the 'car' object, logging each key.
// 4. We use for...in loop to iterate over the keys of the 'car1' object, logging each key and its corresponding value. This includes both the own properties of 'car1' and the inherited properties from 'car'.

// Important Note: car1 is the child object of car. Hence car is the prototype of car1. So, car1 can access the properties of car through prototype chain.
