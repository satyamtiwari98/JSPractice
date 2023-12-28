// Write a function to remove duplicate elements from an array.

// 1st approach
const remove_duplicates = (arr) => {
  // Use a Set to store unique elements
  const uniqueSet = new Set(arr);

  // Convert the Set back to an array
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
};

const num = [1, 2, 3, 4, 5, 1, 2, 3, 5, 7, 4, 8, 9, 3, 2, 6];
const newNum = remove_duplicates(num);
console.log(newNum);

// 2nd approach

const remove = (num) => {
  return num.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(remove(num));
