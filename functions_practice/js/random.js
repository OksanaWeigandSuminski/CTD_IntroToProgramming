function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
 return randomNumber;
}

alert (getRandomNumber());
console.log(getRandomNumber());
const dieRoll = getRandomNumber();

//Finally, call the getYear function.
//Store the returned value of the function in a new variable named yearToday.
function getYear(){
  const year = new Date().getFullYear();
  return year;
}
const yearToday = getYear();

//Parameters and Arguments
function getRandomNumber(upper) {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
 return randomNumber;
}
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(1000));
console.log(getRandomNumber(20));

// Challenge Task 1 of 2
// Create a function named max that accepts two numbers as arguments (name the parameters whatever you would like). The function should return the larger of the two numbers.

// HINT: You'll need to use a conditional statement to test which of the two parameters is the largest.
//Finally, call the max function with two number arguments. Display the result of the function in the browser's JavaScript console.
function max (num1, num2){
  if (num1 > num2){
  return num1;
  }else{
  return num2;
  }
}
console.log(max(3, 15));

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function getRandomNumber(lower, upper){
  if (isNaN(lower) || isNaN(upper)){
  throw Error('Both arguments must be numbers!');
  }
  const RandomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return RandomNumber;
}
// Call the function and pass it different values
console.log(getRandomNumber(4, 12));
console.log(`${getRandomNumber(10, 100)} is a random number between 10 and 100`);
console.log(getRandomNumber(300, 'four hundred'));
