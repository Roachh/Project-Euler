
function primeNumbers(number) {
  let primes = [];
  for (let primeNumberCandidate = 2; primeNumberCandidate <= number; primeNumberCandidate++) {
    let isPrime = true;
    for (let i = 2; i < primeNumberCandidate; i++) {
      if (primeNumberCandidate % i == 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime == true) {
      primes.push(primeNumberCandidate);
    }
    if(primeNumberCandidate > 50000) {
      break;
    }
  }
  return primes;
}

function primeFactors(number) {
  factorPrimes = [];
  primes = primeNumbers(number);
  for (var i = 0; i < primes.length; i++) {
    if(number % primes[i] == 0) {
      number /= primes[i];
      factorPrimes.push(primes[i]);
    }
  }
  return factorPrimes;
}


function primeFactors2(number) {
  for (var i = 2; i < number; i++) {
    if(number % i == 0) {
      number /= i;
    }
  }
  return number;
}

console.log(primeFactors2(600851475143));
console.log(primeFactors(600851475143));
