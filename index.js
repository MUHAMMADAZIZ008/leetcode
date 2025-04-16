/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] % 2 && arr[i - 1] % 2 && arr[i + 1] % 2) {
      return true
    }
  }
  return false;
};
const arr = [2,6,4,1]
console.log(threeConsecutiveOdds(arr));
