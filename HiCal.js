var mergeRanges = function(array) {
  var condensedRanges = [];
  var merged = true;
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    }
    for (var j = 0; j < array.length; j++) {
      if (!array[j]) {
        continue;
      }
      if (array[i].startTime <= array[j].startTime && array[j].startTime <= array[i].endTime && array[j].endTime <= array[i].endTime) {
        array.splice(j, 1);
        continue;
      }
      if (array[i].startTime <= array[j].startTime && array[j].startTime <= array[i].endTime && array[j].endTime >= array[i].endTime) {
        array[i] = {startTime: array[i].startTime, endTime: array[j].endTime};
        array.splice(j, 1);
        continue;
      }
    }
  }
  return array;
};

var timeRanges = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

console.log(mergeRanges(timeRanges));

// [
//   {startTime: 0, endTime: 1},
//   {startTime: 3, endTime: 8},
//   {startTime: 9, endTime: 12},
// ]