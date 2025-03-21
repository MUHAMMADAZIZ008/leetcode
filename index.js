/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const intoBaskets = {};
  const book = {};
  for (let f = 0; f < fruits.length; f++) {
    let key = String(f);
    for (let b = 0; b < baskets.length; b++) {
      let keyB = String(b);
      if (!intoBaskets[key] && fruits[f] <= baskets[b] && !book[keyB]) {
        intoBaskets[key] = fruits[f];
        book[keyB] = fruits[f];
      }
    }
  }
  return fruits.length - Object.values(intoBaskets).length;
};

// const fruits = [4, 2, 5];
// const baskets = [3, 5, 4];

const fruits = [3,6,1]
const baskets = [6,4,7]
console.log(numOfUnplacedFruits(fruits, baskets));
