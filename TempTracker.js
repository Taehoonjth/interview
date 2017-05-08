var TempTracker = function() {
  this.obj = {};
  this.length = 0;
  this.sum = 0;
  this.max;
  this.min;
  this.mean;
  this.mode;
}

TempTracker.prototype.insert = function(temperature) {
  this.length++;
  this.sum += temperature;
  //max
  if (this.max === undefined) {
    this.max = temperature;
  } else if (this.max < temperature) {
    this.max = temperature;
  }
  //min
  if (this.min === undefined) {
    this.min = temperature;
  } else if (this.min > temperature) {
    this.min = temperature;
  }
  //mean: average
  if (this.mean === undefined) {
    this.mean = temperature;
  } else {
    this.mean = this.sum / this.length;
  }
  //mode: the number which appears the most times.
  if (this.obj[temperature]) {
    this.obj[temperature]++;
  } else {
    this.obj[temperature] = 1;
  }
  if (this.mode) {
    if (this.obj[this.mode] < this.obj[temperature]) {
      this.mode = temperature;
    }
  } else {
    this.mode = temperature;
  }
};

TempTracker.prototype.getMax = function(temperature) {
  return this.max;
};

TempTracker.prototype.getMin = function(temperature) {
  return this.min;
};

TempTracker.prototype.getMean = function(temperature) {
  return this.mean;
};

TempTracker.prototype.getMode = function(temperature) {
  return this.mode;
};

var tempTracker = new TempTracker();
tempTracker.insert(1);
tempTracker.insert(2);
tempTracker.insert(3);
tempTracker.insert(1);
console.log(tempTracker.getMax());
console.log(tempTracker.getMin());
console.log(tempTracker.getMean());
console.log(tempTracker.getMode());

