// Create a function to calculate the factorial of a given number.

const num = 12;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}

console.log("Factorial of " + num + " is " + fact);
