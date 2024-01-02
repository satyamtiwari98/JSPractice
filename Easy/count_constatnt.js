// Count the number of consonants in a given string.

const countConsonants = (str) => {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i);

    if (consonants.indexOf(currentChar) !== -1) {
      // If the current character is a consonant, increment the count
      consonantCount++;
    }
  }

  return consonantCount;
};

// Example usage:
const inputString = "Hello World!";
const consonantCount = countConsonants(inputString);

console.log(`Number of consonants: ${consonantCount}`);
