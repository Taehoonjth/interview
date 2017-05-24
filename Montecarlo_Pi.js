var montecarlo_pi = function(n) {
  var distribution = {
    'in a circle': 0,
    'out of circle': 0
  }
  for (var i = 0; i < n; i++) {
    var random_x = Math.random();
    var random_y = Math.random();
    var distance = Math.sqrt(Math.pow(random_x, 2) + Math.pow(random_y, 2));
    if (distance >= 1) {
      distribution['out of circle']++;
    } else {
      distribution['in a circle']++;
    }
  }
  return (distribution['in a circle'] / n) * 4;
}

console.log(montecarlo_pi(100000));