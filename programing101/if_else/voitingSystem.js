// Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.


function checkVotingAge(age){
   if(age<18){
    return false
   }
   else{
    return true
   }
}

let votingAge = checkVotingAge(18)

console.log(`are you eligible for voting ${votingAge}`)