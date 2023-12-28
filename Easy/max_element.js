// Write a function to find the maximum element in an array.

const arr = [2, 6, 7, 87, 34, 55, 67, 43, 78, 33, 4, 0];

let max = 0;

for (let element of arr) {
  if (element > max) {
    max = element;
  } else {
    continue;
  }
}

console.log("Max element in " + arr + " is " + max);
