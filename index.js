/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let competeDays = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        competeDays++;
      }
    }
  }
  return competeDays
};

const hours = [12, 12, 30, 24, 24];
// const hours = [72, 48, 24, 3];
console.log(countCompleteDayPairs(hours));
