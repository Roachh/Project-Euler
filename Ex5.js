let number = 0;
let isDivisible = false;

while (isDivisible == false) {
  number++;
  for (var i = 1; i <= 20; i++) {
    isDivisible = true;
    if(number % i != 0) {
      isDivisible = false;
      break;
    }
  }

}

console.log(number);
