/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length ? false : true;
  } else {
    return Object.keys(obj).length ? false : true
  }
};
