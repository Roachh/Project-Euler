const range = 100;
let sumSquare = 0;
let squareSum = 0;

for (var i = 1; i <= range; i++) {
  sumSquare += Math.pow(i, 2);
  squareSum += i;
}

squareSum = Math.pow(squareSum, 2);

console.log("sum of the squares: " + sumSquare);
console.log("square of the sum: " + squareSum);
console.log("difference : " + (squareSum - sumSquare));
