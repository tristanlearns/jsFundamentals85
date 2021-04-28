// shortcut for writing if/else & else/if statements

let num = "Waldo";

if (num > 0) {
  console.log("Yes");
} else {
  console.log("No");
}

num > 7 ? console.log("Yes it is") : console.log("It is not");

num > 10
  ? console.log("It is larger than 10")
  : num < 5
  ? console.log("It is smaller than 5")
  : num < 10
  ? console.log("It is less than 10")
  : console.log(`${num} is NaN`);

// num + " is NaN"
