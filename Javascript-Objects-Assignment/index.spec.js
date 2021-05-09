const {
  myBunny,
  bunnyName,
  isAnimalSpecies,
  sortArray,
  addTypeProperty,
  addNewObject,
} = require("./index.js");

describe("Questions 1,2,3: myBunny object", () => {
  test("Check if object has property", () => {
    expect(myBunny).toHaveProperty('name');
  })

  test("Check if variable is bunnyName", () => {
    expect(bunnyName).toBe(myBunny.name);
  })

  test("Check speak method myBunny", () => {
    expect(myBunny.speak()).toBe(`My name is ${myBunny.name}. ${myBunny.message}`);
  })

  test("Check animal species", () => {
    expect(isAnimalSpecies(myBunny, 'rabbit')).toBe(true);
    expect(isAnimalSpecies(myBunny, 'dog')).toBe(false);
  })
})

describe("Questions 4,5,6: library object", () => {
  test('sort the library object alphabetically based on title property', () => {
    let input = [
      {
        title: 'The Road Ahead',
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
    ]

    let output = [
      {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,

      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,

      },
      {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,

      }
    ]

    expect(sortArray(input)).toEqual(output)
  })

  test('Check if type exists', () => {
    let input = [
      {
        title: 'The Road Ahead',
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
    ]

    let output = [
      {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
        type: 'book',
      },
      {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
        type: 'book',
      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
        type: 'book',
      }
    ]

    expect(addTypeProperty(input)).toEqual(output)
  })

  test('add new object to library array', () => {
    let inputArr = [
      {
        title: 'The Road Ahead',
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
    ]

    let inputObj = {
      title: "Alchemist",
      author: "Paulo Coelho",
      libraryID: 4266,
    }

    let outputArr = [
      {
        title: 'The Road Ahead',
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

      },
      {
        title: "Alchemist",
        author: "Paulo Coelho",
        libraryID: 4266,
      }
    ]

    expect(addNewObject(inputArr, inputObj)).toEqual(outputArr)
    expect(addNewObject(inputArr, inputObj)).toHaveLength(4)
  })
})
