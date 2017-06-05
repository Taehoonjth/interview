var deliveryIdConfirmations = [1, 1, 2, 3, 2, 3, 4, 5, 5];

function findMissingId(array) {
  var result = {};
  deliveryIdConfirmations.forEach(element => {
    if (result[element] === 0) {
      delete result[element];
    } else {
      result[element] = 0;
    }
  });
  return Object.keys(result)[0];
}

console.log(findMissingId(deliveryIdConfirmations))