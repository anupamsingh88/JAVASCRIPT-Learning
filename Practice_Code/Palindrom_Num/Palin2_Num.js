// Palindrom number program, converting a nuber to string and then checking it is palindrom or not

function palinddrom(num){
    let num_to_str = num.toString(); // converting number to string
    let reversed = num_to_str.split(''); // splitting string to array
    reversed = reversed.reverse().join(""); // reversing the array and joining to make a string again

    if(num_to_str === reversed){
        console.log(`The number ${num} is a palindrom number`); // checking original string and reversed string are same or not
    }
    else{
        console.log(`The number ${num} is not a palindrom number`); // checking original string and reversed string are same or not
    }
}

palinddrom(123); 
palinddrom(121);

// Explanation:
// 1. We start by converting the number to a string using the toString() method.
// 2. We then split the string into an array of characters using the split('') method.
// 3. Next, we reverse the array using the reverse() method.
// 4. We join the reversed array back into a string using the join("") method.
// 5. Finally, we compare the original string with the reversed string to determine if it is a palindrome.  
// Example: For num = 121
// Original string: "121"
// Reversed string: "121"
// Since they are equal, 121 is a palindrome.
// Time Complexity: O(d) where d is the number of digits in the number. This is because we process each digit once.
// Space Complexity: O(d) as we are using additional space to store the string and the array of characters.
// Note: This implementation works for non-negative integers. For negative numbers, you might want to handle them separately as they cannot be palindromes.
