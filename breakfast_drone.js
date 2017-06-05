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

// console.log(findMissingId(deliveryIdConfirmations))
//use Map
function findMissingId2(array) {
  var map = new Map();
  deliveryIdConfirmations.forEach(element => {
    if (map.has(element)) {
      map.delete(element);
    } else {
      map.set(element, 0);
    }
  });
  return map.keys().next().value;
}

function findMissingId3(array) {
  var map = new Map();

}

  function findUniqueDeliveryId4(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        uniqueDeliveryId ^= deliveryId;
        console.log(uniqueDeliveryId.toString(2))
    });

    return uniqueDeliveryId;
}
console.log(findUniqueDeliveryId4(deliveryIdConfirmations));