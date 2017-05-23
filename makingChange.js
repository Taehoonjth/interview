var makeChange = function(amount, denominations) {
  if (typeof amount !== 'number') {
    throw new Error('amount has to be number');
  }
  if (!Array.isArray(denominations)) {
    throw new Error('denominations has to be Array');
  }

};

// console.log(makeChange(4, [1, 2, 3]));

// makeChange(1, [1, 2, 3]) -> 1
// makeChange(2, [1, 2, 3]) -> makeChange(1) + 1 -> 2
// makeChange(3, [1, 2, 3]) -> makeChange(2) + makeChange(1) + 1
//                             1, 1, 1         2, 1            3
//                             1, 2
// makeChange(4, [1, 2, 3]) -> makeChange(3) + makeChange(2) + makeChange(1) 
//                             1, 1, 1, 1      2, 
//                             1, 1, 2
//                             1, 2, 1                            

console.log(0.1 + 0.2 )