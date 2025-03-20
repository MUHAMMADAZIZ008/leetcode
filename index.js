var findMissingAndRepeatedValues = function (grid) {

  const numberCount = {};
  let repeatedValue = 0;
  let findValue = 1;
  let counter = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let key = String(grid[i][j]);
      if (+numberCount[key] >= 2) {
        repeatedValue = grid[i][j];
      }
      if (!numberCount[key]) {
        numberCount[key] = 1;
      } 
      if (numberCount[key]) {
        numberCount[key] = numberCount[key] + 1;
      } 
      counter++
      if(!numberCount[String(counter)]){
        findValue = counter
      }
    }
  }


  return [repeatedValue, findValue];
};

const grid = [
  [1, 3],
  [2, 2],
];
console.log(findMissingAndRepeatedValues(grid));
