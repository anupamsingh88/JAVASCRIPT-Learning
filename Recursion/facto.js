function factorial(n){
    if (n === 0 || n === 1)// Base case
        return 1;
    else{
        return n* (factorial(n-1)); // Recursive function
    }
}

console.log(factorial(5));
