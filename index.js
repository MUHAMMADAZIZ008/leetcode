// /**
//  * @param {Function} fn
//  * @return {Function}
//  */

// let callsV = 0;
// var once = function (fn) {
//   return function (...args) {
//     return {
//       calls: ++callsV,
//       value: fn(args),
//     };
//   };
// };

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

const PromiseAllFn = async (argv) => {
  try {
    const result = [];
    for (const item of argv) {
      result.push(returnValue(item));
    }
    return result;
  } catch (err) {
    return err;
  }
};

async function returnValue(item) {
  return item.then((res) => {
    return res;
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

const result = PromiseAllFn([p1, p2, p3]);

console.log(result).then((res)=> console.log(res)
);
