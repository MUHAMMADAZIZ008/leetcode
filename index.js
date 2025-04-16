/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let = initialValue = init;
  return {
    increment: () => {
      initialValue++;
      return initialValue;
    },

    decrement: () => {
      initialValue--;
      return initialValue;
    },
    reset: () => {
      initialValue = init;
      return initialValue;
    },
  };
};
