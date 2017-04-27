var getMaxProfit = function(array) {
  var min = array[0];
  var maxFromMin;
  var possibleProfit = [];

  var max = array[0];
  var secondMaxFromMax = 0;
  var possibleLoss = [];
  for (var i = 0; i < array.length; i++) {
    //for possibleProfit
    // console.log(i, min, maxFromMin)
    if (array[i] < min) {
      if (maxFromMin) {
        possibleProfit.push(maxFromMin - min);
        min = array[i];
        maxFromMin = array[i];
      } else {
        min = array[i];
      }
    }
    if (maxFromMin === undefined && array[i] > min) {
      maxFromMin = array[i];
    }
    if (maxFromMin !== undefined) {
      if (array[i] > maxFromMin) {
        maxFromMin = array[i];
      }
    }

    //for possibleLoss
    if (array[i] > max) {
      possibleLoss.push(secondMaxFromMax - max);
      max = array[i];
      secondMaxFromMax = array[i];
    }
    if (array[i] > secondMaxFromMax && array[i] < max) {
      secondMaxFromMax = array[i];
    }
  }
  possibleProfit.push(maxFromMin - min);
  possibleLoss.push(secondMaxFromMax - max);
  var maxProfit = Math.max.apply(null, possibleProfit);
  var minLoss = Math.max.apply(null, possibleLoss);
  // console.log(maxFromMin, min ,possibleProfit);
  // console.log(possibleLoss)
  if (maxProfit > 0) {
    return maxProfit;
  } else {
    return minLoss;
  }
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
