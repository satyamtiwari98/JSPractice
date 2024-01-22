function recursiveBinarySearch(arr, target) {
  return binary_search(arr, target, 0, arr.length - 1);
}

function binary_search(arr, target, fElement, lElement) {
  if (fElement > lElement) {
    return -1;
  }

  let midElement = Math.floor((fElement + lElement) / 2);
  if (target === arr[midElement]) {
    return midElement;
  }

  if (target < arr[midElement]) {
    return binary_search(arr, target, lElement, midElement - 1);
  } else {
    return binary_search(arr, target, midElement + 1, lElement);
  }
}

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
