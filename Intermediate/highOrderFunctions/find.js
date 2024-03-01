const age = [78, 34, 2, 3, 7, 2, 7, 9, 0, 54, 34, 68, 0, 35];

// find whose age is zero
let num = age.find((ag, index) => {
  if (ag === 0) return index;
});

console.log(age);
console.log(num);
