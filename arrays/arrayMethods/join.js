//! the join method will convert the elements of an array into a string
//! can accept an option parameter, "Separator", which indicates how the elements will be separated.
//! defaults to a coma

const greetings = ["hi", "hello", "welcome", "howdy"];

console.log(greetings.join());

console.log(greetings.join(", "));
