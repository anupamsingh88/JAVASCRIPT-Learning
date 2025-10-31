// Try and catch program to handle the error while getting some ones number 
function checknumber(num){
    try{
        if(num.length != 10)
            throw "Invalid number";
        if(isNaN(num))
            throw "Enter a number";
        else
            console.log("Your number is Registered");
    }
    catch(err){
        console.log(err);
    }
}
console.log(typeof(num));
checknumber("1234567890");
checknumber("123456789");
checknumber("12345678901");