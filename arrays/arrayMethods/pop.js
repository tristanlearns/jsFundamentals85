//! The .pop method is the exact opposite of the .shift method
//! the .pop methoed removes the last element of the array.
//! this method will also change the length of the array.

const array = [10, "student", "cake", -78, "Zebra"];

console.log("Before: ", array);

const lastItem = array.pop();

console.log("After: ", array);

console.log("Item popped: ", lastItem);
