const original = { a: 1, b: 2, c: { d: 2, e: 4 } };

// Shallow copy using Object.assign()
const shallowCopy = Object.assign({}, original);
shallowCopy.b = 23;
shallowCopy.c.d = 99;

console.log(shallowCopy);
console.log(original);

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrayCopy = [...newArray];

newArrayCopy.push("Satyam");
console.log(newArray);
console.log(newArrayCopy);
