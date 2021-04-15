const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
getRandomNumber(12);

//Arrow Functions with One Parameter
//If your arrow function accepts a single argument, like the square function below, you can omit the parentheses:
const square = x => {
  return x * x;
}
square(10); // 100

//Arrow Functions with Multiple Parameters
//You need to include the parentheses when working with multiple (or no) parameters:
const getArea = (width, length, unit) => {
  const area = width * length;
  return `${area} ${unit}`;
}
getArea(10, 20, 'sq ft');  // 200 sq ft

//Arrow Functions as One-line Statements by omitting the return keyword and placing everything on one line:
const square = x => { x * x };
//When you omit the return keyword in a single-line function, the value is returned automatically (or implicitly).
//This is called an implicit return.

//In fact, when using an implicit return, you don't even need the curly braces (they are optional).
//You can reduce the arrow syntax further by writing the function like this:
const square = x => x * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//Single-line Functions with No Parameters
//Finally, a single-line arrow function with no parameters requires parentheses before the arrow (=>) token,
//otherwise JavaScript produces a syntax error.
const name = 'Jesse';
const greeting = () => alert(`Greetings, ${name}!`);
