class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }

    // Method to check if the animal is active, and decrease energy evrytime it is called untill energy is 0
    isActive(){
        if(this.energy > 0){
            // this.energy = this.energy - 20; // Decrease energy by 20
            this.energy -= 20 // Shorthand for decreasing energy by 20(better to use this one)
            console.log(`The animal is active. Remaining energy: ${this.energy}`);
        }

        else{
            console.log(`The animal is out of energy.`);
            // sleep(); // this will returnn error as sleep is not defined in this scope
            // Correct way to call sleep method is using this keyword 
            // Why? because sleep is a method of this class Animal 
            this.sleep();
        }
    }

    sleep(){
        this.energy += 20; // Increase energy by 20 whenever sleep is called
        console.log(`The animal is sleeping. Energy increased to: ${this.energy}`);
    }
}

class Cat extends Animal{
    constructor(color, energy, sound = "purr", canJumpHigh = true, canClimbTrees = true){
        super(color,energy)
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){
        console.log(`The cat says: ${this.sound}`);
    }
}

class Bird extends Animal {
    constructor(color, energy, sound = "Chirp", canFly = true){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound(){
        console.log(`The bird says: ${this.sound}`);
    }
}

class HouseCat extends Cat{
    constructor(color, energy, sound, houseCatSound = "Meow", canJumpHigh, canClimbTrees){
        super(color, energy, sound, canJumpHigh, canClimbTrees);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(`The house cat says: ${this.houseCatSound}`);
    }
}

class Tiger extends Cat{
    constructor(color, energy, sound, tigerSound = "Roar", canJumpHigh, canClimbTrees){
            super(color, sound, energy, canClimbTrees, canJumpHigh);
            this.tigerSound = tigerSound;
        }

        makesSound(option){
            if(option){
                super.makeSound()
            }
            console.log(`The tiger says: ${this.tigerSound}`);
        }
}

class Parrot extends Bird{
    constructor(color, energy, sound, canTalk = false, canFly){
        super(color, energy, sound, canFly);
        this.canTalk = canTalk;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(`I am a talking bird`)
    }
}

// Intances of HouseCat
// const houseCat = new HouseCat("Brown", 200);
// console.log(houseCat.color);
// houseCat.isActive();
// houseCat.makeSound(false);
// houseCat.sleep();

const parrot1 = new Parrot("Green", 100, "Squawk"  );
parrot1.makeSound(false);
console.log(parrot1.canFly)

//Code Explanation:
// 1. We defined a base class Animal with properties color and energy, and methods isActive() and sleep().
// 2. The isActive() method checks if the animal has energy left. If it does, it decreases the energy by 20. If not, it calls the sleep() method to restore energy.
// 3. The sleep() method increases the animal's energy by 20.
// 4. We created subclasses Cat and Bird that extend Animal, adding their own properties and methods.
// 5. Further, we created HouseCat and Tiger classes that extend Cat, and Parrot class that extends Bird, demonstrating multi-level inheritance.
// 6. Each subclass has its own makeSound() method to demonstrate polymorphism.

// Option parameter explanation:
// In the makeSound() methods of HouseCat, Tiger, and Parrot classes, we use an option parameter to determine whether to call the parent class's makeSound() method.
// If option is true, it calls the parent method using super.makeSound(). This allows us to control whether we want to include the parent class's sound behavior when calling the method on the subclass instance.
// If option is false, it skips the parent method and only executes the subclass's specific behavior.