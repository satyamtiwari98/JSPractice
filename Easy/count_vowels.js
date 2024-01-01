// Write a function to count the number of vowels in a given string.

const count_vowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i of str) {
    for (let j of vowels) {
      if (i == j) count += 1;
    }
  }
  return count;
};

const str = "Satyam TiwarI";
console.log(count_vowels(str));
