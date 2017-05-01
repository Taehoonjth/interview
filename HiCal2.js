var mergeRanges = function(array) {
  var timeLine = [];
  for (var i = 0; i < array.length; i++) {
    var range = array[i];
    for (var time = range.startTime; time < range.endTime; time++) {
      timeLine[time] = true;
    }
  }
  var timeRanges = [];
  var timeRange = {};
  for (var i = 0; i < timeLine.length + 1; i++) {
    if (timeRange.startTime === undefined && timeLine[i]) {
      timeRange.startTime = i;
    }
    if (typeof timeRange.startTime === 'number' && !timeLine[i]) {
      timeRange.endTime = i;
      timeRanges.push(timeRange);
      timeRange = {};
    }
  }
  return timeRanges;
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