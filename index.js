// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function (arr, size) {
//   if (!arr.length || !size) return arr;
//   const returnValue = [];
//   let subArr = [];
//   let copyI = 1;

//   for (let i = 0; i < arr.length; i++) {
//     subArr.push(arr[i]);
//     if (copyI === size) {
//       returnValue.push(subArr);
//       subArr = [];
//       copyI = 0;
//     }
//     if (i === arr.length - 1 && subArr.length) {
//       returnValue.push(subArr);
//     }

//     copyI++;
//   }
//   return returnValue;
// };

// const arr = [1, 2, 3, 4, 5];
// const size = 2;
// console.log(chunk(arr, size));

let i = 10
function fn() {
  i--
  console.log(i);
  if (i  > 0) {
    fn()
  }
}

fn()