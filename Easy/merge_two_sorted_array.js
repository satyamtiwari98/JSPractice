// Write a function that takes two sorted arrays, arr1 and arr2, and merges them into a new sorted array.
//  The function should not modify the original arrays.

function mergeSortedArrays(arr1, arr2) {
  // Your code here
  let res = [];
  res = [...arr1, ...arr2];

  res.sort((a, b) => {
    return a - b;
  });

  // Return a new array containing all elements from arr1 and arr2 in sorted order
  return res;
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // Should print [1, 2, 3, 4, 5, 6]
