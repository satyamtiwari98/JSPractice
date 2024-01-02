// Remove duplicate characters from a string.

const removeDuplicates = (str) => {
  let uniqueCharacters = "";

  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i);

    // Include the character in the result only if it's not already present
    if (uniqueCharacters.indexOf(currentChar) === -1) {
      uniqueCharacters += currentChar;
    }
  }

  return uniqueCharacters;
};

// Example usage:
const inputString = "programming";
const stringWithoutDuplicates = removeDuplicates(inputString);

console.log(`String without duplicates: ${stringWithoutDuplicates}`);
