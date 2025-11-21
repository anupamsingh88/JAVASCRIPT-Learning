// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
const dairy = ['cheese', 'milk', 'yogurt'];

function logDairy() {
  for (item of dairy) {
    return item;
  }
}
// console.log(logDairy());
// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties

const animal = {
  canJump: true
}

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan(){
  for (property of Object.keys(bird)) {
    console.log(`${property}: ${bird[property]}`);
  }
}
// birdCan();
// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan(){
  for (property in bird){
    console.log(`${property}: ${bird[property]}`)
  }
}

animalCan();