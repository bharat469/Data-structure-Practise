let arr = [12, 33, 55, 66, 77, 88, 99];
let searchedNumber = 77;

function searchOperator(arr, searchedNumber) {
  for (let i = 0; i < arr.length; i++) {
    if (searchedNumber == arr[i]) {
      return i;
    }
  }
  return -1;
}
let respnse = searchOperator(arr, searchedNumber);
console.log(respnse);
