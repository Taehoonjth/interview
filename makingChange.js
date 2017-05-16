var makeChange = function(amount, denominations) {
  if (typeof amount === 'number') {
    throw new Error('amount has to be number');
  }
  if (!Array.isArray(denominations)) {
    throw new Error('denominations has to be Array');
  }
  
}