function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
while(counter < 10){
  console.log(`The rendom number is ${getRandomNumber(10)}`);
  counter += 1;
}

//Infinite Loops

//The counter starts at 0 and increases each time through the loop.
//Since counter will always be greater than or equal to 0, the condition will ALWAYS be true.
let counter = 0;
while ( counter >= 0 ) {
  console.log(`The counter is: ${counter}`)
  counter++;
}

//Given the code below, what will print to the console?
while (false) {
  console.log('Hello');
}
console.log('Goodbye');
//Prints Goodbye
//The condition for the while loop is false, so the loop never runs and 'Hello' never prints.
//But the second console.log does run because it's outside the loop.

let i = 1;
do {
  console.log( `#${i}` );
  i += 2;
} while ( i <= 15 )
//Prints 1,3,5,7,9,11,13,15

//Given the code below, what will display in the console?
do {
  console.log('Hello');
} while (false);
console.log('Goodbye');
//Prints Hello Goodbye
