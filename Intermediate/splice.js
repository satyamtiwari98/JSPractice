const numbers = [1, 2, 3, 4, 5, 67, 8, 34, 97, 6, 4, 3, 5];

// console.log(numbers.splice(1, 3, 2, 2, 2, 2));
let removed = numbers.splice(5, 1, [6, 7]);
console.log(numbers);
console.log(removed);
console.log(typeof removed);
