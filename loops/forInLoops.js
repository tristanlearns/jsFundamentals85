/* ***********
! For In Loops
  - Great for integrating over values in an object
  - Properties in objects are what's called enumerable
  - Enumberable means 'countable'
*********** */

let student = {
  name: "Jake from State Farm",
  awesome: true,
  degree: "insurance sales",
  age: 98,
};

for (potato in student) {
  console.log(potato);
  console.log(student[potato]);
}
