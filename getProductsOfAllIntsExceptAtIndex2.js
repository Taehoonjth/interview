var getProductsOfAllIntsExceptAtIndex = function(array) {
  var result = [];
  var product = 1;
  for (var i = 0; i < array.length - 1; i++) {
    product *= array[i];
    result[i + 1] = product;
  }
  product = 1;
  for (var j = array.length - 1; j > 0; j--) {
    product *= array[j]
    result[j - 1] *= product;
  }
  result[0] = product
  return result;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]))