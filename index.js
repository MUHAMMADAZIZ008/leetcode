// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   const newArr = { num: [], symbol: [] };

//   nums.forEach((value) => {
//     if (newArr.num.indexOf(value) < 0) {
//       newArr.num.push(value);
//     } else {
//       newArr.symbol.push("_");
//     }

//   });
//   return [...newArr.num, ...newArr.symbol]
// };

// const nums = [1, 1, 2];
// // const nums = [0,0,1,1,1,2,2,3,3,4]
// console.log(removeDuplicates(nums));

function fibonacciNumbers(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(fibonacciNumbers(4));
