function rotationPoint(array) {
  var start = 0;
  var mid;
  var end = array.length - 1;

  while(start !== end) {
    var mid = Math.floor((start + end) / 2);
    if (end - start === 1) {
      return end
    }; 
    if (array[start] > array[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }
}

var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(rotationPoint(words)); //expect to return 5;


