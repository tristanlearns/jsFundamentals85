//! more confusing than the others but still useful

const foods = [
  { name: "bread", price: 100 },
  { name: "beef", price: 200 },
  { name: "mint", price: 10 },
  { name: "shrimp", price: 5 },
  { name: "ketchup", price: 500 },
  { name: "bell pepper", price: 25 },
];
// 1
const total = foods.reduce((currentTotal, item) => {
  // 2
  return item.price + currentTotal;
  // 3
}, 0);

console.log(total);

//! 1 => this method takes in two parameters
//! the first being the current sum of the numbers at each iteration
//! The second will be what item we are iterating over( can be named anything)

// 2 We look at the price of the food item and we add it to the current total
// then we repeat it over and over again for each item in the array

//! 3 the 0 at the end specifies what value we start at.
