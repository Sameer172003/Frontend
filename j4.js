const favMovie="Phir Hera Pheri";
let guess=prompt("Enter your favourite movie");

while((favMovie != guess) && (guess != "quit")){
    guess=prompt("Wrong guess..Please try again");
}
if(guess == favMovie){
    console.log("Congratulation !!");
}
else{
    console.log("You quit");
}