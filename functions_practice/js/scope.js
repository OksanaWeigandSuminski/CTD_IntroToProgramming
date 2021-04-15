//global scope
let person = 'Lee';
function greeting() {
  //function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}
function greeting2() {
  //function scope
  let person = 'Robert';
  alert(`Good morning, ${person}!`);
}
greeting();
alert(`Hi, ${person}!`);
greeting2();
