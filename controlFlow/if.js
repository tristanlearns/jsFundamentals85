/* ***************
! Falsy Values
***************** */

/*
  -6 different values
    - False
    - 0
    - Empty strings (" ", ' ', ` `)
    - null
    - undefined
    - NaN (Not a Number)

*/

let isOn = true;

if (isOn == true) {
  console.log("The light is on.");
}

if (isOn) {
  console.log("The light is on, yay!");
}

isOn = false;

if (isOn == false) {
  console.log("The light is off!");
}
