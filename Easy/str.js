// const str = "Satyam";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   console.log(str.indexOf(str[i]));
// }

function count_vowel(str) {
  const vowels = "aeiouAEIOU";
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    const currentStr = str.charAt(i);
    if (vowels.indexOf(currentStr) !== -1) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

console.log(count_vowel("SatyamI"));
