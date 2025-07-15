// function MaxLengthNumber(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let subArr = [];
//   let maxNumber = [];

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (
//       sortedArr[i + 1] - sortedArr[i] === 1 ||
//       sortedArr[i] - sortedArr[i - 1] === 1
//     ) {
//       subArr.push(sortedArr[i]);

//     } else {
//       if (subArr.length >= maxNumber.length) {
//         maxNumber = subArr;
//       }
//       subArr = [];
//     }
//   }
//   return maxNumber[maxNumber.length - 1];
// }
// const arr = [100, 4, 200, 1, 3, 2];
// console.log(MaxLengthNumber(arr));

// function multiplicationArr(arr) {
//   const newArr = [];
//   let blockIndex = 0;
//   let i = 0;

//   while (i !== arr.length) {
//     newArr.push(multiplication(arr.filter((_, i) => i !== blockIndex)));
//     i++;
//     blockIndex = i;
//   }
//   return newArr;
// }

// function multiplication(arr) {
//   if (arr.includes(0)) return 0;
//   return arr.reduce((acc, value) => acc * value, 1);
// }

// const arr = [5, 4, 3, 0];
// console.log(multiplicationArr(arr));

function once(callback) {
  let firstValue = 0;
  let count = 0;
  return function (...params) {
    count++;
    
    if (count > 1) {
      return firstValue;
    }
    firstValue = callback(...params);
    return firstValue
  };
}

function add(a, b) {
  return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); //5
console.log(addOnce(4, 5)); //5
console.log(addOnce(10, 20)); //5
