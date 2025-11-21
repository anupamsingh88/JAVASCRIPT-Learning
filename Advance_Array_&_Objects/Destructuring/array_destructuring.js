const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array

const [,[secondProductName, secondProductPrice]] = products; // adding comma to skip the first product array element. If i added another comma, it would skip the second product as well, and try to destructure the third product.

const [,,[thirdProductName, thirdProductPrice]] = products; // adding two commas to skip the first and second product array elements.


console.log(`Second product: ${secondProductName}`);
console.log(`Second product price: ${secondProductPrice}`);
console.log(`Third product: ${thirdProductName}`);
console.log(`Third product price: ${thirdProductPrice}`);
