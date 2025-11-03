// Using this keyword in place of specifying the name of the object
let product1 = {
    name: "shoes",
    price: 100,
    statetax: 1.2,
    calculateTotalCost : function(){
        return this.price * this.statetax;
    }
}

let totalcost = product1.calculateTotalCost();
console.log(`Total cost of ${product1.name} is: ${totalcost}`);

let product2 = {
    name: "socks",
    price: 10,
    statetax: 1.2,
    calculateTotalCost : function(){
        return this.price * this.statetax;
    }
}

let totalcost2 = product2.calculateTotalCost();
console.log(`Total cost of ${product2.name} is: ${totalcost2}`);