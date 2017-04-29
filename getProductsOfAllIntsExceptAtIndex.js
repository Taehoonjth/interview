var getProductsOfAllIntsExceptAtIndex = function(array) {
  var product;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k < array.length; k++) {
      if (i === k) {
        continue;
      }
      if (product === undefined) {
        product = array[k];
        continue;
      }
      product *= array[k];
    }
    result[i] = product;
    product = undefined;
  }
  return result;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4, 0]))