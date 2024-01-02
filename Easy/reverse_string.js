// Reverse the order of words in a sentence.

// 1st approach
const Reverse = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  return newStr;
};

const str = "Satyam Tiwari";
const reverseString = Reverse(str);

console.log(reverseString);

// 2nd approach

function reverseWords(sentence) {
  // Split the sentence into an array of words
  const wordsArray = sentence.split(" ");

  // Reverse the array of words
  const reversedArray = wordsArray.reverse();

  // Join the reversed array back into a sentence
  const reversedSentence = reversedArray.join(" ");

  return reversedSentence;
}

// Example usage:
const originalSentence = "Hello World! This is a sample sentence.";
const reversedSentence = reverseWords(originalSentence);

console.log(reversedSentence);
