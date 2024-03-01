// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 54, 34, 5, 9, 67, 5];
let arr = [1, 2, 3, 4, 5, 6];

// let sum = arr.reduce((ele, index) => (ele + ele));
// let sum = 0;
// for (let n of arr) {
//   sum += n;
// }

const sum = (num) => {
  if (num == 0) {
    return 0;
  }
  return num + sum(num - 1);
};
let res = sum(4);
console.log(res);
