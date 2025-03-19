/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversedNumber = "";
  let isMinus = false;
  let num = String(x);
  if (x < 0) {
    isMinus = true;
  }

  for (let i = num.length - 1; i >= 0; i--) {
    if (isMinus) {
      if (i === num.length - 1) {
        reversedNumber += "-";
        reversedNumber += num[i];
      } else if (num[i] !== "-") {
        reversedNumber += num[i];
      }
    }
    // if (!isMinus && num[i] !== "0") {
    //   reversedNumber += num[i];
    // }
  }

  if (!isMinus) {
    let num = String(x);
    let lastPositive = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] > 0) {
        lastPositive = i;
      }
    }    
    let num2 = num.split(num[lastPositive]);
    let result = "";
    console.log(num2);
    
  }

  if (isMinus) {
    return reversedNumber;
  }
};
// const x = 123
// const x = -123;
// const x = 120;
const x = 1901000;

console.log(reverse(x));
