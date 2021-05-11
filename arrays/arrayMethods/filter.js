//! the filter method allows us to go through an array and return or filter out paramaters that meet or don't meet a specific condition.

const foods = [
  { name: "bread", price: 100 },
  { name: "beef", price: 200 },
  { name: "mint", price: 10 },
  { name: "shrimp", price: 5 },
  { name: "ketchup", price: 500 },
  { name: "bell pepper", price: 25 },
];

const filteredPrice = foods.filter((foods) => {
  return foods.price <= 100;
});

console.log(filteredPrice);

const filterNames = foods.filter((foods) => {
  return foods.name.startsWith("b");
});

console.log(filterNames);
