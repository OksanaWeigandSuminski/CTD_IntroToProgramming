const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
};
console.log(getRandomNumber(10));

//An anonymous function is a function without a name after the function keyword
const multiply = function( a, b ) {
  return a * b;
};
// Given the code below, what appears in the alert dialogue when the program runs?
let message = "Welcome!";
function setMessage() {
  message = "Goodbye!";
}
setMessage();
alert(message);
//answer is "Goodbye!"
// Because a let, const, or var keyword is not used to declare a message variable inside the function,
//the function overwrites the value in the global variable message
