let arr = [5, 0, 7, 100, 8, 17, 1];

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let response = findLargestNumber(arr);
console.log(response);
