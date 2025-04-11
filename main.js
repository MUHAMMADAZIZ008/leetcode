const arr = [];

function log(val) {
  clearTImeoutFn();
  let id = setTimeout(() => {
    console.log("hello world", val);
  }, 3000);
  arr.push(id);
}

let lastId = undefined;

function clearTImeoutFn() {
  arr.map((item, i) => {
    if (i !== arr.length - 2) {
      clearTimeout(item);
    }
  });
}

log(1);
log(2);
log(3);
