// Constructor is a special method for creating and initializing an object created with a class. It is called automatically when a new instance of the class is created or let's say when new object is instantiated.

// Defining a class with constructor
class Car{
    //Constructor method
    constructor(brand, model, color, type){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.type = type;
    }

    // Method to display car details
    displayDetails(){
        console.log(`Car Details: ${this.brand}, ${this.model}, ${this.color}, ${this.type}`);
    }

    // Method to start the car
    startEngine(){
        console.log(`The engine of ${this.brand} ${this.model} has started.`);
    }
    // Method to check the number of seats
    checkSeats(){
        if(this.type === 'Sports') return 2;
        else if(this.type === 'Sedan') return 4;
        else if(this.type === 'SUV') return 6;
        else return 'Unknown type';
    }

    changeMode(){
        if(this.type === 'Sedan'){
            this.type = 'Sports';
            console.log(`The car mode has been changed to ${this.type}`);
        }
        else{
            console.log(`NO mode change available for ${this.type} type car.`);
        }
    }
}

Car1 = new Car('BMW', 'X5', 'Black', 'SUV');
Car1.displayDetails();
Car1.startEngine();
console.log(`Number of seats in ${Car1.brand} ${Car1.model} is: ${Car1.checkSeats()}`);
// Add a space between outputs
console.log('--------------------------');
Car2 = new Car('Audi', 'A4', 'White', 'Sedan');
Car2.displayDetails();
Car2.startEngine();
console.log(`Number of seats in ${Car2.brand} ${Car2.model} is: ${Car2.checkSeats()}`);

// Changing the mode of the car
Car2.changeMode();
Car1.changeMode();