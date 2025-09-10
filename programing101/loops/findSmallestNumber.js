// Write a function that returns the smallest number in an array.

const arr = [8, -1, 2, 3, 4, 5, 6, -7];
function smallestNumber(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

smallestNumber(arr);
