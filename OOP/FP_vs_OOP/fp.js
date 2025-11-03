let shoes = 100;
let statetax = 1.2;

function calculateTotalCost(shoes, statetax){
    return shoes * statetax;
}
let totalCost = calculateTotalCost(shoes, statetax);
console.log(`Total cost of shoes is: ${totalCost}`);