// Writing a function to demonstrate try, catch 
// Creating a function addTwoNum and returning sum of two numbers but as an argument i will pass a string and a number and handeling that bug using try catch

function addTwoNum(a,b){
    try{
        if (typeof(a)!== 'number'){
            throw new TypeError("The first argument is not a number")
        } // checking if the first argument is a number or not
        else if(typeof(b)!== 'number'){
            throw new TypeError("The second argument is not a number")
        } // checking if the second argument is a number or not
        else{
        console.log(a+b)
        } // if both are numbers then returning the sum
    }catch(err){
        console.log(err)
    }

}

addTwoNum(5,5)

