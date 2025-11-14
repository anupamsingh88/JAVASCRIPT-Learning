// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method
class Person{
    constructor(name = "Anupam", age = 23, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log(`${this.name} is resting. Restoring the energy, current energy at: ${this.energy}`);
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log(`Energy is decreasing, currently at : ${this.energy}`)
    }
}

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method

class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    gotToWork(){
        this.xp += 10;
        console.log(`${this.name} is working. Gaining experience, current XP at: ${this.xp}`);
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
    const intern = new Worker("Bob", 21, 110, 0, 10);
    intern.gotToWork();
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
    const manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager
}

let worker = manager();
console.log(worker.name);

let intern1 = intern();
console.log(intern1.name);