// Write a function to check if a given string is a palindrome.

// 1st approach
const check_palindrome = (num) => {
  let swapNumber = 0;
  let num1 = num;
  let rem = 0;
  while (num1 > 0) {
    rem = num1 % 10;
    num1 = Math.floor(num1 / 10);
    swapNumber = swapNumber * 10 + rem;
  }
  if (swapNumber == num) {
    return num + " is a palindrome";
  }
  return num + " is not a palindrome";
};

const check = check_palindrome(1234554321);
console.log(check);

//  2nd approach
function isPalindromeNumber(num) {
  // Convert the number to a string
  const numStr = num.toString();

  // Reverse the string
  const reversedStr = numStr.split("").reverse().join("");

  // Compare the original and reversed strings
  return numStr === reversedStr;
}

// Example usage:
const number = 1221;
if (isPalindromeNumber(number)) {
  console.log(`${number} is a palindrome.`);
} else {
  console.log(`${number} is not a palindrome.`);
}
