/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) {
    return true;
  }
  for (let i = 1; i <= 10; i++) {
    if (n % i === 0 && i % 2 && i !== 2 && i !== 3 && i !== 5) {
      return false;
    }
  }
  return true;
};

const  n = 6
console.log(isUgly(n));
