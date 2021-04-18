// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

//TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

//DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1. Write a standard function definition that takes 1 parameter of data type number and prints out the string, "Happy Birthday!", to the console the same number of times as the parameter. (Each console message should be in a new line)

function happyBirthday(numTimes) {
  let counter = 0;
  while (counter < numTimes){
    counter ++;
    console.log("Happy Birthday!");
  }
}
happyBirthday(3);

// QUESTION 2. Write a standard function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the sum of those numbers.

// function sum(paramNum) {
//   let num1 = 1;
//   let num2 = 1;
//   let num3 = 1;
//   paramNum = num1 + num2 + num3;
//   return paramNum;
// }
// console.log(sum());

function sum(myNumbers) {
  let total = 0;
  for(let i = 0; i < myNumbers.length; i++){
    total = total + myNumbers[i];
    }
  return total;
}
console.log("sum", sum([4,3,1]));

// QUESTION 3. Write a standard function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the product of those numbers.

// function product(paramNum) {
//   let num1 = 1;
//   let num2 = 2;
//   paramNum = num1 * num2;
//   return paramNum;
// }
// console.log(product());

function product (array) {
    let sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
console.log("product", product([1,2,3]));

// QUESTION 4. Write a function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the number of odd numbers in the array. 

const oddChecker = (arr) => {
  let count = 0;
  // arr = [1,2,3];
  // let odd = arr.filter(n => n%2)
  // console.log(odd);
  // return parseInt(odd);
  for (i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      count++
    }
  }
  return count;
}
console.log("odd", oddChecker([7,2,3]));

// QUESTION 5. Write a function definition that takes 1 parameter. The parameter is an array of numbers and the function should return the number of even numbers in the array. 

const evenChecker = (arr) => {
  let count = 0;
  // arr = [1,2,3];
  // let even = arr.filter(n => n%2) //=== 0
  // console.log(even);
  // return parseInt(even);
for (i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      count++
    }
  }
  return count;
}
console.log("even", evenChecker([7,2,6]));

// QUESTION 6. Write a function definition that takes 1 parameter. The parameter is a string and the function should return the number of vowels in the string. 

const vowelsChecker = (str) => {
  var vowelsCount = 0;
  for (var i = 0; i <= str.length; i++) {
  //if a vowel, add to vowel count
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelsCount ++;
    }
  }
  console.log("vowels", vowelsCount);
  return vowelsCount;
}
vowelsChecker("testing");


// QUESTION 7. Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes no parameters. The function will loop from 1 to 10 and return an array of numbers. While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. The function will return the array of values.

const fizzBuzz = () => {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  console.log(array);
  return array;
}

module.exports = {
  happyBirthday, sum, product, oddChecker, evenChecker, vowelsChecker, fizzBuzz
}