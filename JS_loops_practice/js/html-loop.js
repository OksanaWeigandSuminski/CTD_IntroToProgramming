//numbers from 1 to 100 in white circles with for loop
// const main = document.querySelector('main');
// let html = '';
//
// for ( let i = 1; i <= 100; i ++){
//   html += `<div>${i}</div>`;
// }
// main.innerHTML = html;

//random colors with for loop
let html = '';
let red;
let green;
let blue;
let randomRGB;
//or refector duplicated code with
const getRandomColor = () => Math.floor(Math.random() * 256);

for (let i = 1; i<=10; i++){
  red = getRandomColor();
  green = getRandomColor();
  blue = getRandomColor();
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
