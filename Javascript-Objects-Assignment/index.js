// You need to fork this repl.it and then will turn in the link in your browser as your homework assignment once you are done answering the following questions.

// TESTING you should be able to test your answers by clicking into Shell on the right and typing 'npm test'.

// DEBUGGING type console.log('any string here', varName) to console log values to see your answers before you run test.


// QUESTION 1: Add a property called "name" to the "myBunny" object below and assign it some value (e.g. "Thumper")

const myBunny = {
  species: 'rabbit',
  message: "I'm a bunny, hear me roar!",
  name: 'Thumper'
}

// Next, assign the "name" property from "myBunny" object to the "bunnyName" variable below

let bunnyName = myBunny.name;


// QUESTION 2: Write a method on the "myBunny" object called "speak" that takes no parameters and returns the name and message property values

// EXAMPLE: "My name is Thumper. I'm a bunny, hear me roar!"

/**
 * Method that returns the object's name and message properties
 * @returns {string}
 */
myBunny.speak = function() {
  return `My name is ${myBunny.name}. ${myBunny.message}`
}


// QUESTION 3: Write a function called "isAnimalSpecies" that takes one Object parameter ("animal") and one String parameter ("species") and returns true if the Object's species property is equal to the String parameter, false if not

/**
 * Checks if animal object matches name of species
 * @param {object} animal
 * @param {string} species
 * @returns {boolean}
 */

const isAnimalSpecies = (animal, species) => {
  if (animal.species === species){
    return true;
  }else{
    return false;
  }
}
isAnimalSpecies(myBunny, 'rabbit');

// DO NOT EDIT THIS VARIABLE
// Pass this Array as an argument when invoking the functions below
const library = [
  {
    title:  'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  }
];
//console.log(library, library.libraryID);
// QUESTION 4: Write a function called "sortArray" that takes one Array parameter and returns a new Array that is sorted by "libraryID" in ascending order (low to high)

/**
 * Sorts an array of objects in ascending order by libraryID
 * @param {array}
 * @returns {array}
 */

const sortArray = (byID) => {
return byID.sort(function(a,b) {
    return a.libraryID - b.libraryID;
});
console.log(byID);
}
sortArray(library);

// QUESTION 5: Write a function called "addTypeProperty" that takes one Array parameter and returns a new Array where each Object has a new property called "type" with value "book"
// BONUS: use `map()` method

/**
 * Adds a type property to each object in array
 * @param {array}
 * @returns {array}
 */

// const addTypeProperty = (arr) => {
// return arr.map((key) => ({...key, type: 'book'}));
// };
// console.log(addTypeProperty(library));

const addTypeProperty = (arr) => {
return arr.map(function(key){
  return ({...key, type: 'book'})
});
};
console.log(addTypeProperty(library));

// QUESTION 6: Write a function called "addNewObject" that takes one Array parameter and one Object parameter and returns a new Array with the new Object inserted at the end

// HINT: The new object should have the following properties: "title", "author", and "libraryID"

/**
 * Adds an object to a given array
 * @param {array}
 * @param {object}
 * @returns {array}
 */
// let obj = {};
// const addNewObject = (arr, obj) => {
// return library.push({title: 'Dune', author: 'Frank Herbert', libraryID: 3131})
// }
// console.log(addNewObject(library, obj))

const addNewObject = (arr, obj) => {
return [...arr, obj]
}
console.log(addNewObject(library, {title: 'Dune', author: 'Frank Herbert', libraryID: 3131}));

// DO NOT EDIT BELOW THIS LINE

module.exports = {
  myBunny,
  bunnyName,
  isAnimalSpecies,
  sortArray,
  library,
  addTypeProperty,
  addNewObject,
}
