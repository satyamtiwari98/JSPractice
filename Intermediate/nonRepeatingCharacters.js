let str = "abcdeabcdeabcdefghegfd";

let arr = str.split("");

// arr = [...new Set(arr)];

// let newStr = arr.join("");

let newStr = arr.filter((ele, index) => arr.indexOf(ele) === index).join("");

console.log(newStr);
