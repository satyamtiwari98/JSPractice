// Check if a given number is an Armstrong number.

const isArmstrongNumber = (number) => {
  // Convert the number to a string to determine the number of digits
  const numberString = number.toString();
  const numberOfDigits = numberString.length;

  // Calculate the sum of each digit raised to the power of the number of digits
  let sum = 0;
  for (let i = 0; i < numberOfDigits; i++) {
    const digit = parseInt(numberString[i]);
    sum += Math.pow(digit, numberOfDigits);
  }

  // Check if the sum is equal to the original number
  return sum === number;
};

// Example usage:
const testNumber = 153;
const isArmstrong = isArmstrongNumber(testNumber);

console.log(`${testNumber} is Armstrong: ${isArmstrong}`);
