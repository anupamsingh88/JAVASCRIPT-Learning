let n= 5;

let arr = [];

for(let i=1; i<=n;i++){
    arr[i-1]= i;
}
console.log(arr);

// Use reduce() method to calculate sum of the array

let sum = arr.reduce((res,curr)=>{
    return res + curr;
})

console.log(sum);


// Use reduce() method to calculate product of the array

let product = arr.reduce((res,curr)=>{
    return res * curr;
});

console.log( product);
