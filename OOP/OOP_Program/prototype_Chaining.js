function DogObject(name, age){
    let Dog = Object.create(constructorObject);
    Dog.name = name;
    Dog.age = age;
    return Dog;
}

let constructorObject = {
    speak: function(){
        return `I am a Dog and my name is ${this.name} and I am ${this.age} years old`;
    }
}

let bingo = DogObject("Bingo", 22);
console.log(bingo);
console.log(bingo.speak());