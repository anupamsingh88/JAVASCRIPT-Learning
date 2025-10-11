// Palindrome Number using Recursion
function palin(num){
    let num_to_str = num.toString(); // converting number to string

    // base case
    if(num_to_str.length <= 1){
        return true;
    }

    // checking first and last character of the string
    if (num_to_str[0] !== num_to_str[num_to_str.length - 1]){
        return false;
    }

    // recursive call with the substring excluding the first and last characters
    return palin(num_to_str.slice(1, -1)); 
}

console.log(palin(121)); // true
console.log(palin(123)); // false