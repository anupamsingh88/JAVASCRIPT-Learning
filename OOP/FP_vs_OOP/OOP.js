let product1 = {
    name: "shoes",
    price: 100,
    statetax: 1.2,
    calculateTotalCost : function(){
        return product1.price * product1.statetax;
    }
}

let totalcost = product1.calculateTotalCost();
console.log(`Total cost of ${product1.name} is: ${totalcost}`);