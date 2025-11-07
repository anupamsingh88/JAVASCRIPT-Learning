// Performing same thing without using class and doing with Functional programming.

function Car(brand,model,color,type){
  return {brand,model,color,type};
}

// Method to display car details
function displayDetails(Car){
  console.log(`Car Details: ${Car.brand}, ${Car.model}, ${Car.color}, ${Car.type}`);
}

// Method to start the car
function startEngine(Car){
  console.log(`The engine of the ${Car.brand} ${Car.model} has started.`);
}

// Method to check the number of seats
function CheckNumSeats(Car){
  if('type'=== 'Sedan'){
    return `Number of seats of the ${Car.brand} is 4`
  }
  else if('type' === 'Sports'){
    return `Number of seats in the ${Car.brand} is 2`
  }
  else if('type'==='SUV'){
    return `Number of seats of the ${Car.brand} is 6`
  }

  else{
    return `Enter a relevant type of the car`;
  }
}

let Car1 = Car('BMW','M5','Black','Sports');
startEngine(Car1);