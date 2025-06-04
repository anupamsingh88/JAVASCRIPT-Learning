// function that take string as an argument and return the number of vowels
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
    if (typeof (str) === 'string') {
        let lowCaseStr = str.toLowerCase();
        for (let i = 0; i < lowCaseStr.length; i++) {
            if (vowels.includes(lowCaseStr[i])) {
                count++;
            }
        }
        console.log(` The number of vowels in the string is: ${count}`);
    }

    else {
        console.log("Invalid input, Please enter a string");
    }
    
}

countVowels("AAA")

