//! the splice method changes the contents of an array
//! by removing or replacing elements and/or adding new elements in its place

const months = ["Jan", "March", "April"];

//        1
// months.splice(1, 0, "Feb");
// console.log(months);

// //        2
// months.splice(4, 1, "May");
// console.log(months);

//3
months.splice(5, 0, "june");
console.log(months);

/*

! 1 => The 3 parameters in the splice method are (in order)
  - The index of the array that will be affected
  - The number of elements that will be removed (0 if none specified)
  - The elements to add to the array, starting with the index specified in the first paramter.

! 2 => This is saying that we will target index 4, remove one element ("June")
! and then replace it with "May".

! 3 => Showing that we can add multiple elements to the array

*/
