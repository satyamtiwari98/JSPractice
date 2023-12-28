// Write a function to check if a given number is prime

const check_prime_number = (number) => {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      count += 1;
    }
  }
  if (count > 1) {
    return number + " is not a prime number";
  }
  return number + " is a prime number";
};

const number = 139;
console.log(check_prime_number(number));
