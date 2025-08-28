// function multiply(a,b){
//     if(a===0 || b=== 0){
//         throw new Error ("A number when divided by 0 will return 0");
//     }
//     return a*b;
// }

// try{
//     console.log(multiply(2,5));
// }
// catch(e){
//     // console.log(e.message);
//     console.log(e);
// }

function divide(a,b){
    if(b===0){
        throw new Error("a number can not be divided by 0")
    }
    return a/b;
}

try{
    console.log(divide(8,5));
}
catch(error){
    console.log(error);
}