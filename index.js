/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  let newArr = [];
  nums.forEach((value, index) => {
    if (newArr.indexOf(value) < 0) {
      newArr.push(value);
    }
  });
  
};

const  nums = [1,2,3,4,5]
maxSum(nums)

