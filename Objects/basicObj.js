let person = {
    'First name':'John',
    'Last name':'Doe',
    age: 22,
    occupation: 'Software Engineer',
    hobbies: ['reading', 'hiking', 'coding'],
}

// Accessing properties

// console.log(person['First name']);// Using Array like notation
// console.log(person.age);// Using dot notation



// Adding property
person.location= 'New York';
person.hobbies.push('Watching anime'); 
// console.log(person);

// Deleting property 
delete person.age;
console.log(person);

const x= 100;
// x= 001;