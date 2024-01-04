// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

// You may assume that each input would have exactly one solution and you may not use the same element twice. You can return the answer in any order.

function twoSum(nums, target) {
  // Your code here
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  // Return an array containing the indices of the two numbers
  return result;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Should print [0, 1], as nums[0] + nums[1] equals 9
