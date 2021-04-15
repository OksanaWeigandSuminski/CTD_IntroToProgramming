function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
do {
  console.log(`The rendom number is ${getRandomNumber(10)}`);
  counter ++; //increment operator
}while (counter < 10);

//You don't always need to use a counter or specify an exact number of times that a loop must run.
//All you need is a condition that evaluates to false at some point so that the loop can end.

//The code in script.js opens a prompt dialog that asks for a password and assigns it to the variable secret.
//It also displays an alert dialog. Currently, no code checks the password.

//Add a do...while loop that keeps displaying the prompt dialog until the user types 'sesame'.

// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
let secret;
do{
secret = prompt("What is the secret password?");
}while (secret !== "sesame");
// This should run after the loop is done executing
alert("You know the secret password. Welcome!");
