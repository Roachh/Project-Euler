const ex10 = function() {

  function primeNumbers(x) {
    let primes = [];
    primes.push(2);
    for (let primeCandidate = 3; primeCandidate <= x; primeCandidate += 2) {
      if (isPrime(primeCandidate)) {
        primes.push(primeCandidate);
        console.log(primeCandidate);
      }
    }

    return primes;
  }

  function isPrime(x) {
    for (var i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
      }
    }
    return x !== 1;
  }

  const value = 2000000;
  const primes = primeNumbers(value);
  let sum = 0;

  for (var i = 0; i < primes.length; i++) {
    sum += primes[i];
  }

  console.log("prime numbers: " + primes)
  console.log("sum: " + sum);
}();
