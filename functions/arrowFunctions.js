/*
     1        2
  let hi = () => {
    console.log('hi');
  }

  1: We need to set the fat arrow function to a variable
  2: We use the 'fat arrow' to signify it's a function

  - arrow function (fat arrow function) introduced in ES6.
      - a more concise way to write function expressions *not declarations
      - arrow functions do NOT get hoisted.
  - 2 types of arrow functions:
      - Concise body
      - Block body
*/

//! Concise Body
let hi = () => console.log("hi");
// concise body arrow functions return by default.
// hi();

//! Block body
let hello = () => {
  console.log("hello");
};
// block body arrow functions must have a return in the body of the function (between the {})

let apples = (x) => console.log(`There are ${x} apples.`);

apples(10);

let bananas = (x) => {
  console.log(`There are ${x} bananas.`);
};

bananas(42);

let favoriteSeries = (seriesName) =>
  seriesName === "Bridgerton" ? "Let's watch it" : "Let's go out";
// call the function
console.log(favoriteSeries("Futurama"));
// output: "Let's watch it"

let greeter = (greeting) => (name) => `${greeting}, ${name}!`;

let myGreet = greeter("hello");
console.log(myGreet("billy"));
