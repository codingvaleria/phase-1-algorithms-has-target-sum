function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] === complement) return true;
    }
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here

  0(n * n)
*/


/* 
  Add your pseudocode here

  iterate over the array of numbers identify X value that adds ups to the target. 
check if X is the complement if so return true else false, also if its end of iteration return false.

*/


/*
  Add written explanation of your solution here
for an array iterate through each element in the length of array
find the complement by confirming if the complement and array number add up to the target
confirm if there is also a number equal to the complement within the array.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
