//! Create a function that takes in strings
//! In the function, translate a phrase into pig latin and print it to the console.
//! If able to do so, return the value into another variable and print that variable.

//! If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay).

//! If the word begins with a vowel, simply add an 'ay' at the end of the word.

const vowels = ["a", "e", "i", "o", "u"];
const translate = [];

function pigLatin(string) {
  let word = string.split(" ");
  for (let i = 0; i < word.length; i++) {
    letters = word[i].split("");
    console.log(letters);
  }
}

pigLatin("apple");
