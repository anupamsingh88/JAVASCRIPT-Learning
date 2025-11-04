// Class in JavaScript is a blueprint for creating objects. It encapsulate data and behavior related tot hat data.

// Defining a class
class Car{
    // Without constructor
    brand = 'Toyota';
    model = 'Corolla';

    // Properties of the Car (Known as fields or methods)
    startEngine(){
        console.log(`The engine of ${this.brand} ${this.model} has started.`);
    }

    stopEngine(){
        console.log(`The engine of ${this.brand} ${this.model} has stopped.`);
    }
}

// Creating an object (instance) of the Car class
let myCar = new Car();
console.log(`My car is a ${myCar.brand} ${myCar.model}.`);
myCar.startEngine();
myCar.stopEngine();