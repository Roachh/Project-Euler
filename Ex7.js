let primeCandidate = 1;
let count = 0;

while (count != 10001) {
  let isPrime = true;
primeCandidate++;
  for (var i = 2; i < primeCandidate; i++) {
    if(primeCandidate % i == 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime == true) {
    count++;
  }


}

console.log(primeCandidate);
