// Write a function to reverse a given string.

// 1st approach
const str = "Satyam Tiwari";

let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);

// 2nd approach
function reverseString(str) {
  // Split the string into an array of characters, reverse it, and join back into a string
  return str.split("").reverse().join("");
}

const originalString = "Javascript";
const reversedString = reverseString(originalString);
console.log(reversedString);
