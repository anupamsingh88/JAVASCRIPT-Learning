// freeze() method provide highest level of immutability as in this we will not be able to delete or add any key value pair from the object and neither we can change the value of any key value pair.

const product = {
    name: 'S24 ultra',
    company: "Samsung",
    price: 120000,
    warranty: "3 years",
    color: "black"
}

Object.freeze(product)

product.name = "S20" // this will not throw any error but it will not change the value of name key in the object
product.cover = true; // this will not throw any error but it will not add any new key value pair in the object as it is frozen
delete product.price; // this will not throw any error but it will not delete key value pair in the object as it is frozen


console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));
