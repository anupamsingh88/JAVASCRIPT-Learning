// Writing a logic for a Stone Paper Scissor game
const choices = document.querySelectorAll('.choice');    // Selects all elements with 'choice' class
const resetButton = document.getElementById('reset');     // Gets the reset button element
const resultDisplay = document.querySelector('.winner'); // Displays the game result
const userScoreDisplay = document.getElementById('user-score'); // Displays user's score
const computerScoreDisplay = document.getElementById('computer-score'); // Displays computer's score

let userPoint = 0;  // User's score
let computerPoint = 0;  // Computer's score
let gameStarted = false; // Flag to check if the game has started

// Function to sart the game
const startGame = ()=>{
    gameStarted = true; // Sets the game as started
    console.log("Game Started"); // Logs game start
    
    resultDisplay.textContent = "Game Started! Make your move!"; // Prompts the user to make a move
}

// Event listener for the reset/start button
resetButton.addEventListener('click',()=>{
    console.log("Reset button clicked"); // Logs button click
    
    if(!gameStarted){
        choices.forEach((choice => choice.disabled = false)); // Enables all choice buttons
        startGame(); // Starts the game if it hasn't started
        resetButton.textContent = "Reset Game"; // Changes button text to 'Reset'
    }
    else{
        // Resets the game state
        console.log("Game Reset"); // Logs game reset
        gameStarted = false; // Sets the game as not started
        userPoint = 0; // Resets user's score
        computerPoint = 0; // Resets computer's score
        userScoreDisplay.textContent = userPoint; // Updates user's score display
        computerScoreDisplay.textContent = computerPoint; // Updates computer's score display
        resultDisplay.textContent = "Click on Start Game to play"; // Resets result display
        resetButton.textContent = "Start Game"; // Changes button text to 'Start'
    }
})


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
    const result = findWinner(userChoice,compChoice); // Finds the winner
    resultDisplay.textContent = result; // Updates the result display
}

//Function to find the winner
const findWinner = (userChoice,compChoice) =>{
    // if(userChoice === compChoice){
    //     return "It's a Tie!"; // If both choices are the same, it's a tie
    // }
    // else if(userChoice === 'rock' && compChoice === 'scissor' ||
    //         userChoice === 'paper' && compChoice === 'rock' ||
    //         userChoice === 'scissor' && compChoice === 'paper'){
    //             userPoint++; // User wins
    //             userScoreDisplay.textContent = userPoint; // Updates user's score display
    //             return "You Win!"; // Returns win message
    //         }
    //         else{
    //             computerPoint++; // Computer wins
    //             computerScoreDisplay.textContent = computerPoint; // Updates computer's score display
    //             return "Computer Wins!"; // Returns win message
    //         }

    // The Aboove code can be simplified using switch case


    // Simpler way to find the winner using an object to define winning rules
    const winRules = {
        rock: 'scissor', // Rock beats Scissor
        paper: 'rock',   // Paper beats Rock
        scissor: 'paper' // Scissor beats Paper
        // values are treated as computer's choice
    };

    if(userChoice === compChoice){
        return "It's a Tie!"; // If both choices are the same, it's a tie
    }
    else if(winRules[userChoice] === compChoice){
        userPoint++; // User wins
        userScoreDisplay.textContent = userPoint; // Updates user's score display
        return "You Win!"; // Returns win message
    }
    else{
        computerPoint++; // Computer wins
        computerScoreDisplay.textContent = computerPoint; // Updates computer's score display
        return "Computer Wins!"; // Returns win message
    }
}

//Function to get the user choice
choices.forEach((choice)=>{
    console.log(choice); // Logs each choice element to the console
    // Adds a click event listener to each choice
    
    // When a choice is clicked, it retrieves the user's choice and calls the playgame function}
    choice.addEventListener('click',() =>{
        if(!gameStarted) return; // If the game hasn't started, do nothing
        const userChoice = choice.getAttribute("id"); // Gets the user's choice from the clicked element
        console.log(userChoice); // Logs the user's choice to the console
        playgame(userChoice); // Calls the playgame function with the user's choice
    })
})