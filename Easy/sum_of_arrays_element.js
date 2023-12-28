// Write a function to calculate the sum of all elements in an array.

const arr = [3, 5, 2, 6, 8, 1, 5, 8, 9, 4];
let sum = 0;

// using for of loop
for (let i of arr) {
  sum += i;
}
console.log("Sum of array element is " + sum);

// using for in loop
let total = 0;
for (let i in arr) {
  total += arr[i];
}
console.log("Sum of array element is " + total);

// using forEach method
let totalSum = 0;
arr.forEach((element) => {
  totalSum += element;
});
console.log("Sum of array Element is " + totalSum);

// using normal for loop
let sumTotal = 0;
for (let i = 0; i < arr.length; i++) {
  sumTotal += arr[i];
}
console.log("Sum of array Element is " + sumTotal);
