// you have to make a function that accpets two values one array and another target value

// three test cases

// let arr = [1, 3, 4, 5, 6];
// target = 10;
// let arr = [1, 3, 4];
// target = 5;
// let arr = [1, 3, 5, 6];
// target = 4;
// let arr = [1, 3, 1, 3];
// target = 4;

// function addtionOfArray(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// const number = addtionOfArray(arr, target);

// console.log(number);

// finding repeating number

function repeatingNumber(arr) {
  let arrNew = [];
  let duplicate = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arrNew.includes(arr[i])) {
      duplicate.push(arr[i]);
    } else {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
}
const number = repeatingNumber(arr);

console.log(number, "dnfgdh");
