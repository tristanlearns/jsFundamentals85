//! The sort method sorts the items in an array. The sort order can be either alphabetic or numeric
//! and either ascending or descending.
//? By default, sort() orders the vaules as strings in alphabetical and ascending order.
//* can take in a compare function which indicates if you want to sort by ascending or descending

const shoppingList = ["celery", "limes", "grenadine", "oranges"];

console.log(shoppingList.sort());

const costs = [3, 2, 13, 1000];

console.log(costs.sort((a, b) => a - b));
console.log(costs.sort((a, b) => b - a));
