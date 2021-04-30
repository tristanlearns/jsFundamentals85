/*
    - First Pass: Stores our variables declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there"), but does not assign them their values.
      - Anything that needs to be hoisted, is hoisted

    - Second Pass: Assigns the values to our variables and executes any hoisted source code.
*/

// console.log(myName);
let myName = "Eric";
// console.log(randomVariable);

b();

function b() {
  console.log("I have been hoisted.");
}

let count = 0;
for (; count < 9; ++count) {
  console.log(count);
}

let catArray = ["tabby", "british", "burm", "shorthair"];

for (let cat in catArray) {
  console.log(cat);
}
