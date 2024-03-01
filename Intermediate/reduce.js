const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur);
  return acc + cur;
}, 0);

console.log(sum);
