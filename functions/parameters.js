//            1
function hi(userName) {
  console.log(`Hi, ${userName}.`);
  //                  2
}
//   3
hi("Summer");

/*
  1: The parameter(s) that the function is accepting or holding.
  2: Using string interpolation, we can refer to the parameter
  3: This is where we define what the parameter's value will be.
*/
hi("Adam");

let myUser = "Brittany";
hi(myUser);

function wholeName(firstName, lastName) {
  console.log(firstName, lastName);
}

wholeName("Jim", "Halpert");
