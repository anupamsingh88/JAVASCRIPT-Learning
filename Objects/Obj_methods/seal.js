// seal() method will help us to make the object fully immutable, means we can not add or remove the key value pairs. 
// But we can change the value of the existing key value pairs.

let product= {
    name: 'Apple',
    price: 1000,
    brand: 'Apple'

}

Object.seal(product)
product.color = "black";// Here we are trying to add a new key value pair
delete product.brand;// Here we are trying to delete a key value pair
console.log(product)

// In the above code , we are trying to add a new key value pair and delete a key value pair. But we are not able to do that because the object is sealed. 

product.price = 20000;
product.name = "I phone 15"
console.log(product) // Here we are able to change the value of the existing key value pairs.
