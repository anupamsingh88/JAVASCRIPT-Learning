

// function scop() {
//     let avg = 25;
//     console.log(avg)
//     function scop2() {
//         const num=20;
//         console.log(avg);
        
//     }
    
//     avg = 30;
//     scop2()
    
// }

// scop()


function check_function_scope(){
    var variable1 = "Geeksforgeeks";
    let variable2 = "Geeks";
    const variable3 = "GFG";
    console.log(variable1);
    console.log(variable2);
}

check_function_scope();
console.log(variable1);