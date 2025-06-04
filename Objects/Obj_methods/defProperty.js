let product = {
    name: 'S24 ultra',
    company: "Samsung",
    price: 120000,
    warranty: "3 years",
    color: "black"
}

// Object.defineProperty(product, 'price', {writable: false});// make price property non-writable
// Object.defineProperty(product, 'price', {configurable: false});// make price property non- removable


// product.price = 20// can not be changed
// delete product.price// can not be removed

// console.log(product);

// Creating our own Object.seal()

function customSeal(product){
    let keys = Object.keys( product );
    for(let i = 0; i < keys.length; i++){
        Object.defineProperty(product, keys[i], {configurable: false});
    }
    Object.preventExtensions(product);

}
// can not be changed
customSeal(product);
product.price = 20
console.log( product);

