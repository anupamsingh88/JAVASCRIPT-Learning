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


// Explanation of the while loop:
// 1. We start with the original number n.
// 2. In each iteration of the while loop, we extract the last digit of n using n % 10.
// 3. We then build the reverse number by multiplying the current reverse by 10 and adding the extracted digit.
// 4. We remove the last digit from n by performing integer division (Math.floor(n / 10)).
// 5. This process continues until n becomes 0.
// 6. Finally, we compare the original number with the reversed number to determine if it is a palindrome.
// Example: For n = 121
// Iteration 1: digit = 1, reverse = 0 * 10 + 1 = 1, n = 12
// Iteration 2: digit = 2, reverse = 1 * 10 + 2 = 12, n = 1
// Iteration 3: digit = 1, reverse = 12 * 10 + 1 = 121, n = 0
// Now n is 0, we exit the loop and compare original (121) with reverse (121).
// Since they are equal, 121 is a palindrome.
// Time Complexity: O(d) where d is the number of digits in the number. This is because we process each digit once.
// Space Complexity: O(1) as we are using a constant amount of space regardless of the input size.
// Note: This implementation works for non-negative integers. For negative numbers, you might want to handle them separately as they cannot be palindromes.
