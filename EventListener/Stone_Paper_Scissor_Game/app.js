// Writing a logic for a Stone Paper Scissor game
const choices = document.querySelectorAll('.choice');    // Selects all elements with 'choice' class
const resetButton = document.getElementById('reset');     // Gets the reset button element
const resultDisplay = document.getElementsByClassName('result'); // Displays the game result
const userScoreDisplay = document.getElementById('user-score'); // Displays user's score
const computerScoreDisplay = document.getElementById('computer-score'); // Displays computer's score

let userPoint = 0;  // User's score
let computerPoint = 0;  // Computer's score
let gameStarted = false; // Flag to check if the game has started


//Function to give a random choice to the computer
const genComputerChoice = ()=>{
    const choiceArray = ['rock', 'paper', 'scissor']; // Array of choices
    const randomInd= Math.floor(Math.random()* 3); // Generates a random index
    return choiceArray[randomInd]; // Returns a random choice from the array
}

// Function to compare user's choice with computer's choice
const playgame = (userChoice) => {
    console.log(`User choice: ${userChoice}`); // Logs user's choice
    const compChoice = genComputerChoice(); // Generates computer's choice
    console.log(`Computer choice: ${compChoice}`); // Logs computer's choice
}

//Function to get the user choice
choices.forEach((choice)=>{
    console.log(choice); // Logs each choice element to the console
    // Adds a click event listener to each choice
    if(!gameStarted) return; // If the game hasn't started, do nothing
    // When a choice is clicked, it retrieves the user's choice and calls the playgame function}
    choice.addEventListener('click',() =>{
        const userChoice = choice.getAttribute("id"); // Gets the user's choice from the clicked element
        console.log(userChoice); // Logs the user's choice to the console
        playgame(userChoice); // Calls the playgame function with the user's choice
    })
})