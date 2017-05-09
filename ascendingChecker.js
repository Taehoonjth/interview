function findIntegerInSortedArray(array, target) {
  if (target > array[array.length - 1] || target < array[0]) {
    return false;
  }
  var start = 0;
  var end = array.length - 1;
  var mid
  while (start !== end) {
    mid = Math.floor((start + end) / 2);
    console.log(start, end, mid)
    if (array[mid] === target) {
      return true;
    } else if (array[mid] > target) {
      end = mid;
    } else if (array[mid] < target) {
      start = mid;
    }
  }
  return false;
}

console.log(findIntegerInSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))
