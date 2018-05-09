function isPitagoreanTriplet(a, b, c) {
  if (a < b && b < c) {
    if( (Math.pow(a, 2) + Math.pow(b, 2)) == Math.pow(c, 2) ) {
      return true;
    }
  }
  return false;
}

let product;

for (let a = 1; a <= 1000; a++) {
  for (let b = (a + 1); b <= (1000 - a); b++) {
    for (let c = (b + 1); c <= (1000 - a + b); c++) {
      if((a + b + c) == 1000 && isPitagoreanTriplet(a, b, c)) {
        product = a*b*c;
      }
    }
  }
}

console.log(product);

//console.log(isPitagoreanTriplet(3, 4, 5));
