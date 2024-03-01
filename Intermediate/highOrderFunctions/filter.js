let nums = [
  2, 5, 3, 1, 4, 8, 96, 43, 463, 2425, 57, 32, 732, 36, 235, 21, 36, 12326, 23,
];

let evenNumbers = nums.filter((num) => num % 2 == 0);

// console.log(evenNumbers);

let oddNumbers = nums.filter((num) => num % 2 !== 0);

// console.log(oddNumbers);

let newArray = [...evenNumbers, ...oddNumbers];

// console.log(newArray);

let numberFromMap = nums.map((num) => {
  if (num % 2 === 0) return num;
});
// map cannot be used
console.log(numberFromMap);
// console.log(nums);
