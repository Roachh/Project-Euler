let sumthree = 0;
let sumfive = 0;

for (let i = 0; i < 1000; i++) {

  if(i % 3 == 0) {
    sumthree += i;
  }
  else {
  if(i % 5 == 0) {
    sumfive += i;
  }
}

}

console.log('sum of multiples of three: ' + sumthree);
console.log('sum of multiples of five: ' + sumfive);
console.log('sum of both: ' + (sumfive + sumthree));
