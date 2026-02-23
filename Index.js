// Guess the Number
/* Object - Player 
    Attributes
        -> Number to guess
        -> Attemps
        -> Status
*/
/* Functions 
    Traditional
        -> Evaluate Number
        -> Repeat Attemps

    Arrow
        -> Generate Random Number
        -> Show Information
*/

// Object - Player
const Player = {
    NumberToGuess: 0,
    Attempts: 0,
    Status: "Playing"
};

// Arrow Function --> Generate Random Number
const GenerateRandomNumber = () => Math.floor(Math.random() * 10) + 1; // Number between 0 - 10
    // Math.floor --> Removes the decimals

// Arrow Function --> Show Information
const ShowInfo = (Message) => console.log(Message);

// Traditional Function --> Evaluate Number
function EvaluateNumber(UserGuess) {
    Player.Attempts++; // Attemps Auto-Increment 

    // Conditional if they are the same
    if (UserGuess == Player.NumberToGuess) {
        Player.Status = "Won";
        ShowInfo(`          Attempt ${Player.Attempts}: ${UserGuess} = ${Player.NumberToGuess} ---> True`);
        ShowInfo(" -----------------------------------------------");
        ShowInfo(`|     YOU GUESSED THE NUMBER ${UserGuess} IN ${Player.Attempts} ATTEMPS     |`);
        ShowInfo(" -----------------------------------------------");
        return true;
    } 

    // Conditional if they are different
    if (UserGuess != Player.NumberToGuess) {
        Player.Status = "You lose";
        ShowInfo(`          Attempt ${Player.Attempts}: ${UserGuess} = ${Player.NumberToGuess} ---> False`);
    }
    return false;
}

// Guess the Number
function GuessTheNumber() {
    Player.NumberToGuess = GenerateRandomNumber();
    Player.Attempts = 0;
    Player.Status = "Playing";
    ShowInfo(" -----------------------------------------------");
    ShowInfo("|       GUESS THE NUMBER BETWEEN 1 AND 10       |");
    ShowInfo(" -----------------------------------------------");

    // Array of numbers
    const Guesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Cycle to tour the Array 
    for (const Guess of Guesses) {
        if (EvaluateNumber(Guess)) break;
    }
}

GuessTheNumber();