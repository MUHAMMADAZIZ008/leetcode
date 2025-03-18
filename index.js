/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
  const nums2 = nums.sort((a, b) => a - b);
  const result = [];
  let bobStep = 1;
  for (let i = 0; i < nums2.length; i += 2) {

    if (bobStep < nums2.length) {
      result.push(nums2[bobStep]);
      result.push(nums2[i]);
      bobStep += 2;
    }
  }
  return result;
};

const nums = [5, 4, 2, 3];
console.log(numberGame(nums));
