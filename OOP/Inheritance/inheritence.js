// Inheritence is a fundamental concept of Object Oriented Programming (OOP) that allows a class(sub class/child class) to inherit the properties and methods of another class(super class/parent class).
// It is usefull for code reuasbility and establishing a relationship between classes.

// Defining a parent class
class Vehicle{
    constructor(brand,model,color){
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    displayDetails(){
        console.log(`Vehicle Details: ${this.brand}, ${this.model}, ${this.color}`);
    }

    startEngine(){
        console.log(`The engine of ${this.brand} has started.`);
    }

    honk(){
        console.log(`The ${this.brand} goes Beep Beep!`);
    }

    stopEngine(){
        console.log(`The engine of ${this.brand} has stopped`)
    }
}

// Defining a child class that inherites from Vehicle class 

class Car extends Vehicle{
    constructor(brand, model, color, type){
        // Calling the parent class constructor for initializing values that are inherited from vehicle class. Like brand, model and color.
        super(brand, model, color);
        this.type = type;
    }

    displayCarDetails(){
        console.log(`Car Details: ${this.displayDetails()}, Type: ${this.type}`); // Calling the parent class method displayDetails() using 'this' keyword. As it was already called using super() in the constructor.
    }
}
let myCar = new Car('Toyota', 'Camry', 'Blue', 'Sedan');
myCar.displayCarDetails();
myCar.startEngine(); // Inherited method from Vehicle class
myCar.honk(); // Inherited method from Vehicle class
myCar.stopEngine(); // Inherited method from Vehicle class