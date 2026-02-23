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