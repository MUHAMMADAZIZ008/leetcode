/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let maxValue = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if(nums[i] < nums[j] < nums[k]){
          const value = (nums[i] - nums[j]) * nums[k]
          if(value > 0 && value > maxValue){
            maxValue = value
          }
        }
      }
    }
  }
  return maxValue
};
// const nums = [12,6,1,2,7]
// const nums = [1,10,3,4,19]
// const  nums = [1,2,3]
console.log(maximumTripletValue(nums));
