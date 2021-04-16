function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

//instead of 'counter' use 'i' in the future for 'for loops'
for ( let counter = 0; counter < 10; counter ++){
  console.log(`The rendom number is ${getRandomNumber(10)}`);
}

//Create a for loop that logs the numbers 5 to 100 to the console.
//Use the console.log() method to log a value to the console.

for (i = 5; i <= 100; i ++){
  console.log(i);
}

//The for loop in script.js runs as many times as the length value of the string
//assigned to the message variable. It logs the current value of i to the console,
//and the rest of the program continues when the loop completes.

//Add the statement that immediately terminates the for loop if the value of i is equal to message / 2 (half the length value).
let message = "supercalifragilisticexpialidocious";
message = message.length;

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
    break; //added break to complete the assignment
  }
  console.log(`Logging the number ${i}`);
}

console.log('The program continues...');


//INCLUDES
// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
