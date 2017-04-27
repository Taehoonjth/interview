var getMaxProfit = function(array) {
  //for max profit
  var min;
  var maxAfterMin;
  //for min loss
  var max;
  var maxAfterMax;
  var possibleProfit = [];

  for (var i = 0; i < array.length; i++) {
    // console.log('i: ', i, 'min: ', min, 'maxAfterMin: ', maxAfterMin, 'max: ', max, 'maxAfterMax: ', maxAfterMax)
    if (min === undefined && max === undefined) {
      min = array[i];
      max = array[i];
      continue;
    }
    if (maxAfterMin === undefined && array[i] >= min) {
      maxAfterMin = array[i];
    }
    if (maxAfterMax === undefined && array[i] < max) {
      maxAfterMax = array[i];
    }
    if (array[i] > maxAfterMin) {
      maxAfterMin = array[i];
    }
    if (array[i] > maxAfterMax) {
      maxAfterMax = array[i];
    }
    if (array[i] < min) {
      if (maxAfterMin !== undefined) {
        possibleProfit.push(maxAfterMin - min);
        min = array[i];
        maxAfterMin = undefined;
      } else {
        min = array[i];
      }
    }
    if (array[i] > max) {
      if (maxAfterMax !== undefined) {
        possibleProfit.push(maxAfterMax - max);
        max = array[i];
        maxAfterMax = undefined;
      } else {
        max = array[i];
      }
    }
  }
  if (maxAfterMin !== undefined) {
    possibleProfit.push(maxAfterMin - min);
  }
  if (maxAfterMax !== undefined) {
    possibleProfit.push(maxAfterMax - max);
  }

  // possibleProfit.push(maxAfterMin - min);

  // possibleProfit.push(maxAfterMax - max);

  // console.log(possibleProfit);

  return Math.max.apply(null, possibleProfit);
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)

var stockPricesYesterday = [5, 4];

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)

var stockPricesYesterday = [10, 8, 7, 5, 3, 1];

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)

var stockPricesYesterday = [5, 5, 5];

console.log(getMaxProfit(stockPricesYesterday));

