function binary_search(arr, target) {
  let fElement = 0;
  let lElement = arr.length - 1;
  while (fElement <= lElement) {
    const mid = Math.floor((fElement + lElement) / 2);
    const arrMid = arr[mid];

    if (arr[mid] == target) {
      return mid;
    }

    if (arrMid < target) {
      fElement = mid + 1;
    } else {
      lElement = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 80;

const result = binary_search(arr, target);

if (result == -1) {
  console.log("Element Not Found...");
} else {
  console.log(`Element found at index ${result}`);
}
console.log(result);
