// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1: Write a function that takes one Array parameter and returns true if the parameter is empty, false if not

/**
 * Checks if an array is empty
 * @param {array}
 * @returns {boolean}
 */
function isEmpty(arr) {
  arr = [1,2];
  if (arr !== []){
    return true;
  }else{
    return false;
  }

}
console.log(isEmpty());


// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns the element in the array at the given number index, null if it doesn't exist

/**
 * Finds the element in array at a given index
 * @param {array}
 * @param {number}
 * @returns {(string|number|null)}
 */
function getElementAt(arr1, num) {
  if (num >= arr1.length || num < 0){
    return null;
  }else{
    return arr1[num];
  }
}
console.log(getElementAt(["apple", "pear", "plum"],1));

// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second index, and returns the new Array

/**
 * Inserts zero value at the second index in an array
 * @param {array}
 * @returns {array}
 */

function insertZeroInArray(arr2) {
  arr2 = [1, 2, 3, 4];
  arr2.splice(1,0,0);
  console.log(arr2);
  return arr2;
}
insertZeroInArray();
// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

/**
 * Checks if two arrays are equal
 * @param {array}
 * @param {array}
 * @returns {boolean}
 */
function isEqual(arr1,arr2){
  if (arr1=== arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;
   for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
  console.log(isEqual([1,2,3,4],[1,2,3,4]))


// QUESTION 5: Write a function that takes one Array parameter and returns the sum of all the Array elements
// BONUS: use the `reduce()` method

/**
 * Finds the sum of all elements in an array
 * @param {array}
 * @returns {number}
 */

// var numbers = [1,2,3,4,5];
// t = numbers.reduce(calculateArraySum);
// function calculateArraySum(total, amount) {
//   return total + amount;
// }
// console.log(t);

calculateArraySum = function(arr){
  return arr.reduce(function(a,b){
    return a + b
  }, 0);
}
console.log(calculateArraySum([20, 10, 5, 5]));

// QUESTION 6: Write a function that takes one Array parameter and returns a new Array of all the even numbers
// BONUS: use the `filter()` method

/**
 * Find all even numbers in an array
 * @param {array}
 * @returns {array}
 */
// var num = [1, 3, 6, 8, 11];
// const findEvenNumbers = num.filter(function(number) {
//   return number % 2 === 0;
// });
// console.log(findEvenNumbers);

function findEvenNumbers(num) {
  return num.filter(function(number){
  return number % 2 === 0;
  });
};
console.log(findEvenNumbers([1, 3, 6, 8, 11]));
// QUESTION 7: Write a function that takes one Array parameter and returns a new Array of all the odd numbers
// BONUS: use the `filter()` method

/**
 * Find all odd numbers in an array
 * @param {array}
 * @returns {array}
 */

// var num2 = [1, 3, 6, 8, 11];
// function findOddNumbers(number){
//   return number % 2;
// }
// const a = num2.filter(findOddNumbers);
// console.log(a);

function findOddNumbers(num) {
  return num.filter(function(number){
  return number % 2 !== 0;
  });
};
console.log(findOddNumbers([1, 3, 6, 8, 11]));

// QUESTION 8: Write a function that takes one Array parameter and returns a new Array with the squared values of each of the numbers
// EXAMPLE: The squared value of 4 is 4^2 = 4 * 4 = 16
// BONUS: use `map()` method

/**
 * Squares all the numbers in an array
 * @param {array}
 * @returns {array}
 */

// var numbers = [1, 2, 3, 4, 5];
// function squareNumbers(x) {
//   return x * x;
// }
// var newArray = numbers.map(squareNumbers);
// console.log(newArray);

const squareNumbers = (x) => {
  return x.map(function(numbers){;
  return numbers * numbers;
  });
}
console.log(squareNumbers([1, 2, 3, 4, 5]));


// DO NOT EDIT BELOW THIS LINE

module.exports = {
  isEmpty,
  getElementAt,
  insertZeroInArray,
  isEqual,
  calculateArraySum,
  findEvenNumbers,
  findOddNumbers,
  squareNumbers,
}
