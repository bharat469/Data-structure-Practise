// Write a function that returns the number of negative numbers in an array.

let array = [2, -6, 4, 8, 1, -9];

let negativeNumber = [];

function findNeagtiveNumber(arr) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negativeNumber.push(array[i]);
    }
  }
}

findNeagtiveNumber(array);
console.log(negativeNumber.length);
