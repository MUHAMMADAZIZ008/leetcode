/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let studentCount = 0;
  endTime.forEach((item, index) => {
    if (item >= queryTime&& startTime[index] <= queryTime) {
      studentCount++;
    }
  });
  return studentCount;
};

(startTime = [1, 2, 3]), (endTime = [3, 2, 7]), (queryTime = 4);
console.log(busyStudent(startTime, endTime, queryTime));
