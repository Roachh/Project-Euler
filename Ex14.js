function collatz(n) {
  let count = 1;
  while (n !== 1) {
    count++;
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
  }
  return count;
}

let largestChain = 0;

for (var i = 1; i < 1000000; i++) {
  let varCollatz = collatz(i);
  if (varCollatz > largestChain) {
    largestChain = varCollatz;
    console.log("New Highest Chain: " + largestChain);
    console.log("Number: " + i);
  }
}
