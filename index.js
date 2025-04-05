/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let maxLength = 0;
  const valuesCount = {};
  for (let i = 0; i < s.length - 1; i++) {

    if (!valuesCount[s[i]]) {
      
      valuesCount[s[i]] = [1, i];
      if (valuesCount[s[i]][0] >= maxLength) {
        console.log(valuesCount[s[i]][0]);

        maxLength = valuesCount[s[i]][0];
      }
    } else if (
      (valuesCount[s[i]][0] &&
        s[i] === s[i + 1] &&
        valuesCount[s[i]][1] - i >= 1) && i > 1 ||
      (valuesCount[s[i]][0] && s[i] === s[i - 1] && i > 1)
    ) {
      valuesCount[s[i]][0] = valuesCount[s[i]][0] + 1;
      if (valuesCount[s[i]][0] >= maxLength) {
        maxLength = valuesCount[s[i]][0];
      }
    }
  }
  return { maxLength, valuesCount };
};

const s = "l";
// const s = "abbcccddddeeeeedcba";
// const s = "corona"
console.log(maxPower(s));
