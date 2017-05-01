function fib(n) {
  var memo = {
    0: 0,
    1: 1
  };
  var cnt = 2;
  while(cnt < n + 1) {
    memo[cnt] = memo[cnt - 1] + memo[cnt - 2];
    console.log(memo[cnt], cnt)
    if (memo[cnt] > Number.MAX_SAFE_INTEGER) {
      throw new Error(`Danger! fib(${n}) is over Number.MAX_SAFE_INTEGER`);
    }
    cnt++;
   }
  return memo[n];
}

// fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3

console.log(fib(70));
