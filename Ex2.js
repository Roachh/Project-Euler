const ex2 = (function(){

let first = 1;
let second = 2;
let aux;
let sum = 0;

while(second <= 4000000) {
  aux = first;
  first = second;
  if(second % 2 == 0) {
    console.log(second);
    sum += second;
  }

  second += aux;

}
console.log("Sum: " + sum);
})();
