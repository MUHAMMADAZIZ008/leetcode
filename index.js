/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const result = [];
  const result2 = [];
  let pureNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      result.push("_");
      pureNumber++;
    }
    if (nums[i] !== val) {
      result2.push(nums[i]);
    }
  }
  return pureNumber;
};
const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
