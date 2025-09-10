// Palindrom Number using loops and without converting number to string

function palindrom(n){
    let original = n;
    let reverse = 0;

    while(n>0){
        let digit = n% 10; // getting last digit
        reverse = reverse *10 + digit; // forming the reverse number
        n = Math.floor(n/10); // removing last digit
    }
    if(original === reverse){
        return (`${original} is a Palindrom Number`);
    }
    else{
        return (`${original} is not a Palindrom Number`);
    }
}
console.log(palindrom(121));
console.log(palindrom(123));
