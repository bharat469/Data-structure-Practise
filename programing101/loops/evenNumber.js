// Write a program to print all even numbers from an array.

let arr = [10, 3, 5, 2, 7, 6, 9];
let evenArray=[]

function checkEvenNumberFromArray(array){
  for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
      evenArray.push(array[i])
    }

  }
}
checkEvenNumberFromArray(arr);

console.log(evenArray.toString())