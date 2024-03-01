let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 44, 1, 2, 4, 5, 6, 7, 4, 8, 9];

// arr = [...new Set(arr)]; // easy method
let newArr = arr.filter((a, index) => arr.indexOf(a) === index);
console.log(newArr);
