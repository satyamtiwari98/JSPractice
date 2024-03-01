const arr = [5, 23, 6, 23, 7, 45, 23, 342, 45, 34];

// const sortedArray = arr.sort((a, b) => a - b); // assending
// const sortedArray = arr.sort((a, b) => b - a); // desending
let temp = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
// console.log(sortedArray);
