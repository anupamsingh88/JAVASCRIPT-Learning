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
