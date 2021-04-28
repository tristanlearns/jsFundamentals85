/* ************
! For Of Loops
  -iterate over the values of an iterable object(strings & arrays included)

************ */

// This does not work because the properties are not 'iterable'
let student = {
  name: "Jake from State Farm",
  awesome: true,
  degree: "insurance sales",
  age: 98,
};

// for (item of student) {
//   console.log(item);
// }

let soupArray = ["potato", "broccoli", "carrot", "chicken noodle", "chili"];

for (soup of soupArray) {
  console.log(soup);
}
