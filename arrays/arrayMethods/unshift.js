//! the unshift method adds and element to the beginning of an array.

const array = [10, "student", "cake", -78, "Zebra"];

console.log("before: ", array);

const addedItem = array.unshift("added item");

console.log(addedItem); // Why does this return 6?
console.log("after: ", array);

//? Another example

const nums = [1, 2, 3, 4, 5];
console.log(nums);

nums.unshift(0);
console.log(nums);
