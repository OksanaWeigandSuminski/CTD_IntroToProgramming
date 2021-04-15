function sayGreeting(name = 'student'){
  return `Good morning, ${name}!`;
}
sayGreeting(); //prints "Good morning, student!"
sayGreeting('Maria'); //prints "Good morning, Maria!"

//Multiple parameters
function sayGreeting(greeting, name = 'student'){
  return `${greeting}, ${name}!`;
}
sayGreeting('Hi there'); //prints "Hi there, student!"
