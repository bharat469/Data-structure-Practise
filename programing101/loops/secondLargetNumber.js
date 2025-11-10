let arr = [95, 90, 74, 100, 8, 17, 91];

function secondLargest(arr) {
  let largetNumber = -Infinity;
  let secondLarge = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largetNumber) {
      secondLarge = largetNumber;
      largetNumber = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

let number = secondLargest(arr);
