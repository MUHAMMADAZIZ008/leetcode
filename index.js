/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let binaryToNumber = 0;

  if (a === "0" && b === "0") {
    return "0";
  }

  for (let i = 0; i < a.length; i++) {
    if (a[a.length - 1 - i] === "1") {
      binaryToNumber += 2 ** i;
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (b[b.length - 1 - i] === "1") {
      binaryToNumber += 2 ** i;
    }
  }

  let digitalToBinary = "";
  let result = "";
  while (binaryToNumber !== 0) {
    if (binaryToNumber === 1 || binaryToNumber === 0) {
      digitalToBinary += binaryToNumber;
      for (let j = digitalToBinary.length - 1; j >= 0; j--) {
        result += digitalToBinary[j];
      }
      return result;
    }
    digitalToBinary += binaryToNumber % 2;
    binaryToNumber = Math.floor(binaryToNumber / 2);
  }
};

// const a = "11";
// const b = "1";

(a = "0"), (b = "0");
// 2+6 = 8, 1+2+6=9
console.log(addBinary(a, b));
