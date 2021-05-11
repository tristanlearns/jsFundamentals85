/* ***************
    ARRAY DESTURCTURING
      -allows us to unpack values from arrays or properties from objects
      -similar syntax as array literals BUT it's on the left side of the assignment operator
          - this defines what values to unpack
      - great for pulling info out of an array/object and assigning that data to its own variable.

****************** */

//* Syntax
const boardGames = ["Catan", "Pandemic", "Roll Player"];

// const gameOne = boardGame[0];
// const gameTwo = boardGame[0];
// const gameThree = boardGame[0];

const [gameOne, gameTwo, gameThree] = boardGames;

console.log(gameOne);
console.log(gameTwo);
console.log(gameThree);
