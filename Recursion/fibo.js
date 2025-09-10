function fibonaci(n){
    if (n === 0) 
        return 0;
    if (n=== 1)
        return 1;
    else{
        return fibonaci(n-1) + fibonaci(n-2);
    }
}

console.log(fibonaci(5));
console.log(fibonaci(6));
