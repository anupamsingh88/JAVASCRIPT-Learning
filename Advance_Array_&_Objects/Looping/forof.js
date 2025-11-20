// For of loop does not work directly on objects. First we need to convert the object into iterable variable like array using Object.keys(), Object.values() or Object.entries() methods.

//Object.keys() - returns key names of an object as an array

// Example using Object.keys()

const car = {
    brand: "Mustang",
    color: "white",
    maxSpeed: 200
}

let car1 = Object.create(car);
car1.year = 2020;
car1.price = 30000;

for(key of Object.keys(car)){
    console.log(key);
}

for (value of Object.values(car)){
    console.log(value);
}

for ([key, value] of Object.entries(car)){
    console.log([key, value]);
}

console.log(Object.entries(car));
console.log(car1.brand); // Mustang
console.log(car.hasOwnProperty('brand'));


// Explanation of how it works:
// 1. We have an object 'car' with properties brand, color, and maxSpeed.
// 2. We create another object 'car1' that inherits from 'car' and adds its own properties year and price.
// 3. We use Object.keys(car) to get an array of the keys of the 'car' object and loop through them using for...of loop, logging each key.
// 4. We use Object.values(car) to get an array of the values of the 'car' object and loop through them, logging each value.
// 5. We use Object.entries(car) to get an array of [key, value] pairs of the 'car' object and loop through them, logging each pair.
// 6. Finally, we log the entries of the 'car' object and access the inherited property brand from 'car1'.


// Important Note: car1 is the child object of car. Hence car is the prototype of car1. So, car1 can access the properties of car through prototype chain.

// hasOwnProperty() method checks whether the property belongs to the object itself or is inherited through the prototype chain. But hasOwnProperty() is also a property of Object.prototype. So, it can be accessed by all objects. It is also a prototype method which is accessed by prototype chain.