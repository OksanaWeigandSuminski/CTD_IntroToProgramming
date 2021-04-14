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
