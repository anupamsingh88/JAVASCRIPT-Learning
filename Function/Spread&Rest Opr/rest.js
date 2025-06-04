function sum(...numbers) {
    return numbers.reduce((res,n)=>
        res + n
    )
   
}
console.log(sum(1,2,3,4,5));