function test(){
    try{
        console.log(a);
        return "from try";

    }
    catch(e){
        return "from catch";
    }
    finally{
        console.log("from finally"); 
    }
}

console.log(test());
// Output: "from finally"

// finding factorial of a number
function factorial(n){
    try{
        if(n<0) throw new Error("Negative number not allowed");
        if(n===0) return 1;
        let fact = 1;
        for(let i=1; i<=n; i++){
            fact *= i;
        }
        return fact;
    }
    catch(e){
        return e.message;
    }
}
console.log(factorial(5)); // Output: 120