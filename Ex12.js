

// function findDivisors(x) {
//   let divisors = [];
//   for (var i = 1; i <= (x / 2); i++) {
//     if(x % i == 0) {
//       divisors.push(i);
//     }
//   }
//   divisors.push(x);
//   return divisors;
// }

//aplicar memoisation
//reduzir operações da funcao countDivisors

function countDivisors(x) {
  //count é 1 pq conta o próprio número
  let count = 1;
  for (var i = 1; i <= (x / 2); i++) {
    if(x % i === 0) {
      count++;
    }
  }
  return count;
}


let triangleNumberOrdinal = 1;
let triangleNumber = 0;
let numberOfDiv = 0;

while (numberOfDiv < 500) {
  triangleNumber = 0;
  for (var i = 0; i < triangleNumberOrdinal; i++) {
    triangleNumber += i;
  }
  numberOfDiv = countDivisors(triangleNumber);

  console.log("triangulo: " + triangleNumber);
  console.log("número de divisores: " + numberOfDiv);
  triangleNumberOrdinal++;
}
