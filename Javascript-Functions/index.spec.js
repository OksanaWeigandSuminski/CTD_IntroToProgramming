const { happyBirthday, today, newString, factorial, mod, avg, checkNums, checkStringLength} = require('./index.js')

describe("Testing console log of happyBirthday function", () => {
  test("happyBirthday function", () => {
    console.log = jest.fn();
    happyBirthday("Happy Birthday!");
    expect(console.log).toHaveBeenCalledWith("Happy Birthday!");
  })
})

describe("Testing console log of today function", () => {
  test("today function", () => {
      console.log = jest.fn();
      const date = new Date()
      today(date);
      expect(console.log).toHaveBeenCalledWith(date);
  })
})

describe("Testing return value of newString function", () => {
  test("newString function", () => {
    expect(newString('Hello', ' Goodbye')).toBe('Hello Goodbye');
  })
})

describe("Testing return value of factorial function", () => {
  test("factorial function", () => {
    expect(factorial(5)).toBe(120);
  })
})

describe("Testing return value of mod function", () => {
  test("mod function", () => {
    expect(mod(2,1)).toBe(0);
  })
})

describe("Testing console log of avg function", () => {
  test("avg function", () => {
    expect(avg(1,5)).toBe(3);
  })
})

describe("Testing return value of checkNums function", () => {
  test("checkNums function", () => {
    const small1 = 1;
    const big2 = 5;
    
    expect(checkNums(small1,big2)).toBe(4);
    expect(checkNums(big2,small1)).toBe(4);
    expect(checkNums(1,1)).toBe(0);
  })
})

describe("Testing return value of checkStringLength function", () => {
  test("checkStringLength function", () => {
    const str1 = 'a';
    const str2 = 'abc';

    expect(checkStringLength(str1,str2)).toBe(1);
    expect(checkStringLength(str2,str1)).toBe(3);
    expect(checkStringLength('a','a')).toBe(1);
  })
})