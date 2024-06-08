// Creating a guessing game

const max=prompt("Enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit the game");
        break;
    }
    if(guess == random){
        console.log("You are right",random);
        break;
    }
    else if(guess < random){
        guess=prompt("Your guess was too small...please try again");
    }
    else if(guess > random){
        guess=prompt("Your guess was too large...please try again");
    }
}